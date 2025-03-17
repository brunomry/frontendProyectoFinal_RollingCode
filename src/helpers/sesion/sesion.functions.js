export const obtenerUsuario = () => {
  let usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null;
  return usuario;
};

export const sesionUsuario = (usuario, datos) => {
  sessionStorage.setItem(
    "usuarioLogeado",
    JSON.stringify({
      _id: usuario._id,
      token: datos.token,
    })
  );
};
