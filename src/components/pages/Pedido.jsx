import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pedido = () => {
  return (
    <div className='container'>
      <Breadcrumb className='pt-4 pt-md-5 pb-2'>
        <BreadcrumbItem as={Link} to="/">Inicio</BreadcrumbItem>
        <BreadcrumbItem as={Link} to="/menu">Menu</BreadcrumbItem>
        <BreadcrumbItem as={Link} className="text-secondary" to="/pedido">Mi pedido</BreadcrumbItem>
      </Breadcrumb>
      <div className='py-2 pb-md-4'>
        <h1 className='orderTitle fw-bold'>- Mi pedido -</h1>
      </div>
      <ListaProductosUsuario />
      <ResumenPedido />
    </div>
  );
};

export default Pedido;
