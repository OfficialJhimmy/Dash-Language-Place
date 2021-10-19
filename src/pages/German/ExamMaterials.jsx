import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function ExamMaterials() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="city">
      <h2 className="heading-primary">
        Useful Exam Preparation Materials for your Goethe-Institute Exam
      </h2>
      <div className="city-links">
        <a
          data-aos="zoom-in"
          href="https://www.goethe.de/ins/ng/en/m/spr/prf/gzsd1/ueb.html"
          target="_blank"
          rel="noreferrer"
        >
          German A1 Practice Material
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.goethe.de/en/m/spr/kup/prf/prf/gzsd2/ub2.html"
          target="_blank"
          rel="noreferrer"
        >
          German A2 Practice Material
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.goethe.de/ins/ng/en/m/spr/prf/gzb1/ueb.html"
          target="_blank"
          rel="noreferrer"
        >
          German B1 Practice Material
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="fade-right"
          href="https://www.goethe.de/ins/ng/en/m/spr/prf/gzb2/ue9.html"
          target="_blank"
          rel="noreferrer"
        >
          German B2 Practice Material
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>

        <a
          data-aos="zoom-in"
          href="https://www.goethe.de/ins/ng/en/m/spr/prf/gzc1/ueb.html"
          target="_blank"
          rel="noreferrer"
        >
          German C1 Practice Material
          <span style={{ fontSize: "25px" }}>&#8594;</span>
        </a>
      </div>
    </div>
  );
}

export default ExamMaterials;
