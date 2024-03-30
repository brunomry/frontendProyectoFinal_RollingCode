import Administracion from "./components/pages/Administracion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaUsuarios from "./components/pages/user/ListaUsuarios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaPedidos from "./components/pages/order/ListaPedidos";
import ListaProductos from "./components/pages/product/ListaProductos.jsx";
import FormularioProducto from "./components/pages/product/FormularioProducto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/administrador" element={<Administracion></Administracion>}></Route>
          <Route path="/administrador/usuarios" element={<ListaUsuarios></ListaUsuarios>}></Route>
          <Route path="/administrador/pedidos" element={<ListaPedidos></ListaPedidos>}></Route>
          <Route path="/administrador/productos" element={<ListaProductos></ListaProductos>}></Route>
          <Route path="/administrador/productos/crearProducto" element={<FormularioProducto />}></Route>
          <Route path="/administrador/productos/editarProducto/id" element={<FormularioProducto />}></Route>
          <Route path="/administrador/productos/verProducto/id" element={<FormularioProducto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
