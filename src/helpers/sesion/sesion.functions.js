export const obtenerUsuario = () => {
  let usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || {};
  return usuario;
};

export const sesionUsuario = (usuario, data) => {
  sessionStorage.setItem(
    "usuarioLogeado",
    JSON.stringify({
      _id: usuario._id,
      token: data.token,
    })
  );
};
