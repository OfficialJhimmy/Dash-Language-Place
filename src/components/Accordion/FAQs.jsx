// import styled from "styled-components";

import questions from "../../data/QuestionData";
import Question from "./Question";
import "./Accordion.css";

function FAQSection() {
  return (
    <div className="faqstyled">
      <div className="innerlayout">
        <h2 className="heading-primary">Frequently asked Questions</h2>
        <div className="questions-con">
          {questions.map((q) => {
            return <Question key={q.id} {...q} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
