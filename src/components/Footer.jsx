import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  FileText,
  Handshake,
  Building
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] text-slate-400 pt-12 pb-8 px-6 sm:px-10 lg:px-16 border-t border-slate-800">
      
      {/* Inner symmetrical layout centering the content area */}
      <div className="max-w-[1536px] mx-auto flex flex-col gap-8">
        
        {/* ─── TOP ROW: Header Link & Social Icons ─── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 border-b border-slate-800">
          
          {/* Become a Partner Link */}
          <div className="flex items-center gap-2.5">
            <Handshake className="text-amber-500 flex-shrink-0" size={20} />
            <a
              href="#become-partner"
              className="text-amber-500 hover:text-amber-400 font-extrabold text-sm underline tracking-wide transition-colors"
            >
              Become a Partner
            </a>
          </div>

          {/* Social Icons (Top Set) */}
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
            {/* Twitter / X */}
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1DA1F2] hover:opacity-90 text-white flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                title="Twitter / X"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
          </ul>

        </div>

        {/* ─── MAIN BODY SECTION: Symmetrical 2-Column Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-2">
          
          {/* Left Column: Contact Us, Addresses, Email */}
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="text-white font-extrabold text-base tracking-wider">
                Contact <span className="text-royal-400">Us</span>
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {/* Main Address */}
              <div className="flex gap-3 items-start text-[13px]">
                <MapPin className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Science Olympiad Foundation</span>
                  <span className="text-slate-300">Plot no 99, Sector - 44, Gurugram (Haryana) India</span>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex gap-3 items-start border-t border-slate-800 pt-3.5 text-[13px]">
                <Building className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Registered Office</span>
                  <span className="text-slate-300">Plot no 99, Sector - 44, Gurugram (Haryana) India</span>
                </div>
              </div>

              {/* Gmail / Email */}
              <div className="flex gap-3 items-center border-t border-slate-800 pt-3.5 text-[13px]">
                <Mail className="text-royal-400 flex-shrink-0" size={16} />
                <div className="leading-relaxed flex gap-1.5 items-center">
                  <span className="font-semibold text-slate-500">Gmail:</span>
                  <a
                    href="mailto:info@sofworld.org"
                    className="text-slate-300 hover:text-white underline decoration-slate-600 hover:decoration-royal-400 transition-colors duration-150"
                  >
                    info@sofworld.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phones, Work Timings, Privacy Policy */}
          <div className="flex flex-col gap-5 md:border-l md:border-slate-800 md:pl-10">
            <div>
              <h4 className="text-white font-extrabold text-base tracking-wider">
                Phones & Timings
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              {/* Phones & Landlines */}
              <div className="flex gap-3 items-start text-[13px]">
                <Phone className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col gap-1 text-[13px] text-slate-300">
                  <div>
                    <span className="font-bold text-white">Landline:</span> +91 124-4951200
                  </div>
                  <div>
                    <span className="font-bold text-white">Mobile 1:</span> +91 9312680855
                  </div>
                  <div>
                    <span className="font-bold text-white">Mobile 2:</span> +91 9312680857
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-3 items-start border-t border-slate-800 pt-3.5 text-[13px]">
                <Clock className="text-royal-400 flex-shrink-0 mt-0.5" size={16} />
                <div className="leading-relaxed">
                  <span className="font-bold text-white block mb-0.5">Timing</span>
                  <span className="text-slate-300">Monday - Friday | 8:30 AM - 5:30 PM</span>
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

        {/* ─── BOTTOM ROW: Copyright Disclaimer ─── */}
        <div className="border-t border-slate-800 pt-6 text-[11px] text-slate-500 leading-relaxed">
          <p className="mb-1">
            Copyright © 2024 <span className="text-slate-400 font-bold uppercase">Science Olympiad Foundation</span> | All Rights Reserved.
          </p>
          <p className="text-slate-600">
            No part of this site including content and/or logo, may be copied and/or used in any manner without prior written consent of SOF.
          </p>
        </div>

      </div>

    </footer>
  );
}
