import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaCircle, FaExternalLinkAlt, FaSpinner } from "react-icons/fa";
import { formatDate } from "../../utils/helpers";

const SessionList = ({
  sessions,
  loading,
  statusFilter,
  onFilterChange,
  onRejoinSession,
}) => {
  const statusBadge = (status) => {
    const map = {
      active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      ended: "bg-slate-800 text-slate-400 border-slate-700",
    };
    return map[status] || "bg-slate-800 text-slate-400 border-slate-700";
  };

  return (
    <div className="mt-16 max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/5 p-8 selection:bg-indigo-500/30">
      {/* Header Section */}
      <div className="flex flex-col gap-6 pb-8 mb-10 border-b sm:flex-row sm:items-end sm:justify-between border-white/5">
        <div>
          <h3 className="mb-2 text-3xl font-black tracking-tight text-white">
            {APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.HEADING}
          </h3>
          <p className="italic font-medium text-slate-400 opacity-80">
            {APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.DESCRIPTION}
          </p>
        </div>

        <div className="flex items-center p-2 space-x-4 border bg-slate-800/50 rounded-2xl border-white/5">
          <label className="ml-2 text-xs font-bold tracking-widest uppercase text-slate-500">Filter</label>
          <select
            value={statusFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-4 py-2 text-sm font-semibold transition-all border-none cursor-pointer bg-slate-900 text-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <option value="all">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.FILTER_ALL}</option>
            <option value="active">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.FILTER_ACTIVE}</option>
            <option value="ended">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.FILTER_ENDED}</option>
          </select>
        </div>
      </div>

      {/* Content Area */}
      {loading && sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-indigo-400">
          <FaSpinner className="w-10 h-10 mb-4 animate-spin" />
          <span className="text-xs font-bold tracking-widest uppercase">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.LOADING}</span>
        </div>
      ) : sessions.length === 0 ? (
        <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
          <p className="font-medium text-slate-500">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.EMPTY}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="group relative overflow-hidden bg-slate-800/30 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Hover highlight effect */}
              <div className="absolute inset-y-0 left-0 w-1 transition-opacity bg-indigo-500 opacity-0 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center mb-4 space-x-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] uppercase tracking-tighter font-black border ${statusBadge(s.status)}`}>
                    <FaCircle className={`w-1.5 h-1.5 mr-2 ${s.status === 'active' ? 'animate-pulse' : ''}`} />
                    {s.status}
                  </span>
                  {s.isHost && (
                    <span className="text-[10px] uppercase font-black tracking-tighter text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-lg">
                      Host
                    </span>
                  )}
                </div>
                
                <div className="text-xl font-bold text-white transition-colors group-hover:text-indigo-300">
                  Room <span className="text-indigo-500">#</span>{s.roomId}
                </div>
                
                <div className="grid grid-cols-2 mt-4 gap-x-8">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Lead Host</p>
                    <p className="text-sm font-semibold text-slate-300">{s.hostName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Participants</p>
                    <p className="text-sm font-semibold text-slate-300">{s.participantCount} Users</p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 mt-4 flex items-center font-medium">
                  <span className="w-2 h-2 mr-2 rounded-full bg-slate-700" />
                  Started: {s.startedAt ? formatDate(s.startedAt) : "N/A"}
                  {s.endedAt && <><span className="mx-2">|</span> Ended: {formatDate(s.endedAt)}</>}
                </div>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => onRejoinSession(s)}
                  disabled={s.status !== "active"}
                  className="inline-flex items-center justify-center w-full px-8 py-3 font-black transition-all duration-300 bg-white shadow-xl sm:w-auto text-slate-900 rounded-xl hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-20 disabled:grayscale active:scale-95"
                >
                  {s.status === "active" ? (
                    <>
                      <span className="mr-2 tracking-tight uppercase">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.REJOIN_BUTTON}</span>
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </>
                  ) : (
                    <span className="tracking-tight uppercase">{APP_CONFIG.DASHBOARD_CONTENT.SESSIONS_LIST.ENDED_BUTTON}</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionList;