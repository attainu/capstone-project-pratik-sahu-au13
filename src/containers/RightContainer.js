import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../stateHandling/contexts/AuthContext";
import { StateContext } from "../stateHandling/contexts/StateContext";
import { fetchLastViewedCourse } from "../stateHandling/utils/serverRequests";

export function RightContainer() {
  const { user } = useContext(AuthContext);

  const [lastViewedCourse, setLastViewedCourse] = useState(null);
  const [activeProfile, setActiveProfile] = useState(true);
  const [activeDiscussion, setActiveDiscussion] = useState(false);

  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    if (user.user.role === "student") {
      fetchLastViewedCourse(user, dispatch, setLastViewedCourse);
    }
  }, []);

  const handleProfile = () => {
    setActiveProfile(true);
    setActiveDiscussion(false);
  };

  const handleDiscussion = () => {
    setActiveDiscussion(true);
    setActiveProfile(false);
  };

  return (
    <div className="rightContainer">
      {/* <h3>toggle</h3> */}
      <div className="rightContainer__container">
        <div className="rightContainer__container-btns">
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleDiscussion}>Discussion</button>
        </div>
      </div>

      <div
        style={{ display: `${activeProfile ? "block" : "none"}` }}
        className="rightContainer__profile"
      >
        {/* <div className="rightContainer__profile-btn"></div> */}
        <div>
          <span style={{ fontWeight: "600" }}>About Me: </span>
          {user.user.profileInfo.aboutMe}
        </div>
        <div>
          <span style={{ fontWeight: "600" }}>Contact No.: </span>
          {user.user.profileInfo.contactNo}
        </div>
        <div>
          <span style={{ fontWeight: "600" }}>Occupation: </span>
          {user.user.profileInfo.occupation}
        </div>
      </div>

      {lastViewedCourse ? (
        <div
          style={{ display: `${activeProfile ? "block" : "none"}` }}
          className="rightContainer__lastViewed"
        >
          <div className="rightContainer__lastViewed-heading">Last Viewed</div>
          <Link
            to={`/details/${lastViewedCourse?._id}`}
            className="rightContainer__lastViewed-course"
          >
            <img
              className="rightContainer__lastViewed-course--img"
              src={`${lastViewedCourse?.thumbnail}`}
              alt="course-pic"
            />
            <div className="rightContainer__lastViewed-course--name">
              {lastViewedCourse?.courseName}
            </div>
          </Link>
        </div>
      ) : null}

      <div
        style={{ display: `${activeDiscussion ? "block" : "none"}` }}
        className="rightContainer__discussion"
      ></div>
    </div>
  );
}
