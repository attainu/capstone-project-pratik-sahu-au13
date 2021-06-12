import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import "./UserType.scss";

export function UserType() {
  const { student, tutor } = images;

  return (
    <div className="type">
      <div className="type__tutor">
        <img className="type__tutor-img" src={tutor.src} alt={tutor.alt} />
        <Link to="/auth" className="type__tutor-name">
          LogIn/SignUp as <strong>Tutor</strong>
        </Link>
      </div>
      <div className="type__student">
        <img
          className="type__student-img"
          src={student.src}
          alt={student.alt}
        />
        <Link to="/auth" className="type__student-name">
          LogIn/SignUp as <strong>Student</strong>
        </Link>
      </div>
    </div>
  );
}
