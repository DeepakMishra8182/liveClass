import React from "react";
import { FaCheck, FaCopy, FaInfoCircle, FaLink } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const SessionInfoCard = ({
  roomId,
  shareableLink,
  status,
  participantCount,
  copied,
  onCopyRoomId,
  onCopyLink,
}) => {
  return (
    <div className="relative group overflow-hidden bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
      {/* Subtle Corner Glow */}
      <div className="absolute w-32 h-32 rounded-full -top-10 -right-10 bg-indigo-600/10 blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center px-2 mb-8">
          <div className="flex items-center justify-center w-12 h-12 mr-4 transition-transform shadow-lg bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-indigo-500/20 rotate-3 group-hover:rotate-0">
            <FaInfoCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white">
            {APP_CONFIG.SESSION_CONTENT.INFO_CARD.HEADING}
          </h2>
        </div>

        {/* Room ID Section */}
        <div className="mb-8 group/field">
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">
            {APP_CONFIG.SESSION_CONTENT.INFO_CARD.ROOM_ID_LABEL}
          </label>

          <div className="flex items-center space-x-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={roomId}
                readOnly
                className="w-full px-6 py-4 bg-slate-950/50 border-2 border-white/5 rounded-2xl font-mono text-xl font-black tracking-[0.2em] text-center text-indigo-400 focus:border-indigo-500/50 transition-all outline-none"
              />
            </div>
            <button
              onClick={onCopyRoomId}
              className={`h-[60px] px-6 rounded-2xl font-black uppercase text-xs tracking-widest transition-all active:scale-95 flex items-center justify-center ${
                copied 
                ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]" 
                : "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
              }`}
            >
              {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Shareable Link Section */}
        <div className="mb-8">
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 ml-1">
            {APP_CONFIG.SESSION_CONTENT.INFO_CARD.SHAREABLE_LINK_LABEL}
          </label>

          <div className="flex items-center space-x-3">
            <div className="relative flex-1 group/input">
              <FaLink className="absolute transition-colors -translate-y-1/2 left-4 top-1/2 text-slate-600 group-focus-within/input:text-emerald-500" />
              <input
                type="text"
                value={shareableLink}
                readOnly
                className="w-full py-4 pl-12 pr-4 text-xs font-medium truncate border outline-none bg-slate-950/30 border-white/5 rounded-2xl text-slate-400"
              />
            </div>
            <button
              onClick={onCopyLink}
              className={`h-[52px] px-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
                copied 
                ? "text-emerald-400 border border-emerald-500/30 bg-emerald-500/5" 
                : "text-slate-300 border border-white/10 hover:bg-white/5"
              }`}
            >
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
          <div className="bg-emerald-500/5 p-5 rounded-[1.5rem] border border-emerald-500/10 group/status">
            <p className="text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.15em] mb-2">
              {APP_CONFIG.SESSION_CONTENT.INFO_CARD.STATUS_LABEL}
            </p>
            <div className="flex items-center">
              <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-lg font-black tracking-tight capitalize text-emerald-400">
                {status}
              </p>
            </div>
          </div>

          <div className="bg-indigo-500/5 p-5 rounded-[1.5rem] border border-indigo-500/10 group/status">
            <p className="text-[10px] font-black text-indigo-500/60 uppercase tracking-[0.15em] mb-2">
              {APP_CONFIG.SESSION_CONTENT.INFO_CARD.PARTICIPANTS_LABEL}
            </p>
            <p className="text-2xl font-black tracking-tighter text-indigo-400">
              {participantCount}
              <span className="ml-1 text-xs italic font-bold text-indigo-500/50">LIVE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionInfoCard;