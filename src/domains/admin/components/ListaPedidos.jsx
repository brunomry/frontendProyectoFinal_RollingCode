import { Table } from 'react-bootstrap';
import '../styles/administrador.css';
import ItemPedido from './ItemPedido';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { leerPedidosAPI, leerUsuariosAPI } from '../../../helpers/queries';
import Load from "../../../components/common/spinner/Load.jsx";

const ListaPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState(null);
  const [listaUsuarios, setListaUsuarios] = useState(null);

  const listarPedidos = async () => {
    const respuesta = await leerPedidosAPI();
    setListaPedidos(respuesta.reverse());
  };

  const traerUsuarios = async () => {
    const respuestaUsuarios = await leerUsuariosAPI();
    setListaUsuarios(respuestaUsuarios);
  };

  useEffect(() => {
    listarPedidos();
    traerUsuarios();
  }, []);

  if (!listaPedidos || !listaUsuarios) {
    return <Load />;
  }

  return (
    <section className='mainSection py-5 sectionTop'>
      <div className='ps-2 ps-md-5 mb-5'>
        <Link
          className='btn btn-dark text-decoration-none text-white border px-3 py-2 rounded-2'
          to='/administrador'
        >
          <i className='fa-solid fa-arrow-left'></i> Atrás
        </Link>
      </div>
      <div className='container d-flex justify-content-between align-items-center flex-wrap gap-2'>
        <h1 className='titleColor'>Gestión de Pedidos</h1>
      </div>
      <hr className='container' />
      <Table
        responsive
        hover
        className='container text-center mx-2 mx-sm-auto mt-3 mt-sm-5'
      >
        <thead>
          <tr className='text-center'>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Productos</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {listaPedidos.map((pedido) => (
            <ItemPedido
              key={pedido._id}
              listaUsuarios={listaUsuarios}
              pedido={pedido}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ListaPedidos;
