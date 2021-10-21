import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import Recruit from "../../assets/images/Recruitment.png";
import Form from "../../components/Form/index";
import ServicesInfo from "./ServicesInfo";
import InformationBox from "../Information-box";
import AddedInfoTraining from "./AddedInfoTraining";

function WorknTraining() {
  return (
    <>
      <ServicesdetailsBanner
        heading="Process your work and Vocational Training abroad with DASH"
        image={Recruit}
      />
      <section>
        <ServicesInfo
          heading="Thinking about moving to Europe for work or Vocational Training?"
          servicesabout="Let's talk about some handy information about Vocational training in any German-speaking country.
          "
        />
        <AddedInfoTraining />
        <Form
          heading="Talk to us about this, and Book a slot now"
          value="Book"
        />
        <InformationBox />
      </section>
    </>
  );
}

export default WorknTraining;
