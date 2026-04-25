import React, { useEffect, useRef, useState } from 'react'
import { useSession } from '../context/sessionContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useZego } from '../hooks/useZego';
import { API_ENDPOINTS, APP_CONFIG, ROUTES } from '../utils/constants';
import api from '../service/api';
import SessionHeader from '../components/session/SessionHeader';
import JoinForm from '../components/session/JoinForm';
import VideoContainer from '../components/session/VideoContainer';
import ParticipantsList from '../components/session/ParticipantsList';
import { FaFingerprint } from 'react-icons/fa';

const JoinSession = () => {
  const [roomId, setRoomId] = useState('')
  const [localError, setLocalError] = useState('')
  const [sessionJoined, setSessionJoined] = useState(null);
  const [sessionInfo, setSessionInfo] = useState(null);
  const zegoJoinedRef = useRef(false);
  const [searchParams] = useSearchParams();

  const { joinSession, getSession, error } = useSession();
  const navigate = useNavigate();

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
      videoContainer.requestFullscreen?.().catch(() => { });
    }
  };

  useEffect(() => {
    const urlRoomId = searchParams.get('roomId');
    if (urlRoomId) {
      setRoomId(urlRoomId.toUpperCase())
    }
  }, [searchParams])

  const handleChange = (e) => {
    setRoomId(e.target.value.toUpperCase().trim());
    setLocalError('')
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLocalError('')

    if (!roomId) {
      setLocalError('Encryption Key (Room ID) is required')
      return;
    }

    const result = await joinSession(roomId)

    if (result.success) {
      setSessionInfo(result.session)
      setSessionJoined(true);

      if (result.session.isHost) {
        navigate(`${ROUTES.HOST}?roomId=${roomId}`)
      }
    }
  }

  useEffect(() => {
    if (!sessionJoined || !roomId || zegoJoinedRef.current) return;

    const joinZego = async () => {
      if (containerRef.current) {
        zegoJoinedRef.current = true;
        const zegoResult = await joinZegoRoom(roomId)
        if (!zegoResult.success) {
          zegoJoinedRef.current = false;
        }
      } else {
        setTimeout(joinZego, 200)
      }
    }
    joinZego();

    return () => {
      if (zegoJoinedRef.current) {
        leaveZegoRoom();
        zegoJoinedRef.current = false;
      }
    }
  }, [sessionJoined, roomId, joinZegoRoom, leaveZegoRoom, containerRef])

  useEffect(() => {
    if (!sessionJoined || !roomId) return;
    const interval = setInterval(async () => {
      const res = await getSession(roomId)
      if (res.success) {
        setSessionInfo(res.session)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [sessionJoined, roomId, getSession])

  const handleLeave = async () => {
    if (zegoJoinedRef.current) {
      await leaveZegoRoom()
      zegoJoinedRef.current = false
    }
    if (sessionJoined) {
      await api.post(API_ENDPOINTS.SESSION.LEAVE, { roomId })
    }
    navigate(ROUTES.DASHBOARD)
  }

  return (
    /* Changed from Green/Teal to Deep Slate/Black */
    <div className="min-h-screen bg-[#020617] text-slate-200">
      
      <SessionHeader
        title={APP_CONFIG.SESSION_CONTENT.HEADER.JOINING_TITLE}
        roomId={sessionJoined ? roomId : ''}
        onBack={() => navigate(ROUTES.DASHBOARD)}
      />

      <main className="px-6 py-20 mx-auto max-w-7xl lg:px-8">
        {!sessionJoined ? (
          /* Join Form Section with Dark Theme */
          <div className="max-w-xl mx-auto">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border rounded-2xl bg-emerald-500/10 border-emerald-500/20">
                <FaFingerprint className="w-8 h-8 text-emerald-500" />
              </div>
              <h2 className="text-3xl italic font-black tracking-tighter text-white uppercase">
                Access Terminal
              </h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">
                Verify Room ID to Establish Connection
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
              <JoinForm
                roomId={roomId}
                error={error || localError}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        ) : (
          /* Video Interface Section */
          <div className="grid grid-cols-1 gap-10 duration-700 lg:grid-cols-12 animate-in fade-in">
            <div className="space-y-6 lg:col-span-8">
              
              {/* Live Badge */}
              <div className="flex items-center px-4 py-1 space-x-2 border rounded-full bg-emerald-500/10 w-fit border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Secure Link Established</span>
              </div>

              <div className="bg-slate-900/40 rounded-[2.5rem] p-2 border border-white/5 shadow-2xl overflow-hidden">
                <VideoContainer
                  containerRef={containerRef}
                  isJoined={isJoined}
                  userHasJoined={userHasJoined}
                  zegoError={zegoError}
                  zegoLoading={zegoLoading}
                  onFullscreen={handleFullScreen}
                  onLeave={handleLeave}
                  leaveButtonText={APP_CONFIG.SESSION_CONTENT.VIDEO.LEAVE_BUTTON}
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 shadow-xl">
                 <h3 className="px-2 mb-6 text-xs font-black tracking-widest uppercase text-slate-500">Session Participants</h3>
                 <ParticipantsList
                   participants={sessionInfo?.participants || []}
                   hostName={sessionInfo?.hostName}
                 />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default JoinSession