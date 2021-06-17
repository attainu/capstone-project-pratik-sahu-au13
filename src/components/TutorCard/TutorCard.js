import React from "react";
import images from "../../assets/images";
import "./TutorCard.scss";

export function TutorCard() {
  const { fire } = images;

  return (
    <div className="tutorCard">
      <div className="tutorCard__firstDiv">
        <img
          className="tutorCard__firstDiv-img"
          src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="course-pic"
        />
        <div className="tutorCard__firstDiv-text">
          <div>Course Name</div>
          <div>Created at date</div>
        </div>
      </div>
      <div className="tutorCard__secondDiv">
        <img className="leftContainer__icon" src={fire.src} alt={fire.alt} />
        <span>4.5</span>
      </div>
    </div>
  );
}
