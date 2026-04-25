import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaComments, FaShieldAlt, FaUsers, FaVideo } from "react-icons/fa";

const iconMap = {
  FaVideo: FaVideo,
  FaComments: FaComments,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
};

// Modern Glowing Color Map
const colorMap = {
  blue: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
  green: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
  purple: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30",
  indigo: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30",
};

const FeaturesGrid = () => {
  const features = APP_CONFIG.FEATURES.slice(0, 4);
  
  return (
    <div className="grid grid-cols-1 gap-8 px-4 mx-auto mt-20 sm:grid-cols-2 md:grid-cols-4 max-w-7xl">
      {features.map((feature, index) => {
        const IconComponent = iconMap[feature.icon];
        return (
          <div
            key={index}
            className="relative p-8 transition-all duration-500 border group bg-slate-900/50 backdrop-blur-sm rounded-2xl border-white/5 hover:border-white/20 hover:-translate-y-2"
          >
            {/* Background Gradient Spot (Visible on Hover) */}
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white/5 to-transparent group-hover:opacity-100 rounded-2xl"></div>

            <div
              className={`relative w-14 h-14 bg-gradient-to-br ${colorMap[feature.color]} border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
            >
              {IconComponent && <IconComponent className="w-7 h-7" />}
              
              {/* Subtle Glow behind icon */}
              <div className={`absolute inset-0 blur-lg opacity-40 ${colorMap[feature.color].split(' ')[0]}`}></div>
            </div>

            <h4 className="relative mb-3 text-lg font-bold tracking-tight transition-colors text-slate-100 group-hover:text-white">
              {feature.title}
            </h4>
            
            <p className="relative text-sm font-medium leading-relaxed transition-colors text-slate-400 group-hover:text-slate-300">
              {feature.shortDescription}
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesGrid;