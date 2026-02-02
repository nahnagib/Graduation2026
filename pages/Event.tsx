
import React from 'react';

const Event: React.FC = () => {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Graduation Project Discussion</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>

        <div className="max-w-3xl mx-auto mt-8 mb-2">
          <img
            src="/images/event/limu.JPG"
            alt="Libyan International Medical University"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Event Details Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 space-y-10">
          <h2 className="text-2xl font-bold text-slate-800 serif border-b border-slate-100 pb-4 text-center">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Date</p>
                <p className="text-lg font-semibold text-slate-800">8 February 2026</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Time</p>
                <p className="text-lg font-semibold text-slate-800">9:45 AM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Location</p>
                <p className="text-lg font-semibold text-slate-800">Libyan International Medical University</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" /></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Room</p>
                <p className="text-lg font-semibold text-slate-800">Networks Lab</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col items-center">
             <a 
              href="https://maps.app.goo.gl/mJVZLorhUGXB1kkbA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full max-w-sm px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-md group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              Open Location in Google Maps
            </a>
            <p className="mt-6 text-slate-600 text-base font-medium">
              The discussion will begin promptly at 9:45 AM.
            </p>
            <p className="mt-2 text-slate-400 text-sm italic">
              “Please arrive 10–15 minutes early.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
