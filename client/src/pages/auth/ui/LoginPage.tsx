import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../api/api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = data;
      const res = await instance.post(`/auth/login`, {
        email,
        password,
      });

      localStorage.setItem(
        'userData',
        JSON.stringify({
          token: res.data.token,
          user: { email: res.data.email, name: res.data.name },
        }),
      );
      navigate('/');
    } catch (err) {
      return err.message;
    }
  };

  return (
    <div className="max-w-full w-full">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          htmlFor="email"
          className="text-black-200 mb-1 font-semibold text-sm"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter your email"
          className="border-2 border-gray-200 mb-6 rounded-lg p-2"
        />
        <label htmlFor="password" className="mb-1 font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          id="password"
          className="border-2 border-gray-200 mb-6 rounded-lg p-2"
        />
        <p className="mb-5 font-bold cursor-pointer">Forgot password</p>
        <button
          type="submit"
          className="mb-2 rounded-lg bg-black p-2 text-white cursor-pointer"
        >
          Login
        </button>
        <button
          type="submit"
          className="mb-4 rounded-lg bg-white p-2 text-black cursor-pointer border-gray-200 border-2 font-medium"
        >
          Sing up with Google
        </button>{' '}
        <p className="text-gray-500 font-sm">
          Do not have an account yet ?
          <a className="text-black font-medium3r" href="/register">
            Sing up for free
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
