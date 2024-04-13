import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../../styles/loadSpinner.css";

const Load = () => {
  return (
    <div
      className="d-flex justify-content-center custom-spinner"
      style={{ margin: "10vw 0" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
};

export default Load;
