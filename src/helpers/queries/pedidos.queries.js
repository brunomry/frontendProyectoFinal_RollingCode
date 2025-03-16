const URL_pedidos = import.meta.env.VITE_API_PEDIDOS;
const URL_pedido = import.meta.env.VITE_API_PEDIDO;

export const crearPedidoApi = async (pedido) => {
  try {
    const respuesta = await fetch(URL_pedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    return error;
  }
};

export const leerPedidosAPI = async () => {
  try {
    const respuesta = await fetch(URL_pedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const editarPedidoAPI = async (pedido, id) => {
  try {
    const respuesta = await fetch(`${URL_pedido}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioLogeado")).token,
      },
      body: JSON.stringify(pedido),
    });
  } catch (error) {
    console.log(error);
  }
};
