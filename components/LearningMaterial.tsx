import React from 'react';
import { type Level } from '../types';
import BejoMascot from './icons/BejoMascot';
import StarIcon from './icons/StarIcon';

interface LearningMaterialProps {
  level: Level;
  studentName: string;
  onProceed: () => void;
  onGoHome: () => void;
}

export default function LearningMaterial({ level, studentName, onProceed, onGoHome }: LearningMaterialProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-fade-in-up">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-2xl p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">{level.title}</h1>
          <p className="text-xl text-slate-300">Halo, <span className="font-bold text-yellow-400">{studentName}</span>! Ayo pelajari materi ini sebelum mulai kuis!</p>
        </header>

        <main className="space-y-6">
          {level.materials.map((material, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                <StarIcon className="w-6 h-6" />
                {material.title}
              </h2>
              <p className="text-slate-300 mb-3">{material.explanation}</p>
              <div className="bg-slate-700 p-3 rounded-md border-l-4 border-cyan-500">
                <p className="text-white italic">{material.example}</p>
              </div>
            </div>
          ))}
        </main>
        
        <footer className="mt-10 text-center">
           <div className="flex items-center justify-center gap-4 bg-slate-700 p-4 rounded-lg mb-8 max-w-lg mx-auto">
            <BejoMascot className="w-20 h-20" />
            <p className="text-lg text-white italic">"Fokus ya! Kalau sudah siap, ayo kita mulai kuisnya!"</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGoHome}
                className="px-8 py-3 bg-slate-600 text-white font-bold rounded-lg shadow-lg hover:bg-slate-700 transition-transform transform hover:scale-105"
              >
                Kembali
              </button>
              <button
                onClick={onProceed}
                className="px-8 py-4 bg-green-500 text-white font-bold text-xl rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Mulai Kuis!
              </button>
          </div>
        </footer>
      </div>
    </div>
  );
}