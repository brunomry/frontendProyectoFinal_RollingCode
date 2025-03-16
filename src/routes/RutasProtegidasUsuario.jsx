import { Navigate } from "react-router";
import { obtenerUsuario } from "../helpers/sesion/sesion.functions";
import { roles } from "../helpers/constants";
import { obtenerUsuarioPorId } from "../helpers/queries/usuarios.queries";
import { useState } from "react";

const RutasProtegidasUsuario = ({ children }) => {
  const [rol, setRol] = useState(null);
  const usuario = obtenerUsuario();
  
  if(!usuario) return <Navigate to={"/"}></Navigate>
  
  const fetchUsuario = async () => {
    try {
      const usuarioEncontrado = await obtenerUsuarioPorId(usuario._id);
      if(usuarioEncontrado) setRol(usuarioEncontrado.rol)
    } catch (error) {
      console.error(error);
    } 
  } 

  useEffect(()=>{
    fetchUsuario();
  },[])
  
  if(rol === roles.USUARIO) return children;
  return null;
};

export default RutasProtegidasUsuario;
