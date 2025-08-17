import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { motion } from 'framer-motion';
import { MessageCircle, Minimize2, Maximize2 } from 'lucide-react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (messageText) => {
    const userMessage = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/api/chat', {
        prompt: messageText,
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response.data,
        isUser: false,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error while processing your request. Please ensure the backend server is running.',
        isUser: false,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setError('Failed to send message. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-[600px] md:h-[700px]'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Gemini Chatbot</h1>
              <p className="text-blue-100 text-sm">
                {isLoading ? 'AI is thinking...' : 'Powered by Google Gemini'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="px-3 py-1 bg-white bg-opacity-20 rounded-lg text-sm hover:bg-opacity-30 transition-all duration-200"
                aria-label="Clear chat"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200"
              aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Error Banner */}
        {error && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border-l-4 border-red-400 p-4"
          >
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-400 hover:text-red-600"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}

        {/* Chat Content */}
        {!isMinimized && (
          <div className="flex flex-col h-full">
            <ChatWindow messages={messages} isLoading={isLoading} />
            <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
          </div>
        )}
      </motion.div>

      {/* Connection Status Indicator */}
      <div className="fixed bottom-4 right-4">
        <div className="flex items-center space-x-2 bg-white rounded-full px-3 py-2 shadow-lg border">
          <div
            className={`w-2 h-2 rounded-full ${
              error ? 'bg-red-500' : 'bg-green-500'
            }`}
          />
          <span className="text-xs text-gray-600">
            {error ? 'Disconnected' : 'Connected'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
