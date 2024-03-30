import Administracion from "./components/pages/Administracion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaUsuarios from "./components/pages/user/ListaUsuarios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/administrador" element={<Administracion></Administracion>}></Route>
          <Route path="/administrador/usuarios" element={<ListaUsuarios></ListaUsuarios>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
