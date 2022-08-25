import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactCountryFlag from "react-country-flag";
import Grid4x4 from "../../components/Grids/grid4x4";

function Section1() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <div className="home__title">
        <h2 className="heading-primary">Why Dash Language School?</h2>
        <p>
          Hallo! Bonjour! We are <b>DASH.</b> A <b>LANGUAGE SCHOOL</b> that
          helps people across all ages, groups, careers learn the Educational,
          Cultural and Linguistic ways of some Deutsch,French, Spanish and/or Portuguese-speaking
          countries like:
          <ReactCountryFlag
            countryCode="DE"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="DE"
          />
          <span>GERMANY </span>
          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="FR"
            className="flag"
          />
          <span>FRANCE </span>
          <ReactCountryFlag
            countryCode="AT"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="AT"
            className="flag"
          />
          <span>AUSTRIA </span>
          <ReactCountryFlag
            countryCode="CH"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="CH"
            className="flag"
          />
          <span>SWITZERLAND </span>
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="ES"
            className="flag"
          />
          <span>SPAIN </span>
          <ReactCountryFlag
            countryCode="PT"
            svg
            style={{
              width: "2em",
              height: "1em",
            }}
            title="PT"
            className="flag"
          />
          <span>PORTUGAL </span>

        </p>
      </div>

      <Grid4x4 />
    </>
  );
}

export default Section1;
