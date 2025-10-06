import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ScrollTop from "./common/ScrollTop";
import "./global.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop></ScrollTop>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
};

export default App;
