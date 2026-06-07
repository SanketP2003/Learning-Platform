"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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

export default function App({ coursesGrid }: { coursesGrid?: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  if (!isAuthenticated) {
    return <LandingView onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView coursesGrid={coursesGrid} />;
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
        return <DashboardView coursesGrid={coursesGrid} />;
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
        <TopBar onLogout={handleLogout} />
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