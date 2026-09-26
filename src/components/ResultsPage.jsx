import React from 'react';
import { generateCertificate, getCertificateLevel } from '../utils/certificate';

export default function ResultsPage({ answers, questions, userInfo, onRetry }) {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / questions.length) * 100);
  
  let tier, tierColor, tierBg, textColor;
  if (percentage >= 85) {
    tier = "Distinction";
    tierColor = "text-yellow-600";
    tierBg = "bg-yellow-50";
    textColor = "text-yellow-800";
  } else if (percentage >= 70) {
    tier = "Merit";
    tierColor = "text-blue-600";
    tierBg = "bg-blue-50";
    textColor = "text-blue-800";
  } else {
    tier = "Participation";
    tierColor = "text-slate-600";
    tierBg = "bg-slate-50";
    textColor = "text-slate-800";
  }

  const handleDownload = () => {
    const certInfo = getCertificateLevel(correctCount, questions.length);
    generateCertificate({
      name: userInfo.name,
      college: userInfo.college,
      score: correctCount,
      total: questions.length,
      level: certInfo.level,
      color: certInfo.color,
      date: new Date().toLocaleDateString()
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        
        <div className="bg-blue-900 p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
          <h1 className="text-3xl font-bold text-white mb-2 uppercase tracking-widest relative z-10">Assessment Complete</h1>
          <p className="text-blue-200 text-lg relative z-10">Tamil Nadu Police Cybercrime Initiative</p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-800 mb-2">{percentage}%</h2>
            <p className="text-slate-500">You scored {correctCount} out of {questions.length} questions correctly.</p>
          </div>

          <div className={`p-6 rounded-xl border mb-10 text-center ${tierBg} border-${tierColor.split('-')[1]}-200`}>
            <h3 className="text-lg font-semibold text-slate-600 mb-1">Performance Tier</h3>
            <div className={`text-3xl font-extrabold ${tierColor} uppercase tracking-wider mb-2`}>
              {tier}
            </div>
            <p className={`text-sm ${textColor}`}>
              {percentage >= 85 ? 'Outstanding knowledge of cybersecurity protocols.' : 
               percentage >= 70 ? 'Good understanding of digital safety.' : 
               'Basic awareness demonstrated. Keep learning.'}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Official Certificate
            </button>
            <button
              onClick={onRetry}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold py-4 px-8 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              Retake Assessment
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
