import { Link } from "react-router-dom";

const HeadAdmin = ({ title }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h1 className="text-dark ">{title}</h1>
        {title === "Gestión de Menú" && (
          <Link
            className="btnNewProduct border border-1 border-white fw-bold p-2 rounded-2 text-decoration-none"
            to="/admin/productos/formulario-producto"
          >
            <i className="fa-solid fa-plus"></i> Nuevo Menú
          </Link>
        )}
      </div>
    </>
  );
};

export default HeadAdmin;
