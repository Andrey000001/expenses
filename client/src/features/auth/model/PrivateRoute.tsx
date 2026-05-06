import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userData = localStorage.getItem('userData');
  if (!userData) return <Navigate to="/login" />;

  const { token } = JSON.parse(userData);
  if (!token) return null;

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
