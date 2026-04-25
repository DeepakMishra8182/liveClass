import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaComments, FaShieldAlt, FaUsers, FaVideo } from "react-icons/fa";

const iconMap = {
  FaVideo: FaVideo,
  FaComments: FaComments,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
};

const FeatureSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 pl:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {APP_CONFIG.HOME_CONTENT.FEATURES.HEADING}
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            {APP_CONFIG.HOME_CONTENT.FEATURES.DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {APP_CONFIG.FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="p-8 transition-all transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color === "blue" ? "from-blue-500 to-blue-600" : feature.color === "green" ? "from-green-500 to-green-600" : feature.color === "purple" ? "from-purple-500 to-purple-600" : "from-indigo-500 to-indigo-600"} rounded-xl flex items-center justify-center text-white mb-6`}
                >
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
