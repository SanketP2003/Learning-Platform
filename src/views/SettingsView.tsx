"use client";

import { motion } from 'framer-motion';
import { Settings, User, Bell, Shield, Paintbrush } from 'lucide-react';

export function SettingsView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-6 max-w-4xl"
    >
      <div className="mb-8 mt-2">
        <h1 className="text-2xl font-display font-medium text-white mb-2 flex items-center gap-2">
          <Settings className="w-6 h-6 text-accent-cyan" /> Settings
        </h1>
        <p className="text-sm text-zinc-400">Manage your account preferences and application settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-2">
          {['Profile', 'Notifications', 'Privacy', 'Appearance'].map((tab, i) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                i === 0 
                  ? 'bg-white/10 text-white font-medium' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="md:col-span-3 space-y-6">
          <section className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <User className="w-5 h-5 text-accent-cyan" />
              <h2 className="text-lg font-medium text-zinc-200">Profile Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 cursor-pointer hover:text-zinc-300 transition-colors">Personal Avatar</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-zinc-500" />
                  </div>
                  <button className="px-3 py-1.5 text-xs font-medium bg-white/10 hover:bg-white/15 text-white rounded-md transition-colors">
                    Upload
                  </button>
                  <button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors">
                    Remove
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-zinc-400 mb-1.5">First Name</label>
                  <input type="text" id="firstName" placeholder="Jane" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-600" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-zinc-400 mb-1.5">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-600" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
                <input type="email" id="email" placeholder="jane@example.com" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-600" />
              </div>

              <div>
                <label htmlFor="bio" className="block text-xs font-medium text-zinc-400 mb-1.5">Bio</label>
                <textarea id="bio" rows={3} placeholder="Frontend Engineer learning AI..." className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-600 resize-none"></textarea>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 text-sm font-medium bg-accent-cyan text-black hover:bg-accent-cyan/90 rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
