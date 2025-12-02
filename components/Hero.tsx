import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-midnight">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-fade-in-up">
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Visual Artist / Design Agency</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up [animation-delay:200ms]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            光影所至
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 mt-2">
            皆为传奇
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          用镜头重塑你的视觉想象，致力于为每一个瞬间注入电影般的质感与灵魂。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <a 
            href="#portfolio"
            className="group relative px-8 py-4 bg-white text-midnight font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              探索作品 <ArrowRight size={18} />
            </span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            开启合作
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;