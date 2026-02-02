import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl serif italic mb-4">“Thank you for being part of this special milestone.”</p>
        <div className="w-16 h-px bg-blue-500 mx-auto mb-6"></div>
        <div className="text-slate-400 text-sm space-y-2">
          <p>© 2026 Graduation Discussion</p>
          <p>Libyan International Medical University</p>
          <p className="pt-4 opacity-50">Designed for family and friends with love.</p>
          <p className="pt-4 opacity-50">Nahla Nagib Burweiss</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
