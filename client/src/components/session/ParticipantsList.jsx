
import React from "react";
import { FaUsers } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const ParticipantsList = ({ participants, hostName }) => {
  const EmptyState = () => (
    <div className="sticky top-6 p-8 bg-slate-900/50 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-[2rem]">
      <div className="flex items-center mb-6">
        <FaUsers className="w-6 h-6 mr-3 text-indigo-400" />
        <h2 className="text-xl font-black tracking-tight text-white">
          {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HEADING}
        </h2>
      </div>
      <div className="py-10 text-center border-2 border-dashed border-white/5 rounded-3xl">
        <p className="text-sm font-bold tracking-widest uppercase text-slate-500">
          {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.EMPTY_MESSAGE}
        </p>
      </div>
    </div>
  );

  if (!participants || participants.length === 0) return <EmptyState />;

  const hostParticipants = participants.filter((p) => p.userName === hostName);
  const otherParticipants = participants.filter((p) => p.userName !== hostName);

  return (
    <div className="sticky top-6 p-6 bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2rem]">
      {/* Header with Counter */}
      <div className="flex items-center justify-between px-2 mb-8">
        <div className="flex items-center">
          <div className="relative">
             <FaUsers className="w-6 h-6 mr-3 text-indigo-400" />
             <span className="absolute flex w-3 h-3 -top-1 -right-1">
               <span className="absolute inline-flex w-full h-full bg-indigo-400 rounded-full opacity-75 animate-ping"></span>
               <span className="relative inline-flex w-3 h-3 bg-indigo-500 rounded-full"></span>
             </span>
          </div>
          <h2 className="text-xl font-black tracking-tight text-white">
            {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HEADING}
          </h2>
        </div>
        <span className="px-3 py-1 text-xs font-black text-indigo-400 border rounded-full bg-indigo-500/20 border-indigo-500/20">
          {participants.length}
        </span>
      </div>

      <div className="space-y-4">
        {/* Host Section */}
        {hostParticipants.map((p, index) => (
          <div key={index} className="group relative p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <div className="relative z-10 flex items-center">
              <div className="relative flex items-center justify-center w-12 h-12 mr-4 text-lg font-black text-white transition-transform shadow-lg rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 group-hover:rotate-6">
                {p.userName?.charAt(0)?.toUpperCase()}
                <div className="absolute w-4 h-4 border-2 rounded-full -bottom-1 -right-1 bg-emerald-500 border-slate-900"></div>
              </div>
              <div>
                <p className="font-bold tracking-tight text-white">{p.userName}</p>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                  {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HOST_LABEL}
                </p>
              </div>
            </div>
            {/* Crown Icon Placeholder or subtle glow */}
            <div className="absolute transition-opacity top-2 right-2 opacity-20 group-hover:opacity-100">
               <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24]"></div>
            </div>
          </div>
        ))}

        {/* Other Participants Section */}
        {otherParticipants.length > 0 && (
          <div className="mt-8 space-y-3">
            <p className="px-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
              {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.JOINED_USERS_LABEL}
            </p>

            {otherParticipants.map((p, index) => (
              <div key={index} className="flex items-center p-3 transition-all border bg-white/5 border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/10 group">
                <div className="flex items-center justify-center w-10 h-10 mr-4 font-black transition-colors border text-slate-300 bg-slate-800 border-white/5 rounded-xl group-hover:bg-indigo-500/20 group-hover:text-indigo-400">
                  {p.userName?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold transition-colors text-slate-200 group-hover:text-white">{p.userName}</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.PARTICIPANT_LABEL}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ParticipantsList;


