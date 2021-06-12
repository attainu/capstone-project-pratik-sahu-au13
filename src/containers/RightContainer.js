import React from "react";
import { Link } from "react-router-dom";

export function RightContainer() {
  return (
    <div className="rightContainer">
      <Link className="rightContainer__btn" to="/auth">
        Login / Signup
      </Link>
      <Link className="rightContainer__btn" to="/">
        Home
      </Link>
      <Link className="rightContainer__btn" to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
}
