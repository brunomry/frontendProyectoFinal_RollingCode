import ListaProductosUsuario from '../components/ListaProductosUsuario';
import ResumenPedido from '../components/ResumenPedido';
import '../styles/pedido.css';
import { Link } from 'react-router-dom';
import Load from '../../../components/common/spinner/Load';

const Pedido = ({
  usuarioLogeado,
  carrito,
  productosCarrito,
  agregarCantidadProducto,
  quitarCantidadProducto,
  quitarProductoCarrito,
  montoCarrito,
  setCarrito
}) => {
  if (!productosCarrito) {
    return <Load />;
  }

  if (carrito.length == 0) {
    return (
      <div className='bannerPedido d-flex flex-column justify-content-center'>
        <div className='bannerPedidoContent'>
          <h2 className='text-white text-center '>
            Aún no agregaste productos a Tu Pedido.
          </h2>
          ;
          <div className='text-center pb-5'>
            <Link to='/pedido/misPedidos' className='border-dark btn rounded-5 px-5 fw-bold btn-warning py-3'>
              Ir al Menú
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='py-5 container text-center text-white sectionTop'>
      <div className='pt-lg-5 pb-2 pb-md-4'>
          <h1 className=' text-center'>Mi pedido</h1>
        </div>
      <div className='row justify-content-center gy-2 pb-5'>
        
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
