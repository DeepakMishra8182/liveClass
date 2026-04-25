import React from "react";
import {
  FaExclamationCircle,
  FaExpand,
  FaSpinner,
  FaVideo,
} from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const VideoContainer = ({
  containerRef,
  isJoined,
  userHasJoined,
  zegoError,
  zegoLoading,
  onFullscreen,
  onLeave,
  leaveButtonText,
}) => {
  return (
    <div className="relative p-6 bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] overflow-hidden group">
      
      {/* --- Background Decorative Glow --- */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex items-center justify-between px-2 mb-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 mr-4 border bg-indigo-500/10 border-indigo-500/20 rounded-xl">
              <FaVideo className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-xl font-black tracking-tight text-white">
              {APP_CONFIG.SESSION_CONTENT.VIDEO.TITLE}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            {isJoined && (
              <div className="flex items-center px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="relative flex w-2 h-2 mr-3">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                  {APP_CONFIG.SESSION_CONTENT.VIDEO.CONNECTED}
                </span>
              </div>
            )}

            <button
              onClick={onFullscreen}
              className="flex items-center px-4 py-2 text-xs font-black tracking-widest uppercase transition-all border group/btn text-slate-300 bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:text-white"
            >
              <FaExpand className="mr-2 transition-transform group-hover/btn:scale-125" />
              {APP_CONFIG.SESSION_CONTENT.VIDEO.FULLSCREEN}
            </button>
          </div>
        </div>

        {/* Error Handling UI */}
        {zegoError && (
          <div className="p-4 mb-6 border bg-red-500/10 border-red-500/20 rounded-2xl animate-shake">
            <div className="flex items-center text-red-400">
              <FaExclamationCircle className="flex-shrink-0 w-5 h-5 mr-3" />
              <span className="text-xs font-bold tracking-tight uppercase">{zegoError}</span>
            </div>
          </div>
        )}

        {/* --- Main Video Feed Container --- */}
        <div className="relative group/video">
          {/* Decorative Corner Borders */}
          <div className="absolute -top-[2px] -left-[2px] w-8 h-8 border-t-2 border-l-2 border-indigo-500 rounded-tl-2xl z-20 opacity-50"></div>
          <div className="absolute -bottom-[2px] -right-[2px] w-8 h-8 border-b-2 border-r-2 border-indigo-500 rounded-br-2xl z-20 opacity-50"></div>

          <div
            ref={containerRef}
            className="w-full h-[calc(100vh-280px)] rounded-[1.5rem] overflow-hidden bg-slate-950 border border-white/5 shadow-inner transition-all duration-500 group-hover/video:border-indigo-500/30"
          />

          {/* Loading Overlay inside Video Box */}
          {zegoLoading && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md rounded-[1.5rem]">
              <div className="relative">
                <FaSpinner className="w-12 h-12 text-indigo-500 animate-spin" />
                <div className="absolute inset-0 blur-xl bg-indigo-500/30 animate-pulse"></div>
              </div>
              <p className="mt-6 text-xs font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">
                {APP_CONFIG.SESSION_CONTENT.VIDEO.CONNECTING}
              </p>
            </div>
          )}
        </div>

        {/* Leave Button Section */}
        {onLeave && !userHasJoined && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onLeave}
              className="group relative px-10 py-4 font-black text-white uppercase tracking-widest text-xs transition-all transform rounded-2xl bg-red-600 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {leaveButtonText || APP_CONFIG.SESSION_CONTENT.VIDEO.LEAVE_BUTTON}
              </span>
              <div className="absolute inset-0 transition-opacity bg-gradient-to-r from-red-500 to-rose-600"></div>
              <div className="absolute inset-0 transition-opacity opacity-0 bg-white/10 group-hover:opacity-100"></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;