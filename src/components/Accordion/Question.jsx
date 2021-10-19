import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";

function Question({ title, description }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <div data-aos="zoom-in" className="questionstyled">
      <div className="q-con">
        <div className="toggle-title">
          <h4>{title}</h4>
          <button onClick={btnToggler}>
            {toggle ? (
              <img src={minus} alt="" className="svg__toggle" />
            ) : (
              <img src={plus} alt="" className="svg__toggle" />
            )}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Question;
