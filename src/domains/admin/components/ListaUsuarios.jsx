import { Table } from 'react-bootstrap';
import '../styles/administrador.css';
import ItemUsuario from './ItemUsuario';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { leerUsuariosAPI } from '../../../helpers/queries/usuarios.queries';
import Load from "../../../common/spinner/Load";

const ListaUsuarios = ({ superAdmin }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerUsuariosAPI();
      setUsuarios(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  if (usuarios.length === 0) {
    return <Load />;
  }

  return (
    <section className='mainSection pt-3 pb-5 sectionTop'>
      <div className='ps-2 ps-md-5 mb-5'>
        <Link
          className='btn btn-dark text-decoration-none text-white border px-3 py-2 rounded-2'
          to='/administrador'
        >
          <i className='fa-solid fa-arrow-left'></i> Atrás
        </Link>
      </div>
      <div className='container d-flex justify-content-between align-items-center flex-wrap gap-2'>
        <h1 className='titleColor'>Gestión de usuarios</h1>
        {superAdmin ? (
          <Link
            className='btnNewUser border border-1 border-white fw-bold p-2 rounded-2 text-decoration-none'
            title='Nuevo usuario'
            to='/administrador/usuarios/crearUsuario'
            disabled
          >
            <i className='fa-solid fa-plus'></i> Nuevo usuario
          </Link>
        ) : (
          <Link
            className='btnNewUser border border-1 border-white fw-bold p-2 rounded-2 text-decoration-none'
            title='Volver al inicio'
            to='/'
          >
            <i className='fa-solid fa-house'></i> Volver al inicio
          </Link>
        )}
      </div>
      <hr className='container' />
      <Table
        responsive
        hover
        className='container text-center mx-2 mx-sm-auto mt-3 mt-sm-5'
      >
        <thead>
          <tr className='text-center'>
            <th>Perfil</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <ItemUsuario usuario={usuario} key={usuario._id}></ItemUsuario>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ListaUsuarios;
