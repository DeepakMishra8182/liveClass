import React, { useEffect, useRef, useState } from "react";
import { useSession } from "../context/sessionContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useZego } from "../hooks/useZego";
import { API_ENDPOINTS, APP_CONFIG, ROUTES } from "../utils/constants";
import { copyToClipboard } from "../utils/helpers";
import api from "../service/api";
import toast from "react-hot-toast";
import { FaSpinner, FaRocket } from "react-icons/fa";
import SessionHeader from "../components/session/SessionHeader";
import SessionInfoCard from "../components/session/SessionInfoCard";
import VideoContainer from "../components/session/VideoContainer";
import ParticipantsList from "../components/session/ParticipantsList";

const HostSession = () => {
  const [sessionInfo, setSessionInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { currentSession, getSession, clearSession } = useSession();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const zegoJoinedRef = useRef(false);

  const roomId = searchParams.get("roomId") || currentSession?.roomId;

  const {
    isJoined,
    userHasJoined,
    error: zegoError,
    loading: zegoLoading,
    containerRef,
    joinZegoRoom,
    leaveZegoRoom,
  } = useZego();

  const handleFullScreen = () => {
    const videoContainer = containerRef.current;
    if (!videoContainer) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      videoContainer.requestFullscreen?.().catch(() => {});
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadSession = async () => {
      if (!roomId) {
        navigate(ROUTES.DASHBOARD);
        return;
      }
      setLoading(true);
      const result = await getSession(roomId);
      if (!isMounted) return;
      if (result.success) {
        setSessionInfo(result.session);
      } else {
        navigate(ROUTES.DASHBOARD);
      }
      setLoading(false);
    };
    loadSession();
    return () => { isMounted = false; };
  }, [roomId, getSession, navigate]);

  useEffect(() => {
    if (!sessionInfo?.id || !roomId || zegoJoinedRef.current) return;
    let isMounted = true;
    let retryTimout = null;

    const joinZego = async () => {
      if (containerRef.current && isMounted && !zegoJoinedRef.current) {
        zegoJoinedRef.current = true;
        const zegoResult = await joinZegoRoom(roomId);
        if (!isMounted) return;
        if (!zegoResult.success) {
          zegoJoinedRef.current = false;
        }
      } else if (isMounted && !zegoJoinedRef.current) {
        retryTimout = setTimeout(joinZego, 200);
      }
    };
    joinZego();
    return () => {
      isMounted = false;
      if (retryTimout) clearTimeout(retryTimout);
      if (zegoJoinedRef.current) {
        leaveZegoRoom();
        zegoJoinedRef.current = false;
      }
    };
  }, [sessionInfo?.id, roomId, containerRef, joinZegoRoom, leaveZegoRoom]);

  useEffect(() => {
    if (!roomId) return;
    const interval = setInterval(async () => {
      const res = await getSession(roomId);
      if (res.success && res.session) {
        setSessionInfo((prev) => {
          if (
            prev &&
            prev.participantCount === res.session.participantCount &&
            prev.status === res.session.status &&
            prev.participants?.length === res.session.participants?.length
          ) {
            return prev;
          }
          return res.session;
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [roomId, getSession]);

  const handleCopyRoomId = async () => {
    if (roomId) {
      const success = await copyToClipboard(roomId);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const getShareableLink = () => {
    const baseURL = window.location.origin;
    return `${baseURL}/${ROUTES.JOIN}?roomId=${roomId}`;
  };

  const handleCopyLink = async () => {
    const link = getShareableLink();
    const success = await copyToClipboard(link);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEndSession = async () => {
    if (!sessionInfo || !sessionInfo.isHost) return;
    try {
      if (zegoJoinedRef.current) {
        await leaveZegoRoom();
        zegoJoinedRef.current = false;
      }
      await api.post(`${API_ENDPOINTS.SESSION.END}/${sessionInfo.id}`);
      clearSession();
      toast.success("Terminal Session Terminated");
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      toast.error("Protocol Error: Could not end session");
    }
  };

  const handleLeave = async () => {
    if (sessionInfo?.isHost) {
      handleEndSession();
    } else {
      if (zegoJoinedRef.current) {
        await leaveZegoRoom();
        zegoJoinedRef.current = false;
      }
      await api.post(API_ENDPOINTS.SESSION.LEAVE, { roomId });
      clearSession();
      navigate(ROUTES.DASHBOARD);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617]">
        <div className="relative">
          <FaSpinner className="w-16 h-16 text-indigo-500 animate-spin" />
          <div className="absolute inset-0 blur-2xl bg-indigo-500/20 animate-pulse"></div>
        </div>
        <p className="mt-6 text-slate-400 font-black uppercase tracking-[0.3em] text-xs">
          Initialising Live Terminal...
        </p>
      </div>
    );
  }

  if (!sessionInfo) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      {/* Dynamic Header */}
      <SessionHeader
        title={APP_CONFIG.SESSION_CONTENT.HEADER.HOSTING_TITLE}
        roomId={roomId}
        userName={user?.name}
        onBack={() => navigate(ROUTES.DASHBOARD)}
        showEndBUtton={sessionInfo.isHost}
        onEndSession={handleEndSession}
      />

      <main className="px-6 py-10 mx-auto max-w-7xl lg:px-8">
        {/* Status Indicator */}
        <div className="flex items-center space-x-2 mb-8 bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
           <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
           </span>
           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Live Connection Active</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Video & Info Area */}
          <div className="space-y-8 lg:col-span-8">
            
            {/* Info Card with Glass effect */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-[2.5rem] blur opacity-50"></div>
              <div className="relative">
                <SessionInfoCard
                  roomId={roomId}
                  shareableLink={getShareableLink()}
                  status={sessionInfo.status}
                  participantCount={sessionInfo.participantCount}
                  copied={copied}
                  onCopyRoomId={handleCopyRoomId}
                  onCopyLink={handleCopyLink}
                />
              </div>
            </div>

            {/* Video Container Area */}
            <div className="bg-slate-900/40 rounded-[2.5rem] p-2 border border-white/5 shadow-2xl overflow-hidden">
              <VideoContainer
                containerRef={containerRef}
                isJoined={isJoined}
                userHasJoined={userHasJoined}
                zegoError={zegoError}
                zegoLoading={zegoLoading}
                onFullscreen={handleFullScreen}
                onLeave={handleLeave}
                leaveButtonText={
                  sessionInfo?.isHost
                    ? APP_CONFIG.SESSION_CONTENT.VIDEO.END_BUTTON
                    : APP_CONFIG.SESSION_CONTENT.VIDEO.LEAVE_BUTTON
                }
              />
            </div>
          </div>

          {/* Right Sidebar: Participants */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 shadow-xl">
               <div className="flex items-center px-2 mb-6 space-x-3">
                  <FaRocket className="text-indigo-500" />
                  <h3 className="text-sm font-black tracking-widest text-white uppercase">Active Grid</h3>
               </div>
               <ParticipantsList
                 participants={sessionInfo.participants}
                 hostName={sessionInfo.hostName}
               />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HostSession;
