import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import perfil from "@/assets/logo.png";
import { options } from "./sidebarOptions.js";
import { useLogout } from "@/hooks/useLogout";
import { useLogin } from "@/features/auth/hooks/uselogin.js";
import useAlert from "@/hooks/useAlert";

const Sidebar = () => {
  const { user } = useLogin();
  const { customAlert } = useAlert();
  const menuOptions = options[user?.rol] || [];
  const { closeSession } = useLogout();
  const navigate = useNavigate();

  const removeSession = () => {
    customAlert("¿Estás seguro que deseas salir?", () => {
      closeSession();
      navigate("/auth/login");
    });
  };

  return (
    <aside className="sidebar">
      <img src={perfil} alt="" className="imgProfile border mb-2" />
      <p className="fw-bold mb-0">Bruno Madozzo</p>
      <small className="text-secondary">{user.correo}</small>
      <ul className="sidebar-nav d-flex flex-column gap-2 mt-5">
        {menuOptions.length > 0 &&
          menuOptions.map((op, pos) => (
            <li className="nav-item" key={pos}>
              <Link to={op.path} className="nav-link">
                {op.label}
              </Link>
            </li>
          ))}
        <li className="nav-item">
          <Link to={"/auth/login"} className="nav-link" onClick={removeSession}>
            Salir
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
