import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import Graduation from "../../assets/images/Graduation (Male Version).png";
import Form from "../../components/Form/index";
import ServicesInfo from "./ServicesInfo";
import InformationBox from "../Information-box";
import GermanLinks from "../../pages/German/GermanLinks";
import FrenchLinks from "../../pages/French/FrenchLinks";

function Admission() {
  return (
    <>
      <ServicesdetailsBanner
        heading="Admission Processing (Germany, Austria, Switzerland,and France) with DASH"
        image={Graduation}
      />

      <section>
        <ServicesInfo
          heading="Sit back and relax while we help you out with your Admission Processing"
          servicesabout="Do you intend to apply for Bachelor's degree, masters,  doctorate or a language course in German and French-speaking countries, DASH LANGUAGE SCHOOL will guide and process your all necessary document. We will help you apply to any university of your choice and get your admission with ease. Your success is our priority."
        />
        <Form
          heading="Talk to us about this, and Book a slot now"
          value="Book"
        />
        <GermanLinks />
        <FrenchLinks />
        <InformationBox />
      </section>
    </>
  );
}

export default Admission;
