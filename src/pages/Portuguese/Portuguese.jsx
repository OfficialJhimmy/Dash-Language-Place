import React from "react";
import "./Portuguese.css";
import WhyLanguage from "../../components/Grids/WhyLanguage";
import BasicTable from "../../components/Table/BasicTable";
import LanguageBanner from "../../components/Banner/LanguageBanner";
// import InformationBox from "../../components/Information-box";
// import GermanLinks from "./GermanLinks";
// import ExamMaterials from "./ExamMaterials";
import PortugueseCard from "../../components/Card/PortugueseCard";

const Portuguese = () => {
  return (
    <>
      <LanguageBanner
        heading="Learn Portuguese with DASH Language School"
        paragraph="Ola! We guess you are interested in taking one of our comprehensive
        Portuguese language Courses. Not to worry, We've got you covered."
        countrycode="PT"
      />

      <section>
        <WhyLanguage
          title="Why Learn Portuguese"
          about="Portuguese is also an important language in the sphere of diplomacy and economic development; it is the working and/or official language in some of the most important international organizations, such as the African Union, the Community of Portuguese Language Countries, the European Union, Mercosul, the Organization of American States, the Organization of Ibero-American States, and the Union of South American Nations."
          subtitle="Do you need to learn Portuguese to be accepted into a university, or for family relatiosnhip or reunion, professional or business? "
          anotherparagraph="The extensive Portuguese courses at DASH enable our students to acquire the languages uniquely through the communications skills in SPEAKING, WRITING, READING and LISTENING. All these will help in using any of your chosen languages fluently. You can always learn at your velocity both for our PHYSICAL(ONSITE) and ONLINE(OFFSITE) COURSES."
          paragraph="Our well trained and qualified teachers will evaluate your Portuguese language level at the onset of your course.
          At Dash, we incorporate a wide spectrum of updated and modern teaching gadgets inclusive of updated Books and Audiovisual Media to guarantee your learning experience in an entertaining and lively way."
          standard="Our Comprehensive Standard Language Course is 8 Weeks + 1 Week for Exam preparation. It is a 54 Hours course divided into 6 hours weekly. Alternatively, if you have a tight schedule, you can always enroll into our Weekend classes which runs for 12 Weeks + 1 Week for Intensive Exam preparation. It is a 54 Hours course divided into 4 Hours (only weekends). "
        />
        <div>
          <h2 className="heading-primary">
            Browse through our comprehensive Portuguese courses
          </h2>
          <div className="card__container">
            <PortugueseCard />
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

export default Portuguese;
