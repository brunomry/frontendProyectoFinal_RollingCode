import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import { Routes, Route } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  );
};

export default AuthRouter;
