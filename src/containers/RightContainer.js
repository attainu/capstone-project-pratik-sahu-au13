import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";
import { AuthContext } from "../stateHandling/contexts/AuthContext";
import { StateContext } from "../stateHandling/contexts/StateContext";
import { fetchLastViewedCourse } from "../stateHandling/utils/serverRequests";
import { ChatRoom, ReceivedMessage, SentMessage } from "../components";

export function RightContainer() {
  const { user } = useContext(AuthContext);

  const [lastViewedCourse, setLastViewedCourse] = useState(null);
  const [activeProfile, setActiveProfile] = useState(true);
  const [activeDiscussion, setActiveDiscussion] = useState(false);

  const { dispatch } = useContext(StateContext);
  const { back, add } = images;

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
      <div className="rightContainer__container">
        <div className="rightContainer__container-btns">
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleDiscussion}>Discussion</button>
        </div>
      </div>

      {/* ----------------- Profile Section --------------------- */}

      <div
        style={{ display: `${activeProfile ? "block" : "none"}` }}
        className="rightContainer__profile"
      >
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

      {/* --------------- Discussion Section ---------------- */}

      <div
        style={{ display: `${activeDiscussion ? "block" : "none"}` }}
        className="rightContainer__discussion"
      >
        <div className="rightContainer__discussion-header">
          <img
            className="rightContainer__discussion-header--img"
            src={add.src}
            alt={add.alt}
          />
          <div>Create Room</div>
          {/* <img
            className="rightContainer__discussion-header--img"
            src={back.src}
            alt={back.alt}
          />
          <div>Chat Room Name</div> */}
        </div>
        <div className="rightContainer__discussion-messageBox">
          {[1, 2, 3, 4, 5].map((e) => (
            <>
              <ReceivedMessage />
              <SentMessage />
            </>
          ))}
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
            <ChatRoom />
          ))} */}
        </div>
        <div className="rightContainer__discussion-footer">
          <form className="rightContainer__discussion-footer--form">
            <input
              className="rightContainer__discussion-footer--input"
              type="text"
              placeholder="Type Message..."
            />
            <input style={{ display: "none" }} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
