
import React from 'react';

const About: React.FC = () => {
  const journey = [
    { 
      year: 'February 2022', 
      title: 'Start of University', 
      icon: '🎓',
      desc: 'I began my journey in Software Engineering, driven by curiosity and a strong desire to understand how technology can solve real-world problems.'
    },
    { 
      year: '2022 – 2024', 
      title: 'Key Learning & Academic Contributions', 
      icon: '💡',
      desc: (
        <div className="space-y-4">
          <p>During these years, my academic experience went beyond lectures and exams. I actively participated in and contributed to scientific and programming events that shaped my skills and confidence:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li><span className="font-bold">Scientific Day II (October 2022):</span> Delivered a talk on the Fourth Industrial Revolution and participated in the Speed Programming Contest.</li>
            <li><span className="font-bold">Scientific Day III (November 2023):</span> Co-organized the Benghazi Inter-University Programming Challenge, collaborating with students from multiple universities.</li>
            <li><span className="font-bold">Academic Contribution (First Semester):</span> Contributed new practical programming examples to the Programming I course, supporting student learning and improving course materials.</li>
          </ul>
        </div>
      )
    },
    { 
      year: '2025 – 2026', 
      title: 'Graduation Project Milestone', 
      icon: '🏆',
      desc: 'Reached a major academic milestone by developing my graduation project, representing the culmination of years of learning, practice, challenges, and personal growth.'
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">About Me</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative">
          <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img
              src="/images/about/profile.JPG"
              alt="Nahla Nagib Burweiss"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-lg serif">Nahla Nagib Burweiss</p>
              <p className="text-slate-200 text-sm">Software Engineering • Class of 2026</p>
            </div>
          </div>
           {/* Decorative elements */}
           <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full"></div>
           <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-blue-50 rounded-full"></div>
        </div>

        <div className="space-y-8">
          <div className="relative">
             <div className="text-6xl text-blue-100 absolute -top-8 -left-4 font-serif">“</div>
             <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10">
               I am <strong>Nahla Nagib Burweiss</strong>, a passionate and ambitious software engineering graduate with a strong love for learning, building, and turning ideas into real solutions.
             </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Throughout my academic journey, I have always believed that growth comes from curiosity, challenges, and continuous self-development.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            My graduation project represents more than just an academic milestone — it reflects years of effort, late nights, learning experiences, and the determination to keep moving forward toward my dreams.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-slate-900 serif text-center mb-12">My Academic Journey</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

          <div className="space-y-16">
            {journey.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot/Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-xl shadow-md transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all hover:shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-slate-900 serif mb-4">{item.title}</h3>
                    <div className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
