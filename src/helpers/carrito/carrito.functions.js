export const guardarCarrito = (carrito) =>
  sessionStorage.setItem("carrito", JSON.stringify(carrito));

export const obtenerCarrito = () => {
  let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
  return carrito;
};

export const calcularMonto = (productosCarrito, carrito) => {
  let productoCarritoAux = [...productosCarrito];
  let montoAux = 0;

  if (carrito.length > 0 && productosCarrito.length > 0) {
    for (let i = 0; i < productoCarritoAux.length; i++) {
      let precioProductoCarrito = carrito.find(
        (productoCarrito) =>
          productoCarrito.producto == productoCarritoAux[i]._id
      );
      montoAux += precioProductoCarrito.cantidad * productoCarritoAux[i].precio;
    }
  }

  return montoAux;
};

export const buscarProductoCarrito = (idProducto, carrito) => {
  let carritoAux = [...carrito];
  const indexProductoCarrito = carritoAux.findIndex(
    (productoCarrito) => productoCarrito.id == idProducto
  );

  return { carritoAux, indexProductoCarrito };
};
