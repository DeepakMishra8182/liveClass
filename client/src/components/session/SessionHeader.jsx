import React from "react";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const SessionHeader = ({
  title,
  roomId,
  userName,
  onBack,
  showEndBUtton,
  onEndSession,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="px-6 py-4 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Navigation & Info */}
          <div className="flex items-center space-x-6">
            <button
              onClick={onBack}
              className="group p-2.5 bg-white/5 text-slate-400 transition-all rounded-xl hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 border border-white/5"
            >
              <FaArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>
            
            <div className="flex flex-col">
              <h1 className="flex items-center text-xl font-black tracking-tight text-white">
                <span className="w-2 h-2 mr-3 bg-indigo-500 rounded-full animate-pulse"></span>
                {title}
              </h1>
              <div className="flex items-center mt-1">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-800/50 px-2 py-0.5 rounded-md border border-white/5">
                  Live Terminal
                </span>
                <p className="ml-3 font-mono text-xs font-bold tracking-tighter uppercase text-slate-400 opacity-80">
                  ID: <span className="text-indigo-400">{roomId}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: User & Actions */}
          <div className="flex items-center space-x-6">
            {userName && (
              <div className="hidden sm:flex items-center px-4 py-1.5 space-x-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative">
                  <div className="flex items-center justify-center shadow-lg w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 shadow-indigo-500/20">
                    <span className="text-sm italic font-black text-white">
                      {userName?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black tracking-tight text-white">
                    {userName}
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center">
                    <FaShieldAlt className="w-2 h-2 mr-1 text-indigo-400" /> Authorized
                  </span>
                </div>
              </div>
            )}

            {showEndBUtton && (
              <button
                onClick={onEndSession}
                className="group relative px-6 py-2.5 text-sm font-black text-white transition-all overflow-hidden rounded-xl bg-red-500/10 border border-red-500/30 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-95"
              >
                <span className="relative z-10 tracking-tighter uppercase">
                  {APP_CONFIG.SESSION_CONTENT.HEADER.END_SESSION_BUTTON}
                </span>
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-red-600 to-rose-600 group-hover:opacity-100"></div>
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default SessionHeader;