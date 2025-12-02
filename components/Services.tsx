import React from 'react';
import { SERVICES_DATA, ICON_MAP } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">服务体系</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            从品牌策划到智能互动，提供全方位的视觉解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = ICON_MAP[service.icon] || ICON_MAP['Zap'];
            return (
              <div 
                key={service.id}
                className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500 hover:to-orange-500 transition-all duration-500"
              >
                <div className="bg-charcoal h-full rounded-xl p-8 flex flex-col relative overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon className="text-purple-400 group-hover:text-white transition-colors" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-orange-300 transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;