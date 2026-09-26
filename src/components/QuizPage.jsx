import React, { useState, useEffect, useCallback } from 'react';

export default function QuizPage({ questions, userInfo, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(curr => curr + 1);
      setSelectedAnswer(null);
      setIsRevealed(false);
      setTimeLeft(30);
    } else {
      onFinish(answers);
    }
  }, [currentIndex, questions.length, answers, onFinish]);

  // Handle timer
  useEffect(() => {
    if (isRevealed) return;

    if (timeLeft === 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isRevealed]);

  const handleTimeOut = () => {
    setIsRevealed(true);
    // Record a wrong answer or null
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, selected: null, isCorrect: false }]);
  };

  const handleSelectAnswer = (index) => {
    if (isRevealed) return;
    
    setSelectedAnswer(index);
    setIsRevealed(true);
    
    const isCorrect = index === currentQuestion.correct;
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, selected: index, isCorrect }]);
  };

  // Timer SVG calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 30) * circumference;
  
  const timerColor = timeLeft > 10 ? 'text-blue-900' : timeLeft > 5 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-4 md:p-8 font-sans">
      <header className="w-full max-w-4xl mx-auto flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
            TN
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-sm md:text-base">FASE Cybercrime Initiative</h2>
            <p className="text-xs text-slate-500">Candidate: {userInfo?.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-slate-700">Question {currentIndex + 1} of {questions.length}</p>
            <p className="text-xs text-slate-500">Progress: {Math.round(((currentIndex) / questions.length) * 100)}%</p>
          </div>
          
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="transform -rotate-90 w-14 h-14">
              <circle cx="28" cy="28" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200" />
              <circle 
                cx="28" cy="28" r="20" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="transparent" 
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className={`${timerColor} transition-all duration-1000 ease-linear`} 
              />
            </svg>
            <span className={`absolute font-bold text-sm ${timerColor}`}>{timeLeft}</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center w-full">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                Security Assessment
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQuestion.correct;
                
                let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-slate-700 font-medium ";
                
                if (!isRevealed) {
                  btnClass += "border-slate-200 hover:border-blue-900 hover:bg-blue-50 cursor-pointer bg-white";
                } else {
                  if (isCorrect) {
                    btnClass += "border-green-500 bg-green-50 text-green-800";
                  } else if (isSelected) {
                    btnClass += "border-red-500 bg-red-50 text-red-800";
                  } else {
                    btnClass += "border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isRevealed}
                    onClick={() => handleSelectAnswer(idx)}
                    className={btnClass}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-white border border-slate-300 rounded-lg mr-4 font-bold text-slate-500 shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                      
                      {isRevealed && isCorrect && (
                        <span className="ml-auto text-green-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                      )}
                      {isRevealed && isSelected && !isCorrect && (
                        <span className="ml-auto text-red-600">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {isRevealed && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                  {currentIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Progress bar at bottom */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-slate-200">
        <div 
          className="h-full bg-blue-900 transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
