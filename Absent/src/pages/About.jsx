import React from "react";
import Header from "../components/Header";
import Contact from "../components/contact";
import { Bio } from "../components/bio";
import "./About.css";
import { RevBio } from "../components/rev bio";
export const About = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <>
        <div className="opener">
          <img src="banner2.png" className="openerbgimg" />
          <div className="text_box">
            <h1>About</h1>
            <p>
              Our events blend a mix of Live Music, DJ sets and Themed Nights!
            </p>
            <p>Join a family bonded by music!</p>
          </div>
        </div>
      </>
      <Bio
        pfp={"jack_crowd_surf.jpg"}
        title={"Jack Wright"}
        about={
          "The main man who these events couldn't run without is our founder Jack. Jack started Absent in 2022 and has been running the show ever since."
        }
      />
      <RevBio
        pfp={"jack_crowd_surf.jpg"}
        title={"Jack Wright"}
        about={
          "The main man who these events couldn't run without is our founder Jack. Jack started Absent in 2022 and has been running the show ever since."
        }
      />

      <Contact />
    </>
  );
};
