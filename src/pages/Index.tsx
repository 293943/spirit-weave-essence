import { useState } from 'react';
import { SacredParticles } from '@/components/SacredParticles';
import { BottomNav } from '@/components/BottomNav';
import { HomeView } from '@/components/views/HomeView';
import { ChatView } from '@/components/views/ChatView';
import { GuidanceView } from '@/components/views/GuidanceView';
import { ProfileView } from '@/components/views/ProfileView';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'chat':
        return <ChatView />;
      case 'guidance':
        return <GuidanceView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Sacred background pattern */}
      <div className="fixed inset-0 bg-sacred-pattern opacity-5 pointer-events-none" />
      
      {/* Ambient particles */}
      <SacredParticles />
      
      {/* Main content */}
      <main className="relative z-10">
        {renderView()}
      </main>

      {/* Bottom navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
