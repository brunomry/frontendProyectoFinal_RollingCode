import Spinner from "react-bootstrap/Spinner";
import "./load.css";

const Load = () => {
  return (
    <div className="d-flex justify-content-center align-items-center custom-spinner sectionTop">
      <Spinner className="spinner"></Spinner>
    </div>
  );
};

export default Load;
