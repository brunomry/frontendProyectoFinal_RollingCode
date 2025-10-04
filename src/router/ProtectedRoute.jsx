import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, rol }) => {
  const { isAuth, user } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to={"/auth/login"}></Navigate>;
  }

  if (user.rol !== rol) {
    return <Navigate to={"/"}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
