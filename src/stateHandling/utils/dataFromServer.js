import axios from "axios";
import { courseActionType } from "../actionTypes";
import { courseApis } from "./apis";

export const getCourses = async (dispatch) => {
  try {
    const {
      data: { data },
      status,
    } = await axios({ method: "GET", url: courseApis.GET.allCourses });
    // console.log(status);

    if (status === 200) {
      //   console.log(data);
      dispatch({ type: courseActionType.list, payload: data });
    } else {
      throw new Error("No Response");
    }
  } catch (err) {
    console.log(err);
  }
};
