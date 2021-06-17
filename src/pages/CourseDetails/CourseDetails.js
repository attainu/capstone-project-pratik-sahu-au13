import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../stateHandling/contexts/AuthContext";
import {
  getCourseById,
  deleteVideo
} from "../../stateHandling/utils/serverRequests";
import "./CourseDetails.scss";
import VideoUploadModal from "../../components/VideoUploadModal";

export function CourseDetails({ match }) {
  const [courseDetails, setCourseDetails] = useState(null);
  const [publicId, setPublicId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const id = match.params.id;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getCourseById(id).then((data) => {
      setCourseDetails(data);
      setPublicId(data?.videos[0].publicId);
    });
    
  }, [id]);

  const modalToggle = () => {
    setShowModal(!showModal);
  };

  const deleteSelectecVideo = async(videoId) => {
    // call the function for deleteing video
    const res = await deleteVideo(videoId, user?.user.token);
    // do something after successful response
    if (!res){
      return alert("Couldn't delete the video")
    }
    return alert("Video deleted sucessfully")
  }


  return (
    <div className={showModal ? "blur-bg" : "details" }>
      <div className="details__title">
        <div>
          <h2>{courseDetails?.courseName}</h2>
          <small>{`${courseDetails?.authorName.firstName} ${courseDetails?.authorName.lastName}`}</small>
        </div>
      </div>
      <div className="details__content">
        <div className="details__content-left">
          <div className="details__content-left--video">
            <iframe
              className="iframe"
              style={{
                width: "100%",
                height: "100%",
              }}
              title="demo"
              src={
                publicId
                  ? `https://player.cloudinary.com/embed/?cloud_name=cloudversity&public_id=tutor%20resources/${publicId}&fluid=true&controls=true&source_types%5B0%5D=mp4`
                  : null
              }
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <div className="details__content-left--info">
            <h4
              style={{
                margin: ".5rem",
                paddingBottom: ".5rem",
                borderBottom: "1px solid #000",
              }}
            >
              About
            </h4>
            <p style={{ margin: ".5rem", fontSize: "1.4rem" }}>
              {courseDetails?.description}
            </p>
          </div>
        </div>

        <div className="details__content-right">
          {showModal && <div className="details__content-right--uploadvideo">
            <VideoUploadModal id={id} user={user} modalToggle={modalToggle} />
          </div>}

          {user && <div className="details__content-right--uploadbtn" onClick={modalToggle}>
            Add a new Video
            <i class='bx bx-video-recording' ></i>
          </div>}

          <div className="details__content-right--videos">
            <h4>Contents</h4>
            {courseDetails &&
              courseDetails.videos.map((video) => (
                <div
                  key={video._id}
                  className="video"
                  onClick={() => setPublicId(video.publicId)}
                >
                  <small>{video.title.substring(0, 30 )}</small>
                  <div className="details__content-right--videos-r">
                    <small>{(video.videoLength.toFixed(2)).toString()}</small>
                    {
                      user && <i class='bx bx-trash' onClick={() => deleteSelectecVideo(video._id)}></i>
                    }
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
