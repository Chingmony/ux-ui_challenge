"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { challenges } from "@/data/challenges";

export default function UXChallengeApp() {
  const [view, setView] = useState<"home" | "playing" | "result" | "finished">(
    "home",
  );
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCorrect, setSelectedCorrect] = useState<boolean | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const startLevel = (idx: number) => {
    setCurrentLevel(idx);
    setView("playing");
  };

  const handleNext = () => {
    if (currentLevel < challenges.length - 1) {
      setCurrentLevel((prev) => prev + 1);
      setView("playing");
    } else {
      setView("finished");
    }
  };

  const getRank = () => {
    if (score === 20) return "Amazing!";
    if (score > 15) return "Great Job!";
    if (score > 10) return "Nice Try!";
    return "Keep Going!";
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans relative overflow-hidden flex flex-col items-center">
      {/* Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-200/40 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-8">
        {/* PERSISTENT HEADER */}
        <nav className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-black flex items-center justify-center rotate-3 shadow-[3px_3px_0px_#4f46e5]">
              <span className="text-white font-black text-xl italic">UX</span>
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">
              Master Game
            </h1>
          </div>
          <div className="px-4 py-1 border-[3px] border-black font-black text-xs uppercase tracking-widest bg-white shadow-[3px_3px_0px_black]">
            Score: {score}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {/* 1. HOME GRID */}
          {view === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <header className="mb-10">
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.75] mb-4">
                  Design
                  <br />
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "2px black" }}
                  >
                    CHALLENGES
                  </span>
                </h2>
                <p className="font-bold text-slate-500 uppercase tracking-widest text-sm italic">
                  Select a unit to begin training
                </p>
              </header>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {challenges.map((c, i) => {
                  const isDone = completedLevels.includes(i);
                  const Icon = c.icon;
                  return (
                    <motion.button
                      key={c.id}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => startLevel(i)}
                      className={`p-6 text-left border-[4px] border-black transition-all relative aspect-square flex flex-col justify-between group
                        ${isDone ? "bg-slate-100 opacity-50" : "bg-white shadow-[6px_6px_0px_black] hover:shadow-[10px_10px_0px_black]"}`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-black text-md opacity-30 italic">
                          U_{i + 1}
                        </span>
                        {isDone && (
                          <div className="h-4 w-4 bg-emerald-500 rounded-full border-2 border-black" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold uppercase leading-[0.9] mb-3 tracking-tighter">
                          {c.title}
                        </h3>
                        {Icon && <Icon className="h-6 w-6 opacity-40" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* 2. PLAYING SCREEN */}
          {view === "playing" && (
            <motion.div
              key="playing"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white border-[8px] border-black p-8 md:p-16 shadow-[30px_30px_0px_#4f46e5] relative">
                {/* BACK BUTTON INSIDE CARD */}
                <button
                  onClick={() => setView("home")}
                  className="absolute top-6 left-6 flex items-center gap-2 font-black uppercase text-[10px] bg-slate-100 px-3 py-1 border-2 border-black hover:bg-black hover:text-white transition-all z-20"
                >
                  <ArrowLeft size={14} /> Back
                </button>

                <div className="mt-8">
                  <span className="inline-block px-4 py-1 bg-black text-white font-bold text-xs mb-6 uppercase tracking-widest">
                    Challenge {currentLevel + 1}
                  </span>
                  <h2 className="text-5xl md:text-4xl font-normal mb-16 leading-[1.2] tracking-tighter">
                    {challenges[currentLevel].problem}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challenges[currentLevel].options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSelectedCorrect(opt.isCorrect);
                          if (opt.isCorrect) {
                            setScore((s) => s + 1);
                            setCompletedLevels((prev) => [
                              ...new Set([...prev, currentLevel]),
                            ]);
                          }
                          setView("result");
                        }}
                        className="group p-8 border-[4px] border-black hover:bg-black transition-all text-left bg-white shadow-[6px_6px_0px_black] active:translate-x-1 active:translate-y-1 active:shadow-none"
                      >
                        <span
                          className={`text-2xl font-black uppercase group-hover:text-white leading-none mb-3 block`}
                        >
                          {opt.label}
                        </span>
                        <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 leading-tight">
                          {opt.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. RESULT SCREEN */}
          {view === "result" && (
            <motion.div
              key="result"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <div
                className={`p-12 border-[8px] bg-white shadow-[20px_20px_0px_black] ${selectedCorrect ? "border-emerald-500" : "border-rose-500"}`}
              >
                <h2
                  className={`text-9xl font-black mb-8 italic tracking-tighter ${selectedCorrect ? "text-emerald-500" : "text-rose-500"}`}
                >
                  {selectedCorrect ? "GOT IT." : "NOPE."}
                </h2>

                <div className="bg-black text-white p-8 mb-10">
                  <p className="text-indigo-300 font-bold text-md uppercase mb-4 tracking-[0.1em]">
                    The UX Logic
                  </p>
                  <p className="text-2xl font-normal leading-[1.5] tracking-tight">
                    "{challenges[currentLevel].lessonBody}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleNext}
                    className="flex-1 py-6 bg-black text-white font-black uppercase text-3xl shadow-[8px_8px_0px_#4f46e5] hover:bg-indigo-600 transition-all"
                  >
                    {currentLevel === challenges.length - 1
                      ? "Finish Game"
                      : "Next One →"}
                  </button>
                  <button
                    onClick={() => setView("home")}
                    className="px-8 py-6 border-[4px] border-black font-black uppercase text-md hover:bg-slate-100 transition-all"
                  >
                    Dashboard
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. FINAL SCORE SCREEN */}
          {view === "finished" && (
            <motion.div
              key="finished"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="bg-white border-[10px] border-black p-16 shadow-[40px_40px_0px_#fbbf24]">
                <h2 className="text-2xl font-black uppercase mb-4">
                  Evaluation Complete
                </h2>
                <div className="text-[12rem] font-black leading-none tracking-tighter mb-4">
                  {score}/20
                </div>
                <div className="text-5xl font-bold text-green-950 uppercase inline-block px-8 py-2 mb-12">
                  {getRank()}
                </div>
                <button
                  onClick={() => {
                    setScore(0);
                    setCompletedLevels([]);
                    setView("home");
                  }}
                  className="w-full py-8 bg-black text-white font-black uppercase text-4xl hover:bg-indigo-600 transition-colors shadow-[10px_10px_0px_#4f46e5]"
                >
                  Restart Journey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
