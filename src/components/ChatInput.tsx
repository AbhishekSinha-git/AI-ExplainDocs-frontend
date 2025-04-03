
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState, FormEvent, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "0";
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = scrollHeight + "px";
    }
  }, [message]);

  // Handle Cmd/Ctrl + Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="sticky bottom-0 w-full bg-background/80 backdrop-blur-md border-t border-border p-4 transition-all duration-300">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-end max-w-3xl mx-auto gap-2"
      >
        <div className="relative flex-1">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question about your documents..."
            className={cn(
              "min-h-[60px] max-h-[200px] p-4 pr-12 resize-none rounded-xl border border-input bg-background shadow-sm transition-all duration-200",
              "focus:ring-1 focus:ring-ring"
            )}
            disabled={isLoading}
          />
          <div className="absolute right-3 bottom-3">
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim() || isLoading}
              className="rounded-full h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
      <div className="text-xs text-center text-muted-foreground mt-2">
        <span className="opacity-70">
          Press <kbd className="px-1 py-0.5 rounded bg-muted">⌘</kbd> +{" "}
          <kbd className="px-1 py-0.5 rounded bg-muted">Enter</kbd> to send
        </span>
      </div>
    </div>
  );
};
