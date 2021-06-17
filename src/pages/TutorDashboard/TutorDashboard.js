import React, { useContext } from "react";
import { Redirect } from "react-router";
import { TutorCard } from "../../components/TutorCard/TutorCard";
import { AuthContext } from "../../stateHandling/contexts/AuthContext";
import "./TutorDashboard.scss";

export function TutorDashboard() {
  const { user } = useContext(AuthContext);

  return user?.user.role === "tutor" ? (
    <div className="tutor">
      <div className="tutor__row1">
        <button>Add a Course</button>
        <button>Update a Course</button>
      </div>
      <div className="tutor__row2">
        <div className="tutor__row2__left">
          <h3 className="tutor__row2__left-header">Your courses</h3>
          <div className="tutor__row2__left-courseList">
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
            <TutorCard />
          </div>
        </div>
        <div className="tutor__row2__right">
          <div className="tutor__row2__right-stats">
            <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>11</p>
            <p>Enrolled Courses</p>
          </div>
          {/* <div style={{ width: "1rem" }}></div> */}
          <div className="tutor__row2__right-stats">
            <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>11</p>
            <p>Enrolled Courses</p>
          </div>
          <div className="tutor__row2__right-stats">
            <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>11</p>
            <p>Enrolled Courses</p>
          </div>
          <div className="tutor__row2__right-stats">
            <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>11</p>
            <p>Enrolled Courses</p>
          </div>
          <div className="tutor__row2__right-stats">
            <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>11</p>
            <p>Enrolled Courses</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="usertype" />
  );
}
