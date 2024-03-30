import Administracion from "./components/pages/Administracion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaUsuarios from "./components/pages/user/ListaUsuarios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaPedidos from "./components/pages/order/ListaPedidos";
import ListaProductos from "./components/pages/product/ListaProductos.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/administrador" element={<Administracion></Administracion>}></Route>
          <Route path="/administrador/usuarios" element={<ListaUsuarios></ListaUsuarios>}></Route>
          <Route path="/administrador/pedidos" element={<ListaPedidos></ListaPedidos>}></Route>
          <Route path="/administrador/productos" element={<ListaProductos></ListaProductos>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
