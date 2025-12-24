import { motion } from 'framer-motion';
import { WoodSpiritAvatar } from '@/components/WoodSpiritAvatar';
import { StatusCard } from '@/components/StatusCard';
import { Leaf, Moon, Sun, Droplets } from 'lucide-react';

export function HomeView() {
  return (
    <div className="min-h-screen pb-24 pt-safe">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-serif text-gradient-gold">乙木守护灵</h1>
            <p className="text-sm text-muted-foreground mt-1">与你同在，静默守护</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </header>

      {/* Avatar Section */}
      <section className="relative px-6 py-8">
        <div className="absolute inset-0 bg-glow opacity-50" />
        <WoodSpiritAvatar />
        
        {/* Spirit Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-muted-foreground">灵力充盈</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-serif">与命格共振中</span>
          </div>
        </motion.div>
      </section>

      {/* Daily Insight */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-5 rounded-2xl border-glow bg-card/30"
        >
          <div className="flex items-center gap-2 mb-3">
            <Moon className="w-4 h-4 text-accent" />
            <span className="text-xs text-accent font-medium">今日灵语</span>
          </div>
          <p className="text-foreground font-serif leading-relaxed">
            木生于春，柔而有节。今日宜静心养性，如春芽待发，蓄势而动。
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            甲辰年 · 腊月初四
          </p>
        </motion.div>
      </section>

      {/* Status Grid */}
      <section className="px-6 py-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm font-medium text-muted-foreground mb-4"
        >
          命格状态
        </motion.h2>
        <div className="grid grid-cols-2 gap-3">
          <StatusCard
            title="主元素"
            value="乙木"
            subtitle="阴柔之木"
            icon={<Leaf className="w-4 h-4" />}
            variant="accent"
          />
          <StatusCard
            title="今日运势"
            value="上上"
            subtitle="宜静不宜动"
            icon={<Sun className="w-4 h-4" />}
          />
          <StatusCard
            title="情绪能量"
            value="平和"
            subtitle="内心宁静"
            icon={<Droplets className="w-4 h-4" />}
            variant="muted"
          />
          <StatusCard
            title="守护时辰"
            value="卯时"
            subtitle="05:00 - 07:00"
            icon={<Moon className="w-4 h-4" />}
            variant="muted"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3"
        >
          <button className="flex-1 py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium text-sm hover:bg-primary/20 transition-colors">
            开始冥想
          </button>
          <button className="flex-1 py-4 rounded-xl bg-secondary border border-border text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors">
            今日指引
          </button>
        </motion.div>
      </section>
    </div>
  );
}
