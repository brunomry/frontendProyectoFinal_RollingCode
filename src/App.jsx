import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/pages/Menu";
import Nosotros from "./components/pages/Nosotros";
import MenuNavegacion from "./components/common/MenuNavegacion";
import Pedido from "./components/pages/Pedido";
import Error404 from "./components/pages/Error404";
import Registro from "./components/pages/Registro";
import Footer from "./components/common/Footer";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || {};
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    <>
       <BrowserRouter>
        <MenuNavegacion
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
        ></MenuNavegacion>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/menu" element={<Menu></Menu>}></Route>
          <Route
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/miPedido" element={<Pedido></Pedido>}></Route>
          <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route
            exact
            path="/detalleProducto/:id"
            element={<Menu></Menu>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;