import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Inicio from './components/pages/Inicio';
import Administracion from './components/pages/Administracion';
import Menu from './components/pages/Menu';
import ListaUsuarios from './components/pages/user/ListaUsuarios';
import ListaPedidos from './components/pages/order/ListaPedidos';
import ListaProductos from './components/pages/product/ListaProductos';
import FormularioProducto from './components/pages/product/FormularioProducto';
import Nosotros from './components/pages/Nosotros';
import MenuNavegacion from './components/common/MenuNavegacion';
import Pedido from './components/pages/Pedido';
import Error404 from './components/pages/Error404';
import Registro from './components/pages/Registro';
import Footer from './components/common/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState(
    JSON.parse(sessionStorage.getItem('carrito')) || []
  );
  const [montoCarrito, setMontoCarrito] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const calcularMonto = () => {
    let carritoAux = [...carrito];
    let montoAux = 0;
    for (let i = 0; i < carritoAux.length; i++) {
      montoAux += carritoAux[i].cantidad * carritoAux[i].producto.precio;
    }
    setMontoCarrito(montoAux);
  };

  const agregarCantidadProducto = (idProductoCarrito) => {
    let carritoAux = [...carrito];
    const indexProductoCarrito = carritoAux.findIndex(
      (productoCarrito) => productoCarrito.id == idProductoCarrito
    );
    if (carritoAux[indexProductoCarrito].cantidad < 10) {
      carritoAux[indexProductoCarrito].cantidad++;
      setCarrito(carritoAux);
    }
  };
  const quitarCantidadProducto = (idProductoCarrito) => {
    let carritoAux = [...carrito];
    const indexProductoCarrito = carritoAux.findIndex(
      (productoCarrito) => productoCarrito.id == idProductoCarrito
    );
    if (carritoAux[indexProductoCarrito].cantidad > 1) {
      carritoAux[indexProductoCarrito].cantidad--;
      setCarrito(carritoAux);
    }
  };
  const quitarProductoCarrito = (idProductoCarrito) => {
    let carritoAux = [...carrito].filter(
      (productoCarrito) => productoCarrito.id != idProductoCarrito
    );

    setCarrito(carritoAux);
  };
  const agregarProductoCarrito = (producto, cantidad) => {
    let carritoAux = [...carrito];

    let productoRepetido = carritoAux.find(
      (productos) => productos.producto._id == producto._id
    );
    if (!productoRepetido) {
      const productoCarrito = {
        id: crypto.randomUUID(),
        producto: producto,
        cantidad: cantidad,
      };
      carritoAux.push(productoCarrito);
      setCarrito(carritoAux);
    }
  };

  useEffect(() => {
    console.log('Monto:', montoCarrito);
  }, [montoCarrito]);

  useEffect(() => {
    console.log(carrito);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    calcularMonto();
  }, [carrito]);

  return (
    <>
      <BrowserRouter>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route
            path='/menu'
            element={
              <Menu agregarProductoCarrito={agregarProductoCarrito}></Menu>
            }
          ></Route>
          <Route
            path='/administrador'
            element={<Administracion></Administracion>}
          ></Route>
          <Route
            path='/administrador/usuarios'
            element={<ListaUsuarios></ListaUsuarios>}
          ></Route>
          <Route
            path='/administrador/pedidos'
            element={<ListaPedidos></ListaPedidos>}
          ></Route>
          <Route
            path='/administrador/productos'
            element={<ListaProductos></ListaProductos>}
          ></Route>
          <Route
            path='/administrador/productos/crearProducto'
            element={<FormularioProducto editar={false} />}
          ></Route>
          <Route
            path='/administrador/productos/editarProducto/:id'
            element={<FormularioProducto editar={true} />}
          ></Route>
          <Route
            path='/administrador/productos/verProducto/:id'
            element={<FormularioProducto />}
          ></Route>
          <Route exact path='/login' element={<Login></Login>}></Route>
          <Route exact path='/registro' element={<Registro></Registro>}></Route>
          <Route
            exact
            path='/miPedido'
            element={
              <Pedido
                carrito={carrito}
                agregarCantidadProducto={agregarCantidadProducto}
                quitarCantidadProducto={quitarCantidadProducto}
                quitarProductoCarrito={quitarProductoCarrito}
                montoCarrito={montoCarrito}
              ></Pedido>
            }
          ></Route>
          <Route exact path='/nosotros' element={<Nosotros></Nosotros>}></Route>
          <Route
            exact
            path='/detalleProducto/:id'
            element={<Menu></Menu>}
          ></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
