import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa';
import ConfidenceMeter from './ConfidenceMeter';
import { exportToCSV } from '../utils/exportCSV';

const ResultHistory = ({ latestResult, history, onClearHistory }) => {
  const [showAllHistory, setShowAllHistory] = useState(false);
  const displayHistory = showAllHistory ? history : history.slice(-5);

  return (
    <div className="space-y-6">
      {/* Latest Result */}
      <AnimatePresence>
        {latestResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`rounded-2xl shadow-2xl p-8 card-shadow ${
              latestResult.prediction === 'Rock' ? 'result-rock' : 'result-mine'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-3xl mr-2">🎯</span>
              Latest Prediction
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <motion.p
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-6xl font-extrabold mb-4"
                >
                  {latestResult.prediction === 'Rock' ? '🪨 ROCK' : '💣 MINE'}
                </motion.p>
                
                <ConfidenceMeter 
                  confidence={latestResult.confidence}
                  prediction={latestResult.prediction}
                />

                <div className="mt-4 space-y-2">
                  <p className="text-sm opacity-90 flex items-center gap-2">
                    <span>⏰</span>
                    {new Date(latestResult.timestamp).toLocaleString()}
                  </p>
                  {latestResult.confidence >= 90 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs"
                    >
                      <span>🏆</span> High Confidence Prediction!
                    </motion.div>
                  )}
                </div>
              </div>

              {/* 3D Visual Effect */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-9xl opacity-20"
              >
                {latestResult.prediction === 'Rock' ? '🪨' : '💣'}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* History Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-6 card-shadow"
      >
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
            <span className="text-2xl mr-2">📊</span>
            Prediction History ({history.length})
          </h3>
          
          <div className="flex gap-2">
            {history.length > 5 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllHistory(!showAllHistory)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium flex items-center gap-2"
              >
                {showAllHistory ? <FaEyeSlash /> : <FaEye />}
                {showAllHistory ? 'Show Less' : `Show All (${history.length})`}
              </motion.button>
            )}
            
            {history.length > 0 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => exportToCSV(history)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium flex items-center gap-2"
                >
                  <FaDownload /> Export CSV
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClearHistory}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium flex items-center gap-2"
                >
                  <FaTrash /> Clear
                </motion.button>
              </>
            )}
          </div>
        </div>

        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <motion.p
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-4"
            >
              📭
            </motion.p>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No predictions yet. Enter sonar data above to get started!
            </p>
          </motion.div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg">
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">#</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Input</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Prediction</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Confidence</th>
                  <th className="p-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Date/Time</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {displayHistory.slice().reverse().map((item, index) => (
                    <motion.tr
                      key={history.length - index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-bg transition"
                    >
                      <td className="p-3 text-sm text-gray-600 dark:text-gray-400 font-semibold">
                        {history.length - index}
                      </td>
                      <td className="p-3 text-xs text-gray-500 dark:text-gray-500 font-mono max-w-xs truncate">
                        {item.input.substring(0, 40)}...
                      </td>
                      <td className="p-3">
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                            item.prediction === 'Rock'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}
                        >
                          {item.prediction === 'Rock' ? '🪨' : '💣'} {item.prediction}
                        </motion.span>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 dark:bg-dark-border rounded-full h-2 max-w-[100px]">
                            <div 
                              className={`h-full rounded-full ${
                                item.prediction === 'Rock' ? 'bg-blue-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${item.confidence}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.confidence}%
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-xs text-gray-500 dark:text-gray-500">
                        {new Date(item.timestamp).toLocaleString()}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ResultHistory;
