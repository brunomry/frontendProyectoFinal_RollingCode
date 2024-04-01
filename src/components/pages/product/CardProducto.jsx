import React from "react";
import "../../../styles/cardProducto.css";
const CardProducto = () => {
  return (
    <div className="cardProducto d-flex">
      <div className="cardInformacion">
        <h3>Título producto</h3>
        <p>
          Aquí va una descripción breve del producto que contenga informacion
          básica sobre el mismo
        </p>
        <p>$55555</p>
        <div>
          {" "}
          <button className="btn btn-primary">Detalles</button>
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
