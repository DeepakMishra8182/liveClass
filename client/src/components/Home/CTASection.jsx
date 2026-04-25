import React from "react";
import { useAuth } from "../../context/AuthContext";
import { APP_CONFIG, ROUTES } from "../../utils/constants";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold text-white">
          {APP_CONFIG.HOME_CONTENT.CTA.HEADING}
        </h2>

        <p className="mb-8 text-xl text-blue-100">
          {APP_CONFIG.HOME_CONTENT.CTA.DESCRIPTION.replace(
            "{APP_NAME}",
            APP_CONFIG.APP_NAME,
          )}
        </p>

        {isAuthenticated ? (
          <Link
            to={ROUTES.DASHBOARD}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all transform bg-white shadow-lg rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-105 "
          >
            {APP_CONFIG.HOME_CONTENT.CTA.BUTTON_AUTHENTICATED}
            <FaArrowRight className="ml-2" />
          </Link>
        ) : (
          <Link
            to={ROUTES.REGISTER}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all transform bg-white shadow-lg rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:scale-105 "
          >
            {APP_CONFIG.HOME_CONTENT.CTA.BUTTON_GUEST}
            <FaArrowRight className="ml-2" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
