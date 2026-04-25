import React from "react";
import { APP_CONFIG } from "../../utils/constants";
import { FaCheckCircle, FaVideo } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = APP_CONFIG.BENEFITS;
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="p-8 shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
              <div className="flex items-center justify-center rounded-lg aspect-video bg-white/10 backdrop-blur-sm">
                <FaVideo className="w-24 h-24 text-white opacity-50" />
              </div>
            </div>
            <div className="absolute w-24 h-24 bg-yellow-400 rounded-full -top-4 -right-4 opacity-20 blur-2xl"></div>
            <div className="absolute w-24 h-24 bg-pink-400 rounded-full -bottom-4 -left-4 opacity-20 blur-2xl"></div>
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              {APP_CONFIG.HOME_CONTENT.BENEFITS.HEADING.replace(
                "{APP_NAME}",
                APP_CONFIG.APP_NAME,
              )}
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              {APP_CONFIG.HOME_CONTENT.BENEFITS.DESCRIPTION}
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-green-500" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
