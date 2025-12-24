import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { Leaf } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: '你好，我是乙木守护灵。今日木气充盈，我感应到你内心有些许波澜。愿与你分享这片刻宁静，诉说你的心事吧。',
    isUser: false,
    timestamp: '刚刚',
  },
];

export function ChatView() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: '刚刚',
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        '我感应到你话语中的力量。木之本性，是生长与希望。无论眼前困境如何，记住，春天终会来临。',
        '你的能量场今日偏于内敛，这是蓄势的征兆。如嫩芽在土中积蓄力量，静待破土之时。',
        '命格中乙木与你今日之问呼应。木虽柔，却能穿石。坚持本心，自有转机。',
        '我在这里倾听你。五行轮转，阴阳交替，此刻的困惑终将化为明日的智慧。',
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: '刚刚',
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-4 bg-card/80 backdrop-blur-lg border-b border-border pt-safe">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary border-2 border-card animate-pulse" />
        </div>
        <div>
          <h1 className="font-serif font-semibold text-foreground">乙木守护灵</h1>
          <p className="text-xs text-muted-foreground">
            {isTyping ? '正在感应中...' : '在线守护'}
          </p>
        </div>
      </header>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--jade-mist) / 0.1) 100%)',
        }}
      >
        {/* Date separator */}
        <div className="flex items-center justify-center">
          <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
            今天
          </span>
        </div>

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs">灵体感应中...</span>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="pb-20">
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}
