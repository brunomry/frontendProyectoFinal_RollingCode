import "../../../styles/opinionesIndex.css";
import { Card } from "react-bootstrap";

const Opiniones = () => {
  return (
    <>
      <article className="containerCardOpinions d-flex flex-column gap-4 pb-5">
        <Card className="border-dark shadow px-5">
          <Card.Body>
            <Card.Text className="">
              <i class="fa-solid fa-quote-left me-4 fs-3 "></i>
              <span className="fs-5">Sin duda, las pizzas más ricas de Tucumán.</span>
              <i class="fa-solid fa-quote-right fs-3 ms-4"></i>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
              </div>
              <span className="fw-bold fs-5">- Juan</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-dark shadow px-5">
          <Card.Body>
            <Card.Text className="">
              <i class="fa-solid fa-quote-left me-4 fs-3 "></i>
              <span className="fs-5">Excelente la atención. No duden en ir, se come muy rico</span>
              <i class="fa-solid fa-quote-right fs-3 ms-4"></i>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-regular fa-star fs-5 text-secondary"></i>
              </div>
              <span className="fw-bold fs-5">- Pedro</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-dark shadow px-5">
          <Card.Body>
            <Card.Text className="">
              <i class="fa-solid fa-quote-left me-4 fs-3 "></i>
              <span className="fs-5">El mejor lugar para ir a comer. Siempre que puedo voy.</span>
              <i class="fa-solid fa-quote-right fs-3 ms-4"></i>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between">
              <div className="d-flex gap-1">
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
                <i class="fa-solid fa-star fs-5 text-warning"></i>
              </div>
              <span className="fw-bold fs-5">- Sofía</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    </>
  );
};

export default Opiniones;
