const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;

export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Productos + "/" + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Usuarios);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Usuarios}/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

export const login = async (usuario) =>{
  if (usuario.correo === "brunomadozzo@gmail.com" && usuario.clave === "1234AB#f"){
    sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuario.nombreCompleto));
    return true;
  }else{
    return false;
  }
};