
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';


export const ProtectedRoute = () => {
    const { token } = useContext(UserContext);

    return token ? <Outlet /> : <Navigate to={'/'} replace />;
};
