import { useState } from 'react';
import { motion } from 'framer-motion';

const Signup = ({ onSwitchToLogin, onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      onSignup(formData);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="auth-container">
      <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none"
          required
        />
        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
          Sign Up
        </button>
      </form>
      <p className="text-center mt-6">
        Already have an account?{' '}
        <span onClick={onSwitchToLogin} className="text-primary cursor-pointer hover:underline">
          Login
        </span>
      </p>
    </motion.div>
  );
};