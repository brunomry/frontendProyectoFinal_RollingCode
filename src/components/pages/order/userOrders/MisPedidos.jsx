import CardPedido from './CardPedido';
import '../../../../styles/cardPedido.css';
import { useEffect, useState } from 'react';
import { leerPedidosAPI } from '../../../../helpers/queries';
import Load from '../../../common/Load';
import { Link } from 'react-router-dom';

const MisPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState([]);

  const listarPedidos = async () => {
    const idUsuario = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
    const respuesta = await leerPedidosAPI();
    const pedidosDeUsuarios = respuesta.filter(
      (pedido) => pedido.usuario === idUsuario.id
    );
    const pedidosFiltrados = pedidosDeUsuarios.reverse();
    setListaPedidos(pedidosFiltrados);
  };

  useEffect(() => {
    listarPedidos();
  }, []);

  if (listaPedidos.length == 0) {
    return <h1 className='mt-5 text-center'>No tienes pedidos realizados</h1>;
  }

  return listaPedidos.length > 0 ? (
    <section className='text-center my-5 sectionTop px-2 sectionOrdersUser'>
      <h1 className='mb-3'>Mis pedidos realizados</h1>
      <Link
        className='btn border border-1 mt-4 btn-warning border-dark px-4 fw-bold'
        to='/menu'
      >
        Ir al MENÚ
      </Link>
      <article className='mt-4 d-flex flex-column gap-4 justify-content-center align-items-center containerOrdersUser'>
        {listaPedidos.map((pedido) => (
          <CardPedido key={pedido._id} pedido={pedido} />
        ))}
      </article>
    </section>
  ) : (
    <>
      <div
        className={`mt-5 pt-5 d-flex align-items-start justify-content-center custom-spinner ${
          !spinner ? 'd-none' : 'mb-5'
        } `}
      >
        {spinner && <Spinner animation='border' role='status'></Spinner>}
      </div>
      {!spinner && (
        <section className='text-center my-5 sectionTop px-2 sectionOrdersUser'>
          <h1 className='mb-5'>Mis pedidos realizados</h1>
          <p>No tienes pedidos realizados hasta el momento.</p>
          <Link
            className='btn border border-1 mt-4 btn-warning border-dark px-4 fw-bold'
            to='/menu'
          >
            Ir al MENÚ
          </Link>
        </section>
      )}
    </>
  );
};

export default MisPedidos;
