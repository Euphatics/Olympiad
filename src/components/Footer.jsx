import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  FileText,
  Handshake,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-slate-400 pt-12 pb-8 px-6 sm:px-10 lg:px-16 border-t border-slate-800">
      
      {/* Inner symmetrical layout centering the content area */}
      <div className="max-w-[1536px] mx-auto flex flex-col gap-8">
        
        {/* ─── TOP ROW: Header Link & Social Icons ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 border-b border-slate-800">
          
          {/* Become a Partner / Register School */}
          <div className="flex items-center gap-2.5">
            <Handshake className="text-amber-500 flex-shrink-0" size={20} />
            <a
              href="#register-school"
              className="text-amber-500 hover:text-amber-400 font-extrabold text-sm underline tracking-wide transition-colors"
            >
              Register Your School
            </a>
          </div>

          {/* Social Icons — Follow Us */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Follow Us</span>
            <ul className="flex items-center gap-3">
              {/* Facebook */}
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1877F2] hover:opacity-90 text-white flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                  title="Facebook"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                </a>
              </li>
              {/* Instagram */}
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </li>
              {/* YouTube */}
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#FF0000] hover:opacity-90 text-white flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                  title="YouTube"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 00-2.11 2.107C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 002.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 002.11-2.107c.502-1.865.502-5.837.502-5.837s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] hover:opacity-90 text-white flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── MAIN BODY SECTION: Symmetrical 2-Column Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-2">
          
          {/* Left Column: Contact Us */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-white font-extrabold text-base tracking-wider">
                Contact <span className="text-royal-400">Us</span>
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex gap-3 items-start text-[13px]">
                <Phone className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Phone</span>
                  <a href="tel:+911234567890" className="text-slate-300 hover:text-white transition-colors">
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center border-t border-slate-800 pt-3.5 text-[13px]">
                <Mail className="text-royal-400 flex-shrink-0" size={16} />
                <div className="leading-relaxed flex gap-1.5 items-center">
                  <span className="font-semibold text-slate-500">Email:</span>
                  <a
                    href="mailto:info@ntiolympiad.in"
                    className="text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-royal-400 transition-colors duration-150"
                  >
                    info@ntiolympiad.in
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-3 items-center border-t border-slate-800 pt-3.5 text-[13px]">
                <Globe className="text-royal-400 flex-shrink-0" size={16} />
                <div className="leading-relaxed flex gap-1.5 items-center">
                  <span className="font-semibold text-slate-500">Website:</span>
                  <a
                    href="https://www.ntiolympiad.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-royal-400 transition-colors duration-150"
                  >
                    www.ntiolympiad.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Links & Info */}
          <div className="flex flex-col gap-5 md:border-l md:border-slate-800 md:pl-10">
            <div>
              <h4 className="text-white font-extrabold text-base tracking-wider">
                Quick Links
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {/* Exam Info */}
              <div className="flex gap-3 items-start text-[13px]">
                <MapPin className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Exam Mode</span>
                  <span className="text-slate-300">Offline (At Schools) & Online (From Home)</span>
                </div>
              </div>

              {/* Exam Levels */}
              <div className="flex gap-3 items-start border-t border-slate-800 pt-3.5 text-[13px]">
                <MapPin className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Exam Levels</span>
                  <span className="text-slate-300">School Level · Zonal Level · National Level</span>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="flex gap-3 items-center border-t border-slate-800 pt-3.5 text-[13px]">
                <FileText className="text-royal-400 flex-shrink-0" size={16} />
                <div className="leading-relaxed flex gap-1.5 items-center">
                  <a
                    href="/privacy-policy"
                    className="text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-royal-400 transition-colors duration-150 font-bold"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ─── TAGLINE ─── */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-[14px] text-slate-400 italic leading-relaxed">
            <span className="text-royal-400 text-lg font-serif">"</span>
            We don't just conduct exams, we create opportunities that shape future achievers.
            <span className="text-royal-400 text-lg font-serif">"</span>
          </p>
        </div>

        {/* ─── BOTTOM ROW: Copyright Disclaimer ─── */}
        <div className="border-t border-slate-800 pt-6 text-[11px] text-slate-500 leading-relaxed">
          <p className="mb-1">
            Copyright © 2025 <span className="text-slate-400 font-bold uppercase">NTI Olympiad</span> | All Rights Reserved.
          </p>
          <p className="text-slate-600">
            No part of this site including content and/or logo, may be copied and/or used in any manner without prior written consent of NTI Olympiad.
          </p>
        </div>

      </div>

    </footer>
  );
}
