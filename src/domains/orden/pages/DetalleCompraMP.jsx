import { Card, Button, Spinner } from "react-bootstrap";
import "../styles/detalleCompraMP.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState, useEffect } from "react";
import {
  crearOrdenMP,
  leerPedidosAPI,
  leerUsuariosAPI,
} from "../../../helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DetalleCompraMP = ({
  usuarioLogeado,
  recarga,
  setRecarga,
  setMostrarBtnMP,
  mostrarBtnMP,
}) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [pedido, setPedido] = useState({});
  const [actualizado, setActualizado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const navegacion = useNavigate();

  useEffect(() => {
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
      } catch (error) {
        console.error(error);
      }
    };
    setRecarga(true);
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      setRecarga(false);
      setMostrarBtnMP(false);
      setPedido({});
      setNombreUsuario("");
    };
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

  const cancelarPagoMP = () => {
    if (!mostrarBtnMP) {
      navegacion("/pedido/misPedidos");
    } else {
      Swal.fire({
        title: "¿No deseas realizar el pago con MERCADOPAGO?",
        text: "Una vez que confirmes, ya no tendrás la opción habilitada.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#60b0fc",
        cancelButtonColor: "#f77266e2",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          navegacion("/pedido/misPedidos");
          window.location.reload();
          setRecarga(false);
          setMostrarBtnMP(false);
        }
      });
    }
  };

  return (
    <section className="pt-3 pb-5 sectionTop d-flex sectionDetailMP flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="my-4">Detalle de Compra</h1>
        <p>
          Tu pedido fue realizado correctamente. Tenemos habilitada la opción de
          pago mediante MERCADOPAGO.
        </p>
      </div>

      <div className="mt-3 text-start card cardMP shadow ">
        <Card.Header className="fw-bold d-flex justify-content-between">
          <span>
            {pedido.metodoEnvio === 1 ? "Delivery (Gratis)" : "Retiro en Local"}
          </span>
          <span>{pedido.fecha}</span>
        </Card.Header>
        <Card.Body>
          <div>
            <p>
              <span className="fw-bold">Nombre:</span>
              <span className="fw-normal"> {nombreUsuario}</span>
            </p>
            <div className="mt-3 text-center">
              <span className="fw-bold fs-5">Total:</span>{" "}
              <span className="text-danger fs-5 fw-bold">${pedido.monto}</span>
            </div>
          </div>
          <div
            className={
              !mostrarBtnMP
                ? "d-none"
                : "d-flex flex-column gap-2 align-items-center justify-content-center px-lg-5 pt-3"
            }
          >
            <small className="fs-6 text-center">
              Puedes realizar el pago con MERCADOPAGO
            </small>
            <i className="fa-solid fa-arrow-down ms-1 text-dark"></i>

            <Button
              onClick={pagar}
              className="btn border btn-success btnPay text-white fw-bold px-5"
            >
              PAGAR
            </Button>
            {actualizado && (
              <>
                <Spinner animation="border" role="status"></Spinner>
                <small>Espera un momento...</small>
              </>
            )}
            {!actualizado && (
              <div className="containerWallet">
                <Wallet
                  initialization={{
                    preferenceId: preferenceId,
                  }}
                ></Wallet>
              </div>
            )}
            <div className="text-center">
              <small>
                Si recargas o sales de la página se perderá la opción de pago
                online.
              </small>
            </div>
          </div>
        </Card.Body>
      </div>
      <div className="text-center mt-4">
        <Button
          onClick={cancelarPagoMP}
          className="mt-2 btn btn-warning border border-1 border-dark btnBuy fw-bold px-4"
        >
          Ir a MIS PEDIDOS
        </Button>
      </div>
    </section>
  );
};

export default DetalleCompraMP;
