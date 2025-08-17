import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Message = ({ message, isUser, timestamp }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative group ${
          isUser
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-l-2xl rounded-tr-2xl rounded-br-md'
            : 'bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl rounded-bl-md shadow-sm border border-gray-100'
        } px-4 py-3`}
      >
        {/* Render markdown for bot messages */}
        <div className="break-words whitespace-pre-wrap leading-relaxed prose prose-sm max-w-full overflow-x-auto">
        {isUser ? (
            message
        ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message}
            </ReactMarkdown>
        )}
        </div>

        {/* Timestamp */}
        <div
          className={`text-xs mt-2 ${
            isUser ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {timestamp}
        </div>

        {/* Copy button only for bot messages */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-100"
            aria-label="Copy message"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500" />
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Message;
