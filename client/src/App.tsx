import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/dashboard/ui/DashboardPage';
import AuthLayout from './features/auth/ui/AuthLayout';
import PrivateRoute from './features/auth/model/PrivateRoute';
import MainLoyaut from './app/layouts/MainLayout';
import NotFoundPage from './pages/not-found/ui/NotFoundPage';
import LoginPage from './pages/auth/ui/LoginPage';
import RegisterPage from './pages/auth/ui/RegisterPage';
import CategoryPage from './pages/category/ui/CategoryPage';
import ExpensesPage from './pages/expenses/ui/ExpensesPage';

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <MainLoyaut />,
        children: [
          {
            path: '/',
            element: <DashboardPage />,
          },
          {
            path: '/category',
            element: <CategoryPage />,
          },
          {
            path: '/expenses',
            element: <ExpensesPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
