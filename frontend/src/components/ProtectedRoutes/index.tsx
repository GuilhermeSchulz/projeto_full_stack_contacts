
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';


export const ProtectedRoute = () => {
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to={'/'} replace />;
};
