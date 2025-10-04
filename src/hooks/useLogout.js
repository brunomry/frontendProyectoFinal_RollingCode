import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/slices/authSlice";

export const useLogout = () => {
  const dispatch = useDispatch();

  const closeSession = async () => await dispatch(logout());

  return { closeSession };
};
