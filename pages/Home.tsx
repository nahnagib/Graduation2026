
import React from 'react';
import { Page } from '../App';
import Countdown from '../components/Countdown';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 px-4 overflow-hidden">
        {/* Academic Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-slate-500"></div>
                ))}
            </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block bg-blue-600/20 border border-blue-500/30 px-4 py-1 rounded-full text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Invitation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight serif">
            You’re Invited to My Graduation <br className="hidden md:block"/> Project Discussion
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
            A special milestone I’m excited to share with you. 
            Join me as I present the culmination of my academic journey.
          </p>
          
          <Countdown />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate(Page.Event)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Event Details
            </button>
            <button 
              onClick={() => onNavigate(Page.About)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Date</h3>
            <p className="text-xl font-bold text-slate-800">8 / 2 / 2026</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Time</h3>
            <p className="text-xl font-bold text-slate-800">9:45 AM</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-2">Location</h3>
            <p className="text-lg font-bold text-slate-800">L.I.M.U</p>
          </div>
        </div>
      </section>

      {/* Special Message Section */}
      <section className="bg-blue-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center space-x-2 text-blue-600">
             <div className="w-8 h-[2px] bg-blue-600"></div>
             <span className="serif text-xl italic font-semibold">Special Message</span>
             <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-blue-100 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
             </div>
             <div className="space-y-6 text-xl md:text-2xl text-slate-700 leading-relaxed serif italic">
                <p>“This day is not only about celebrating an academic achievement, but also about sharing a special moment with the people who have supported me along the way.”</p>
                <p>“The presence of family and friends makes milestones like this more meaningful, joyful, and unforgettable.”</p>
                <p>“Having you there means celebrating the journey, the memories, and the new beginnings together.”</p>
             </div>
             <div className="mt-10 pt-10 border-t border-slate-100">
                <button 
                  onClick={() => onNavigate(Page.Project)}
                  className="text-blue-700 font-bold hover:underline tracking-widest text-sm uppercase flex items-center justify-center mx-auto space-x-2"
                >
                  <span>Explore the Graduation Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
