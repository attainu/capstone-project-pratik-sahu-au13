import React from "react";

export function RightContainer() {
  return (
    <div className="rightContainer">
      {/* <h3>toggle</h3> */}
      <div className="rightContainer__container">
        <div className="rightContainer__container-btns">
          <button>Profile</button>
          <button>Discussion</button>
        </div>
      </div>
      <div className="rightContainer__discussion">
        <div className="rightContainer__discussion-btn"></div>
      </div>
    </div>
  );
}
