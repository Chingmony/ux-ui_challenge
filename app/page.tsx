"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { challenges } from '@/data/challenges';

export default function UXChallengeApp() {
  const [view, setView] = useState<'home' | 'playing' | 'result'>('home');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCorrect, setSelectedCorrect] = useState<boolean | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const startLevel = (idx: number) => {
    setCurrentLevel(idx);
    setView('playing');
  };

  const handleNext = () => {
    if (currentLevel < challenges.length - 1) {
      setCurrentLevel(prev => prev + 1);
      setView('playing');
    } else {
      setView('home');
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans relative overflow-hidden flex flex-col justify-center">
      {/* Dynamic Colored Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-200/40 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-rose-200/40 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          
          {/* HOME SCREEN - ORGANIZED 5x2 GRID */}
          {view === 'home' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 bg-black flex items-center justify-center rotate-3 shadow-[4px_4px_0px_#4f46e5]">
                     <span className="text-white font-black text-xl italic">UX</span>
                  </div>
                  <div className="px-3 py-1 border-[3px] border-black font-black text-[9px] uppercase tracking-widest bg-white">
                    RANK: {score > 7 ? 'MASTER' : 'INTERN'}
                  </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-6">
                  GOOD <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>DESIGN.</span>
                </h1>
              </header>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                {challenges.map((c, i) => {
                  const isDone = completedLevels.includes(i);
                  const Icon = c.icon;
                  return (
                    <motion.button
                      key={c.id}
                      whileHover={{ y: -3, shadow: "6px 6px 0px rgba(0,0,0,1)" }}
                      onClick={() => startLevel(i)}
                      className={`p-5 text-left border-[4px] border-black transition-all relative aspect-square flex flex-col justify-between
                        ${isDone ? 'bg-slate-50 opacity-60' : 'bg-white shadow-[6px_6px_0px_black]'}`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="block font-black text-[10px] opacity-40 italic">UNIT_0{i + 1}</span>
                        {isDone && <div className="h-3 w-3 bg-emerald-500 rounded-full" />}
                      </div>
                      
                      <div>
                        {/* BIGGER TITLE TEXT IN CARDS */}
                        <h3 className="text-xl font-black uppercase leading-[1] mb-2 tracking-tight">
                          {c.title}
                        </h3>
                        {Icon && <Icon className="h-5 w-5 opacity-40" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* PLAYING SCREEN - VERTICALLY CENTERED */}
          {view === 'playing' && (
            <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="max-w-4xl mx-auto py-6">
              <div className="bg-white border-[6px] border-black p-10 md:p-16 shadow-[24px_24px_0px_#4f46e5] relative">
                <h2 className="text-4xl md:text-6xl font-black mb-12 leading-[1] tracking-tighter">
                  {challenges[currentLevel].problem}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {challenges[currentLevel].options.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSelectedCorrect(opt.isCorrect);
                          if (opt.isCorrect) {
                            setScore(s => s + 1);
                            setCompletedLevels(prev => [...new Set([...prev, currentLevel])]);
                          }
                          setView('result');
                        }}
                        className="group flex flex-col p-6 border-[4px] border-black hover:bg-black transition-all text-left bg-white"
                      >
                        <div className="mb-4 h-10 w-10 flex items-center justify-center border-2 border-black group-hover:bg-white transition-all">
                          {Icon && <Icon className={`h-6 w-6 ${opt.color} transition-colors`} />}
                        </div>
                        {/* BIGGER OPTION LABELS */}
                        <span className={`text-2xl font-black uppercase group-hover:text-white leading-none mb-2 ${opt.color}`}>
                          {opt.label}
                        </span>
                        <p className="text-sm font-bold text-slate-500 group-hover:text-slate-400 leading-snug">
                          {opt.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULT SCREEN */}
          {view === 'result' && (
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-2xl mx-auto py-6">
              <div className={`p-10 border-[6px] bg-white shadow-[20px_20px_0px_black] ${selectedCorrect ? 'border-emerald-500' : 'border-rose-500'}`}>
                <h2 className={`text-8xl font-black mb-6 italic tracking-tighter ${selectedCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {selectedCorrect ? 'WINNER.' : 'FAILED.'}
                </h2>
                
                <div className="bg-black text-white p-8 mb-8 -rotate-1">
                  <p className="text-indigo-400 font-black text-xs uppercase mb-3 tracking-[0.2em]">The Logic:</p>
                  <p className="text-3xl font-black leading-none">{challenges[currentLevel].lessonBody}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleNext} className="flex-1 py-5 bg-black text-white font-black uppercase text-2xl shadow-[6px_6px_0px_#4f46e5] hover:bg-indigo-600 transition-all">
                    Next Challenge →
                  </button>
                  <button onClick={() => setView('home')} className="px-8 py-5 border-[3px] border-black font-black uppercase text-xs hover:bg-slate-100">
                    Dashboard
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}