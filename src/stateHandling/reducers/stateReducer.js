import { courseActionType } from "../actionTypes";

export const stateReducer = (state, action) => {
  switch (action.type) {
    case courseActionType.list:
      return { ...state, courses: action.payload };

    default:
      break;
  }
};
