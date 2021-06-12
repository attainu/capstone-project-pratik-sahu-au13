// // <<<<<<< HEAD
// import React, { useContext } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import CourseDetails from "../pages/CourseDetails/CourseDetails";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Home from "../pages/Home/Home";
// import './styles.scss';
// function MainContainer() {
  
//   const { user } = useContext(AuthContext);
// =======
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  CourseDetails,
  LoginSignup,
  Dashboard,
  UserType,
} from "../pages";

export function MainContainer() {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const tutorSelected = () => {
    setSelectedUserType("tut");
  };

  const studentSelected = () => {
    setSelectedUserType("stu");
  };
// >>>>>>> 152af286d6045d66ede609273106a6f690d7e9ca

  return (
    <div className="mainContainer">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={CourseDetails} />
        <Route path="/auth">
          <LoginSignup selectedUserType={selectedUserType} />
        </Route>
        <Route path="/usertype">
          <UserType
            tutorSelected={tutorSelected}
            studentSelected={studentSelected}
          />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
