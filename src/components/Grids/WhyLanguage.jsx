import React from "react";
import "./index.css";

function WhyLanguage({ title, about, anotherparagraph, paragraph, standard }) {
  return (
    <>
      <div className="why-language">
        <h2 className="heading-primary">{title}</h2>
        <div className="why-info">
          <p>{about}</p>
          <p>{anotherparagraph}</p>
          <p>{paragraph}</p>
          <p>{standard}</p>
        </div>
      </div>
    </>
  );
}

export default WhyLanguage;
