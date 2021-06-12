import React from "react";
import images from "../assets/images";
import "./styles.scss";

export function LeftContainer() {
  const { home, menu, profile, logout } = images;

  return (
    <div className="leftContainer">
      <div className="leftContainer__iconsAssemble">
        <img className="leftContainer__icon" src={home.src} alt={home.alt} />
        <img className="leftContainer__icon" src={menu.src} alt={menu.alt} />
        <img
          className="leftContainer__icon"
          src={profile.src}
          alt={profile.alt}
        />
      </div>
      <img className="leftContainer__icon" src={logout.src} alt={logout.alt} />
    </div>
  );
}
