import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
