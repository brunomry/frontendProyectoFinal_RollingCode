import { Navigate } from "react-router";
import { obtenerUsuario } from "../helpers/sesion/sesion.functions";
import { roles } from "../helpers/constants";
import { obtenerUsuarioPorId } from "../queries/usuarios.queries.js";
import { useEffect, useState } from "react";

const RutasProtegidasUsuario = ({ children }) => {
  const [rol, setRol] = useState(null);
  const usuario = obtenerUsuario();

  if (Object.keys(usuario).length === 0) return <Navigate to={"/"}></Navigate>;

  const fetchUsuario = async () => {
    try {
      const respuesta = await obtenerUsuarioPorId(usuario.id);
      const usuarioEncontrado = respuesta.data;
      if (usuarioEncontrado) setRol(usuarioEncontrado.rol);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  if (rol === roles.USUARIO) return children;

};

export default RutasProtegidasUsuario;
