import { Route, Routes } from "react-router-dom";
import Menu from "../domains/products/Menu";
import Home from "../pages/home/Home";
import AboutUs from "../pages/us/AboutUs";
import Team from "../pages/team/Team";
import Error404 from "../pages/error404/Error404";

const ClientRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/menu" element={<Menu></Menu>}></Route>
      <Route path="/us" element={<AboutUs></AboutUs>}></Route>
      <Route path="/team" element={<Team></Team>}></Route>
      <Route path="/*" element={<Error404></Error404>}></Route>

    </Routes>
  );
};

export default ClientRouter;
