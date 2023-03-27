import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoutes';
import { Dashboard } from '../pages/dashboard';
import { Homepage } from '../pages/homepage';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard/' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
""