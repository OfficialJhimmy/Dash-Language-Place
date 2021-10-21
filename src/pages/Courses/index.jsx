import React from "react";
import ServicesdetailsBanner from "../../components/Banner/ServicesdetailsBanner";
import English from "../../assets/images/English course.png";
import BasicTable from "../../components/Table/BasicTable";
import InformationBox from "../../components/Information-box";
import ReasonsGrid from "../../components/Grids/ReasonsGrid";
import SingleCard from "../../components/Card/SingleCard";

function Courses() {
  return (
    <>
      <ServicesdetailsBanner
        heading="Hi! Seems we've got your attention. We've got amazing and comprehensive courses awaiting you"
        image={English}
      />

      <section>
        <h2 className="heading-primary">
          Browse through our comprehensive German and French courses
        </h2>
        <div className="card__container">
          <SingleCard />
        </div>
        <BasicTable />
        <ReasonsGrid />
        <InformationBox />
      </section>
    </>
  );
}

export default Courses;
