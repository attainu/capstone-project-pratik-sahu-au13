import React, { createContext, useEffect, useState } from "react";

export const CourseContext = createContext();

function CourseContextProvider({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://cloudversity-api-server.herokuapp.com/allcourses")
      .then((res) => res.json())
      .then((data) => setCourses(data.data))
      .catch((err) => console.log(err.message));
  }, [setCourses]);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseContextProvider;
