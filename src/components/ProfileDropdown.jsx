import { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaCog, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const dropdownRef = useRef(null);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = () => {
    setShowLoginModal(true);
    setIsOpen(false);
  };

  const handleRegister = () => {
    setShowRegisterModal(true);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsOpen(false);
    toast.success('Logout berhasil!');
  };

  const handleProfile = () => {
    console.log('Profile settings clicked');
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (loginForm.password.length < 6) {
      toast.error('Password minimal 6 karakter');
      return;
    }
    setUser({ name: 'Azmi' });
    setShowLoginModal(false);
    toast.success('Login berhasil!');
  };

  const submitRegister = (e) => {
    e.preventDefault();
    if (registerForm.password.length < 6) {
      toast.error('Password minimal 6 karakter');
      return;
    }
    setUser({ name: registerForm.username });
    setShowRegisterModal(false);
    toast.success('Registrasi berhasil!');
  };

  return (
    <div className="relative ml-4" ref={dropdownRef}>
    {/* icon profile */}
    <div 
      className="text-5xl text-gray-500 dark:text-gray-300 cursor-pointer hover:text-gray-700 dark:hover:text-white transition-transform duration-200 hover:scale-110"
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaUserCircle />
    </div>
  
    {/* dropdown menu */}
    <div 
      className={`absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-1 z-80 border border-gray-100 dark:border-gray-700
        transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
      `}
    >
      {user ? (
        <>
          {/* logged in */}
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={handleProfile}>
            <FaUserCircle className="text-gray-400 dark:text-gray-300 text-base" /> 
            <span className="font-medium">Profile</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
            <FaCog className="text-gray-400 dark:text-gray-300 text-base" /> 
            <span className="font-medium">Settings</span>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={handleLogout}>
            <FaSignOutAlt className="text-base" /> 
            <span className="font-medium">Logout</span>
          </div>
        </>
      ) : (
        <>
          {/* not logged in */}
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={handleLogin}>
            <FaSignInAlt className="text-base" /> 
            <span className="font-medium">Login</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-sm text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer" onClick={handleRegister}>
            <FaUserPlus className="text-base" /> 
            <span className="font-medium">Register</span>
          </div>
        </>
      )}
    </div>
  
    {/* Login Modal */}
    <AnimatePresence>
      {showLoginModal && (
        <motion.div 
          className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-3 text-center">Login</h2>
            <form onSubmit={submitLogin} className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border p-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border p-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              />
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Login
              </button>
            </form>
            <button 
              onClick={() => setShowLoginModal(false)}
              className="mt-4 text-gray-500 dark:text-gray-300 hover:underline w-full text-center"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  
    {/* Register Modal */}
    <AnimatePresence>
      {showRegisterModal && (
        <motion.div 
          className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={submitRegister} className="space-y-4">
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full border p-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
                value={registerForm.username}
                onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full border p-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full border p-2 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
                required
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              />
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Register
              </button>
            </form>
            <button 
              onClick={() => setShowRegisterModal(false)}
              className="mt-4 text-gray-500 dark:text-gray-300 hover:underline w-full text-center"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  
    <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
  </div>
  );
}  
