import React from "react";
import {
  FaArrowRight,
  FaExclamationCircle,
  FaHome,
  FaInfoCircle,
  FaSpinner,
  FaUsers,
} from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const JoinForm = ({ roomId, error, loading, onChange, onSubmit }) => {
  return (
    <div className="relative max-w-2xl mx-auto group">
      {/* Background Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

      <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-10 border border-white/10 selection:bg-emerald-500/30">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 transition-transform duration-500 border shadow-inner bg-emerald-500/10 border-emerald-500/20 rounded-3xl group-hover:scale-110">
            <FaUsers className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          </div>

          <h1 className="mb-3 text-4xl font-black tracking-tighter text-white">
            {APP_CONFIG.SESSION_CONTENT.JOIN_FORM.HEADING}
          </h1>
          <p className="font-medium text-slate-400">
            {APP_CONFIG.SESSION_CONTENT.JOIN_FORM.DESCRIPTION}
          </p>
        </div>

        {error && (
          <div className="p-5 mb-8 text-red-400 border bg-red-500/10 border-red-500/20 rounded-2xl animate-shake">
            <div className="flex items-center">
              <FaExclamationCircle className="flex-shrink-0 w-5 h-5 mr-3" />
              <span className="text-sm font-bold tracking-tight uppercase">{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="roomId"
              className="block text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 ml-1"
            >
              {APP_CONFIG.SESSION_CONTENT.JOIN_FORM.ROOM_ID_LABEL}
            </label>

            <div className="relative group/input">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <FaHome className="w-6 h-6 transition-colors text-slate-500 group-focus-within/input:text-emerald-400" />
              </div>

              <input
                id="roomId"
                type="text"
                value={roomId}
                onChange={onChange}
                maxLength={12}
                placeholder={APP_CONFIG.SESSION_CONTENT.JOIN_FORM.ROOM_ID_PLACEHOLDER}
                className="block w-full pl-14 pr-6 py-5 bg-slate-950/50 border-2 border-white/5 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 text-emerald-400 text-center text-2xl font-black font-mono tracking-[0.3em] uppercase transition-all placeholder:text-slate-700 placeholder:tracking-normal"
              />
            </div>

            <p className="mt-4 text-[11px] text-slate-500 font-bold flex items-center justify-center uppercase tracking-widest">
              <FaInfoCircle className="w-3 h-3 mr-2 text-emerald-500/50" />
              {APP_CONFIG.SESSION_CONTENT.JOIN_FORM.ROOM_ID_HELP}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center items-center py-5 px-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(16,185,129,0.5)] text-lg font-black uppercase tracking-tighter focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {loading ? (
                <>
                  <FaSpinner className="w-5 h-5 mr-3 -ml-1 animate-spin" />
                  {APP_CONFIG.SESSION_CONTENT.JOIN_FORM.BUTTON_LOADING}
                </>
              ) : (
                <>
                  <span className="mr-2">{APP_CONFIG.SESSION_CONTENT.JOIN_FORM.BUTTON}</span>
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </>
              )}
            </span>
            {/* Glossy overlay */}
            <div className="absolute inset-0 transition-transform duration-700 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;