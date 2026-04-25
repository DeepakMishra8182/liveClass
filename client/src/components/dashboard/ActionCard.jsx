import React from "react";
import { FaPlus, FaSpinner, FaUsers } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const ActionCard = ({ onCreateSession, onJoinSession, creating }) => {
  return (
    <div className="grid max-w-5xl grid-cols-1 gap-10 p-4 mx-auto md:grid-cols-2 selection:bg-cyan-500/30">
      
      {/* --- HOST CARD --- */}
      <div className="relative group">
        {/* Animated Glow Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative p-10 transition-all duration-500 border bg-slate-900/80 backdrop-blur-xl rounded-3xl border-white/10 hover:border-blue-500/50">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 transition-transform duration-500 border shadow-inner bg-slate-800 rounded-2xl border-white/5 group-hover:scale-110 group-hover:rotate-3">
            <FaPlus className="w-10 h-10 text-white bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500" />
          </div>
          
          <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-white">
            {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.HOST.TITLE}
          </h3>
          
          <p className="mb-8 font-medium leading-relaxed text-center text-slate-400">
            {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.HOST.DESCRIPTION}
          </p>

          <button
            onClick={onCreateSession}
            disabled={creating}
            className="w-full relative group/btn overflow-hidden px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95"
          >
            <span className="relative z-10">
              {creating ? (
                <span className="flex items-center justify-center">
                  <FaSpinner className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" />
                  {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.HOST.BUTTON_LOADING}
                </span>
              ) : (
                APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.HOST.BUTTON
              )}
            </span>
            {/* Glossy overlay effect */}
            <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn:animate-shine" />
          </button>
        </div>
      </div>

      {/* --- JOIN CARD --- */}
      <div className="relative group">
        {/* Animated Glow Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative p-10 transition-all duration-500 border bg-slate-900/80 backdrop-blur-xl rounded-3xl border-white/10 hover:border-emerald-500/50">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 transition-transform duration-500 border shadow-inner bg-slate-800 rounded-2xl border-white/5 group-hover:scale-110 group-hover:-rotate-3">
            <FaUsers className="w-10 h-10 text-white bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-500" />
          </div>

          <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-white">
            {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.JOIN.TITLE}
          </h3>
          
          <p className="mb-8 font-medium leading-relaxed text-center text-slate-400">
            {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.JOIN.DESCRIPTION}
          </p>

          <button
            onClick={onJoinSession}
            className="w-full relative group/btn2 overflow-hidden px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-bold transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] active:scale-95"
          >
            <span className="relative z-10">
              {APP_CONFIG.DASHBOARD_CONTENT.ACTION_CARDS.JOIN.BUTTON}
            </span>
            {/* Glossy overlay effect */}
            <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white opacity-20 group-hover/btn2:animate-shine" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;