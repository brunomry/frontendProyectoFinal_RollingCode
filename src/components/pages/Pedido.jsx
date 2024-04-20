import ListaProductosUsuario from './order/user/ListaProductosUsuario';
import ResumenPedido from './order/user/ResumenPedido';
import '../../styles/pedido.css';
import { Link } from 'react-router-dom';
import Load from '../common/Load';

const Pedido = ({
  usuarioLogeado,
  carrito,
  productosCarrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
  montoCarrito,
  setCarrito,
}) => {
  if (!productosCarrito) {
    return <Load />;
  }

  if (carrito.length == 0) {
    return (
      <div className='bannerPedido d-flex flex-column justify-content-center'>
        <div className='bannerPedidoContent'>
          <h2 className='bannerTitlePedido titleColor text-center '>
            Tu pedido está vacío.
          </h2>
          ;
          <div className='text-center pb-5'>
            <Link to='/pedido/misPedidos' className='fw-bold btn btn-danger'>
              Ir a MIS PEDIDOS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='bannerPedido border-1 border-secondary border-top sectionTop'>
      <div className='container'>
        <div className='pt-5 pb-2 pb-md-4'>
          <h1 className='orderTitle fw-bold titleColor'>- Mi pedido -</h1>
        </div>
        <ListaProductosUsuario
          carrito={carrito}
          productosCarrito={productosCarrito}
          agregarCantidadProducto={agregarCantidadProducto}
          quitarCantidadProducto={quitarCantidadProducto}
          quitarProductoCarrito={quitarProductoCarrito}
        />
        <ResumenPedido
          usuarioLogeado={usuarioLogeado}
          carrito={carrito}
          productosCarrito={productosCarrito}
          montoCarrito={montoCarrito}
          setCarrito={setCarrito}
        />
      </div>
    </section>
  );
};

export default Pedido;
