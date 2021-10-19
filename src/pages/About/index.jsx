import AboutusBanner from "../../components/Banner/AboutusBanner";
import Values from "./Values";
import Section2 from "../Home/section1";
import Section3 from "../Home/section4";
import "./index.css";
import Aboutus from "./Aboutus";

function About() {
  return (
    <>
      <AboutusBanner />

      <section>
        <Aboutus />
        <Values />
        <Section2 />
        <Section3 />
      </section>
    </>
  );
}

export default About;
