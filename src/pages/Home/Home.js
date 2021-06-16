import React, { useContext, useEffect } from "react";
import { Search, CourseCard } from "../../components";
import { courseActionType } from "../../stateHandling/actionTypes";
import { AuthContext } from "../../stateHandling/contexts/AuthContext";
import { StateContext } from "../../stateHandling/contexts/StateContext";
import { getCourses } from "../../stateHandling/utils/serverRequests";
import "./Home.scss";

export function Home() {
  const {
    state: { courses, wishListItems }, dispatch
  } = useContext(StateContext);

  const { user } = useContext(AuthContext);
  console.log(user);



  return (
    <div className="home">
      <div className="home__brand">
        <h2>CloudVersity</h2>
        <Search />
      </div>
      <div
        style={{
          margin: "0 0 0 0",
          borderBottom: "1px solid black",
          display: "inline-block",
        }}
      >
        Recommended
      </div>
      <div className="home__scroll">
        {courses.length ? (
          courses.map((course) => {
            const id = course._id;
            return <CourseCard user={user} key={id} course={course} />;
          })
        ) : (
          <div>No courses found</div>
        )}
      </div>
      <div
        style={{
          margin: "1rem 0 0 0",
          borderBottom: "1px solid black",
          display: "inline-block",
        }}
      >
        Popular
      </div>
      <div className="home__scroll">
        {courses.length ? (
          courses.map((course) => {
            const id = course._id;
            if (course.reviews.length > 2){
              
              return <CourseCard user={user} key={id} course={course} />;
            } else {
              return null;
            }
            
          })
        ) : (
          <div>No courses found</div>
        )}
      </div>
      <div
        style={{
          margin: "1rem 0 0 0",
          borderBottom: "1px solid black",
          display: "inline-block",
        }}
      >
        Highest Rated
      </div>
      <div className="home__scroll">
        {
           courses.map((course) => {
            const id = course._id;
            if (course.rating > 3) {
             
              return <CourseCard user={user} key={id} course={course} />;
            } else {
              return null;
            }

          }) }
      </div>
      <div
        style={{
          margin: "1rem 0 0 0",
          borderBottom: "1px solid black",
          display: "inline-block",
        }}
      >
        Students Are Viewing
      </div>
      <div className="home__scroll">
        {
          courses.map((course) => {
            const id = course._id;
            if (course.wishlistedBy.length >= 1) {
              return <CourseCard user={user} key={id} course={course} />;
            } else {
              return null
            }

          })}
      </div>
    </div>
  );
}
