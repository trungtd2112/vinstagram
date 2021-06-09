import React, { Component } from "react";

function Header(){
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const fullDay = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="Header">
        <div className="profile-div">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lil_Pump_mugshot.jpg/250px-Lil_Pump_mugshot.jpg"
            alt="profilepic"
          />
        </div>

        <div className="Header-text">
          <p>Lil Pump</p>
          <p>{fullDay}</p>
        </div>
      </div>
    );
}

export default Header;
