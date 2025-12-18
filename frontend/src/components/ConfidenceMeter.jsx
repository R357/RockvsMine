import React from 'react';
import { motion } from 'framer-motion';

const ConfidenceMeter = ({ confidence, prediction }) => {
  const color = prediction === 'Rock' ? 'bg-blue-500' : 'bg-red-500';
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">Confidence Level</span>
        <span className="text-sm font-bold text-white">{confidence}%</span>
      </div>
      <div className="h-6 bg-white bg-opacity-20 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
};

export default ConfidenceMeter;
