import React from "react";
import Header from "../components/Header";
import { Listing } from "../components/Listing";
import "./Events.css";
import Contact from "../components/contact";
export const Events = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <>
        <div className="opener">
          <img src="banner3.png" className="openerbgimg" />
          <div className="text_box">
            <h1>Upcoming Events</h1>
            <p>
              Our Events range from Hip-Hop Nights to Live Band sets and of
              course our DJ sets from Jack himself!
            </p>
            <p>See our Upcoming Events below!🖤</p>
          </div>
        </div>
        <div className="Listings">
          <Listing
            details={{
              ev_img:
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F780250049%2F1084082455403%2F1%2Foriginal.20240531-121813?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C500%2C6000%2C3000&s=b0751f7884657e7f34678461ef18c153",
              ev_title: "ABSENT 022: EMO NITE GALWAY W/ ARCHIVES & INDEVTH",
              date_time_venue: "July 13th 8pm The Cellar",
              ev_description:
                "Super excited to be bringing over ARCHIVES & INDEVTH from the UK followed by ABSENT EMO NITE till close!",
              ev_url:
                "https://www.eventbrite.com/e/absent-022-emo-nite-galway-w-archives-indevth-tickets-917242485967?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
            }}
          />
          <Listing
            details={{
              ev_img:
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F780250049%2F1084082455403%2F1%2Foriginal.20240531-121813?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C500%2C6000%2C3000&s=b0751f7884657e7f34678461ef18c153",
              ev_title: "ABSENT 022: EMO NITE GALWAY W/ ARCHIVES & INDEVTH",
              date_time_venue: "July 13th 8pm The Cellar",
              ev_description:
                "Super excited to be bringing over ARCHIVES & INDEVTH from the UK followed by ABSENT EMO NITE till close!",
              ev_url:
                "https://www.eventbrite.com/e/absent-022-emo-nite-galway-w-archives-indevth-tickets-917242485967?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
            }}
          />
          <Listing
            details={{
              ev_img:
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F780250049%2F1084082455403%2F1%2Foriginal.20240531-121813?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C500%2C6000%2C3000&s=b0751f7884657e7f34678461ef18c153",
              ev_title: "ABSENT 022: EMO NITE GALWAY W/ ARCHIVES & INDEVTH",
              date_time_venue: "July 13th 8pm The Cellar",
              ev_description:
                "Super excited to be bringing over ARCHIVES & INDEVTH from the UK followed by ABSENT EMO NITE till close!",
              ev_url:
                "https://www.eventbrite.com/e/absent-022-emo-nite-galway-w-archives-indevth-tickets-917242485967?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=organizer-profile&utm-share-source=organizer-profile",
            }}
          />
        </div>
      </>
      <Contact />
    </>
  );
};
