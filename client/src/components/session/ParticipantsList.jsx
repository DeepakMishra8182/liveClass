import React from "react";
import { FaUsers } from "react-icons/fa";
import { APP_CONFIG } from "../../utils/constants";

const ParticipantsList = ({ participants, hostName }) => {
  if (!participants || participants.length === 0) {
    return (
      <div className="sticky p-6 bg-white border border-gray-100 shadow-lg rounded-xl top-4">
        <div className="flex items-center mb-4">
          <FaUsers className="w-5 h-5 mr-2 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-900">
            {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HEADING}
          </h2>
        </div>
        <div className="py-4 text-center">
          <p className="text-sm text-gray-500">
            {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.EMPTY_MESSAGE}
          </p>
        </div>
      </div>
    );
  }

  const hostParticipants = participants.filter((p) => p.userName === hostName);
  const otherParticipants = participants.filter((p) => p.userName !== hostName);
  return (
    <div className="sticky p-6 bg-white border border-gray-100 shadow-lg rounded-xl top-4">
      <div className="flex items-center mb-4">
        <FaUsers className="w-5 h-5 mr-2 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">
          {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HEADING} (
          {participants.length})
        </h2>
      </div>

      <div className="space-y-3">
        {hostParticipants.map((p) => (
          <div className="p-4 border border-blue-100 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                <span>{p.userName?.charAt(0)?.toUpperCase()}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{p.userName}</p>
                <p className="text-xs font-medium text-blue-600">
                  {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.HOST_LABEL}
                </p>
              </div>
            </div>
          </div>
        ))}

        {otherParticipants.length > 0 && (
          <>
            <div className="pt-1 text-sm text-gray-500 border-t border-gray-200">
              {APP_CONFIG.SESSION_CONTENT.PARTICIPANTS.JOINED_USERS_LABEL}

              {otherParticipants.map((p) => (
                <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-center mr-3 font-semibold text-gray-700 bg-gray-200 rounded-full w-9 h-9">
                    {p.userName?.charAt(0)?.toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{p.userName}</p>
                    <p className="text-xs text-gray-500">
                      {
                        APP_CONFIG.SESSION_CONTENT.PARTICIPANTS
                          .PARTICIPANT_LABEL
                      }
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ParticipantsList;
