import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ icon, title, value, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-gradient-to-br ${color} rounded-lg p-6 text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-80 mb-1">{title}</p>
          <p className="text-4xl font-bold">{value}</p>
        </div>
        <div className="text-5xl opacity-80">{icon}</div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
