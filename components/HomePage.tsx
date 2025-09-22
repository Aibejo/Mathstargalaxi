import React, { useState } from 'react';
import { type Level, type UserProgress } from '../types';
import { LEVELS } from '../constants';
import { BADGES } from '../badges';
import BejoMascot from './icons/BejoMascot';
import LockIcon from './icons/LockIcon';
import StarIcon from './icons/StarIcon';
import BadgeIcon from './BadgeIcon';

interface HomePageProps {
  userProgress: UserProgress;
  onSelectLevel: (level: Level, name: string) => void;
}

interface LevelCardProps {
  level: Level;
  isUnlocked: boolean;
  score: number | undefined;
  onSelect: () => void;
}

const LevelCard = ({ level, isUnlocked, score, onSelect }: LevelCardProps) => {
  const scoreInPercent = score !== undefined ? (score / 10) * 100 : 0;
  
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onSelect}
        disabled={!isUnlocked}
        className={`relative w-40 h-40 rounded-full flex flex-col items-center justify-center p-4 text-center font-bold transition-all duration-300 transform
          ${isUnlocked 
            ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105 cursor-pointer' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
      >
        {!isUnlocked && (
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
            <LockIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <h3 className="text-xl">{level.title.split(':')[0]}</h3>
        <p className="text-sm font-normal">{level.description}</p>
        {isUnlocked && score !== undefined && (
          <div className="mt-2 text-yellow-300 text-lg font-black">
            {scoreInPercent.toFixed(0)}%
          </div>
        )}
      </button>
    </div>
  );
};

export default function HomePage({ userProgress, onSelectLevel }: HomePageProps) {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSelectLevel = (level: Level) => {
    if (userProgress.unlockedLevels.includes(level.id)) {
      setSelectedLevel(level);
    }
  };

  const handleStart = () => {
    if (name.trim() === '') {
      setError('Nama tidak boleh kosong!');
      return;
    }
    if (selectedLevel) {
      onSelectLevel(selectedLevel, name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <header className="mb-8 animate-fade-in-down">
        <div className="flex items-center justify-center gap-4">
          <StarIcon className="w-12 h-12 text-yellow-400" />
          <h1 className="text-5xl font-black text-white tracking-wider">MathStar Galaxy</h1>
        </div>
        <p className="text-xl text-cyan-300 mt-2">Belajar Matematika Bersama Bejo!</p>
      </header>
      
      <div className="flex items-center gap-4 mb-8">
          <BejoMascot className="w-24 h-24" />
          <p className="text-lg bg-slate-800 p-4 rounded-xl shadow-lg">Pilih level untuk memulai petualanganmu, <br/> Bintang Matematika!</p>
      </div>

      <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-12">
        {LEVELS.map((level, index) => (
          <React.Fragment key={level.id}>
            <LevelCard 
              level={level}
              isUnlocked={userProgress.unlockedLevels.includes(level.id)}
              score={userProgress.scores[level.id]}
              onSelect={() => handleSelectLevel(level)}
            />
            {index < LEVELS.length - 1 && <div className="w-12 h-1 bg-cyan-700 rounded-full"></div>}
          </React.Fragment>
        ))}
      </div>

      {selectedLevel && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mulai {selectedLevel.title.split(':')[0]}?</h2>
            <p className="text-slate-300 mb-6">Masukkan namamu untuk memulai!</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Ketik namamu di sini..."
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white text-center text-lg placeholder-slate-400 border-2 border-slate-600 focus:border-cyan-500 focus:outline-none"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex gap-4 mt-6">
              <button onClick={() => setSelectedLevel(null)} className="w-full px-6 py-3 bg-slate-600 text-white font-bold rounded-lg shadow-lg hover:bg-slate-700 transition">Batal</button>
              <button onClick={handleStart} className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition">Mulai!</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Koleksi Lencana</h2>
        {userProgress.badges && userProgress.badges.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 bg-slate-800 p-4 rounded-lg">
            {userProgress.badges.map((badgeId) => (
              <BadgeIcon key={badgeId} badgeId={badgeId} />
            ))}
          </div>
        ) : (
          <p className="text-slate-400">Belum ada lencana yang didapat. Selesaikan level untuk mendapatkannya!</p>
        )}
      </div>
    </div>
  );
}
