const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Producto = import.meta.env.VITE_API_PRODUCTO;
const URL_Login = import.meta.env.VITE_API_LOGIN;

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
    const respuesta = await fetch(URL_Producto + "/" + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Login);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Login}/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
