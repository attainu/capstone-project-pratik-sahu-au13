import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../stateHandling/contexts/AuthContext";
import images from "../assets/images";
import "./styles.scss";

export function LeftContainer() {
  const { user } = useContext(AuthContext);
  const { home, menu, profile, logout } = images;

  const [hoverHome, setHoverHome] = useState(false);
  const [hoverDash, setHoverDash] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverLogout, setHoverLogout] = useState(false);

  const handleLogout = async () => {
    await localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <div className="leftContainer">
      <div className="leftContainer__iconsAssemble">
        <Link to="/">
          <img
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
            className="leftContainer__icon"
            src={home.src}
            alt={home.alt}
          />
        </Link>
        {hoverHome ? (
          <p className="leftContainer__icon-info1 info">Home</p>
        ) : null}
        <Link to="/dashboard">
          <img
            onMouseEnter={() => setHoverDash(true)}
            onMouseLeave={() => setHoverDash(false)}
            className="leftContainer__icon"
            src={menu.src}
            alt={menu.alt}
          />
        </Link>
        {hoverDash ? (
          <p className="leftContainer__icon-info2 info">Dashboard</p>
        ) : null}
        {!user && (
          <>
            <Link to="/usertype">
              <img
                onMouseEnter={() => setHoverLogin(true)}
                onMouseLeave={() => setHoverLogin(false)}
                className="leftContainer__icon"
                src={profile.src}
                alt={profile.alt}
              />
            </Link>
            {hoverLogin ? (
              <p className="leftContainer__icon-info3 info">Login</p>
            ) : null}
          </>
        )}
      </div>
      {user && (
        <>
          <Link to="#" onClick={handleLogout}>
            <img
              onMouseEnter={() => setHoverLogout(true)}
              onMouseLeave={() => setHoverLogout(false)}
              className="leftContainer__icon"
              src={logout.src}
              alt={logout.alt}
            />
          </Link>
          {hoverLogout ? (
            <p className="leftContainer__icon-info4 info">Logout</p>
          ) : null}
        </>
      )}
    </div>
  );
}
