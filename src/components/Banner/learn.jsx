import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

function Learn() {
  return (
    <>
      <div className="learn__container display-flex">
        <div className="learn__content">
          <h3>I Want to Learn?</h3>
        </div>
        <div className="learn__flags display-flex">
          <div className="learn__flags-content">
            <Link to="/german" className="content__links">
              <div className="flag display-flex">
                <ReactCountryFlag
                  countryCode="DE"
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title="DE"
                />
                <p>GERMAN</p>
              </div>
            </Link>
          </div>

          <div className="learn__flags-content">
            <Link to="/french" className="content__links">
              <div className="flag display-flex">
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{
                    width: "2em",
                    height: "2em",
                  }}
                  title="FR"
                  className="flag"
                />
                <p>FRENCH</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
