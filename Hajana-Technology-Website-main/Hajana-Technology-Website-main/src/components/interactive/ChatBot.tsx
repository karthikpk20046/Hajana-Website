'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Card, CardContent, CardHeader } from '../ui/card'
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses = [
  "Hello! I'm Hajana AI Assistant. How can I help you with your Salesforce and AI needs today?",
  "That's a great question! Our AI-powered Salesforce solutions can help streamline your business processes. Would you like to schedule a consultation?",
  "We specialize in Einstein AI, Lightning Web Components, and custom AI model development. What specific area interests you?",
  "I'd be happy to connect you with one of our Salesforce experts. What's the best way to reach you?",
  "Our team has successfully completed over 200+ AI projects. Let me help you understand how we can transform your business.",
  "Would you like to learn more about our Services Cloud automation or Marketing Cloud intelligence solutions?",
  "I can help you explore our MuleSoft integration services. What systems are you looking to connect?",
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage(botResponses[0]);
      }, 1000);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString() + '_bot',
      text,
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString() + '_user',
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const [sessionId, setSessionId] = useState<string>('')

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue
    addUserMessage(userMessage)
    setInputValue('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionId
        }),
      })

      const result = await response.json()

      if (result.success) {
        addBotMessage(result.response)
        if (result.sessionId && !sessionId) {
          setSessionId(result.sessionId)
        }
      } else {
        addBotMessage("I'm sorry, I encountered an error. Please try again or contact our support team.")
      }
    } catch (error) {
      console.error('Chat error:', error)
      addBotMessage("I'm experiencing technical difficulties. Please try again later or contact us directly.")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
            </Button>
            
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 animate-ping opacity-20"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 100, y: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{ scale: 0, opacity: 0, x: 100, y: 100 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className={`w-96 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Hajana AI Assistant</h3>
                    <div className="flex items-center space-x-1 text-xs text-white/80">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20 w-8 h-8 p-0"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 w-8 h-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Chat Content */}
              {!isMinimized && (
                <CardContent className="p-0 flex flex-col h-[436px]">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                      >
                        <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                          <div
                            className={`px-4 py-2 rounded-2xl ${
                              message.isBot
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 px-2">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                        {message.isBot && (
                          <div className="order-1 mr-2 mt-1">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                        {!message.isBot && (
                          <div className="order-2 ml-2 mt-1">
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="mr-2 mt-1">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex space-x-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about our AI & Salesforce solutions..."
                        className="flex-1 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Powered by Hajana AI • Available 24/7
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
