import React, { useState, useCallback, useRef, useEffect } from 'react';
import HomePage from './components/HomePage';
import LearningMaterial from './components/LearningMaterial';
import QuizView from './components/QuizView';
import QuizResult from './components/QuizResult';
import MusicToggle from './components/MusicToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { type Level, type UserProgress } from './types';
import { LEVELS } from './constants';
import { BADGES } from './badges';


type View = 'home' | 'learning' | 'quiz' | 'result';

const MUSIC_URL = "https://cdn.pixabay.com/audio/2022/03/22/audio_3524b62913.mp3";

export default function App() {
  const [view, setView] = useState<View>('home');
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [studentName, setStudentName] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [newlyEarnedBadges, setNewlyEarnedBadges] = useState<string[]>([]);

  const [userProgress, setUserProgress] = useLocalStorage<UserProgress>('mathstar-progress-v2', {
    unlockedLevels: [1],
    scores: {},
    badges: [],
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playMusicOnInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay blocked, waiting for user to unmute.");
        });
      }
      window.removeEventListener('click', playMusicOnInteraction);
      window.removeEventListener('keydown', playMusicOnInteraction);
    };

    window.addEventListener('click', playMusicOnInteraction);
    window.addEventListener('keydown', playMusicOnInteraction);
    
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }

    return () => {
      window.removeEventListener('click', playMusicOnInteraction);
      window.removeEventListener('keydown', playMusicOnInteraction);
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(prevMuted => {
      const newMuted = !prevMuted;
      if (audioRef.current) {
        audioRef.current.muted = newMuted;
        if (!newMuted && audioRef.current.paused) {
          audioRef.current.play().catch(e => console.error("Could not play audio:", e));
        }
      }
      return newMuted;
    });
  };


  const selectLevel = useCallback((level: Level, name:string) => {
    setCurrentLevel(level);
    setStudentName(name);
    setView('learning');
  }, []);

  const proceedToQuiz = useCallback(() => {
    if (currentLevel) {
      setView('quiz');
    }
  }, [currentLevel]);

  const finishQuiz = useCallback((results: { score: number; perfectStreak: boolean }) => {
    if (!currentLevel) return;

    const { score: finalScore, perfectStreak } = results;

    setScore(finalScore);
    setUserProgress(prevProgress => {
      const newScores = { ...prevProgress.scores, [currentLevel.id]: finalScore };
      const newUnlockedLevels = [...prevProgress.unlockedLevels];
      const newBadges = new Set(prevProgress.badges || []);
      const justEarned: string[] = [];

      const percentage = (finalScore / 10) * 100;

      if (percentage >= 70) {
        // Award level completion badge
        const completeBadgeId = `LEVEL_${currentLevel.id}_COMPLETE`;
        if (!newBadges.has(completeBadgeId)) {
            newBadges.add(completeBadgeId);
            justEarned.push(completeBadgeId);
        }

        if (currentLevel.id < LEVELS.length) {
          const nextLevelId = currentLevel.id + 1;
          if (!newUnlockedLevels.includes(nextLevelId)) {
            newUnlockedLevels.push(nextLevelId);
          }
        }
      }
      
      if (percentage === 100) {
        // Award perfect score badge
        const perfectBadgeId = `PERFECT_SCORE_L${currentLevel.id}`;
        if (!newBadges.has(perfectBadgeId)) {
            newBadges.add(perfectBadgeId);
            justEarned.push(perfectBadgeId);
        }
      }

      // Award perfect streak badge
      if (perfectStreak) {
        const streakBadgeId = 'STREAK_MASTER';
        if (!newBadges.has(streakBadgeId)) {
          newBadges.add(streakBadgeId);
          justEarned.push(streakBadgeId);
        }
      }

      // Check for Galaxy Master badge
      const allLevelsPassed = LEVELS.every(level => {
        const levelScore = newScores[level.id];
        return levelScore !== undefined && (levelScore / 10 * 100) >= 70;
      });

      if (allLevelsPassed) {
        const masterBadgeId = 'GALAXY_MASTER';
        if (!newBadges.has(masterBadgeId)) {
          newBadges.add(masterBadgeId);
          justEarned.push(masterBadgeId);
        }
      }

      setNewlyEarnedBadges(justEarned);
      
      return { 
        scores: newScores, 
        unlockedLevels: newUnlockedLevels,
        badges: Array.from(newBadges),
      };
    });
    setView('result');
  }, [currentLevel, setUserProgress]);

  const goHome = useCallback(() => {
    setCurrentLevel(null);
    setScore(0);
    setNewlyEarnedBadges([]);
    setView('home');
  }, []);
  
  const retryLevel = useCallback((level: Level, name: string) => {
      setCurrentLevel(level);
      setStudentName(name);
      setNewlyEarnedBadges([]);
      setView('learning');
  }, []);

  const renderView = () => {
    switch (view) {
      case 'learning':
        return currentLevel && <LearningMaterial level={currentLevel} studentName={studentName} onProceed={proceedToQuiz} onGoHome={goHome} />;
      case 'quiz':
        return currentLevel && <QuizView level={currentLevel} onQuizComplete={finishQuiz} />;
      case 'result':
        return currentLevel && <QuizResult level={currentLevel} score={score} studentName={studentName} onRetry={retryLevel} onGoHome={goHome} newlyEarnedBadges={newlyEarnedBadges} />;
      case 'home':
      default:
        return <HomePage userProgress={userProgress} onSelectLevel={selectLevel} />;
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
       <audio ref={audioRef} src={MUSIC_URL} loop />
       <MusicToggle isMuted={isMuted} onToggle={toggleMute} />
      <div className="container mx-auto px-4 py-8">
        {renderView()}
      </div>
    </div>
  );
}