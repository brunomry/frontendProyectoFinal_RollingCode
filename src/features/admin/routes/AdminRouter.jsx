import { Routes, Route } from "react-router-dom";
import Sidebar from "@/common/sidebar/Sidebar";
import ProductsAdmin from "../pages/ProductsAdmin";
import OrdersAdmin from "../pages/OrdersAdmin";
import UsersAdmin from "../pages/UsersAdmin";
import ProductForm from "../pages/ProductForm";
import UserForm from "../pages/UserForm";

const AdminRouter = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<ProductsAdmin></ProductsAdmin>}></Route>
        <Route path="/pedidos" element={<OrdersAdmin></OrdersAdmin>}></Route>
        <Route path="/usuarios" element={<UsersAdmin></UsersAdmin>}></Route>
        <Route
          path="/productos/ver-menu/:id"
          element={<ProductForm title="Información de Menú" show={true} update={false} hidden={true} disabled={true}></ProductForm>}
        ></Route>
        <Route
          path="/productos/editar-menu/:id"
          element={<ProductForm title="Editar Menú" show={true} update={true} hidden={false} disabled={false}></ProductForm>}
        ></Route>
        <Route
          path="/productos/formulario-producto"
          element={<ProductForm title="Nuevo Menú" show={false} update={false} hidden={false} disabled={false}></ProductForm>}
        ></Route>
        <Route
          path="/usuarios/formulario-usuario"
          element={<UserForm></UserForm>}
        ></Route>
      </Routes>
    </>
  );
};

export default AdminRouter;
