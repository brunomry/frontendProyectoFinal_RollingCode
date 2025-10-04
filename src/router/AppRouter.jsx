import { Route, Routes } from "react-router-dom";
import AuthRouter from "@/features/auth/routes/AuthRouter";
import AdminRouter from "@/features/admin/routes/AdminRouter";
import GuestUserRouter from "./GuestUserRouter";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import UserRouter from "../features/users/routes/UserRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<GuestUserRouter></GuestUserRouter>}></Route>
      <Route
        path="/user/*"
        element={
          <ProtectedRoute rol="Usuario">
            <UserRouter></UserRouter>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute rol="Administrador">
            <AdminRouter></AdminRouter>
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthRouter></AuthRouter>
          </PublicRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AppRouter;
