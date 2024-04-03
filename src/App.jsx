import Nosotros from './components/pages/Nosotros';
import MenuNavegacion from "./components/common/MenuNavegacion";
import Pedido from './components/pages/Pedido';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/menu" element={<Menu></Menu>}></Route>
          <Route exact path="/administracion" element={<Administracion></Administracion>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/miPedido" element={<Pedido></Pedido>}></Route>
          <Route exact path="/nosotros" element={<Nosotros><s/Nosotros>}></Route>
          <Route exact path="/detalleProducto/:id" element={<ModalDetalleProducto></ModalDetalleProducto>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </BrowserRouter>
    </>
                                                            
export default App;
