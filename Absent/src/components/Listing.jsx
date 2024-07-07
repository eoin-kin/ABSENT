import React from "react";
import "./Listing.css";
export const Listing = ({ details }) => {
  return (
    <div className="master">
      <div className="upper">
        <img src={details.ev_img} className="ev_img" />
        <a href={details.ev_url} style={{ color: "black" }}>
          <h1 className="ev_title">{details.ev_title}</h1>
        </a>
        <p className="ev_details">{details.date_time_venue}</p>
      </div>
      <div className="lower">
        <p className="ev_description">{details.ev_description}</p>
        <a href={details.ev_url}>
          <button className="eventbrite_button">Tickets</button>
        </a>
      </div>
    </div>
  );
};
