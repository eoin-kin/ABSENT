import React from "react";
import Header from "../components/Header";
import "./Home.css";
import Contact from "../components/contact";
import Gallery from "../components/Gallery";
import RevGallery from "../components/revGallery";
import { SocialIcon } from "react-social-icons";

export const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <>
        <div className="opener">
          <img src="banner1.png" className="openerbgimg" />
          <div className="text_box">
            <h1>ABSENT EMO NITE</h1>
            <p>
              Welcome to the Absent Family! Join Ireland's fastest growing emo
              community with our themed nights, live sets and DJ sets!{" "}
            </p>
            <p>Open to all so come along!</p>
          </div>
        </div>
      </>

      <Gallery
        event={{
          img1: "prom1.JPG",
          img2: "prom2.JPG",
          img3: "prom3.JPG",
          img4: "prom4.JPG",
          img5: "prom5.JPG",
        }}
        title={"Prom Night 2024"}
        about={
          "The return of our crowd favourite prom night celebrating all those who spent time with us this year"
        }
      />
      <RevGallery
        event={{
          img1: "nye1.JPG",
          img2: "nye2.JPG",
          img3: "nye3.JPG",
          img4: "nye4.JPG",
          img5: "nye5.JPG",
        }}
        title={"New Year's 2024"}
        about={
          "Ringing in the new year with all the family we made this last 12 months"
        }
      />
      <div className="cont">
        <div className="soc_box">
          <h1 className="tit">Our Socials</h1>
          <div className="social_icons">
            <a
              href="https://www.instagram.com/absentgalway"
              className="socials"
            >
              <SocialIcon
                url="https://instagram.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a href="https://tr.ee/CEEEY_IABU" className="socials">
              <SocialIcon
                url="https://discord.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a href="https://www.youtube.com/@ABSENTGALWAY" className="socials">
              <SocialIcon
                url="https://youtube.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a href="https://www.tiktok.com/@absentgalway" className="socials">
              <SocialIcon
                url="https://tiktok.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a
              href="https://open.spotify.com/playlist/5jrCABawwQ2gpND64nzfaR?si=IZKXMPplSnCA1d3yfIsGSA&utm_medium=share&utm_source=linktree&nd=1&dlsi=950cea665dce48d8"
              className="socials"
            >
              <SocialIcon
                url="https://spotify.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a href="https://www.facebook.com/ABSENTGALWAY" className="socials">
              <SocialIcon
                url="https://facebook.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>

            <a href="https://tr.ee/qTbzyp7YM2" className="socials">
              <SocialIcon
                url="https://x.com"
                bgColor="#333"
                fgColor="aliceblue"
              />
            </a>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};
