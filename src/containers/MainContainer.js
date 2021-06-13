import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  CourseDetails,
  LoginSignup,
  Dashboard,
  UserType,
} from "../pages";
import { Welcome } from "../components";
import { AuthContext } from "../stateHandling/contexts/AuthContext";

export function MainContainer() {
  const [selectedUserType, setSelectedUserType] = useState("tut");
  const { user } = useContext(AuthContext);

  const tutorSelected = () => {
    setSelectedUserType("tut");
  };

  const studentSelected = () => {
    setSelectedUserType("stu");
  };

  return (
    <div className="mainContainer">
      {user && <Welcome user={user} />}
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
