import { Navigate, Outlet } from 'react-router-dom';
import { useAleans } from '../context/AleansContext';

export default function ProtectedRoute() {
  const { isAuthenticated } = useAleans();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
