import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FaArrowRight, FaCheckCircle, FaRocket } from "react-icons/fa";
import { APP_CONFIG, ROUTES } from "../../utils/constants";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="relative px-4 pt-32 pb-20 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-300 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bg-purple-300 rounded-full -bottom-40 -left-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-indigo-300 rounded-full top-1/2 left-1/2 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
            <FaRocket className="w-4 h-4 mr-2" />
            {APP_CONFIG.HOME_CONTENT.HERO.BADGE_TEXT}
          </div>

          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
            {APP_CONFIG.HOME_CONTENT.HERO.HEADING}
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              {APP_CONFIG.HOME_CONTENT.HERO.HEADING_HIGHLIGHT}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-600 md:text-2xl">
            {APP_CONFIG.HOME_CONTENT.HERO.SUBHEADING}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isAuthenticated ? (
              <Link
                to={ROUTES.DASHBOARD}
                className="flex items-center px-8 py-4 text-lg font-semibold text-white transition-all transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105"
              >
                {APP_CONFIG.HOME_CONTENT.HERO.CTA_AUTHENTICATED}
                <FaArrowRight className="ml-2" />
              </Link>
            ) : (
              <>
                <Link
                  to={ROUTES.REGISTER}
                  className="flex items-center px-8 py-4 text-lg font-semibold text-white transition-all transform bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105"
                >
                  {APP_CONFIG.HOME_CONTENT.HERO.CTA_PRIMARY}
                  <FaArrowRight className="ml-2" />
                </Link>

                <Link
                  to={ROUTES.LOGIN}
                  className="px-8 py-4 text-lg font-semibold text-blue-600 transition-all bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
                >
                  {APP_CONFIG.HOME_CONTENT.HERO.CTA_SECONDARY}
                </Link>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-gray-600">
            {APP_CONFIG.TRUST_INDICATORS.map((indicator, index) => (
              <div key={index} className="flex items-center">
                <FaCheckCircle className="w-5 h-5 mr-2 text-green-500" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
