import React from "react";
import "./index.css";
import ErrorImage from "../../assets/images/404 Not Found.png";

function Error404() {
  return (
    <>
      <div className="not-found">
        <img
          src={ErrorImage}
          alt="Error 404, page not found"
          className="error__img"
        />
        <h2 className="heading-secondary">404</h2>
        <p>Opps! page not found!</p>
      </div>
    </>
  );
}

export default Error404;
