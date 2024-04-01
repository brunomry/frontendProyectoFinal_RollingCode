import React from "react";
import "../../../styles/cardProducto.css";
const CardProducto = () => {
  return (
    <div className="cardProduct d-flex">
      <div className="cardInformation">
        <div className="cardTitle">
          <h5>Título producto</h5>
        </div>
        <div className="cardDescription">
          <p>
            Aquí va una descripción breve del producto que contenga informacion
            básica sobre el mismo
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="cardPrice text-center">
            <p>~ $55555 ~</p>
          </div>
          <div className="text-center">
            {" "}
            <button className="cardBTN">Ver más</button>
          </div>
        </div>
      </div>
      <div className="cardIMGContainer">
        <img
          src="https://images.pexels.com/photos/13998632/pexels-photo-13998632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen de prueba"
          className="cardIMG"
        />
      </div>
    </div>
  );
};

export default CardProducto;
