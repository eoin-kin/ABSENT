import React from "react";
import "./contact.css";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <>
      <div className="contacts_container">
        <p className="contact">Contact Us:</p>
        <a href="https://www.instagram.com/absentgalway" className="link">
          <SocialIcon
            url="https://instagram.com"
            bgColor="#292b2c"
            fgColor="aliceblue"
          />
          absentgalway
        </a>
        <a href="mailto:absentnightclubgalway@gmail.com" className="link">
          <SocialIcon
            url="https://email.com"
            bgColor="#292b2c"
            fgColor="aliceblue"
          />
          absentnightclubgalway@gmail.com
        </a>
      </div>
    </>
  );
}
export default Contact;
