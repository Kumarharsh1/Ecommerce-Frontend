import { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ onSwitchToSignup, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="auth-container">
      <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
          required
        />
        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
          Login
        </button>
      </form>
      <p className="text-center mt-6">
        Don't have an account?{' '}
        <span onClick={onSwitchToSignup} className="text-primary cursor-pointer hover:underline">
          Sign up
        </span>
      </p>
    </motion.div>
  );
};