import { Link } from "react-router-dom";
import "../../styles/administrador.css";

const Administracion = () => {
  return (
    <section className="mainSection m-0">
      <h1 className="text-center my-5">Bienvenido "Administrador"</h1>
      <article className="me-2 mx-sm-auto d-flex justify-content-center border border border-1 border-dark managementOptions px-3 px-sm-5">
        <div className="d-flex gap-3 flex-column justify-content-center align-items-center">
          <Link
            className="border border-1 border-white fw-bold py-3 btnManagement rounded-2 text-decoration-none px-3"
            to="/administrador/productos"
          >
            Gestionar Productos <i className="fa-solid fa-pizza-slice"></i>
          </Link>
          <Link
            className="border border-1 border-white fw-bold py-3 btnManagement rounded-2 text-decoration-none px-4"
            to="/administrador/usuarios"
          >
            Gestionar Usuarios <i className="fa-solid fa-user"></i>
          </Link>
          <Link
            className="border border-1 border-white fw-bold py-3 btnManagement rounded-2 text-decoration-none px-4"
            to="/administrador/pedidos"
          >
            Gestionar Pedidos <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Administracion;
