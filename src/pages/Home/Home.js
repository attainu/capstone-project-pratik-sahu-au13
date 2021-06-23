import React, { useContext, useEffect, useRef, useState } from "react";
import images from "../../assets/images";
import { Search, CourseCard } from "../../components";
import { AuthContext } from "../../stateHandling/contexts/AuthContext";
import { StateContext } from "../../stateHandling/contexts/StateContext";
import { fetchCoursesFromDB } from "../../stateHandling/utils/serverRequests";
import { popularCourses } from "./filterFunctions";
import "./Home.scss";

export function Home() {
  const {
    state: { courses, wishListItems, cartItems },
  } = useContext(StateContext);
  const { dispatch } = useContext(StateContext);
  const { user } = useContext(AuthContext);

  const { popular, rated, free, paid, newC } = images;

  const [filteredCourses, setFilteredCourses] = useState([]);
  // const scrollOnClick = useRef(null);
  console.log(filteredCourses);

  useEffect(() => {
    fetchCoursesFromDB(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (courses.length) {
      setFilteredCourses(courses);
    }
  }, [courses]);

  // useEffect(() => {
  //   const popular = popularCourses(courses);
  //   console.log(popular);
  // }, [courses]);

  // const scrollHandler = (val) => {
  //   scrollOnClick.current.scrollLeft += val;
  // };

  return (
    <div className="home">
      <div className="home__brand">
        <h2>CloudVersity</h2>
        <Search />
      </div>
      {/* <div
        style={{
          margin: "0 0 1rem 0",
          borderBottom: "1px solid black",
          display: "inline-block",
        }}
      >
        Recommended
      </div> */}

      <div className="home__filterIcons">
        <div
          className="home__filterIcons-content free"
          onClick={() => setFilteredCourses(courses)}
        >
          Clear
        </div>
        <div
          className="home__filterIcons-content popular"
          onClick={() =>
            setFilteredCourses(
              [...courses].filter(
                (course) => course.enrolledStudents.length >= 1
              )
            )
          }
        >
          <img src={popular.src} alt={popular.alt} />
          <p>Popular</p>
        </div>
        <div
          className="home__filterIcons-content rated"
          onClick={() =>
            setFilteredCourses(
              [...courses].filter((course) => course.rating >= 1)
            )
          }
        >
          <img src={rated.src} alt={rated.alt} />
          <p>Highest Rated</p>
        </div>
        <div className="home__filterIcons-content new">
          <img src={newC.src} alt={newC.alt} />
          <p>Recently Added</p>
        </div>
        <div className="home__filterIcons-content paid">
          <img src={paid.src} alt={paid.alt} />
          <p>Paid</p>
        </div>
        <div className="home__filterIcons-content free">
          <img src={free.src} alt={free.alt} />
          <p>Free</p>
        </div>
      </div>

      <div className="home__scroll">
        <div className="home__scroll-grid">
          {filteredCourses.length ? (
            filteredCourses.map((course) => {
              const id = course._id;
              const isItWishlistItem = !!wishListItems?.filter(
                (item) => item._id === id
              ).length;
              const isItCartItem = !!cartItems?.filter(
                (item) => item._id === id
              ).length;
              return (
                <CourseCard
                  key={id}
                  course={course}
                  user={user}
                  dispatch={dispatch}
                  isItCartItem={isItCartItem}
                  isItWishlistItem={isItWishlistItem}
                />
              );
            })
          ) : (
            <div>No courses found</div>
          )}
        </div>
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
      <div className="home__scroll"></div>
    </div>
  );
}
