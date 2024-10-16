import { Navigate } from "react-router";

const RutasProtegidas = ({ children }) => {
  const verificarUsuario =
    JSON.parse(sessionStorage.getItem("usuarioLogeado")) || undefined;
  if (verificarUsuario === undefined) {
    return <Navigate to={"/login"}></Navigate>;
  } else if (verificarUsuario.rol === "Administrador") {
    return children;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
};

export default RutasProtegidas;
