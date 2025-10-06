import { Link } from "react-router-dom";
import IconPlus from "../../../common/icons/IconPlus";

const HeadAdmin = ({ title }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <h1 className="text-dark fw-bold">{title}</h1>
        {title === "Gestión de Menú" && (
          <Link
            className="border border-secondary text-secondary p-2 rounded-2 text-decoration-none d-flex justify-content-center align-items-center"
            to="/admin/productos/formulario-producto"
          >
            <IconPlus></IconPlus> <span>Nuevo Menú</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default HeadAdmin;
