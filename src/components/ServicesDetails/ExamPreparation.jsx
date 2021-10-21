import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import Exam from "../../assets/images/Classroom.png";
import Form from "../../components/Form/index";
import ServicesInfo from "./ServicesInfo";
import InformationBox from "../Information-box";

function ExamPreparation() {
  return (
    <>
      <ServicesdetailsBanner
        heading="Prepare for your International Language Examination with DASH"
        image={Exam}
      />

      <section>
        <ServicesInfo
          heading="Let's give you that confidence needed to pass your German and French Language Exams with ease"
          servicesabout="We prepare and guide our students at various International GOETHE ZERTIFIKAT AND DELF-DALF examinations on each level. The success of our students is paramount to us, that  is why our well-informed and trained tutors prepare and guide you diligently for the examinations."
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

export default ExamPreparation;
