import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-lg border-t border-border"
    >
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0 text-muted-foreground hover:text-primary"
      >
        <Mic className="w-5 h-5" />
      </Button>
      
      <div className="flex-1 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="诉说你的心事..."
          disabled={disabled}
          className="w-full bg-muted/50 border border-border rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      <Button
        variant="sacred"
        size="icon"
        onClick={handleSend}
        disabled={!message.trim() || disabled}
        className="shrink-0 rounded-full"
      >
        <Send className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
