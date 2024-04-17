import CardPedido from "./CardPedido";
import "../../../../styles/cardPedido.css";

const MisPedidos = () => {
  return (
    <section className='text-center my-5 sectionTop px-2 sectionOrdersUser'>
      <h1 className="mb-5">Mis pedidos realizados</h1>
      <article className="d-flex flex-column gap-4 justify-content-center align-items-center containerOrdersUser">
        <CardPedido></CardPedido>
        <CardPedido></CardPedido>
        <CardPedido></CardPedido>
      </article>
    </section>
  );
};

export default MisPedidos;