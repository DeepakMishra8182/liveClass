
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { APP_CONFIG, ROUTES } from "../utils/constants";
import { FaVideo, FaSignOutAlt, FaColumns } from "react-icons/fa";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME, { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to={"/"} className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute transition duration-500 opacity-25 -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur group-hover:opacity-100"></div>
              <div className="relative flex items-center justify-center transition-all border w-11 h-11 rounded-xl bg-slate-900 border-white/10 group-hover:border-blue-500/50">
                <FaVideo className="w-5 h-5 text-blue-500 transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tighter text-white">
                {APP_CONFIG.APP_NAME}
              </h1>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500/80 -mt-1 leading-none">
                Elite Grid
              </span>
            </div>
          </Link>

          {/* Navigation Section */}
          <nav className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link
                  to={ROUTES.DASHBOARD}
                  className={`flex items-center px-4 py-2 text-xs font-black uppercase tracking-widest transition-all rounded-xl border ${
                    location.pathname === ROUTES.DASHBOARD 
                    ? "bg-blue-600/10 border-blue-500/50 text-blue-400" 
                    : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FaColumns className="mr-2" />
                  Dashboard
                </Link>

                <div className="flex items-center pl-4 space-x-4 border-l border-white/10">
                  {/* User Profile Badge */}
                  <div className="hidden items-center p-1.5 pr-4 space-x-3 rounded-2xl bg-white/5 border border-white/5 sm:flex group cursor-pointer hover:border-white/20 transition-all">
                    <div className="flex items-center justify-center w-8 h-8 transition-transform shadow-lg rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-indigo-500/20 group-hover:rotate-6">
                      <span className="text-xs italic font-black text-white">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-white leading-none">
                        {user?.name}
                      </span>
                      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                        Active
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="p-3 transition-all border border-transparent text-slate-400 rounded-xl hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 group"
                    title="Logout"
                  >
                    <FaSignOutAlt className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to={ROUTES.LOGIN}
                  className="px-5 py-2.5 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  className="relative group px-6 py-2.5 overflow-hidden rounded-xl bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                >
                  <span className="relative z-10 text-xs font-black tracking-widest text-white uppercase">
                    Join Portal
                  </span>
                  <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-blue-700 to-indigo-700 group-hover:opacity-100"></div>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;