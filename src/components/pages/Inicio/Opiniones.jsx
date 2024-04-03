import "../../../styles/opinionesIndex.css";
import { Card } from "react-bootstrap";

const Opiniones = () => {
  return (
    <>
      <article className="containerCardOpinions d-flex flex-column gap-4">
        <Card className="border-dark shadow px-md-4 px-lg-5">
          <Card.Body>
            <Card.Text>
              <i className="fa-solid fa-quote-left me-3 fs-3"></i>
              <span className="textSize">Sin duda, las pizzas más ricas de Tucumán.</span>
              <i className="fa-solid fa-quote-right fs-3 ms-3"></i>
            </Card.Text>
            <div className="d-flex justify-content-between flex-column gap-2 flex-sm-row">
              <p className="d-flex gap-1 mb-0">
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
              </p>
              <span className="fw-bold fs-5">- Juan Perez</span>
            </div>
          </Card.Body>
        </Card>  
        <Card className="border-dark shadow px-md-4 px-lg-5">
          <Card.Body>
            <Card.Text className="">
              <i className="fa-solid fa-quote-left me-3 fs-3 "></i>
              <span className="textSize">El mejor lugar para ir a comer en familia.</span>
              <i className="fa-solid fa-quote-right fs-3 ms-3"></i>
            </Card.Text>
            <div className="d-flex justify-content-between flex-column gap-2 flex-sm-row">
              <p className="d-flex gap-1 mb-0">
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
              </p>
              <span className="fw-bold fs-5">- Sofía Diaz</span>
            </div>
          </Card.Body>
        </Card>
        <Card className="border-dark shadow px-md-4 px-lg-5">
          <Card.Body>
            <Card.Text className="">
              <i className="fa-solid fa-quote-left me-3 fs-3 "></i>
              <span className="textSize">No duden en ir, se come muy rico y a buen precio.</span>
              <i className="fa-solid fa-quote-right fs-3 ms-3"></i>
            </Card.Text>
            <div className="d-flex justify-content-between flex-column gap-2 flex-sm-row">
              <p className="d-flex gap-1 mb-0">
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-solid fa-star iconStar text-warning"></i>
                <i className="fa-regular fa-star iconStar text-secondary"></i>
              </p>
              <span className="fw-bold fs-5">- Pedro López</span>
            </div>
          </Card.Body>
        </Card>
      </article>
    </>
  );
};

export default Opiniones;
