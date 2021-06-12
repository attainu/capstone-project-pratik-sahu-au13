import React from "react";
import "./CourseDetails.scss";

export function CourseDetails() {
  return (
    <div className="details">
      <div className="details__title">
        <div>
          <h2>Course Name here</h2>
          <small>Author Name here</small>
        </div>
      </div>
      <div className="details__content">
        <div className="details__content-left">
          <div className="details__content-left--video">
            <iframe
              className="iframe"
              style={{
                width: "100%",
                height: "100%",
              }}
              title="demo"
              src="https://player.cloudinary.com/embed/?cloud_name=pra5&public_id=rpmszpkd3julms6xkf8j&fluid=true&controls=true&source_types%5B0%5D=mp4"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
          <div className="details__content-left--info">
            <h4
              style={{
                margin: ".5rem",
                paddingBottom: ".5rem",
                borderBottom: "1px solid #000",
              }}
            >
              About
            </h4>
            <p style={{ margin: ".5rem", fontSize: "1.4rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
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
