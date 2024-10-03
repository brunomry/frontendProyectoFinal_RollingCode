import Spinner from "react-bootstrap/Spinner";
import "./loadSpinner.css";

const Load = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center custom-spinner sectionTop"
      style={{ margin: "10vw 0" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );
};

export default Load;
