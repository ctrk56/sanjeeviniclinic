import React, { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        className={`chat-button ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChat}
        aria-label="Open chat assistant"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="chat-button-text">Chat with AI Assistant</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-content">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Sri Sanjeevini Dental Assistant</span>
            </div>
            <button 
              className="chat-close-button"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="chat-content">
            <iframe
              src="https://chatgpt.com/g/g-694c6366ad9081919f355cc172480d17-sri-sanjeevini-dental-assistant"
              title="Sri Sanjeevini Dental Assistant"
              className="chat-iframe"
              allow="microphone"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              tabIndex="0"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
