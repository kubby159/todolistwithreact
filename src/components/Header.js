import React from "react";
import "../scss/header.scss";
const Header = () => {
  // monthNames
  const monthNames = [
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
    "December",
  ];
  const daysName = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const d = new Date();

  return (
    <>
      <div className="header-container">
        <div className="header-date">
          <div className="header-show-date">
            <div className="header-show-date-left">
              <span>{d.getDate()}</span>
            </div>
            <div className="header-show-date-right">
              <div className="header-show-month">
                {monthNames[d.getMonth()].toUpperCase().substring(0, 3)}
              </div>
              <div className="header-show-year">{d.getFullYear()}</div>
            </div>
          </div>
        </div>
        <div className="header-days">
          <div className="header-upper-days">
            <span>{daysName[d.getDay()].toUpperCase()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
