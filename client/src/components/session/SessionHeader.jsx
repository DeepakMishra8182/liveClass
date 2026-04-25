import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const SessionHeader = ({
  title,
  roomId,
  userName,
  onBack,
  showEndBUtton,
  onEndSession,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 text-gray-600 transition-colors rounded-lg hover:text-blue-600 hover:bg-blue-50"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-500 text-xm">Room ID: {roomId}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {userName && (
              <div className="items-center hidden px-3 py-2 space-x-2 rounded-lg sm:flex bg-gray-50">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500">
                  <span className="text-xs font-semibold text-white">
                    {userName?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {userName}
                </span>
              </div>
            )}

            {showEndBUtton && (
              <button
                onClick={onEndSession}
                className="px-4 py-2 text-sm font-medium text-white transition-colors bg-red-500 rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {APP_CONFIG.SESSION_CONTENT.HEADER.END_SESSION_BUTTON}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SessionHeader;
