import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ isDark, toggleDark }) => {
  return (
    <motion.button
      onClick={toggleDark}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-dark-card shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-indigo-600 text-xl" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
