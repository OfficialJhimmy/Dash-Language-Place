import React from "react";
import ServicesBanner from "../../components/Banner/ServicesBanner";
import Aboutus from "../About/Aboutus";
import Section1 from "../Home/section4";
import Form from "../../components/Form/index";
import InformationBox from "../../components/Information-box";

function OurServices() {
  return (
    <>
      <ServicesBanner />

      <section>
        <Section1 />
        <Aboutus />

        <Form
          heading="Drop a message for us, we're Quick to reply"
          value="Hit us up"
        />
        <InformationBox />
      </section>
    </>
  );
}

export default OurServices;
