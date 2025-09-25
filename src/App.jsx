import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import MenuNavegacion from "./common/MenuNavegacion";
import Footer from "./common/Footer";
import ScrollTop from "./common/ScrollTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop></ScrollTop>
      <MenuNavegacion></MenuNavegacion>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
