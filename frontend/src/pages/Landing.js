import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdSecurity } from 'react-icons/md';
import { FaHandsHelping, FaMapMarkerAlt, FaBell } from 'react-icons/fa';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-purple-900">
        <div className="flex items-center gap-2">
          <MdSecurity className="text-purple-500 text-3xl" />
          <span className="text-xl font-bold text-purple-400">SheShield</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition">
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="bg-purple-600 p-5 rounded-full mb-6">
          <MdSecurity className="text-white text-6xl" />
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-4">
          You Are <span className="text-purple-400">Never Alone.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          SheShield connects you instantly with trusted contacts and nearby community volunteers the moment you need help.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition">
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition">
            Login
          </button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 border border-purple-900 rounded-2xl p-6 text-center">
          <FaBell className="text-purple-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">One-Tap SOS</h3>
          <p className="text-gray-400">Instantly alert your trusted contacts and nearby volunteers with a single tap.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 border border-purple-900 rounded-2xl p-6 text-center">
          <FaMapMarkerAlt className="text-purple-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Live Location</h3>
          <p className="text-gray-400">Share your real-time location continuously until you are safe.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 border border-purple-900 rounded-2xl p-6 text-center">
          <FaHandsHelping className="text-purple-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Network</h3>
          <p className="text-gray-400">Verified nearby volunteers receive your alert and can reach you fast.</p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 pb-6 text-sm">
        © 2026 SheShield — Women Safety Network
      </div>

    </div>
  );
}

export default Landing;