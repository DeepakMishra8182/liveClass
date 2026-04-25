
import React from "react";
import {
  FaEnvelope,
  FaExclamationCircle,
  FaLock,
  FaShieldAlt,
  FaSpinner,
  FaUser,
  FaUserPlus,
  FaVideo,
} from "react-icons/fa";
import { APP_CONFIG, ROUTES } from "../utils/constants";
import { Link } from "react-router-dom";

const AuthForm = ({
  mode,
  formData,
  onChange,
  onSubmit,
  loading,
  error,
  localError,
}) => {
  const isLogin = mode === "login";

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden`}>
      
      {/* Background Animated Orbs */}
      <div className={`absolute top-0 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse ${isLogin ? "bg-blue-600" : "bg-purple-600"}`}></div>
      <div className={`absolute bottom-0 -right-20 w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse ${isLogin ? "bg-indigo-600" : "bg-pink-600"}`}></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-10 text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-[2rem] shadow-2xl mb-6 transition-transform hover:rotate-12 duration-500 ${isLogin ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/20" : "bg-gradient-to-br from-purple-500 to-pink-600 shadow-purple-500/20"}`}>
            {isLogin ? (
              <FaVideo className="w-10 h-10 text-white drop-shadow-md" />
            ) : (
              <FaUserPlus className="w-10 h-10 text-white drop-shadow-md" />
            )}
          </div>

          <h1 className="mb-2 text-5xl italic font-black tracking-tighter text-white">
             {isLogin ? APP_CONFIG.APP_NAME : "JOIN US"}
          </h1>
          <p className="font-medium tracking-wide text-slate-400">
            {isLogin ? APP_CONFIG.APP_TAGLINE : "Start your professional journey today"}
          </p>
        </div>

        <div className="relative group">
          {/* Neon Border Effect */}
          <div className={`absolute -inset-0.5 rounded-[2.5rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 ${isLogin ? "bg-blue-500" : "bg-purple-500"}`}></div>
          
          <div className="relative p-10 bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-black text-white uppercase tracking-[0.15em]">
                {isLogin ? "Access Terminal" : "Initialize Profile"}
              </h2>
            </div>

            <form className="space-y-6" onSubmit={onSubmit}>
              {(error || localError) && (
                <div className="flex items-center p-4 text-red-400 border border-red-500/20 rounded-2xl bg-red-500/5 animate-shake">
                  <FaExclamationCircle className="flex-shrink-0 w-5 h-5 mr-3" />
                  <span className="text-xs font-bold uppercase">{error || localError}</span>
                </div>
              )}

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Identity</label>
                  <div className="relative group/input">
                    <FaUser className="absolute transition-colors -translate-y-1/2 left-4 top-1/2 text-slate-600 group-focus-within/input:text-purple-400" />
                    <input
                      id="name" name="name" type="text" required
                      value={formData.name || ""} onChange={onChange}
                      className="block w-full py-4 pl-12 pr-4 font-medium text-white transition-all border outline-none bg-slate-950 border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 placeholder:text-slate-700"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Digital Mail</label>
                <div className="relative group/input">
                  <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 transition-colors ${isLogin ? "group-focus-within/input:text-blue-400" : "group-focus-within/input:text-purple-400"}`} />
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email || ""} onChange={onChange}
                    className={`block w-full py-4 pl-12 pr-4 bg-slate-950 border border-white/5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-700 font-medium ${isLogin ? "focus:ring-2 focus:ring-blue-500/50" : "focus:ring-2 focus:ring-purple-500/50"}`}
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Security Key</label>
                <div className="relative group/input">
                  <FaLock className={`absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 transition-colors ${isLogin ? "group-focus-within/input:text-blue-400" : "group-focus-within/input:text-purple-400"}`} />
                  <input
                    id="password" name="password" type="password" required
                    value={formData.password || ""} onChange={onChange}
                    className={`block w-full py-4 pl-12 pr-4 bg-slate-950 border border-white/5 rounded-2xl text-white outline-none transition-all placeholder:text-slate-700 font-medium ${isLogin ? "focus:ring-2 focus:ring-blue-500/50" : "focus:ring-2 focus:ring-purple-500/50"}`}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Verification</label>
                  <div className="relative group/input">
                    <FaShieldAlt className="absolute transition-colors -translate-y-1/2 left-4 top-1/2 text-slate-600 group-focus-within/input:text-purple-400" />
                    <input
                      id="confirmPassword" name="confirmPassword" type="password" required
                      value={formData.confirmPassword || ""} onChange={onChange}
                      className="block w-full py-4 pl-12 pr-4 font-medium text-white transition-all border outline-none bg-slate-950 border-white/5 rounded-2xl focus:ring-2 focus:ring-purple-500/50 placeholder:text-slate-700"
                      placeholder="Repeat Security Key"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className={`w-full group relative flex justify-center items-center py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-widest text-white transition-all transform active:scale-95 disabled:opacity-50 ${isLogin ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20" : "bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/20"}`}
              >
                {loading ? (
                  <FaSpinner className="w-5 h-5 animate-spin" />
                ) : (
                  <span className="flex items-center">
                    {isLogin ? "Initiate Session" : "Deploy Profile"}
                  </span>
                )}
                <div className="absolute inset-0 transition-opacity opacity-0 bg-white/10 group-hover:opacity-100 rounded-2xl"></div>
              </button>
            </form>

            <div className="pt-6 mt-8 text-center border-t border-white/5">
              <p className="text-xs font-bold tracking-tighter uppercase text-slate-500">
                {isLogin ? "New to the grid?" : "Already authorized?"}{" "}
                <Link
                  to={isLogin ? ROUTES.REGISTER : ROUTES.LOGIN}
                  className={`ml-1 font-black transition-colors ${isLogin ? "text-blue-400 hover:text-blue-300" : "text-purple-400 hover:text-purple-300"}`}
                >
                  {isLogin ? "Create Identity" : "Access Terminal"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;