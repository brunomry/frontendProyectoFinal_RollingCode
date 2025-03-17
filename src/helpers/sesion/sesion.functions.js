export const obtenerUsuario = () => {
  let usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || {};
  return usuario;
};

export const sesionUsuario = (usuario, datos) => {
  sessionStorage.setItem(
    "usuarioLogeado",
    JSON.stringify({
      id: usuario._id,
      rol: usuario.rol,
      token: datos.token,
    })
  );
};
