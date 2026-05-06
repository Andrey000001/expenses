import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
  return (
    <div className="text-left flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-[42px] font-bold mb-3 mr-auto ">Welcome back</h2>
      <p className="text-gray-500 mb-3 font-medium">
        Welcome back! Please enter your details
      </p>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
