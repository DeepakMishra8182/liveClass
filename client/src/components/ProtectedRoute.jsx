import { useAuth } from "../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] relative overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/10 blur-[80px] rounded-full"></div>

        <div className="relative z-10 text-center">
          {/* Animated Spinner with Glow */}
          <div className="relative inline-block">
            <FaSpinner className="w-16 h-16 text-blue-500 animate-spin" />
            <div className="absolute inset-0 blur-2xl bg-blue-500/30 animate-pulse"></div>
          </div>

          {/* Loading Text with Modern Typography */}
          <div className="mt-8 space-y-2">
            <h2 className="text-xl font-black text-white tracking-[0.3em] uppercase italic animate-pulse">
              Authenticating
            </h2>
            <div className="flex items-center justify-center space-x-1">
               <span className="w-1 h-1 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
               <span className="w-1 h-1 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
               <span className="w-1 h-1 rounded-full bg-slate-700 animate-bounce"></span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-4">
              Securing Terminal Connection...
            </p>
          </div>
        </div>

        {/* Decorative Corner Lines (Cyberpunk vibe) */}
        <div className="absolute w-20 h-20 border-t-2 border-l-2 top-10 left-10 border-white/5 rounded-tl-3xl"></div>
        <div className="absolute w-20 h-20 border-b-2 border-r-2 bottom-10 right-10 border-white/5 rounded-br-3xl"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
}

export default ProtectedRoute;