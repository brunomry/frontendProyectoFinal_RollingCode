
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Administracion from "./components/pages/Administracion";
import Menu from "./components/pages/Menu";
import ListaUsuarios from "./components/pages/user/ListaUsuarios";
import ListaPedidos from "./components/pages/order/ListaPedidos";
import ListaProductos from "./components/pages/product/ListaProductos";
import ModalDetalleProducto from "./components/pages/product/ModalDetalleProducto";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Nosotros from './components/pages/Nosotros';
import MenuNavegacion from "./components/common/MenuNavegacion";
import Pedido from './components/pages/Pedido';
import Error404 from "./components/pages/Error404";
import Registro from "./components/pages/Registro";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
       <BrowserRouter>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/administrador" element={<Administracion></Administracion>}></Route>
          <Route path="/administrador/usuarios" element={<ListaUsuarios></ListaUsuarios>}></Route>
          <Route path="/administrador/pedidos" element={<ListaPedidos></ListaPedidos>}></Route>
          <Route path="/administrador/productos" element={<ListaProductos></ListaProductos>}></Route>
          <Route path="/administrador/productos/crearProducto" element={<FormularioProducto />}></Route>
          <Route path="/administrador/productos/editarProducto/id" element={<FormularioProducto />}></Route>
          <Route path="/administrador/productos/verProducto/id" element={<FormularioProducto />}></Route> */}
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/miPedido" element={<Pedido></Pedido>}></Route>
          <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route exact path="/detalleProducto/:id" element={<ModalDetalleProducto></ModalDetalleProducto>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
