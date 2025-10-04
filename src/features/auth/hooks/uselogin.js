import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/actions/authActions";

export const useLogin = () => {
  const dispatch = useDispatch();
  const { status, isAuth, user } = useSelector((state) => state.auth);

  const handleLogin = async (userLogged) => {
    try {
      const result = await dispatch(loginUser(userLogged)).unwrap();      
      return result;
    } catch (error) {
      throw error;
    }
  };

  return { handleLogin, status, isAuth, user };
};
