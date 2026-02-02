
import React from 'react';

const Project: React.FC = () => {
  const cards = [
    {
      title: 'Problem',
      desc: 'At Libyan International University, student feedback is collected using fragmented platforms not connected to official enrollment systems. This separation undermines data credibility, increases manual workload, and delays critical academic interventions.',
      icon: '⚠️',
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      title: 'Solution',
      desc: 'The Academic Feedback Module (AFM) synchronizes evaluations with verified enrollment data through a secure JSON-based Single Sign-On (SSO) mechanism. It enforces institutional policies at the moment of submission, ensuring only eligible students can evaluate registered courses.',
      icon: '⚙️',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Impact',
      desc: 'The AFM improves data reliability, operational efficiency, and institutional responsiveness. It offers a scalable model for digital transformation, enabling real-time analytical views and structured reporting to support quality assurance monitoring.',
      icon: '📈',
      color: 'bg-green-50 text-green-600 border-green-100'
    }
  ];

  const techStack = ['Laravel', 'MySQL', 'Redis', 'C4 Architecture'];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Project Header */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Graduation Project</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 serif leading-tight max-w-4xl mx-auto">
          Academic Feedback Module: An Integrated System for Quality Assurance and Student Evaluation at Libyan International University
        </h1>
        <div className="space-y-1">
          <p className="text-2xl text-slate-800 font-bold serif">Nahla Nagib Burweiss</p>
          <p className="text-lg text-slate-600 font-medium italic">Supervised by: Mr. Ehab A. Omar Elfallah</p>
        </div>
        
        {/* Research Status Subsection */}
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="bg-blue-600 p-3 rounded-full text-white shadow-md shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.848l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.848l-7-3zM14 9.581l-4 1.714-4-1.714V13a1 1 0 00.293.707l2 2a1 1 0 001.414 0l2-2A1 1 0 0014 13V9.581z" />
            </svg>
          </div>
          <p className="text-sm md:text-base text-blue-900 font-medium leading-relaxed">
            Research submitted to the 2026 IEEE 5th International Maghreb Conference on Sciences and Techniques of Automatic Control and Computer Engineering.
          </p>
        </div>
        
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-8"></div>
      </div>

      {/* Presentation Gallery Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
          <img
            src="/images/project/screenshot-2.JPG"
            alt="Scientific Day II Presentation: Fourth Industrial Revolution Overview"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-8">
            <p className="text-white font-medium italic">
              Scientific Day II Presentation: Fourth Industrial Revolution Overview
            </p>
          </div>
        </div>

        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
          <img
            src="/images/project/screenshot-1.JPG"
            alt="Academic engagement at Libyan International Medical University"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-8">
            <p className="text-white font-medium italic">
              Academic Engagement at Libyan International Medical University
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Summary Section / Overview */}
      <div className="bg-slate-900 rounded-[40px] text-white p-8 md:p-16 mb-20 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <h3 className="text-2xl font-bold serif mb-6">Abstract & Overview</h3>
               <div className="text-slate-300 text-lg leading-relaxed font-light space-y-6">
                 <p>
                   Student feedback is a fundamental component of academic quality assurance. However, relying on fragmented feedback platforms that are not integrated with official enrollment systems undermines data credibility and increases administrative workload.
                 </p>
                 <p>
                   This graduation project presents the design and validation of an integrated <strong>Academic Feedback Module (AFM)</strong>. Developed as a proof-of-concept at LIMU, the system enables real-time feedback collection and validation through a secure JSON-based Single Sign-On (SSO) mechanism, ensuring data integrity without direct database coupling.
                 </p>
               </div>
               <div className="mt-8 flex flex-wrap gap-3">
                  {techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden transform group-hover:-rotate-1 transition-transform">
                  <div className="w-full h-full p-8 flex flex-col justify-center items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-2">
                       <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="text-slate-400 text-sm font-mono">C4 Architectural Modeling</p>
                    <p className="text-white text-lg font-bold">Integrated System Workflow</p>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/30 rounded-full blur-2xl"></div>
            </div>
         </div>
      </div>

      {/* Problem/Solution/Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {cards.map((card, idx) => (
          <div key={idx} className={`p-8 rounded-3xl border shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col ${card.color}`}>
            <div className="text-4xl mb-6">{card.icon}</div>
            <h3 className="text-2xl font-bold serif mb-4">{card.title}</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Research Paper CTA Section */}
      <section className="mb-20 bg-white border border-slate-200 rounded-[40px] p-8 md:p-12 text-center shadow-sm">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block p-4 bg-slate-50 rounded-2xl mb-4">
            <svg className="w-12 h-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 serif">Research Paper</h2>
          <p className="text-slate-600 text-lg">
            For those interested in a deeper academic look into the methodology, C4 modeling, and results, the full 7-page research paper is available for review.
          </p>
          <div className="pt-4">
            <a 
              href="/papers/academic-feedback-system-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg space-x-3 group"
            >
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Research Paper (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
