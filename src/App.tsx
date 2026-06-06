"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { BackgroundFX } from '@/components/BackgroundFX';
import { TopNavMobile } from '@/components/TopNavMobile';
import { BottomNavMobile } from '@/components/BottomNavMobile';

import { DashboardView } from '@/views/DashboardView';
import { CoursesView } from '@/views/CoursesView';
import { LearningPathView } from '@/views/LearningPathView';
import { AchievementsView } from '@/views/AchievementsView';
import { LeaderboardView } from '@/views/LeaderboardView';
import { CommunityView } from '@/views/CommunityView';
import { SettingsView } from '@/views/SettingsView';
import { LandingView } from '@/views/LandingView';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isAuthenticated) {
    return <LandingView onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'courses':
        return <CoursesView />;
      case 'path':
        return <LearningPathView />;
      case 'achievements':
        return <AchievementsView />;
      case 'leaderboard':
        return <LeaderboardView />;
      case 'community':
        return <CommunityView />;
      case 'settings':
        return <SettingsView />;
      case 'profile':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen flex text-zinc-100 font-sans relative pt-14 md:pt-0 pb-16 md:pb-0 bg-zinc-950 selection:bg-blue-500/30">
      <BackgroundFX />
      <TopNavMobile />
      <div className="hidden md:block shrink-0 z-40">
        <Sidebar activeItem={activeTab} setActiveItem={setActiveTab} />
      </div>
      <div className="flex-1 flex flex-col h-screen overflow-hidden z-10 w-full relative">
        <TopBar onLogout={() => setIsAuthenticated(false)} />
        <main className="flex-1 overflow-y-auto px-4 md:px-8 py-6 w-full">
          {renderView()}
        </main>
      </div>

      <div className="md:hidden z-40">
        <BottomNavMobile activeItem={activeTab} setActiveItem={setActiveTab} />
      </div>
    </div>
  );
}
