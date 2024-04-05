const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;

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