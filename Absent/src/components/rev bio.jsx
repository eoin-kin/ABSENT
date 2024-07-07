import React from "react";
import "./bio.css";
export const RevBio = ({ title, about, pfp }) => {
  return (
    <div className="bio_cont">
      <div className="img_container">
        <img src={pfp} className="bio_pfp" />
      </div>
      <div className="bio_txt">
        <h1 className="bio_tit">{title}</h1>
        <p className="team_abt">{about}</p>
      </div>
    </div>
  );
};
