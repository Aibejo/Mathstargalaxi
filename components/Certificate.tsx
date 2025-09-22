
import React, { forwardRef } from 'react';
import { type Level } from '../types';
import BejoMascot from './icons/BejoMascot';
import StarIcon from './icons/StarIcon';

interface CertificateProps {
  studentName: string;
  level: Level;
  score: number;
}

const Certificate = forwardRef<HTMLDivElement, CertificateProps>(({ studentName, level, score }, ref) => {
  const completionDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div ref={ref} className="w-[10.5in] h-[8in] bg-slate-100 p-8 flex flex-col items-center justify-center text-slate-800 font-sans" style={{fontFamily: "'Nunito', sans-serif"}}>
      <div className="w-full h-full border-4 border-cyan-500 rounded-lg p-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-yellow-300 rounded-full opacity-50"></div>
        <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-cyan-300 rounded-full opacity-50"></div>
        
        <header className="text-center z-10">
          <div className="flex items-center justify-center gap-2">
            <StarIcon className="w-10 h-10 text-yellow-500" />
            <h1 className="text-4xl font-black text-cyan-600">MathStar Galaxy</h1>
            <StarIcon className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-3xl font-bold mt-2 text-slate-700">Sertifikat Penyelesaian</h2>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center text-center z-10">
          <p className="text-xl mt-8">Dengan bangga diberikan kepada:</p>
          <p className="text-5xl font-extrabold text-pink-600 my-4 border-b-2 border-pink-600 pb-2 px-8">
            {studentName}
          </p>
          <p className="text-xl">
            atas keberhasilannya menyelesaikan
          </p>
          <p className="text-3xl font-bold text-cyan-700 my-2">{level.title}</p>
          <p className="text-xl">
            dengan skor
          </p>
          <p className="text-4xl font-bold text-slate-800 mt-2">{score}%</p>
        </main>
        
        <footer className="w-full flex justify-between items-end z-10">
          <div className="text-left">
            <p className="font-bold">Tanggal Penyelesaian</p>
            <p>{completionDate}</p>
          </div>
          <div className="flex flex-col items-center">
            <BejoMascot className="w-24 h-24" />
            <p className="font-bold mt-2 text-slate-600">Bejo Si Robot Matematika</p>
          </div>
        </footer>
      </div>
    </div>
  );
});

export default Certificate;
