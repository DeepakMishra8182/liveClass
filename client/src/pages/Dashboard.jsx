import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import ActionCard from "../components/dashboard/ActionCard";
import FeaturesGrid from "../components/dashboard/FeaturesGrid";
import SessionList from "../components/dashboard/SessionList";
import { useSession } from "../context/sessionContext.jsx";
import { FaExclamationCircle } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();
  const { createSession, listSessions, error, loading } = useSession();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  const handleCreateSession = async () => {
    setCreating(true);
    const result = await createSession();
    if (result.success) {
      navigate(`${ROUTES.HOST}?roomId=${result.session.roomId}`);
    }
    setCreating(false);
  };

  useEffect(() => {
    const load = async () => {
      const result = await listSessions(statusFilter);
      if (result.success) {
        setSessions(result.sessions);
      }
    };
    load();
  }, [listSessions, statusFilter]);

  const handleRejoinSession = (session) => {
    if (session.status === "active") {
      if (session.isHost) {
        navigate(`${ROUTES.HOST}?roomId=${session.roomId}`);
      } else {
        navigate(`${ROUTES.JOIN}?roomId=${session.roomId}`);
      }
    }
  };

  const handleJoinSession = () => {
    navigate(ROUTES.JOIN);
  };

  return (
    /* Background changed to deep slate/black */
    <div className="min-h-screen bg-[#020617] relative overflow-hidden transition-colors duration-500">
      
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-10">
        
        {/* Welcome Section wrapped in a container to handle text colors if needed */}
        <div className="mb-12">
          <WelcomeSection userName={user?.name} />
        </div>

        {/* Improved Error Toast */}
        {error && (
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl shadow-[0_0_20px_rgba(239,68,68,0.1)] backdrop-blur-md">
              <div className="flex items-center">
                <FaExclamationCircle className="w-5 h-5 mr-3" />
                <span className="text-sm font-bold tracking-wider uppercase">{error}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Cards (Host/Join) */}
        <div className="mb-16">
          <ActionCard
            onCreateSession={handleCreateSession}
            onJoinSession={handleJoinSession}
            creating={creating}
          />
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <FeaturesGrid />
        </div>

        {/* Sessions List Section */}
        <div className="relative">
          {/* Glassy Background for the list area */}
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-3xl rounded-[3rem] -m-4 lg:-m-8 border border-white/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            <SessionList
              sessions={sessions}
              loading={loading}
              statusFilter={statusFilter}
              onFilterChange={setStatusFilter}
              onRejoinSession={handleRejoinSession}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
