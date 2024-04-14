import React from 'react';
import {Navigate} from "react-router"
const RutasProtegidasUsuario = ({children}) => {
    const verificarUsuario = JSON.parse(sessionStorage.getItem('usuarioLogeado')) || undefined;
    if(verificarUsuario === undefined){
        return <Navigate to={"/login"}></Navigate>
    }else if (verificarUsuario.rol === "Administrador"){
        return <Navigate to={"/"}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidasUsuario;