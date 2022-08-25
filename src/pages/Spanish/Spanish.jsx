import React from "react";
import "./Spanish.css";
import WhyLanguage from "../../components/Grids/WhyLanguage";
import BasicTable from "../../components/Table/BasicTable";
import LanguageBanner from "../../components/Banner/LanguageBanner";
// import InformationBox from "../../components/Information-box";
// import GermanLinks from "./GermanLinks";
// import ExamMaterials from "./ExamMaterials";
import SpanishCard from "../../components/Card/SpanishCard";

const Spanish = () => {
  return (
    <>
      <LanguageBanner
        heading="Learn Spanish with DASH Language School"
        paragraph="Hola! We guess you are interested in taking one of our comprehensive
        Spanish language Courses. Not to worry, We've got you covered."
        countrycode="ES"
      />

      <section>
        <WhyLanguage
          title="Why Learn Spanish"
          about="There are over 400 million Spanish speakers world-wide. With more than 33 million speakers, Spanish is the second largest language in the United States. Hispanics are the largest minority in the United States, with the majority of them being Spanish speakers."
          subtitle="Do you need to learn Spanish to be accepted into a university, or for family relatiosnhip or reunion, professional or business?"
          anotherparagraph="The extensive Spanish courses at DASH enable our students to acquire the languages uniquely through the communications skills in SPEAKING, WRITING, READING and LISTENING. All these will help in using any of your chosen languages fluently. You can always learn at your velocity both for our PHYSICAL(ONSITE) and ONLINE(OFFSITE) COURSES."
          paragraph="Our well trained and qualified teachers will evaluate your Spanish language level at the onset of your course.
          At Dash, we incorporate a wide spectrum of updated and modern teaching gadgets inclusive of updated Books and Audiovisual Media to guarantee your learning experience in an entertaining and lively way."
          standard="Our Comprehensive Standard Language Course is 8 Weeks + 1 Week for Intensive Exam preparation. It is a 54 Hours course divided into 6 hours weekly. Alternatively, if you have a tight schedule, you can always enroll into our Weekend classes which runs for 12 Weeks + 1 Week for Intensive Exam preparation. It is a 54 Hours course divided into 4 Hours (only weekends). "
        />
        <div>
          <h2 className="heading-primary">
            Browse through our comprehensive Spanish courses
          </h2>
          <div className="card__container">
            <SpanishCard />
          </div>
        </div>

        <BasicTable />
        {/* <ExamMaterials />
        <GermanLinks />
        <InformationBox /> */}
      </section>
    </>
  );
};

export default Spanish;
