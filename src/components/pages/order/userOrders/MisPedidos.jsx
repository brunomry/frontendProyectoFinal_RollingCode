import CardPedido from './CardPedido';
import '../../../../styles/cardPedido.css';
import { useEffect, useState } from 'react';
import { leerPedidosAPI } from '../../../../helpers/queries';
import Load from '../../../common/Load';

const MisPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState([]);

  const listarPedidos = async () => {
    const idUsuario = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
    const respuesta = await leerPedidosAPI();
    const pedidosFiltrados = respuesta.filter(
      (pedido) => pedido.usuario === idUsuario.id
    );
    setListaPedidos(pedidosFiltrados);
  };

  useEffect(() => {
    listarPedidos();
  }, []);

  if (listaPedidos.length == 0) {
    return <Load />;
  }

  console.log(listaPedidos);

  return (
    <section className='text-center my-5 sectionTop px-2 sectionOrdersUser'>
      <h1 className='mb-5'>Mis pedidos realizados</h1>
      <article className='d-flex flex-column gap-4 justify-content-center align-items-center containerOrdersUser'>
        {listaPedidos.map((pedidos) => (
          <CardPedido key={pedidos._id} />
        ))}
      </article>
    </section>
  );
};

export default MisPedidos;
