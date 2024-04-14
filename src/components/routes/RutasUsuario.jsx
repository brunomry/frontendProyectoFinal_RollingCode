import React from "react";
import { Routes, Route } from "react-router-dom";
import Pedido from "../pages/Pedido";

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
          path="/"
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
      </Routes>
    </>
  );
};

export default RutasUsuario;
