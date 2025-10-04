import { Route, Routes } from "react-router-dom";
import Menu from "@/features/products/pages/Menu";
import Home from "@/pages/home/Home";
import AboutUs from "@/pages/us/AboutUs";
import Team from "@/pages/team/Team";
import Error404 from "@/pages/error404/Error404";
import MenuNavegacion from "@/common/navbar/MenuNavegacion";
import Footer from "@/common/footer/Footer";
import MyOrder from "../features/orders/pages/MyOrder";

const GuestUserRouter = () => {
  return (
    <>
      <MenuNavegacion></MenuNavegacion>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/mi-pedido" element={<MyOrder></MyOrder>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default GuestUserRouter;
