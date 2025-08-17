import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const ChatWindow = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
      {messages.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to Gemini Chatbot
          </h3>
          <p className="text-gray-500 max-w-md leading-relaxed">
            Start chatting by typing a message below — I'm ready to help you
            with anything!
          </p>
        </motion.div>
      ) : (
        <>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Message
                message={msg.text}
                isUser={msg.isUser}
                timestamp={formatTime(msg.timestamp)}
              />
            </motion.div>
          ))}
          {isLoading && <TypingIndicator />}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatWindow;
