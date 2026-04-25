import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";
import { APP_CONFIG, ROUTES } from "../../utils/constants";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="relative px-6 pt-40 pb-28 overflow-hidden sm:px-12 lg:px-16 bg-[#020617]">
      
      {/* --- Khatarnak Animated Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Right Glow */}
        <div className="absolute bg-indigo-600 rounded-full -top-20 -right-20 w-[500px] h-[500px] blur-[120px] opacity-20 animate-blob"></div>
        {/* Bottom Left Glow */}
        <div className="absolute bg-purple-600 rounded-full -bottom-40 -left-40 w-[600px] h-[600px] blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>
        {/* Center Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full w-[800px] h-[400px] blur-[100px] animate-pulse"></div>
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          
          {/* Futuristic Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-10 text-xs font-bold tracking-[0.2em] uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <FaRocket className="w-3 h-3 mr-3 animate-bounce" />
            {APP_CONFIG.HOME_CONTENT.HERO.BADGE_TEXT}
          </div>

          {/* Huge Modern Heading */}
          <h1 className="mb-8 text-6xl font-black text-white md:text-8xl tracking-tighter leading-[0.95]">
            {APP_CONFIG.HOME_CONTENT.HERO.HEADING}
            <span className="block mt-2 text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              {APP_CONFIG.HOME_CONTENT.HERO.HEADING_HIGHLIGHT}
            </span>
          </h1>

          {/* Clean Glassy Subheading */}
          <p className="max-w-3xl mx-auto mb-12 text-lg font-medium leading-relaxed text-slate-400 md:text-2xl opacity-90">
            {APP_CONFIG.HOME_CONTENT.HERO.SUBHEADING}
          </p>

          {/* Modern Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {isAuthenticated ? (
              <Link
                to={ROUTES.DASHBOARD}
                className="group relative flex items-center px-10 py-5 text-lg font-bold text-white transition-all transform overflow-hidden rounded-2xl bg-indigo-600 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
              >
                <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-indigo-500 to-blue-600 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center">
                  {APP_CONFIG.HOME_CONTENT.HERO.CTA_AUTHENTICATED}
                  <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            ) : (
              <>
                <Link
                  to={ROUTES.REGISTER}
                  className="group relative flex items-center px-10 py-5 text-lg font-bold text-white transition-all transform overflow-hidden rounded-2xl bg-indigo-600 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                  <span className="relative z-10 flex items-center">
                    {APP_CONFIG.HOME_CONTENT.HERO.CTA_PRIMARY}
                    <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>

                <Link
                  to={ROUTES.LOGIN}
                  className="px-10 py-5 text-lg font-bold transition-all border shadow-xl text-slate-200 bg-white/5 backdrop-blur-md border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 active:scale-95"
                >
                  {APP_CONFIG.HOME_CONTENT.HERO.CTA_SECONDARY}
                </Link>
              </>
            )}
          </div>

          {/* Trust Indicators with Glass UI */}
          <div className="flex flex-wrap items-center justify-center gap-10 mt-20">
            {APP_CONFIG.TRUST_INDICATORS.map((indicator, index) => (
              <div key={index} className="flex items-center group/item">
                <div className="flex items-center justify-center w-8 h-8 mr-3 transition-colors border rounded-full bg-emerald-500/10 border-emerald-500/20 group-hover/item:bg-emerald-500/20">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase transition-colors text-slate-500 group-hover/item:text-slate-300">{indicator}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;