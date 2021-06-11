import React from "react";
import { Link } from "react-router-dom";

function RightContainer() {
  return (
    <div className="rightContainer">
      <Link className="rightContainer__btn" to="/check-user">
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

export { RightContainer };
