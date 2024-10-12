import { Card, Button, Spinner } from "react-bootstrap";
import "../styles/detalleCompraMP.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState, useEffect } from "react";
import {
  crearOrdenMP,
  leerPedidosAPI,
  leerUsuariosAPI,
} from "../../../helpers/queries";

const DetalleCompraMP = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [pedido, setPedido] = useState({});
  const [actualizado, setActualizado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [spinner, setSpinner] = useState(true);

  const fetchData = async () => {
    try {
      const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
      const pedidos = await leerPedidosAPI();

      const usuarios = await leerUsuariosAPI();
      const usuarioBuscado = usuarios.find(
        (u) => u.correo === usuario.correo
      );
      setNombreUsuario(usuarioBuscado.nombreCompleto);

      const pedidosFiltrados = pedidos.filter(
        (p) => p.usuario === usuario.id
      );
      const pedidoUsuario = pedidosFiltrados[pedidosFiltrados.length - 1];

      setPedido(pedidoUsuario);
      setSpinner(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pagar = async () => {
    const ordenMP = {
      title: `Pedido: ${pedido._id}`,
      unit_price: pedido.monto,
    };

    const respuesta = await crearOrdenMP(ordenMP);
    setPreferenceId(respuesta.preferenceID);

    initMercadoPago(respuesta.publicKey, {
      locale: "es-AR",
    });

    setActualizado(true);
    const timer = setTimeout(() => {
      setActualizado(false);
    }, 1000);
  };

  if (spinner) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5">
        <Spinner animation="border" variant="warning" role="status">       
        </Spinner>
        <span className="text-white">Espera un momento...</span>
      </div>
    );
  }

  return (
    <section className="pt-3 pb-5 container sectionTop text-white d-flex containerPayMP flex-column align-items-center">
      <div className="text-center">
        <h1 className="my-4">Detalle de Compra</h1>
        <p>
          Tenemos habilitada la opción de
          pago mediante MERCADOPAGO.
        </p>
      </div>
      <div className="mt-3 text-start cardPayMP px-3 px-md-5 py-3 rounded-4 text-white">
        <Card.Header className="d-flex flex-column flex-md-row justify-content-md-between">
        <span>{pedido.fecha}</span>
          <span>
            {pedido.metodoEnvio === 1 ? "Delivery (Gratis)" : "Retiro en Local"}
          </span>
        
        </Card.Header>
        <Card.Body>
          <div>
            <p className="pt-3">
              <span >Nombre:</span>
              <span className="fw-normal text-warning"> {nombreUsuario}</span>
            </p>
            <p>Código: <span className="text-warning">{pedido._id}</span></p>
            <div className="mt-3 text-center fs-5">
              <span className="">Total:</span>{" "}
              <span className="text-success fw-bold">${pedido.monto}</span>
            </div>
          </div>
          <div
            className="d-flex flex-column gap-2 align-items-center justify-content-center px-lg-5 pt-3"  
          >
            <Button
              onClick={pagar}
              className="btnPay text-white rounded-2 px-5"
            >
              Pagar ahora
            </Button>
            {actualizado && (
              <>
                <Spinner animation="border" role="status"></Spinner>
                <small>Espera un momento...</small>
              </>
            )}
            {!actualizado && (
              <div className="containerWallet text-dark">
                <Wallet
                  initialization={{
                    preferenceId: preferenceId,
                  }}
                ></Wallet>
              </div>
            )}
          </div>
        </Card.Body>
      </div>
      <div className="text-center mt-4">
        <p>También aceptamos pago en efectivo</p>
        <button
          className="mt-2 btn btn-warning border border-1 border-dark btnBuy fw-bold px-5 rounded-5 py-3"
        >
          ir a Mis Pedidos
        </button>
      </div>
    </section>
  );
};

export default DetalleCompraMP;
