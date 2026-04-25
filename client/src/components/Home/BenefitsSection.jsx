import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaCheckCircle, FaVideo } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = APP_CONFIG.BENEFITS;
  return (
    <section className="relative px-6 py-24 sm:px-12 lg:px-16 bg-[#020617] overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Side: Animated Video Placeholder */}
          <div className="relative group">
            {/* Outer Glow Card */}
            <div className="absolute transition duration-1000 opacity-25 -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur group-hover:opacity-40"></div>
            
            <div className="relative p-2 border shadow-2xl bg-slate-900/40 backdrop-blur-2xl border-white/10 rounded-3xl">
              <div className="relative flex items-center justify-center overflow-hidden border rounded-2xl aspect-video bg-gradient-to-br from-slate-800 to-slate-950 border-white/5">
                {/* Floating Icon Animation */}
                <FaVideo className="w-20 h-20 transition-transform duration-700 text-indigo-500/40 animate-pulse group-hover:scale-110" />
                
                {/* Modern Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="flex items-center justify-center w-16 h-16 transition-colors duration-300 border rounded-full bg-white/10 backdrop-blur-md border-white/20 group-hover:bg-indigo-500">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:pl-8">
            <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {APP_CONFIG.HOME_CONTENT.BENEFITS.HEADING.replace(
                "{APP_NAME}",
                APP_CONFIG.APP_NAME,
              )}
            </h2>
            
            <p className="mb-10 text-xl font-medium leading-relaxed text-slate-400">
              {APP_CONFIG.HOME_CONTENT.BENEFITS.DESCRIPTION}
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group/item">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 transition-all duration-300 border rounded-full bg-indigo-500/10 border-indigo-500/50 group-hover/item:bg-indigo-500 group-hover/item:border-indigo-400">
                      <FaCheckCircle className="w-4 h-4 text-indigo-400 group-hover/item:text-white" />
                    </div>
                  </div>
                  <span className="ml-4 text-lg font-medium transition-colors text-slate-300 group-hover/item:text-white">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
