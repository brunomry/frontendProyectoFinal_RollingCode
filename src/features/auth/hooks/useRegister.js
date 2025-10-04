import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/actions/registerActions";

export const useRegister = () => {
    const dispatch = useDispatch();
    const { status, isAuth, user} = useSelector((state) => state.register);

    const handleRegister = async (usuario) => {
        try {
            const result = await dispatch(registerUser(usuario)).unwrap();
            return result;
        } catch (error) {
            throw error;
        }
    }

    return { handleRegister, status, isAuth, user};
}