import React, { useState, useEffect, useMemo } from 'react';
import { type Level, type Question } from '../types';
import { shuffleArray } from '../utils/shuffle';
import BejoMascot from './icons/BejoMascot';

interface QuizViewProps {
  level: Level;
  onQuizComplete: (results: { score: number; perfectStreak: boolean }) => void;
}

export default function QuizView({ level, onQuizComplete }: QuizViewProps) {
  const randomizedQuestions = useMemo(() => shuffleArray(level.questions).slice(0, 10), [level.questions]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(randomizedQuestions.length).fill(null));
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [bejoAnimation, setBejoAnimation] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [correctStreak, setCorrectStreak] = useState(0);

  const currentQuestion: Question = randomizedQuestions[currentQuestionIndex];

  useEffect(() => {
    setCurrentAnswer('');
    setFeedback(null);
    setBejoAnimation('idle');
  }, [currentQuestionIndex]);

  const handleSubmit = () => {
    if (!currentAnswer) return;
    
    const isCorrect = currentAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    
    if (isCorrect) {
      setCorrectStreak(prev => prev + 1);
      setFeedback('correct');
      setBejoAnimation('correct');
    } else {
      setCorrectStreak(0);
      setFeedback('incorrect');
      setBejoAnimation('incorrect');
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = currentAnswer;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < randomizedQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const score = newAnswers.filter((answer, index) => answer?.trim().toLowerCase() === randomizedQuestions[index].correctAnswer.toLowerCase()).length;
        onQuizComplete({ score, perfectStreak: score === 10 });
      }
    }, 1500);
  };
  
  const progressPercentage = ((currentQuestionIndex) / randomizedQuestions.length) * 100;

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
      case 'true-false':
        const options = currentQuestion.type === 'true-false' ? ['Benar', 'Salah'] : currentQuestion.options;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((option, index) => {
              const isSelected = currentAnswer === option;
              let buttonClass = 'bg-slate-700 hover:bg-cyan-600';
              if (feedback) {
                if (option.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
                  buttonClass = 'bg-green-600';
                } else if (isSelected) {
                  buttonClass = 'bg-red-600';
                } else {
                  buttonClass = 'bg-slate-700 opacity-50';
                }
              } else if (isSelected) {
                buttonClass = 'bg-cyan-500';
              }
              return (
                <button
                  key={index}
                  onClick={() => !feedback && setCurrentAnswer(option)}
                  disabled={!!feedback}
                  className={`w-full p-4 rounded-lg text-lg text-white font-semibold transition-all duration-300 transform ${!feedback && 'hover:scale-105'} ${buttonClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        );
      case 'short-answer':
        return (
           <input
              type="text"
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              placeholder="Ketik jawabanmu..."
              disabled={!!feedback}
              className={`w-full max-w-sm mx-auto px-4 py-3 rounded-lg bg-slate-700 text-white text-center text-lg placeholder-slate-400 border-2 transition
                ${feedback === 'correct' ? 'border-green-500' : ''}
                ${feedback === 'incorrect' ? 'border-red-500' : 'border-slate-600'}
                focus:border-cyan-500 focus:outline-none`}
            />
        );
      default:
        return null;
    }
  }

  const getBejoMessage = () => {
    if (feedback === 'correct') return "Kerja bagus! Lanjutkan!";
    if (feedback === 'incorrect') return "Tidak apa-apa, ayo coba lagi!";
    return "Semangat! Kamu pasti bisa!";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl bg-slate-800 rounded-2xl shadow-2xl p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-cyan-400">{level.title}</h1>
          <p className="text-lg text-slate-300">Pertanyaan {currentQuestionIndex + 1} dari {randomizedQuestions.length}</p>
        </header>

        <div className="w-full bg-slate-700 rounded-full h-4 mb-6">
          <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg mb-6 min-h-[100px] flex items-center justify-center">
          <p className="text-2xl text-center text-white">{currentQuestion.text}</p>
        </div>

        {renderQuestionInput()}

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!currentAnswer || !!feedback}
            className="px-10 py-4 bg-yellow-500 text-slate-900 font-bold text-xl rounded-lg shadow-lg disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed hover:bg-yellow-400 transition-transform transform hover:scale-105"
          >
            Jawab
          </button>
        </div>
      </div>
       <div className="mt-6 flex items-center gap-2 text-slate-400">
            <BejoMascot className="w-20 h-20" animationState={bejoAnimation}/>
            <p className="bg-slate-800 p-3 rounded-lg shadow-md">{getBejoMessage()}</p>
       </div>
    </div>
  );
}