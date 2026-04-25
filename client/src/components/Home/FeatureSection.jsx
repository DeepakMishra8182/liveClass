import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaComments, FaShieldAlt, FaUsers, FaVideo } from "react-icons/fa";

const iconMap = {
  FaVideo: FaVideo,
  FaComments: FaComments,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
};

const FeatureSection = () => {
  return (
    <section className="relative px-6 py-24 sm:px-12 lg:px-16 bg-[#020617] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 w-full h-full -translate-x-1/2 pointer-events-none left-1/2">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tighter text-white md:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              {APP_CONFIG.HOME_CONTENT.FEATURES.HEADING}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl font-medium leading-relaxed text-slate-400">
            {APP_CONFIG.HOME_CONTENT.FEATURES.DESCRIPTION}
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {APP_CONFIG.FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            // Modern Color Logic
            const colorClasses = 
              feature.color === "blue" ? "from-blue-500 to-indigo-600 shadow-blue-500/20" : 
              feature.color === "green" ? "from-emerald-500 to-teal-600 shadow-emerald-500/20" : 
              feature.color === "purple" ? "from-purple-500 to-pink-600 shadow-purple-500/20" : 
              "from-indigo-500 to-violet-600 shadow-indigo-500/20";

            return (
              <div
                key={index}
                className="group relative p-10 transition-all duration-500 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>

                <div
                  className={`relative w-20 h-20 bg-gradient-to-br ${colorClasses} rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}
                >
                  {IconComponent && <IconComponent className="w-10 h-10 filter drop-shadow-lg" />}
                </div>

                <h3 className="relative mb-4 text-2xl font-black tracking-tight text-white transition-colors group-hover:text-indigo-400">
                  {feature.title}
                </h3>
                
                <p className="relative text-base font-medium leading-relaxed transition-colors text-slate-400 group-hover:text-slate-300">
                  {feature.description}
                </p>

                {/* Subtle Decorative Circle */}
                <div className="absolute flex items-center justify-center w-12 h-12 transition-colors border rounded-full top-6 right-6 border-white/5 group-hover:border-white/10">
                    <div className="w-2 h-2 transition-colors rounded-full bg-slate-700 group-hover:bg-indigo-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;









