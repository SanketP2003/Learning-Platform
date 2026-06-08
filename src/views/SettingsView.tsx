"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, User, Bell, Shield, Lock, CreditCard, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export function SettingsView() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true
  });

  const tabs = [
    { id: 'Profile', icon: User },
    { id: 'Notifications', icon: Bell },
    { id: 'Privacy', icon: Shield },
    { id: 'Account', icon: Lock }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6 max-w-5xl mx-auto"
    >
      <div className="mb-8 mt-2">
        <h1 className="text-2xl font-display font-medium text-white mb-2 flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-500" /> Settings
        </h1>
        <p className="text-sm text-zinc-400">Manage your account preferences and application settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        <div className="md:col-span-1 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all",
                  isActive
                    ? "bg-blue-500/10 text-blue-500 font-medium"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-blue-500" : "text-zinc-500")} />
                {tab.id}
              </button>
            );
          })}
        </div>
        
        <div className="md:col-span-3">
          <AnimatePresence mode="wait">
            {activeTab === 'Profile' && (
              <motion.div
                key="Profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <section className="glass-card p-6 bg-zinc-900/50 border border-white/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <User className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-medium text-zinc-200">Profile Information</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 mb-2">Profile Picture</label>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center overflow-hidden">
                          <img src="https://ui-avatars.com/api/?name=Jane+Doe&background=2563eb&color=fff&size=128" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <button className="px-4 py-2 text-xs font-medium bg-white/10 hover:bg-white/15 text-white rounded-md transition-colors">
                              Upload New
                            </button>
                            <button className="px-4 py-2 text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-md transition-colors">
                              Remove
                            </button>
                          </div>
                          <p className="text-[10px] text-zinc-500">JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium text-zinc-400 mb-1.5">First Name</label>
                        <input type="text" id="firstName" defaultValue="Jane" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium text-zinc-400 mb-1.5">Last Name</label>
                        <input type="text" id="lastName" defaultValue="Doe" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
                      <input type="email" id="email" defaultValue="jane.doe@example.com" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-medium text-zinc-400 mb-1.5">Job Title / Role</label>
                      <input type="text" id="role" defaultValue="Senior Frontend Developer" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" />
                    </div>

                    <div>
                      <label htmlFor="bio" className="block text-xs font-medium text-zinc-400 mb-1.5">Bio</label>
                      <textarea id="bio" rows={4} defaultValue="Passionate about creating intuitive user experiences. Learning AI and Machine Learning on the side." className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                      Save Profile Changes
                    </button>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'Notifications' && (
              <motion.div
                key="Notifications"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <section className="glass-card p-6 bg-zinc-900/50 border border-white/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Bell className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-medium text-zinc-200">Notification Preferences</h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 'email', label: 'Email Notifications', desc: 'Receive daily summaries and important updates via email.' },
                      { id: 'push', label: 'Push Notifications', desc: 'Get instant alerts on your device for messages and mentions.' },
                      { id: 'sms', label: 'SMS Alerts', desc: 'Receive text messages for critical security alerts.' },
                      { id: 'marketing', label: 'Marketing Emails', desc: 'Receive news, special offers, and promotional materials.' }
                    ].map((item) => (
                      <div key={item.id} className="flex items-start justify-between py-3 border-b border-white/5 last:border-0">
                        <div>
                          <p className="text-sm font-medium text-zinc-200">{item.label}</p>
                          <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                          className={cn(
                            "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
                            notifications[item.id as keyof typeof notifications] ? "bg-blue-600" : "bg-zinc-700"
                          )}
                        >
                          <span className={cn(
                            "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                            notifications[item.id as keyof typeof notifications] ? "translate-x-2" : "-translate-x-2"
                          )} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button className="px-5 py-2.5 text-sm font-medium bg-white/10 text-white hover:bg-white/15 rounded-lg transition-colors">
                      Save Preferences
                    </button>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'Privacy' && (
              <motion.div
                key="Privacy"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <section className="glass-card p-6 bg-zinc-900/50 border border-white/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-medium text-zinc-200">Privacy & Security</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-zinc-300 mb-3">Profile Visibility</h3>
                      <div className="space-y-2">
                        {['Public', 'Team Only', 'Private'].map((opt, i) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                            <div className={cn(
                              "w-4 h-4 rounded-full border flex items-center justify-center",
                              i === 1 ? "border-blue-500" : "border-zinc-500 group-hover:border-zinc-400"
                            )}>
                              {i === 1 && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                            </div>
                            <span className="text-sm text-zinc-300">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <h3 className="text-sm font-medium text-zinc-300 mb-3">Data Usage</h3>
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-zinc-200">Share usage data</p>
                          <p className="text-xs text-zinc-400 mt-1">Help us improve by sharing anonymous usage statistics.</p>
                        </div>
                        <button className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 transition-colors duration-200 ease-in-out">
                          <span className="translate-x-2 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                        </button>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        Download My Data
                      </button>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'Account' && (
              <motion.div
                key="Account"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <section className="glass-card p-6 bg-zinc-900/50 border border-white/5 rounded-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <Lock className="w-5 h-5 text-blue-500" />
                    <h2 className="text-lg font-medium text-zinc-200">Account Settings</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-zinc-300 mb-3">Password & Authentication</h3>
                      <button className="w-full flex items-center justify-between p-4 bg-zinc-950 border border-white/10 rounded-lg hover:border-white/20 transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                            <Lock className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium text-zinc-200">Change Password</p>
                            <p className="text-xs text-zinc-500">Update your account password</p>
                          </div>
                        </div>
                        <span className="text-xs text-blue-400 group-hover:text-blue-300">Update</span>
                      </button>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <h3 className="text-sm font-medium text-zinc-300 mb-3">Billing & Subscription</h3>
                      <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-blue-400" /> Pro Plan
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">Renews on Oct 12, 2024</p>
                        </div>
                        <button className="px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/15 text-white rounded-md transition-colors">
                          Manage
                        </button>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-red-500/20">
                      <h3 className="text-sm font-medium text-red-400 mb-2">Danger Zone</h3>
                      <p className="text-xs text-zinc-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                      <button className="px-4 py-2 text-sm font-medium bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 rounded-lg transition-colors flex items-center gap-2">
                        <LogOut className="w-4 h-4" /> Delete Account
                      </button>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}