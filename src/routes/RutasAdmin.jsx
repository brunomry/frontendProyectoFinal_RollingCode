import { Routes, Route } from 'react-router';
import Administracion from '../domains/admin/Administracion';
import ListaUsuarios from '../domains/admin/components/ListaUsuarios';
import ListaPedidos from '../domains/admin/components/ListaPedidos';
import ListaProductos from '../domains/admin/components/ListaProductos';
import FormularioProducto from '../domains/admin/components/FormularioProducto';
import FormularioUsuario from '../domains/admin/components/FormularioUsuario';
import { validarSuperAdmin } from '../helpers/queries/usuarios.queries';
import { obtenerUsuario } from '../helpers/sesion/sesion.functions';

const RutasAdmin = () => {
  const usuarioLogeado = obtenerUsuario();
  const superAdmin = validarSuperAdmin(usuarioLogeado._id);

  return (
    <>
      <Routes>
        <Route path='/' element={<Administracion></Administracion>}></Route>
        <Route
          path='/usuarios'
          element={<ListaUsuarios superAdmin={superAdmin}></ListaUsuarios>}
        ></Route>
        <Route
          path='/usuarios/crearUsuario'
          element={
            <FormularioUsuario superAdmin={superAdmin}></FormularioUsuario>
          }
        ></Route>
        <Route path='/pedidos' element={<ListaPedidos></ListaPedidos>}></Route>
        <Route
          path='/productos'
          element={<ListaProductos></ListaProductos>}
        ></Route>
        <Route
          path='/productos/crearProducto'
          element={
            <FormularioProducto
              editar={false}
              titulo='Nuevo producto'
              ocultar={false}
              deshabilitado={false}
              boton='Cancelar'
            />
          }
        ></Route>
        <Route
          path='/productos/editarProducto/:id'
          element={
            <FormularioProducto
              editar={true}
              deshabilitado={false}
              boton='Cancelar'
              ocultar={false}
              titulo='Editar producto'
            />
          }
        ></Route>
        <Route
          path='/productos/verProducto/:id'
          element={
            <FormularioProducto
              editar={true}
              deshabilitado={true}
              ocultar={true}
              verDetalle={true}
              boton='Volver'
              titulo='Detalle del producto'
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
