import React from "react";
import prev from "../../assets/images/prev.png";
import next from "../../assets/images/next.png";
import CourseCardDB from "../../components/CourseCardDB/CourseCardDB";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__welcome">Welcome to Dashboard</div>
      <div className="dashboard__watching">
        <CourseCardDB />
        <img className="dashboard__watching-icon1" src={prev} alt="previous" />
        <img className="dashboard__watching-icon2" src={next} alt="next" />
      </div>
      <div className="dashboard__courseList">
        <div className="dashboard__courseList-category">
          <span>All Courses</span>
          <span>Most Popular</span>
          <span>Top Rated</span>
          <span>Newest</span>
        </div>
        <div className="dashboard__courseList-scroll">
          <CourseCardDB />
          <CourseCardDB />
          <CourseCardDB />
          <CourseCardDB />
          <CourseCardDB />
          <CourseCardDB />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
