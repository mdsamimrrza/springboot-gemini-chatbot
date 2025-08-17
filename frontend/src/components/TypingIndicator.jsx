import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start mb-4"
    >
      <div className="bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl rounded-bl-md shadow-md border border-gray-100 px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">Gemini is typing</span>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
