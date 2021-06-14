import axios from "axios";
import {
  courseActionType,
  studentActionType,
  tutorActionType,
} from "../actionTypes";
import { base_url, courseApis, userApis } from "./apis";

const API = axios.create({
  baseURL: "http://localhost:5233/",
});

// API.interceptors.request.use((req) => {
//   // if (localStorage.getItem("profile")) {
//   req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export const addCourse = async (formData, file, token) => {
//   try {
//     formData.thumbnail = file;
//     console.log(token);
//     formData.price = parseInt(formData.price);
//     formData.course_duration = parseInt(formData.course_duration);
//     formData.discount = parseInt(formData.discount);
//     console.log(formData);
//     const data = await API.post(
//       `/addcourse`,
//       { ...formData },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// export const getCourses = () => API.get(courseApis.GET.allCourses);

export const getCourses = async (dispatch) => {
  try {
    const {
      data: { data },
      status,
    } = await API.get(courseApis.GET.allCourses);

    if (status === 200) {
      dispatch({ type: courseActionType.allCourses, payload: data });
    } else {
      throw new Error("No Response");
    }
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (formData, selectedUserType, dispatch) => {
  try {
    const url =
      selectedUserType === "tut"
        ? userApis.POST.tutorLogin
        : userApis.POST.studentLogin;
    const {
      data: { data, token },
    } = await API.post(url, formData);
    data.token = token;
    console.log(data.token);

    if (data) {
      if (selectedUserType === "tut") {
        dispatch({ type: tutorActionType.verifyTutor, payload: data });
      } else {
        dispatch({ type: studentActionType.verifyStudent, payload: data });
      }
    }
  } catch (err) {}
};

export const userSignup = async (formData, selectedUserType, dispatch) => {
  try {
    const {
      data: { data, message },
    } = await axios({
      method: "POST",
      // url: userApis.POST.studentSignup,
      url: `https://cloudversity-api-server.herokuapp.com/${selectedUserType}/signup`,
      data: formData,
    });
    console.log(data, message);
    if (data) {
      if (selectedUserType === "tut") {
        dispatch({ type: tutorActionType.verifyTutor, payload: data });
      } else {
        dispatch({ type: studentActionType.verifyStudent, payload: data });
      }
    }
  } catch (err) {}
};

export const addCourse = async (formData, file, token) => {
  try {
    formData.thumbnail = file;
    formData.price = parseInt(formData.price);
    formData.course_duration = parseInt(formData.course_duration);
    formData.discount = parseInt(formData.discount);
    console.log(formData);
    console.log("File inside addCourse call :",file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {

      const data = await axios({
        method: "POST",
        crossorigin: false,
        url: `http://localhost:5233/addcourse`,
        data: { ...formData, thumbnail:reader.result },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    };
    reader.onerror = () => {
      console.error("Couldn't process the image");

    };

  } catch (err) {}
};
