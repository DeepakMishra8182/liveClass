import React from "react";
import {
  FaEnvelope,
  FaExclamationCircle,
  FaLock,
  FaShieldAlt,
  FaSpinner,
  FaUser,
  FaUserPlus,
  FaVideo,
} from "react-icons/fa";
import { APP_CONFIG, ROUTES } from "../utils/constants";
import { Link } from "react-router-dom";

const AuthForm = ({
  mode,
  formData,
  onChange,
  onSubmit,
  loading,
  error,
  localError,
}) => {
  const isLogin = mode === "login";
  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${isLogin ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" : "bg-gradient-to-br from-purple-50 via-pink-50 to-red-50"}`}
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-4 ${isLogin ? "bg-gradient-to-br from-blue-600 to-indigo-600" : "bg-gradient-to-br from-purple-600 to-pink-600"}`}
          >
            {isLogin ? (
              <FaVideo className="w-8 h-8 text-white" />
            ) : (
              <FaUserPlus className="w-8 h-8 text-white" />
            )}
          </div>

          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            {isLogin ? APP_CONFIG.APP_NAME : `Join ${APP_CONFIG.APP_NAME}`}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? APP_CONFIG.APP_TAGLINE
              : "Start your learning journey today"}
          </p>
        </div>

        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              {isLogin
                ? APP_CONFIG.AUTH_CONTENT.LOGIN.HEADING
                : APP_CONFIG.AUTH_CONTENT.REGISTER.HEADING}
            </h2>

            <p className="mt-2 text-sm text-center text-gray-600">
              {isLogin
                ? APP_CONFIG.AUTH_CONTENT.LOGIN.DESCRIPTION
                : APP_CONFIG.AUTH_CONTENT.REGISTER.DESCRIPTION}
            </p>
          </div>

          <form
            className={isLogin ? "space-y-5" : "space-y-4"}
            onSubmit={onSubmit}
          >
            {(error || localError) && (
              <div className="flex items-start p-4 text-red-700 border-red-500 rounded-lg bg-red-50 border-1-4">
                <FaExclamationCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{error || localError}</span>
              </div>
            )}

            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 tetx-sm"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name || ""}
                    onChange={onChange}
                    className="block w-full py-3 pl-10 pr-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700 tetx-sm"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email || ""}
                  onChange={onChange}
                  className={`block w-full pl-10 pr-3  py-3 border border-gray-300 rounded-lg focus:ring-2  transition-colors ${isLogin ? "focus:ring-blue-500 focus:border-blue-500" : "focus:ring-purple-500 focus:border-purple-500"}`}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700 tetx-sm"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={formData.password || ""}
                  onChange={onChange}
                  className={`block w-full pl-10 pr-3  py-3 border border-gray-300 rounded-lg focus:ring-2  transition-colors ${isLogin ? "focus:ring-blue-500 focus:border-blue-500" : "focus:ring-purple-500 focus:border-purple-500"}`}
                  placeholder={
                    isLogin ? "Enter your password" : "Minimum 6 characters"
                  }
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 tetx-sm"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaShieldAlt className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="confirmPassword"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword || ""}
                    onChange={onChange}
                    className={`block w-full pl-10 pr-3  py-3 border border-gray-300 rounded-lg focus:ring-2  transition-colors ${isLogin ? "focus:ring-blue-500 focus:border-blue-500" : "focus:ring-purple-500 focus:border-purple-500"}`}
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]  ${isLogin ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500" : "bg-gradient-to-r from-purple-600 to-pink-600  hover:from-purple-700 hover:to-pink-700 focus:ring-purple-500 mt-6"}`}
            >
              {loading ? (
                <>
                  <FaSpinner className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" />
                  {isLogin ? "Signing..." : "Creating account..."}
                </>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account{" "}
                  <Link
                    to={ROUTES.REGISTER}
                    className="font-medium text-blue-600 transition-colors hover:text-blue-500"
                  >
                    Create one now
                  </Link>
                </>
              ) : (
                <>
                  Already have an account{" "}
                  <Link
                    to={ROUTES.LOGIN}
                    className="font-medium text-purple-600 transition-colors hover:text-purple-500"
                  >
                    Sign in here
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
