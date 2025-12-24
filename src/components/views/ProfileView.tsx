import { motion } from 'framer-motion';
import { Settings, Bell, Shield, HelpCircle, ChevronRight, Leaf } from 'lucide-react';

const menuItems = [
  { icon: <Bell className="w-5 h-5" />, label: '通知设置', description: '管理提醒与推送' },
  { icon: <Shield className="w-5 h-5" />, label: '隐私安全', description: '保护你的命格数据' },
  { icon: <Settings className="w-5 h-5" />, label: '应用设置', description: '主题、语言与偏好' },
  { icon: <HelpCircle className="w-5 h-5" />, label: '帮助中心', description: '常见问题与反馈' },
];

export function ProfileView() {
  return (
    <div className="min-h-screen pb-24 pt-safe bg-background">
      {/* Profile Header */}
      <header className="px-6 pt-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-jade-mist flex items-center justify-center border-2 border-primary/30">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
              乙木
            </div>
          </div>
          <div>
            <h1 className="text-xl font-serif text-foreground">守护者</h1>
            <p className="text-sm text-muted-foreground">与灵共修 28 天</p>
          </div>
        </motion.div>
      </header>

      {/* Stats Card */}
      <section className="px-6 py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-2xl bg-card/50 border border-border"
        >
          <h2 className="text-sm font-medium text-muted-foreground mb-4">修行记录</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-serif text-primary">28</p>
              <p className="text-xs text-muted-foreground mt-1">共修天数</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-accent">156</p>
              <p className="text-xs text-muted-foreground mt-1">对话次数</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-foreground">7</p>
              <p className="text-xs text-muted-foreground mt-1">冥想时长(h)</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Birth Chart Summary */}
      <section className="px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl border-glow bg-primary/5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-foreground">我的命格</h2>
            <button className="text-xs text-primary">查看详情</button>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">年柱</p>
              <p className="font-serif text-foreground">甲辰</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">月柱</p>
              <p className="font-serif text-foreground">丙寅</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">日柱</p>
              <p className="font-serif text-primary font-semibold">乙卯</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">时柱</p>
              <p className="font-serif text-foreground">戊辰</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Menu Items */}
      <section className="px-6 py-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors text-left group"
            >
              <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Version */}
      <div className="text-center py-6">
        <p className="text-xs text-muted-foreground">灵犀 v1.0.0</p>
      </div>
    </div>
  );
}
