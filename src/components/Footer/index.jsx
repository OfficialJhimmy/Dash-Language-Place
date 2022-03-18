import React from "react";
import { GrSend } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { TiLightbulb } from "react-icons/ti";
import { BiPhoneOutgoing } from "react-icons/bi";
import { ImFacebook2 } from "react-icons/im";
// import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import "./index.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="input__email"
          />
          <button type="submit">
            <GrSend className="newsletter__icon" />
          </button>
        </div>
        <div className="footer__information">
          <div className="keep-talking">
            <h3>We are accessible</h3>
            <address>No 27, Iyun Road Stadium Hotel, Surulere Lagos.</address>
            <p>
              <a href="mailto:Dashlanguageschool@gmail.com">
                <BiMailSend className="keep-talking__icon" />
                Dashlanguageschool@gmail.com
              </a>
            </p>
            <p>
              <TiLightbulb className="keep-talking__icon" />
              We are Open Monday - Saturday, 9am(WAT)
            </p>
            <p>
              <BiPhoneOutgoing className="keep-talking__icon" />
              Please Stop by for further enquires or <br />
              give us a Phonecall +2348072263905
            </p>
          </div>
          <div className="stay-connected">
            <h3>Stay Connected</h3>
            <div>
              <a
                href="https://www.facebook.com/dachinstitute/"
                target="_blank"
                rel="noreferrer"
              >
                <ImFacebook2 className="social__icons" />
              </a>
              {/* <a href="/" target="_blank" rel="noreferrer">
                <RiTwitterFill className="social__icons" />
              </a> */}
              <a
                href="https://www.instagram.com/dash_language_school/"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill className="social__icons" />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <FaWhatsapp className="social__icons" />
              </a>
            </div>
          </div>
          <div className="our-vision">
            <h3>Our Vision</h3>
            <p>
              Our Vision is to remain the leader in spreading and teaching
              foreign languages worldwide and also to give opportunities to
              different people from different backgrounds to acquire languages
              and cultural competencies of another world through the
              knowledgeable skills from our Language expertise at DASH.
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>
            &#169;2022. All rights reserved |
            <span>
              Developed by{" "}
              <a
                href="https://twitter.com/jhimmyofficial"
                target="_blank"
                rel="noreferrer"
              >
                JhimmyOfficial
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
