import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-white/5 py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold tracking-tighter mb-4 text-white">
          ALL INSIGHT <span className="font-light text-gray-500">| 天津奥因塞特设计有限公司</span>
        </p>
        <div className="text-gray-500 text-sm space-y-2">
          <p>© {new Date().getFullYear()} All Insight Design. All rights reserved.</p>
          <p className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            津ICP备00000000号-1
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;