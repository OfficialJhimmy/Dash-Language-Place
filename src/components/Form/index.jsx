import { useState } from "react";
import emailjs from "emailjs-com";
import "./index.css";

const Result = () => {
  return (
    <p className="contact__result">
      Your message has been successfully sent. We will contact you soon.
    </p>
  );
};

const Form = ({ heading, value }) => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsa21eb",
        "template_w10fkwj",
        e.target,
        "user_GESOWihEI9BnPy70m35to"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // hide result
  setTimeout(() => {
    showResult(false);
  }, 4000);

  return (
    <>
      <div className="form__container">
        <div className="contact-us__form">
          <h2 className="heading-primary">{heading}</h2>
          <form action="" onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" name="fullName" id="" required="required" />
              <span>Full Name</span>
            </div>

            <div className="inputBox">
              <input type="text" name="reason" id="" required="required" />
              <span>Reason for Contacting</span>
            </div>

            <div className="inputBox">
              <input type="email" name="email" id="" required="required" />
              <span>Email</span>
            </div>

            <div className="inputBox">
              <input type="tel" name="phone" id="" required="required" />
              <span>Phone Number</span>
            </div>

            <div className="inputBox">
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                required="required"
              ></textarea>
              <span>Type a Message</span>
            </div>

            <div className="inputBox">
              <input type="submit" value={value} />
            </div>

            <div className="contact__message">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
