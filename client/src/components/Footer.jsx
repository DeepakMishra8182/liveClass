
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaVideo,
} from "react-icons/fa";
import { APP_CONFIG } from "../utils/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-[#020617] text-slate-300 overflow-hidden">
      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 space-x-4 cursor-pointer group">
              <div className="flex items-center justify-center w-12 h-12 transition-transform duration-500 shadow-lg bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 rounded-2xl shadow-indigo-500/20 group-hover:scale-110">
                <FaVideo className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl italic font-black tracking-tighter text-white">
                {APP_CONFIG.APP_NAME}
              </h3>
            </div>
            <p className="max-w-sm mb-8 font-medium leading-relaxed text-slate-400">
              {APP_CONFIG.APP_DESCRIPTION}
            </p>

            {/* Social Icons with Pulse Effect */}
            <div className="flex space-x-5">
              {[
                { icon: <FaGithub />, link: APP_CONFIG.SOCIAL_LINKS.GITHUB, label: "Github" },
                { icon: <FaTwitter />, link: APP_CONFIG.SOCIAL_LINKS.TWITTER, label: "Twitter" },
                { icon: <FaLinkedin />, link: APP_CONFIG.SOCIAL_LINKS.LINKEDIN, label: "LinkedIn" },
                { icon: <FaEnvelope />, link: APP_CONFIG.SOCIAL_LINKS.EMAIL, label: "Email" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-900 border border-white/5 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                  aria-label={item.label}
                >
                  <span className="text-lg">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] opacity-50">Navigation</h4>
            <ul className="space-y-4">
              {APP_CONFIG.FOOTER_LINKS.QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a
                      href={link.route}
                      className="flex items-center font-bold transition-all text-slate-400 hover:text-indigo-400 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.route}
                      className="flex items-center font-bold transition-all text-slate-400 hover:text-indigo-400 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all"></span>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] opacity-50">Support Hub</h4>
            <ul className="space-y-4">
              {APP_CONFIG.FOOTER_LINKS.SUPPORT_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="flex items-center font-bold transition-all text-slate-400 hover:text-indigo-400 group"
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-500 mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between pt-8 mt-20 text-xs font-bold tracking-widest uppercase border-t border-white/5 md:flex-row text-slate-500">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} {APP_CONFIG.APP_NAME}. {APP_CONFIG.COPYRIGHT_TEXT}
          </p>
          <div className="flex space-x-6">
            <span className="transition-colors cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="transition-colors cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;