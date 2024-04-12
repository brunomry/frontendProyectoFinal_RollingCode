const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Producto = import.meta.env.VITE_API_PRODUCTO;
const URL_Login = import.meta.env.VITE_API_LOGIN;
const URL_Registro = import.meta.env.VITE_API_REGISTRO;

export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_BACKEND + 'productos');
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Producto + "/" + id);
    const productoObtenido = await respuesta.json();
    return productoObtenido;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_BACKEND + 'productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}productos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}/${id}`,{
      method: "DELETE",
  })
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

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const respuesta = fetch(URL_Registro, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
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