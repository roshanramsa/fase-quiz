import React, { useState } from 'react';

export default function LandingPage({ onStart }) {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && college.trim()) {
      
      // Fire and forget tracking to Google Sheets
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
      if (scriptUrl) {
        const formData = new FormData();
        formData.append('Name', name.trim());
        formData.append('College', college.trim());
        formData.append('Timestamp', new Date().toLocaleString());
        
        fetch(scriptUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }).catch(err => console.error("Sheet tracking failed", err));
      }

      onStart({ name, college });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-blue-900 p-8 text-center border-b-4 border-yellow-500">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <span className="text-blue-900 font-bold text-xl">TN</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">Festember x TNPL</h1>
          <h2 className="text-xl text-blue-100 font-medium">Cybercrime Awareness Initiative</h2>
        </div>
        
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Cybersecurity Assessment</h3>
            <p className="text-slate-600">Please enter your details to begin the official certification quiz.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="As it should appear on certificate"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="college" className="block text-sm font-semibold text-slate-700 mb-1">Institution / College Name</label>
              <input
                id="college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="Enter your institution name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!name.trim() || !college.trim()}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 uppercase tracking-wider"
            >
              Start Quiz
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-500 border-t border-slate-100 pt-6">
            <p>10 Questions - 30 Seconds per Question - Certificate on Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
