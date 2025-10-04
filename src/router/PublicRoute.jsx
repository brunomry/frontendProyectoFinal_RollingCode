import { useSelector } from 'react-redux';
import { getRedirectPath } from '../utils/navigation';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const { isAuth, user } = useSelector((state) => state.auth);

  if (isAuth) return <Navigate to={getRedirectPath(user.rol)}></Navigate>;

  return children;
}

export default PublicRoute;