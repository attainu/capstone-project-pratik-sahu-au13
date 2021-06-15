import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartFill } from "../../assets/icons/heartFill.svg";
import "./CourseCard.scss";

export function CourseCard({ course }) {
  const {
    _id,
    courseName,
    thumbnail,
    authorName: { firstName, lastName },
    course_duration,
    description,
  } = course;

  const [fav, setFav] = useState(false);

  return (
    <div className="course">
      <img className="course__img" src={thumbnail} alt="course-pic" />
      <div className="course__contents">
        <div className="course__contents-details">
          <p>700 students</p>
          <p>{course_duration}</p>
        </div>
        <div className="course__contents-name">
          {courseName.length > 15
            ? courseName.substring(0, 15) + "..."
            : courseName}
        </div>
        <div className="course__contents-author">
          <p>
            by <span>{`${firstName} ${lastName}`}</span>
          </p>
        </div>
      </div>
      <div className="course__hover">
        <Link className="removeStyle" to={`/details/${_id}`}>
          <div className="course__hover-description">
            <div className="course__hover-description--header">Description</div>
            <div className="course__hover-description--content">
              {description}
            </div>
          </div>
        </Link>
        <div className="course__hover-btns">
          <button>Add to Cart</button>
          {fav ? (
            <HeartFill
              onClick={() => setFav(false)}
              className="course__hover-btns--icon"
            />
          ) : (
            <Heart
              onClick={() => setFav(true)}
              className="course__hover-btns--icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}
