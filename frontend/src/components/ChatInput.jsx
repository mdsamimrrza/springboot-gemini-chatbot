import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="sticky bottom-0 w-full bg-white/70 backdrop-blur-md border-t border-gray-300 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="flex items-end space-x-3 max-w-4xl mx-auto"
      >
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isLoading}
            rows={1}
            className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 placeholder-gray-400"
            style={{
              minHeight: '48px',
              maxHeight: '120px',
            }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
            }}
            aria-label="Message input"
          />
        </div>
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
            message.trim() && !isLoading
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:shadow-xl transform hover:scale-110'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
