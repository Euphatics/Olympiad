import React from 'react';
import {
  User,
  Briefcase,
  MapPin,
  Phone,
  GraduationCap,
  Mail,
  IdCard,
  Lock,
  MessageSquare,
  Image as ImageIcon
} from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="w-full bg-[#f9fafb] py-6 lg:py-8 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 2-Column Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: SLIDESHOW PLACEHOLDER
              ──────────────────────────────────────────────────────── */}
          <div className="w-full lg:col-span-7 h-[350px] lg:h-auto bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <ImageIcon size={64} className="mb-4 text-gray-300 group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-xl font-medium text-gray-500">Slideshow / Carousel</h2>
              <p className="text-sm text-gray-400 mt-2 text-center max-w-sm px-4">
                This empty container spans the left column. Insert your slider library (e.g. Swiper.js) here.
              </p>
            </div>
            
            {/* Fake pagination dots for visual effect */}
            <div className="absolute bottom-6 flex gap-2 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#007BFF]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              RIGHT COLUMN: REGISTRATION FORM
              ──────────────────────────────────────────────────────── */}
          <div className="w-full lg:col-span-5 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-5 lg:p-6 relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="mb-4 relative z-10">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">School Registration</h2>
              <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
            </div>

            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Candidate Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                    </div>
                    <input type="text" placeholder="e.g. John Doe" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Designation</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                    </div>
                    <input type="text" placeholder="e.g. Principal, Teacher" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Row 2: Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Select Country</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                    </div>
                    <select className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all text-gray-600 bg-white cursor-pointer appearance-none">
                      <option value="" disabled selected>Select Country</option>
                      <option value="in" className="text-gray-800">India</option>
                      <option value="us" className="text-gray-800">United States</option>
                      <option value="uk" className="text-gray-800">United Kingdom</option>
                      <option value="au" className="text-gray-800">Australia</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Mobile</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                    </div>
                    <input type="tel" placeholder="+1 234 567 8900" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Section: School Details */}
              <div className="pt-1">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">School Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">School Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                      </div>
                      <input type="text" placeholder="Enter school name" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Official Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                      </div>
                      <input type="email" placeholder="contact@school.edu" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Login Credentials */}
              <div className="pt-1">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">Login Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Choose a Username</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IdCard size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                      </div>
                      <input type="text" placeholder="e.g. schooladmin" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Set Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                      </div>
                      <input type="password" placeholder="••••••••" className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="pt-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message (Optional)</label>
                <div className="relative group">
                  <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none">
                    <MessageSquare size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                  </div>
                  <textarea 
                    placeholder="Write any additional details here..." 
                    rows={2} 
                    className="w-full pl-9 pr-3 py-2 text-[14px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300 resize-none custom-scroll"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full py-2.5 text-[15px] font-bold text-white bg-[#007BFF] rounded-md hover:bg-[#0069D9] transition-colors shadow-md shadow-[#007BFF]/30"
                >
                  Submit Registration
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
