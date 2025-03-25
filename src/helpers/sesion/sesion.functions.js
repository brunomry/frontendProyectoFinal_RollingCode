export const obtenerUsuario = () => {
  let usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || {};
  return usuario;
};

export const sesionUsuario = (usuario, token) => {
  sessionStorage.setItem(
    "usuarioLogeado",
    JSON.stringify({
      id: usuario._id,
      rol: usuario.rol,
      token: token,
    })
  );
};
