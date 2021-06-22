import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../stateHandling/contexts/AuthContext";
import images from "../assets/images";
import "./styles.scss";

export function LeftContainer() {
  const { user } = useContext(AuthContext);
  const { home, menu, profile, logout } = images;

  const handleLogout = async () => {
    await localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <div className="leftContainer">
      <div className="leftContainer__iconsAssemble">
        <Link to="/">
          <img className="leftContainer__icon" src={home.src} alt={home.alt} />
        </Link>
        <Link to="/dashboard">
          <img className="leftContainer__icon" src={menu.src} alt={menu.alt} />
        </Link>
        <Link to="/usertype">
          <img
            className="leftContainer__icon"
            src={profile.src}
            alt={profile.alt}
          />
        </Link>
      </div>
      {user && (
        <Link to="#" onClick={handleLogout}>
          <img
            className="leftContainer__icon"
            src={logout.src}
            alt={logout.alt}
          />
        </Link>
      )}
    </div>
  );
}
