import MenuNavegacion from "./components/common/MenuNavegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          <Route exact path="/" element="#"></Route>
          <Route exact path="/menu" element="#"></Route>
          <Route exact path="/administracion" element="#"></Route>
          <Route exact path="/login" element="#"></Route>
          <Route exact path="/registro" element="#"></Route>
          <Route exact path="/pedido" element="#"></Route>
          <Route exact path="/nosotros" element="#"></Route>
          <Route exact path="/login" element="#"></Route>
          <Route exact path="/detalleProducto/:id" element="#"></Route>
          <Route path="*" element="error 404"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
