import { motion } from 'framer-motion';
import { Home, MessageCircle, Compass, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: <Home className="w-5 h-5" />, label: '主页', id: 'home' },
  { icon: <MessageCircle className="w-5 h-5" />, label: '对话', id: 'chat' },
  { icon: <Compass className="w-5 h-5" />, label: '指引', id: 'guidance' },
  { icon: <User className="w-5 h-5" />, label: '我的', id: 'profile' },
];

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/90 backdrop-blur-lg border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              'relative flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all duration-300',
              activeTab === item.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary/10 rounded-xl"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.icon}</span>
            <span className="relative z-10 text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      {/* Safe area for iOS */}
      <div className="h-safe-area-inset-bottom bg-card" />
    </nav>
  );
}
