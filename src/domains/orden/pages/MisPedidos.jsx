import CardPedido from "../components/CardPedido";
import "../styles/cardPedido.css";
import { useEffect, useState } from "react";
import { leerPedidosAPI } from "../../../helpers/queries/pedidos.queries";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerUsuario } from "../../../helpers/sesion/sesion.functions";

const MisPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const listarPedidos = async () => {
    const usuario = obtenerUsuario();

    const respuesta = await leerPedidosAPI();

    const pedidosFiltrados = respuesta.filter(
      (pedido) => pedido.usuario === usuario._id
    );

    setListaPedidos(pedidosFiltrados.reverse());
    setSpinner(false);
  };

  useEffect(() => {
    listarPedidos();
  }, []);

  if (spinner) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5">
        <Spinner animation="border" variant="warning" role="status">
        </Spinner>
        <span className="text-white">Espera un momento...</span>
      </div>
    );
  }

  return listaPedidos.length > 0 ? (
    <>
      <section className="container text-center my-5 sectionTop px-2 sectionOrdersUser">
        <h1 className="mb-3 text-white">Mis pedidos realizados</h1>
        <Link
          className="btn border border-1 mt-4 btn-warning border-dark rounded-5 px-5 py-3 fw-bold"
          to="/menu"
        >
          ir al Menú
        </Link>
        <article className="mt-4 d-flex w-100 flex-column gap-4 justify-content-center align-items-center containerOrdersUser">
          {listaPedidos.map((pedido) => (
            <CardPedido key={pedido._id} pedido={pedido} />
          ))}
        </article>
      </section>
    </>
  ) : (
    <section className="text-center d-flex flex-column justify-content-center h-100 align-items-center text-white py-5 sectionTop px-2 sectionOrdersUser">
      <h1 className="py-5">Mis pedidos realizados</h1>
      <p>No tienes pedidos realizados hasta el momento.</p>
      <Link
        className="btn border border-1 btn-warning border-dark px-5 py-3 rounded-5 fw-bold"
        to="/menu"
      >
        ir al Menú
      </Link>
    </section>
  );
};

export default MisPedidos;
