import React from "react";
import "./index.css";
import { BiPhoneCall } from "react-icons/bi";
import { GiHouse } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import { TiLightbulb } from "react-icons/ti";

function InformationBox() {
  return (
    <>
      <div className="information-container">
        <div className="information-box__top">
          <div className="information__box">
            <span>
              <GiHouse className="icon__information-box" />
            </span>{" "}
            <p> Address: 27 Iyun Road, stadium Hotel, Surulere, Lagos</p>
          </div>
          <div className="information__box">
            <span>
              <BiPhoneCall className="icon__information-box" />
            </span>{" "}
            <a href="tel:+234 7226 3905">Call us on this: +234 7226 3905</a>
          </div>
          <div className="information__box">
            <span>
              <TiLightbulb className="icon__information-box" />
            </span>{" "}
            <p>We are Open Monday - Saturday, 9am(WAT)</p>
          </div>
        </div>
        <div className="information-middle">
          <span>
            <BiMailSend className="icon__information-box" />
          </span>
          <a href="mailto:Dashlanguageschool@gmail.com">
            Email Address: Dashlanguageschool@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default InformationBox;
