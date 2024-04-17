import CardPedido from "./CardPedido";


const MisPedidos = () => {
  return (
    <section className='text-center my-5 sectionTop'>
      <h1 className="mb-5">Mis pedidos realizados</h1>
      <article className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <CardPedido></CardPedido>
        <CardPedido></CardPedido>
        <CardPedido></CardPedido>
      </article>
    </section>
  );
};

export default MisPedidos;