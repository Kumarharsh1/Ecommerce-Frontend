import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (formData.name && formData.email && formData.password) {
        const userData = {
          name: formData.name,
          email: formData.email,
          token: 'mock-jwt-token-' + Date.now()
        };
        
        onSignup(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="centered-page bg-register">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="centered-container"
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold mb-6">Create Account</h1>
          <p className="text-2xl text-gray-600">Join KH Store today</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="big-auth-form"
        >
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl text-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="big-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="big-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="big-input"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                disabled={isLoading}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="big-input"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                disabled={isLoading}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full text-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </motion.button>
          </form>

          <p className="text-lg mt-8">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign In
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;