import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
}

export function StatusCard({ title, value, subtitle, icon, variant = 'default' }: StatusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'p-4 rounded-xl border backdrop-blur-sm',
        variant === 'default' && 'bg-card/50 border-border',
        variant === 'accent' && 'bg-primary/10 border-primary/30',
        variant === 'muted' && 'bg-muted/30 border-muted-foreground/20'
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">{title}</p>
          <p className={cn(
            'text-lg font-serif font-semibold',
            variant === 'accent' ? 'text-primary' : 'text-foreground'
          )}>
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className={cn(
            'p-2 rounded-lg',
            variant === 'accent' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
          )}>
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
}
