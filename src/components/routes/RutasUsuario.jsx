import React from "react";
import { Routes, Route } from "react-router-dom";
import Pedido from "../pages/Pedido";
import MisPedidos from "../pages/order/userOrders/MisPedidos";
import DetalleCompraMP from "../pages/order/user/DetalleCompraMP";

const RutasUsuario = ({
  usuarioLogeado,
  productosCarrito,
  carrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  montoCarrito,
  quitarProductoCarrito,
  setCarrito,
  recarga,
  setRecarga,
  mostrarBtnMP,
  setMostrarBtnMP
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
              recarga={recarga}
              setRecarga={setRecarga}
              mostrarBtnMP={mostrarBtnMP}
              setMostrarBtnMP={setMostrarBtnMP}
            ></Pedido>
          }
        ></Route>
        <Route
          path="/misPedidos"
          element={<MisPedidos usuarioLogeado={usuarioLogeado}></MisPedidos>}
        ></Route>
        <Route
          path="/detalleCompra"
          element={
            <DetalleCompraMP
              usuarioLogeado={usuarioLogeado}
              recarga={recarga}
              setRecarga={setRecarga}
              mostrarBtnMP={mostrarBtnMP}
              setMostrarBtnMP={setMostrarBtnMP}
            ></DetalleCompraMP>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasUsuario;
