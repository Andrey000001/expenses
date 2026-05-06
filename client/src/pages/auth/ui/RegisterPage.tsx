import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../api/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    repeat_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    console.log('submit');

    e.preventDefault();
    try {
      const { name, email, password, repeat_password } = data;
      if (repeat_password !== password) {
        return;
      }

      await instance.post(`/auth/register`, {
        name,
        email,
        password,
      });
      navigate('/login');
    } catch (err) {
      return err.message;
    }
  };
  return (
    <div className="max-w-full w-full">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-black-200 mb-1 font-semibold text-sm">
          Full Name
        </label>
        <input
          value={data.name}
          onChange={handleChange}
          type="text"
          name="name"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <label className="text-black-200 mb-1 font-semibold text-sm">
          Email
        </label>
        <input
          value={data.email}
          onChange={handleChange}
          type="email"
          name="email"
          className="border-2 border-gray-200 rounded-lg p-2"
        />
        <label className="text-black-200 mb-1 font-semibold text-sm">
          Create Password
        </label>
        <input
          value={data.password}
          onChange={handleChange}
          type="password"
          name="password"
          className="border-2 border-gray-200 rounded-lg p-2 "
        />
        <label className="text-black-200 mb-1 font-semibold text-sm">
          Repeat Password
        </label>
        <input
          value={data.repeat_password}
          onChange={handleChange}
          type="password"
          name="repeat_password"
          className="border-2 mb-5 border-gray-200 rounded-lg p-2"
        />
        <button
          type="submit"
          className="mb-2 rounded-lg bg-black p-2 text-white cursor-pointer"
        >
          Register
        </button>
        <p className="text-gray-500 font-sm">
          Do have an account already?
          <a className="text-black font-medium3r" href="/login">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
