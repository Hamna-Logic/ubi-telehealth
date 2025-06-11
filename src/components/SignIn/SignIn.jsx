import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ theme = 'light' }) => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const [registeredUsers, setRegisteredUsers] = useState([
    { email: 'test@example.com', password: 'password123', name: 'Test User', dob: '1990-01-01' }
  ]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleSignupPasswordVisibility = () => setShowSignupPassword((prev) => !prev);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', dob: '', password: '' });

  const [loginErrors, setLoginErrors] = useState({ email: '', password: '' });
  const [signupErrors, setSignupErrors] = useState({ name: '', email: '', dob: '', password: '' });

  const showNotification = (message, type = 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 5000);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setLoginErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
    setSignupErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(loginForm.email)) {
      setLoginErrors((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      return;
    }
    
    if (!validatePassword(loginForm.password)) {
      setLoginErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }));
      return;
    }
    
    const userExists = registeredUsers.some(user => user.email === loginForm.email);
    if (!userExists) {
      showNotification('This email is not registered. Please sign up first.');
      return;
    }
    
    const user = registeredUsers.find(user => user.email === loginForm.email);
    if (user.password !== loginForm.password) {
      showNotification('Incorrect password. Please try again.');
      return;
    }
    
    showNotification('Login successful! Redirecting...', 'success');
    setTimeout(() => navigate('/'), 1500);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors = { name: '', email: '', dob: '', password: '' };
    
    if (!signupForm.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!validateEmail(signupForm.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!signupForm.dob) {
      newErrors.dob = 'Date of birth is required';
      isValid = false;
    }
    
    if (!validatePassword(signupForm.password)) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }
    
    setSignupErrors(newErrors);
    if (!isValid) return;
    
    const userExists = registeredUsers.some(user => user.email === signupForm.email);
    if (userExists) {
      showNotification('This email is already registered. Please login instead.');
      return;
    }
    
    setRegisteredUsers([...registeredUsers, signupForm]);
    
    showNotification('Account created successfully! Redirecting...', 'success');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-12 transition-colors duration-300 font-sans ${
        theme === 'dark' ? 'bg-darkBg text-darkText' : 'bg-lightBg text-lightText'
      }`}
    >
      {notification.show && (
        <div
          role="alert"
          aria-live="assertive"
          className={`fixed top-6 right-6 z-50 rounded-lg px-6 py-3 shadow-lg ${
            notification.type === 'error' ? 'bg-red-600 text-white' : 'bg-primary text-white'
          }`}
        >
          {notification.message}
        </div>
      )}

      <div
        className={`max-w-md w-full rounded-3xl shadow-lg transition-colors duration-300 p-10 ${
          theme === 'dark' ? 'bg-darkBg shadow-gray-700/70' : 'bg-white shadow-gray-300'
        }`}
      >
        {/* Login Form */}
        <section className={activeForm === 'login' ? 'block' : 'hidden'}>
          <h2
            className={`text-4xl font-extrabold mb-8 text-center tracking-tight leading-tight ${
              theme === 'dark' ? 'text-secondary' : 'text-primary'
            }`}
          >
            Welcome back
          </h2>
          <form onSubmit={handleLoginSubmit} noValidate>
            <label
              htmlFor="login-email"
              className={`block mb-2 text-sm font-semibold ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Email address
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={loginForm.email}
              onChange={handleLoginChange}
              placeholder="you@example.com"
              required
              autoComplete="email"
              aria-invalid={!!loginErrors.email}
              aria-describedby={loginErrors.email ? 'login-email-error' : undefined}
              className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                  : 'bg-white border-gray-300 placeholder-gray-400 text-gray-900 focus:ring-primary'
              }`}
            />
            {loginErrors.email && (
              <p id="login-email-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {loginErrors.email}
              </p>
            )}

            <label
              htmlFor="login-password"
              className={`block mt-6 mb-2 text-sm font-semibold ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="login-password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                aria-invalid={!!loginErrors.password}
                aria-describedby={loginErrors.password ? 'login-password-error' : undefined}
                className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                    : 'bg-white border-gray-300 placeholder-gray-400 text-gray-900 focus:ring-primary'
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className={`absolute right-4 top-3 text-xl select-none focus:outline-none ${
                  theme === 'dark' ? 'text-gray-400 hover:text-secondary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {loginErrors.password && (
              <p id="login-password-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {loginErrors.password}
              </p>
            )}

            <button
              type="submit"
              className={`w-full mt-8 rounded-2xl py-3 font-extrabold tracking-wide text-white transition-all duration-300 shadow-md ${
                theme === 'dark'
                  ? 'bg-secondary hover:bg-secondary/90 shadow-secondary/40'
                  : 'bg-primary hover:bg-primary/90 shadow-primary/50'
              }`}
            >
              Sign in
            </button>
          </form>

          <p
            onClick={() => setActiveForm('signup')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveForm('signup');
            }}
            className={`mt-8 text-center text-sm font-semibold select-none cursor-pointer ${
              theme === 'dark' ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/90'
            }`}
          >
            Don&apos;t have an account? <span className="underline">Sign up</span>
          </p>
        </section>

        {/* Signup Form */}
        <section className={activeForm === 'signup' ? 'block' : 'hidden'}>
          <h2
            className={`text-4xl font-extrabold mb-8 text-center tracking-tight leading-tight ${
              theme === 'dark' ? 'text-secondary' : 'text-primary'
            }`}
          >
            Create your account
          </h2>
          <form onSubmit={handleSignupSubmit} noValidate>
            <label
              htmlFor="signup-name"
              className={`block mb-2 text-sm font-semibold ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Full name
            </label>
            <input
              type="text"
              id="signup-name"
              name="name"
              value={signupForm.name}
              onChange={handleSignupChange}
              placeholder="Your full name"
              required
              aria-invalid={!!signupErrors.name}
              aria-describedby={signupErrors.name ? 'signup-name-error' : undefined}
              className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                  : 'bg-white border-gray-300 placeholder-gray-400 text-gray-900 focus:ring-primary'
              }`}
            />
            {signupErrors.name && (
              <p id="signup-name-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {signupErrors.name}
              </p>
            )}

            <label
              htmlFor="signup-email"
              className={`block mt-6 mb-2 text-sm font-semibold ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Email address
            </label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={signupForm.email}
              onChange={handleSignupChange}
              placeholder="you@example.com"
              required
              aria-invalid={!!signupErrors.email}
              aria-describedby={signupErrors.email ? 'signup-email-error' : undefined}
              className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                  : 'bg-white border-gray-300 placeholder-gray-400 text-gray-900 focus:ring-primary'
              }`}
            />
            {signupErrors.email && (
              <p id="signup-email-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {signupErrors.email}
              </p>
            )}

            <label
              htmlFor="signup-dob"
              className={`block mt-6 mb-2 text-sm font-semibold ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Date of birth
            </label>
            <input
              type="date"
              id="signup-dob"
              name="dob"
              value={signupForm.dob}
              onChange={handleSignupChange}
              required
              aria-invalid={!!signupErrors.dob}
              aria-describedby={signupErrors.dob ? 'signup-dob-error' : undefined}
              className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                  : 'bg-white border-gray-300 text-gray-900 focus:ring-primary'
              }`}
            />
            {signupErrors.dob && (
              <p id="signup-dob-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {signupErrors.dob}
              </p>
            )}

            <label
              htmlFor="signup-password"
              className={`block mt-6 mb-2 text-sm font-semibold relative ${
                theme === 'dark' ? 'text-darkText' : 'text-lightText'
              }`}
            >
              Password (min 8 characters)
            </label>
            <div className="relative">
              <input
                type={showSignupPassword ? 'text' : 'password'}
                id="signup-password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                placeholder="Create a password"
                required
                aria-invalid={!!signupErrors.password}
                aria-describedby={signupErrors.password ? 'signup-password-error' : undefined}
                className={`w-full px-4 py-3 rounded-2xl border shadow-sm focus:ring-2 focus:ring-secondary outline-none transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-secondary/70'
                    : 'bg-white border-gray-300 placeholder-gray-400 text-gray-900 focus:ring-primary'
                }`}
              />
              <button
                type="button"
                onClick={toggleSignupPasswordVisibility}
                aria-label={showSignupPassword ? 'Hide password' : 'Show password'}
                className={`absolute right-4 top-3 text-xl select-none focus:outline-none ${
                  theme === 'dark' ? 'text-gray-400 hover:text-secondary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {showSignupPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {signupErrors.password && (
              <p id="signup-password-error" className="mt-1 text-xs text-red-500 font-medium select-none">
                {signupErrors.password}
              </p>
            )}

            <button
              type="submit"
              className={`w-full mt-8 rounded-2xl py-3 font-extrabold tracking-wide text-white transition-all duration-300 shadow-md ${
                theme === 'dark'
                  ? 'bg-secondary hover:bg-secondary/90 shadow-secondary/40'
                  : 'bg-primary hover:bg-primary/90 shadow-primary/50'
              }`}
            >
              Sign up
            </button>
          </form>

          <p
            onClick={() => setActiveForm('login')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveForm('login');
            }}
            className={`mt-8 text-center text-sm font-semibold select-none cursor-pointer ${
              theme === 'dark' ? 'text-secondary hover:text-secondary/90' : 'text-primary hover:text-primary/90'
            }`}
          >
            Already have an account? <span className="underline">Sign in</span>
          </p>
        </section>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default AuthForm;