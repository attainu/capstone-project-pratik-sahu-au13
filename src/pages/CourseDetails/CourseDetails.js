import React from "react";
import "./CourseDetails.scss";

function CourseDetails() {
  return (
    <div className="details">
      <div className="details__title"></div>
      <div className="details__content">
        <div className="details__content-left">
          <div className="details__content-left--video">
            <iframe
              style={{ width: "100%", height: "100%" }}
              title="demo"
              src="https://player.cloudinary.com/embed/?cloud_name=pra5&public_id=rpmszpkd3julms6xkf8j&fluid=true&controls=true&source_types%5B0%5D=mp4"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <div className="details__content-left--info"></div>
        </div>
        <div className="details__content-right">
          <div className="details__content-right--videos">
            <h4>Contents</h4>
            <div className="video active">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
            <div className="video">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
            <div className="video">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
            <div className="video">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
            <div className="video">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
            <div className="video">
              <small>Introduction</small>
              <small>02:30</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
