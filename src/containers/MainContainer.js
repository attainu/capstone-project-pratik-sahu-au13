import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  CourseDetails,
  LoginSignup,
  Dashboard,
  UserType,
} from "../pages";

export function MainContainer() {
  return (
    <div className="mainContainer">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={CourseDetails} />
        <Route path="/auth" component={LoginSignup} />
        <Route path="/usertype" component={UserType} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
