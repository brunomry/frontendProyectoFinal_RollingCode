import React from "react";
import { Routes, Route } from "react-router-dom";
import Pedido from "../pages/Pedido";
import MisPedidos from "../pages/order/userOrders/MisPedidos";

const RutasUsuario = ({
  usuarioLogeado,
  productosCarrito,
  carrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  montoCarrito,
  quitarProductoCarrito,
  setCarrito,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/miPedido"
          element={
            <Pedido
              usuarioLogeado={usuarioLogeado}
              productosCarrito={productosCarrito}
              carrito={carrito}
              agregarCantidadProducto={agregarCantidadProducto}
              quitarCantidadProducto={quitarCantidadProducto}
              montoCarrito={montoCarrito}
              quitarProductoCarrito={quitarProductoCarrito}
              setCarrito={setCarrito}
            ></Pedido>
          }
        ></Route>
        <Route
          path="/misPedidos"
          element={
            <MisPedidos
              usuarioLogeado={usuarioLogeado}
            ></MisPedidos>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasUsuario;
