
import { useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage, Message, MessageType } from "./ChatMessage";
import { Welcome } from "./Welcome";

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock API response function
  const getMockResponse = async (query: string): Promise<string> => {
    console.log("Query received:", query);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000));
    
    // Mock responses based on query content
    if (query.toLowerCase().includes("annual report")) {
      return "The Annual Report 2023 shows a 12% increase in revenue compared to 2022, with significant growth in the European market. The company expanded operations to 3 new countries and increased its workforce by 15%.";
    } else if (query.toLowerCase().includes("proposal") || query.toLowerCase().includes("project")) {
      return "The Project Proposal outlines a 6-month development timeline with three major milestones. The budget is estimated at $250,000 with the primary focus on developing a new customer relationship management system.";
    } else if (query.toLowerCase().includes("research") || query.toLowerCase().includes("paper")) {
      return "The Research Paper discusses advancements in quantum computing, particularly focusing on error correction methodologies. The key finding suggests a 30% improvement in qubit coherence time using the new approach.";
    } else {
      return "Based on the documents you've uploaded, I've found the following information:\n\n• 8 documents have been processed successfully\n• The most recent document was uploaded on October 5, 2023\n• The documents cover topics including financial analysis, technical specifications, and business planning\n\nCould you specify which document or topic you'd like more information about?";
    }
  };

  // Handle sending a new message
  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // Add loading message
    const loadingMessageId = (Date.now() + 1).toString();
    const loadingMessage: Message = {
      id: loadingMessageId,
      type: "loading",
      content: "",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, loadingMessage]);
    setIsLoading(true);
    
    try {
      // Get response from mock API
      const responseContent = await getMockResponse(content);
      
      // Replace loading message with assistant response
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === loadingMessageId
            ? {
                id: msg.id,
                type: "assistant",
                content: responseContent,
                timestamp: new Date(),
              }
            : msg
        )
      );
    } catch (error) {
      // Handle error
      console.error("Error getting response:", error);
      // Replace loading message with error message
      setMessages((prev) => 
        prev.map((msg) => 
          msg.id === loadingMessageId
            ? {
                id: msg.id,
                type: "assistant",
                content: "Sorry, I encountered an error processing your request. Please try again.",
                timestamp: new Date(),
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {messages.length === 0 ? (
        <Welcome />
      ) : (
        <div className="flex-1 overflow-y-auto chat-scrollbar">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              isLastMessage={index === messages.length - 1}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};
