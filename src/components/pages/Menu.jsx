import React from "react";
import "../../styles/menu.css";
import  bannerMenu from "../../assets/bannerMenuProvisorio.png"
const Menu = () => {
  return (
    <>
      <section className="text-center bannerMenu d-flex flex-column justify-content-center">
        <h1>Nuestro Menu</h1>
        <p>elegí el plato que más prefieras</p>
        <a href="#">descargar el menú</a>
      </section>
      <div className="border-bottom border-black d-flex justify-content-center p-4">
        <p> <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Categoría 1</a> </p>
        <p> <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Categoría 2</a> </p>
        <p> <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Categoría 3</a> </p>
        <p> <a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Categoría 4</a> </p>
      </div>
    </>
  );
};

export default Menu;
