"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, ArrowRight, Github, Mail, Lock, User } from 'lucide-react';

export function LandingView({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 selection:bg-accent-cyan/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-purple/20 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-cyan/20 blur-[120px] mix-blend-screen opacity-50" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Orbit className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-display font-medium text-white mb-2">Welcome to NextGen</h1>
          <p className="text-zinc-400">The next evolutionary step in learning.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
          
          <div className="flex mb-8 bg-black/50 p-1 rounded-lg border border-white/5 relative z-10">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${isLogin ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${!isLogin ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              Register
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 relative z-10"
              onSubmit={(e) => { e.preventDefault(); onLogin(); }}
            >
              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-700"
                      required
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-700"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5 ml-1 mr-1">
                  <label className="block text-xs font-medium text-zinc-400">Password</label>
                  {isLogin && <a href="#" className="text-[10px] text-accent-cyan hover:text-accent-cyan/80 transition-colors">Forgot?</a>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-zinc-700"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-6 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
              >
                {isLogin ? 'Sign In to Account' : 'Create Account'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-zinc-900 px-2 text-zinc-500">Or continue with</span>
                </div>
              </div>

              <button 
                type="button"
                className="w-full py-2.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" /> Github
              </button>
            </motion.form>
          </AnimatePresence>
        </motion.div>
        
        <p className="text-center text-xs text-zinc-600 mt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
