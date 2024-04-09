// const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
// const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;
import { URL_BACKEND } from './constants';

//Se modificaron los links para hacerlo coincidir con el back de prueba

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
    const respuesta = await fetch(URL_BACKEND + 'producto/' + id);
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
    const respuesta = await fetch(`${URL_BACKEND}productos/${id}`, {
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
    const respuesta = await fetch(`${URL_BACKEND}producto/${id}`, {
      method: 'DELETE',
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URL_BACKEND + 'usuario');
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_BACKEND}registro/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
