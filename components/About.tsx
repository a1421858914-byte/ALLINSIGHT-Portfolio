import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-orange-600 rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
            <img 
              src="https://picsum.photos/800/1000?random=50" 
              alt="Visual Artist" 
              className="relative rounded-2xl w-full object-cover shadow-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-8 left-8 bg-midnight/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <p className="text-3xl font-bold text-white mb-1">10+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              不只是记录者，<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                更是光影的造梦师
              </span>
            </h2>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              作为天津奥因塞特设计有限公司 (All Insight Design) 的核心创意团队，我们擅长运用大胆的色彩与构图，打破常规视觉界限。
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              曾与多家时尚杂志及潮流品牌合作，致力于为每一个瞬间注入电影般的质感与灵魂。无论是静态的平面视觉还是动态的影像叙事，我们都坚持以独特的艺术视角，为品牌和个人打造极具辨识度的视觉资产。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p className="text-white">136 1218 5987</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-white">460117431@qq.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;