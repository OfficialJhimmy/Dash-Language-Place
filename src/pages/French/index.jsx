import React from "react";
import WhyLanguage from "../../components/Grids/WhyLanguage";
import BasicTable from "../../components/Table/BasicTable";
import LanguageBanner from "../../components/Banner/LanguageBanner";
import InformationBox from "../../components/Information-box";
import "../German/index.css";
import FrenchLinks from "./FrenchLinks";
import FrenchCard from "../../components/Card/FrenchCard";

function French() {
  return (
    <>
      <LanguageBanner
        heading="Learn French with DASH Language School"
        paragraph="Bonjour! We guess you are interested in taking one of our comprehensive
        French language Courses. Not to worry, We've got you covered."
        countrycode="FR"
      />

      <section>
        <WhyLanguage
          title="Why Learn French"
          about="The French Language is the Official Language of 29 European Countries. It is estimated that around 12 percent of the European Union's population speaks French as a mother tongue, making it the fourth most widely-spoken European language."
          subtitle="Do you need to learn French to be accepted into a university, or for family relatiosnhip or reunion, professional or business? "
          anotherparagraph="The extensive French courses at DASH enable our students to acquire the languages uniquely through the communications skills in SPEAKING, WRITING, READING and LISTENING. All these will help in using any of your chosen languages fluently. You can always learn at your velocity both for our PHYSICAL(ONSITE) and ONLINE(OFFSITE) COURSES."
          paragraph="Our well trained and qualified teachers will evaluate your French language level at the onset of your course.
          At Dash, we incorporate a wide spectrum of updated and modern teaching gadgets inclusive of updated Books and Audiovisual Media to guarantee your learning experience in an entertaining and lively way."
          standard="Our Comprehensive Standard Language Course is 8 Weeks + 1 Week for Intensive Delf Dalf International Exam preparation. It is a 54 Hours course divided into 6 hours weekly. Alternatively, if you have a tight schedule, you can always enroll into our Weekend classes which runs for 12 Weeks + 1 Week for Intensive Delf Dalf InternationalExam preparation. It is a 54 Hours course divided into 4 Hours (only weekends). "
        />
        <div>
          <h2 className="heading-primary">
            Browse through our comprehensive French courses
          </h2>
          <div className="card__container">
            <FrenchCard />
          </div>
        </div>

        <BasicTable />
        <FrenchLinks />
        <InformationBox />
      </section>
    </>
  );
}

export default French;
