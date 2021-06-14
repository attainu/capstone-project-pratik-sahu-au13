const express = require("express");
const Router = express.Router();
const auth = require("../Auth/auth");
const Course = require("../Model/course");
const Video = require("../Model/video");
const Tutor = require("../Model/tutor");
const Student = require("../Model/student");
const path = require("path");
const multer = require("multer");
const bufferConversion = require("../Utils/bufferConversion");
const { imageUpload, videoUpload } = require("../Utils/multer");
const { cloudinary } = require("../Utils/clodinary");
const { findOneAndDelete } = require("../Model/tutor");

// ------ Thumbnail upload -----temporaily replaced by multe in Utils folder-- //
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads")
    },
    filename: function (req, file, cb) {
        const suffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + "-" + suffix + path.extname(file.originalname));
    }
})

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
};

let thumbnail = multer({ storage: storage, limits: { fileSize: 1 * 1024 * 1024 }, fileFilter: imageFilter });

//-------------- COURSE AND VIDEO ROUTES BELOW ---------------- //

// ------------------- POST: Add a New Course ------------------//
Router.post("/addcourse", auth, imageUpload.single("thumbnail"), async (req, res) => {

    try {

        console.log("User details provided during AUTH: ", req.user);
        // res.header("Access-Control-Allow-Origin", "true");

        const course_data = new Course({
            ...req.body
        });

        const convertedBuffer = await bufferConversion(req.file.originalname, req.file.buffer);

        const uploadedImage = await cloudinary.uploader.upload(convertedBuffer, { resource_type: "image", upload_preset: "cloudversity-dev", });

        console.log("Cloudversity response: ", uploadedImage);

        course_data.thumbnail = uploadedImage.secure_url;
        course_data.authorName = req.user.id;

        await course_data.save();

        const tutor = await Tutor.findById({ _id: req.user.id });
        tutor.createdCourses.push(course_data._id);

        await tutor.save();

        res.status(200).send({ message: "Congratulations...New course added!", courseData: course_data });

    } catch (error) {
        console.log("Error while creating course: ", error);

        res.status.send({ message: "Couldn't create the course", error: error.message });
    }

});

// ------------------- GET: get All Courses ------------------//
Router.get("/allcourses", async (req, res) => {
    try {
        const courseData = await Course.find()
            .populate("videos", ["videoLink", "title", "videoLength", "publicId"])
            .populate("reviews", ["reviewBody", "rating"])
            .populate("authorName", ["firstName", "lastName", "createdCourses"])   // chaining populate to get multiple fields populated
            .exec();

        res.send({ message: "Fetched successfully", data: courseData });

    } catch (error) {

        console.log("Error: ", error);
        res.status(400).send({ message: "Error while fetching", error: error.message });
    }
});

// ------------------- POST: Upload Videos ---------------//
Router.post("/uploadvideo/:courseId", auth, videoUpload.single("videoLink"), async (req, res) => {

    try {
        // console.log("Course Id: ", req.params.courseId, "User: ", req.user)
        const video = new Video({
            ...req.body
        });

        const convertedBuffer = await bufferConversion(req.file.originalname, req.file.buffer);
        // console.log("req.file.buffer: ",req.file.buffer);
        // console.log("convertedBuffer: ", convertedBuffer);  Don't ever uncomment this :-P

        const uploadedVideo = await cloudinary.uploader.upload(convertedBuffer, { resource_type: "video", upload_preset: "cloudversity-dev", });

        console.log("Uploaded video object: ", uploadedVideo)
        video.courseId = req.params.courseId;
        video.authorId = req.user.id;

        if (uploadedVideo.duration > 60) {
            videoLength = (uploadedVideo.duration / 60).toFixed(2);
        } else {
            videoLength = uploadedVideo.duration
        };
        console.log("Video Length : ", videoLength);

        video.videoLength = videoLength;
        video.videoLink = uploadedVideo.secure_url;
        video.publicId = uploadedVideo.public_id.split("/")[1];   // NEW: added public Id to video Schema

        await video.save();

        const course = await Course.findById({ _id: req.params.courseId });
        course.videos.push(video._id);

        await course.save();

        res.status(201).send({ message: "Video uploaded successfully", videoDetails: video })

    } catch (error) {

        console.log("Error occurred while uploading...", error);
        res.status(500).send({ message: "Couldn't upload the video", error: error.message });

    }
});

// ------------------- GET: get Course by courseId -----------------//
Router.get("/course/:courseId", async (req, res) => {
    try {

        const requestedCourse = await Course.findById({ _id: req.params.courseId })
            .populate("reviews", ["reviewBody", "rating"])
            .populate("videos", ["videoLink", "title"])
            .populate("authorName", ["firstName", "lastName"])
            .exec();

        res.status(200).send({ requestedCourse });

    } catch (error) {
        console.log("Error occurred while fetching the course...", error);
        res.status(500).send({ message: "Couldn't fetch the course", error: error.message });
    }
});

// ------------------- POST: Enroll to Course ---------------//
Router.post("/enroll/:courseId", auth, async (req, res) => {

    try {

        const course = await Course.findById({ _id: req.params.courseId });
        const student = await Student.findById({ _id: req.user.id });

        course.enrolledStudents.push(req.user.id);
        student.enrolledCourses.push(req.params.courseId);

        await course.save();
        await student.save();

        res.status(200).send({ message: "New course enrolled successfully", enrolledCourses: student.enrolledCourses });

    } catch (error) {
        console.log("Error occurred while enrolling...", error);
        res.status(500).send({ message: "Couldn't enroll to the course", error: error.message });
    }

});

// ------------------- PATCH: Course details Update ---------------//
Router.patch("/updatecourse/:courseId", auth, async (req, res) => {

    try {

        const updatedDetails = {
            ...req.body
        }
        const updatedCourse = await Course.findOneAndUpdate({ _id: req.params.courseId }, {
            $set: updatedDetails
        });

        res.status(200).send({ message: "Course details updated successfully!", updatedDetails })


    } catch (error) {
        console.log("Error occurred while updating...", error);
        res.status(500).send({ message: "Couldn't update the course", error: error.message });
    }
});


// ------------------- PATCH: Course Thumbnail Update ---------------//
Router.patch("/updatethumbnail/:courseId", auth, imageUpload.single('thumbnail'), async (req, res) => {

    try {

        const convertedBuffer = await bufferConversion(req.file.originalname, req.file.buffer);

        const uploadedImage = await cloudinary.uploader.upload(convertedBuffer, { resource_type: "image", upload_preset: "cloudversity-dev", });

        const thumbnailUpdate = await Course.findOneAndUpdate({ _id: req.params.courseId }, {
            $set: {
                thumbnail: uploadedImage.secure_url
            }
        });

        res.status(200).send({ message: "thumbnail updated", thumbnail: uploadedImage.secure_url });

    } catch (error) {
        console.log("Error occurred while updating thumbnail...", error);
        res.status(500).send({ message: "Couldn't update the thumbnail", error: error.message });
    }
});

Router.delete("/deletevideo/:videoId", auth, async (req, res) => {
    try {
        
        const videoToDelete = await Video.findById({_id: req.params.videoId});

        const deletedVideo = await cloudinary.uploader.destroy(videoToDelete.publicId, { resource_type: 'video', upload_preset: "cloudversity-dev"});

        const deleteVideo = await Video.findOneAndDelete({_id: req.params.videoId});

        res.status(200).send({message: "Sucess! The video has been deleted"});

    } catch (error) {
        console.log("Error occurred while deleting the video...", error);
        res.status(500).send({ message: "Couldn't delete the video, try again", error: error.message });
    }
});

module.exports = Router;
