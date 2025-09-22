import React, { useMemo, useRef } from 'react';
import { type Level } from '../types';
import BejoMascot from './icons/BejoMascot';
import StarIcon from './icons/StarIcon';
import { MASCOT_MESSAGES } from '../constants';
import Certificate from './Certificate';
import BadgeIcon from './BadgeIcon';
import { BADGES } from '../badges';

declare global {
  interface Window {
    html2canvas: any;
  }
}

interface QuizResultProps {
  level: Level;
  score: number;
  studentName: string;
  onRetry: (level: Level, name: string) => void;
  onGoHome: () => void;
  newlyEarnedBadges: string[];
}

export default function QuizResult({ level, score, studentName, onRetry, onGoHome, newlyEarnedBadges }: QuizResultProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const totalQuestions = 10;
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPass = percentage >= 70;

  const { stars, message } = useMemo(() => {
    let s = 0;
    if (percentage >= 70) s = 1;
    if (percentage >= 90) s = 2;
    if (percentage === 100) s = 3;

    const messageOptions = isPass ? MASCOT_MESSAGES.SUCCESS : MASCOT_MESSAGES.FAILURE;
    const randomMessage = messageOptions[Math.floor(Math.random() * messageOptions.length)];

    return { stars: s, message: randomMessage };
  }, [percentage, isPass]);

  const handleDownloadCertificate = () => {
    const element = certificateRef.current;
    if (element && window.html2canvas) {
      window.html2canvas(element, { useCORS: true, scale: 2 }).then((canvas: HTMLCanvasElement) => {
        const link = document.createElement('a');
        link.download = `Sertifikat_${studentName.replace(' ', '_')}_Level_${level.id}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }).catch((err: any) => {
        console.error("Gagal membuat sertifikat:", err)
      });
    } else {
        console.error("Elemen sertifikat tidak ditemukan atau html2canvas belum termuat.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-8 text-center animate-fade-in-up">
        <h1 className="text-4xl font-black text-yellow-400 mb-2">
          {isPass ? 'Selamat!' : 'Hampir Berhasil!'}
        </h1>
        <p className="text-xl text-slate-300 mb-6">Hasil Kuis {level.title.split(':')[0]}</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-6">
          <p className="text-lg text-slate-400">Skor Kamu</p>
          <p className="text-7xl font-bold text-cyan-400 my-2">{percentage}%</p>
          <p className="text-lg text-white">({score} dari {totalQuestions} benar)</p>
        </div>

        <div className="flex justify-center mb-6">
          {[...Array(3)].map((_, i) => (
            <StarIcon key={i} className={`w-16 h-16 transition-all duration-500 ${i < stars ? 'text-yellow-400' : 'text-slate-600'}`} style={{transitionDelay: `${i * 150}ms`}} />
          ))}
        </div>

        {newlyEarnedBadges && newlyEarnedBadges.length > 0 && (
          <div className="bg-slate-900 rounded-xl p-4 my-6 animate-fade-in-up">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Lencana Baru Didapat!</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {newlyEarnedBadges.map(badgeId => (
                <BadgeIcon key={badgeId} badgeId={badgeId} />
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-center gap-4 bg-slate-700 p-4 rounded-lg mb-8">
          <BejoMascot className="w-20 h-20" />
          <p className="text-lg text-white italic">"{message}"</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onGoHome}
            className="px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition-transform transform hover:scale-105"
          >
            Kembali ke Beranda
          </button>
           {isPass && (
             <button
              onClick={handleDownloadCertificate}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Unduh Sertifikat (PNG)
            </button>
           )}
          <button
            onClick={() => onRetry(level, studentName)}
            className="px-6 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Coba Lagi
          </button>
        </div>
      </div>
      <div style={{ position: 'fixed', left: '-9999px', top: '0' }}>
         <Certificate ref={certificateRef} studentName={studentName} level={level} score={percentage} />
      </div>
    </div>
  );
}