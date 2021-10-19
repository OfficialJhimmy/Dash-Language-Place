import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import ResumeReview from "../../assets/images/Resume review.png";
import Form from "../../components/Form/index";
import ServicesInfo from "./ServicesInfo";
import InformationBox from "../Information-box";

function Translation() {
  return (
    <>
      <ServicesdetailsBanner
        heading="Translate and Transcribe your Documents with DASH"
        image={ResumeReview}
      />
      <section>
        <ServicesInfo
          heading="Transcribing and Translating your documents with DASH"
          servicesabout="Our extra translation and transcription services are what makes us stand out from others. We have reliable and experienced proofreaders and teachers who carefully review each translation and transcription documents in terms of grammar, readability, content and style. You can easily access our translation and transcription services in two languages GERMAN AND FRENCH.
          The tailored translation and transcription services we provide have bestowed us an ever-growing list of happy clients. 
          Send us your Audio and Video file, and would surely provide you with a transcript within your specified time to your exact specification."
        />
        <Form
          heading="Talk to us about this, and Book a slot now"
          value="Book"
        />
        <InformationBox />
      </section>
    </>
  );
}

export default Translation;
