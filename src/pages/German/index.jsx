import React from "react";
import WhyLanguage from "../../components/Grids/WhyLanguage";
import BasicTable from "../../components/Table/BasicTable";
import LanguageBanner from "../../components/Banner/LanguageBanner";
import InformationBox from "../../components/Information-box";
import GermanLinks from "./GermanLinks";
import ExamMaterials from "./ExamMaterials";
import GermanCard from "../../components/Card/GermanCard";

function German() {
  return (
    <>
      <LanguageBanner
        heading="Learn German with DASH Language School"
        paragraph="Hallo! We guess you are interested in taking one of our comprehensive
        German language Courses. Not to worry, We've got you covered."
        countrycode="DE"
      />

      <section>
        <WhyLanguage
          title="Why Learn German"
          about="The German Language is the Official Language of Four(4) European Countries: Germany, Austria, Belgium and Luxembourg. German is also an official language in Switzerland and Liechtenstein. It has been proven that more than 100 Million people speak it worldwide and its the most spoken language in Europe."
          subtitle="Do you need to learn German to be accepted into a university, or for family relatiosnhip or reunion, professional or business? "
          anotherparagraph="The extensive German courses at DASH enable our students to acquire the languages uniquely through the communications skills in SPEAKING, WRITING, READING and LISTENING. All these will help in using any of your chosen languages fluently. You can always learn at your velocity both for our PHYSICAL(ONSITE) and ONLINE(OFFSITE) COURSES."
          paragraph="Our well trained and qualified teachers will evaluate your German language level at the onset of your course.
          At Dash, we incorporate a wide spectrum of updated and modern teaching gadgets inclusive of updated Books and Audiovisual Media to guarantee your learning experience in an entertaining and lively way."
          standard="Our Comprehensive Standard Language Course is 8 Weeks + 1 Week for Intensive Goethe-Institute Exam preparation. It is a 54 Hours course divided into 6 hours weekly. Alternatively, if you have a tight schedule, you can always enroll into our Weekend classes which runs for 12 Weeks + 1 Week for Intensive Goethe-Institute Exam preparation. It is a 54 Hours course divided into 4 Hours (only weekends). "
        />
        <div>
          <h2 className="heading-primary">
            Browse through our comprehensive German courses
          </h2>
          <div className="card__container">
            <GermanCard />
          </div>
        </div>

        <BasicTable />
        <ExamMaterials />
        <GermanLinks />
        <InformationBox />
      </section>
    </>
  );
}

export default German;
