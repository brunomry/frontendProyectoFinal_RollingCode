const URL_crearUsuario = import.meta.env.VITE_API_CREARUSUARIO;
const id_super = import.meta.env.VITE_API_SUPERADMIN;
const URL_Login = import.meta.env.VITE_API_LOGIN;
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Login);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarioPorId = async (id) => {
  try {
    const respuesta = await fetch(`${URL_usuario}/${id}`);
    const usuario = await respuesta.json();
    return usuario;
  } catch (error) {
    console.error(error);
  }
};

export const crearUsuarioAdmin = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URL_crearUsuario, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const validarSuperAdmin = (idUsuario) => {
  if (idUsuario == id_super) return true;
  
  return false;
};

export const editarEstadoUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${URL_usuario}/${usuario._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLogeado")).token,
      },
      body: JSON.stringify(usuario),
    });
  } catch (error) {
    console.log(error);
  }
};