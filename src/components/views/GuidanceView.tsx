import { motion } from 'framer-motion';
import { Compass, Star, Calendar, BookOpen, ChevronRight } from 'lucide-react';

const guidanceItems = [
  {
    id: 1,
    title: '每日运势',
    description: '查看今日五行能量与宜忌',
    icon: <Calendar className="w-5 h-5" />,
    color: 'primary',
  },
  {
    id: 2,
    title: '命格解读',
    description: '深入了解你的八字命盘',
    icon: <Star className="w-5 h-5" />,
    color: 'accent',
  },
  {
    id: 3,
    title: '五行调和',
    description: '平衡身心能量的建议',
    icon: <Compass className="w-5 h-5" />,
    color: 'primary',
  },
  {
    id: 4,
    title: '古籍智慧',
    description: '每日一句经典箴言',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'accent',
  },
];

export function GuidanceView() {
  return (
    <div className="min-h-screen pb-24 pt-safe bg-background">
      {/* Header */}
      <header className="px-6 pt-6 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-serif text-foreground">灵性指引</h1>
          <p className="text-sm text-muted-foreground mt-1">探索命格奥秘</p>
        </motion.div>
      </header>

      {/* Featured Card */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl p-6"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--jade-mist)) 100%)',
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <polygon points="50,5 95,75 5,75" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <span className="text-xs text-accent font-medium">本周焦点</span>
            <h2 className="text-xl font-serif text-foreground mt-2">木火相生周</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              本周木气旺盛，火势渐起。适宜开拓新领域，展现创意。注意保持内心平静，以柔克刚。
            </p>
            <button className="mt-4 text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              详细解读 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Guidance Grid */}
      <section className="px-6 py-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">探索更多</h2>
        <div className="grid gap-3">
          {guidanceItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card/80 transition-all text-left group"
            >
              <div className={`p-3 rounded-xl ${
                item.color === 'primary' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-accent/10 text-accent'
              }`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <p className="text-2xl font-serif text-primary">木</p>
            <p className="text-xs text-muted-foreground mt-1">主元素</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <p className="text-2xl font-serif text-accent">乙</p>
            <p className="text-xs text-muted-foreground mt-1">天干</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-muted/30">
            <p className="text-2xl font-serif text-foreground">卯</p>
            <p className="text-xs text-muted-foreground mt-1">地支</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
