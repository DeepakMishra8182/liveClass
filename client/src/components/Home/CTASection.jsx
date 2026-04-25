
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { APP_CONFIG, ROUTES } from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="relative px-6 py-24 sm:px-12 lg:px-16 bg-[#020617] overflow-hidden">
      
      {/* Background Decorative Elements - Cosmic Vibe */}
      <div className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Animated Inner Shine */}
          <div className="absolute w-48 h-48 rounded-full -top-24 -left-24 bg-white/5 blur-3xl"></div>
          
          <h2 className="relative mb-8 text-4xl font-black leading-tight tracking-tighter text-white md:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-slate-400">
              {APP_CONFIG.HOME_CONTENT.CTA.HEADING}
            </span>
          </h2>

          <p className="relative max-w-2xl mx-auto mb-12 text-xl font-medium leading-relaxed text-slate-400">
            {APP_CONFIG.HOME_CONTENT.CTA.DESCRIPTION.replace(
              "{APP_NAME}",
              APP_CONFIG.APP_NAME,
            )}
          </p>

          <div className="relative flex justify-center">
            <Link
              to={isAuthenticated ? ROUTES.DASHBOARD : ROUTES.REGISTER}
              className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 group"
            >
              {/* Button Background with Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] group-active:scale-95"></div>
              
              <span className="relative flex items-center">
                {isAuthenticated 
                  ? APP_CONFIG.HOME_CONTENT.CTA.BUTTON_AUTHENTICATED 
                  : APP_CONFIG.HOME_CONTENT.CTA.BUTTON_GUEST
                }
                <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          </div>

          {/* Bottom Decorative Label */}
          <div className="flex items-center justify-center mt-12 space-x-2 opacity-30">
            <div className="h-[1px] w-8 bg-white"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Secure • Fast • Modern</span>
            <div className="h-[1px] w-8 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;