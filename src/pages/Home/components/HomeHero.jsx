import { Carousel } from "flowbite-react";
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
  Eye,
  EyeOff,
  Check
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useSchoolRegistrationForm from '../../../hooks/useSchoolRegistrationForm';

export default function HomeHero() {
  const {
    formData,
    errors,
    touched,
    submitted,
    showPassword,
    setShowPassword,
    handleChange,
    handleBlur,
    handleSubmit,
    criteria
  } = useSchoolRegistrationForm();

  const getInputClass = (fieldName) => {
    let baseClass = "w-full pl-9 py-1.5 text-[13px] border rounded-md outline-none transition-all placeholder:text-gray-300";
    if (fieldName === 'password') {
      baseClass += " pr-10";
    } else {
      baseClass += " pr-3";
    }

    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-1 focus:ring-red-500 focus:border-red-500`;
    }
    return `${baseClass} border-gray-300 focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF]`;
  };

  const getSelectClass = (fieldName) => {
    const baseClass = "w-full pl-9 pr-3 py-1.5 text-[13px] border rounded-md outline-none transition-all text-gray-600 bg-white cursor-pointer appearance-none";
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-1 focus:ring-red-500 focus:border-red-500`;
    }
    return `${baseClass} border-gray-300 focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF]`;
  };

  const getIconClass = (fieldName) => {
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return "text-red-400 group-focus-within:text-red-500 transition-colors";
    }
    return "text-gray-400 group-focus-within:text-[#007BFF] transition-colors";
  };

  const renderError = (fieldName) => {
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return <p className="text-[10px] text-red-500 mt-1 font-medium">{errors[fieldName]}</p>;
    }
    return null;
  };

  return (
    <section className="w-full bg-[#f9fafb] py-6 lg:py-8 border-b border-gray-200">
      <Helmet>
        <title>NTI Olympiad – Academic Excellence Starts Here</title>
        <meta name="description" content="NTI Olympiad – India's premier academic competition platform for students from Nursery to Class 10." />
        <link rel="canonical" href="https://ntiolympiad.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NTI Olympiad – Academic Excellence Starts Here" />
        <meta property="og:description" content="NTI Olympiad – India's premier academic competition platform for students from Nursery to Class 10." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NTI Olympiad – Academic Excellence Starts Here" />
        <meta name="twitter:description" content="NTI Olympiad – India's premier academic competition platform for students from Nursery to Class 10." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NTI Olympiad",
            "url": "https://ntiolympiad.in/"
          })}
        </script>

        {/* EducationalOrganization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "National Talent Identification Olympiad (NTI)",
            "alternateName": "NTI Olympiad",
            "url": "https://ntiolympiad.in/",
            "logo": "https://ntiolympiad.in/favicon.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7972621561",
              "contactType": "customer service",
              "email": "info@ntiolympiad.in",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/ntiolympiad",
              "https://www.instagram.com/ntiolympiad",
              "https://twitter.com/ntiolympiad"
            ]
          })}
        </script>
      </Helmet>
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* 2-Column Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ────────────────────────────────────────────────────────
              LEFT COLUMN: SLIDESHOW PLACEHOLDER
              ──────────────────────────────────────────────────────── */}
          <div className="w-full lg:col-span-7 h-[250px] sm:h-[350px] lg:h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Carousel>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Students participating in NTI Olympiad examination classroom" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Academic excellence certificates and gold medals ceremony" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="National Talent Identification Olympiad study materials and books" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Interactive online test preparation portal dashboard" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Happy school students celebrating academic success" />
            </Carousel>
          </div>

          <div className="w-full lg:col-span-5 p-3 lg:p-4 relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="mb-2 relative z-10">
              <h2 className="text-lg lg:text-xl font-bold text-gray-800 tracking-tight">School Registration</h2>
              <div className="h-1 w-12 bg-[#007BFF] mt-1 rounded-full"></div>
            </div>

            <form className="space-y-3 relative z-10" onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-0">Candidate Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className={getIconClass('name')} />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. John Doe" 
                      className={getInputClass('name')} 
                    />
                  </div>
                  {renderError('name')}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-0">Your Designation</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={16} className={getIconClass('designation')} />
                    </div>
                    <input 
                      type="text" 
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Principal, Teacher" 
                      className={getInputClass('designation')} 
                    />
                  </div>
                  {renderError('designation')}
                </div>
              </div>

              {/* Row 2: Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-0">Select Country</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={16} className={getIconClass('country')} />
                    </div>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getSelectClass('country')}
                    >
                      <option value="" disabled>Select Country</option>
                      <option value="in" className="text-gray-800">India</option>
                      <option value="us" className="text-gray-800">United States</option>
                      <option value="uk" className="text-gray-800">United Kingdom</option>
                      <option value="au" className="text-gray-800">Australia</option>
                    </select>
                  </div>
                  {renderError('country')}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-0">WhatsApp / Mobile</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={16} className={getIconClass('phone')} />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 234 567 8900" 
                      className={getInputClass('phone')} 
                    />
                  </div>
                  {renderError('phone')}
                </div>
              </div>

              {/* Section: School Details */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 border-b border-gray-100 pb-0.5">School Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-0">School Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GraduationCap size={16} className={getIconClass('schoolName')} />
                      </div>
                      <input 
                        type="text" 
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter school name" 
                        className={getInputClass('schoolName')} 
                      />
                    </div>
                    {renderError('schoolName')}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-0">Official Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className={getIconClass('email')} />
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="contact@school.edu" 
                        className={getInputClass('email')} 
                      />
                    </div>
                    {renderError('email')}
                  </div>
                </div>
                
                {/* Row 4: School Address */}
                <div className="mt-4">
                  <label className="block text-[11px] font-semibold text-gray-700 mb-0">School Address</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={16} className={getIconClass('schoolAddress')} />
                    </div>
                    <input 
                      type="text" 
                      name="schoolAddress"
                      value={formData.schoolAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter full school address" 
                      className={getInputClass('schoolAddress')} 
                    />
                  </div>
                  {renderError('schoolAddress')}
                </div>
              </div>

              {/* Section: Login Credentials */}
              <div>
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 border-b border-gray-100 pb-0.5">Login Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-0">Choose a Username</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IdCard size={16} className={getIconClass('username')} />
                      </div>
                      <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. schooladmin" 
                        className={getInputClass('username')} 
                      />
                    </div>
                    {renderError('username')}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-0">Set Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={16} className={getIconClass('password')} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="••••••••" 
                        className={getInputClass('password')} 
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    
                    {/* Password Criteria Checklist */}
                    {formData.password && (
                      <div className="mt-2 space-y-1">
                        {criteria.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px]">
                            {item.met ? (
                              <Check size={12} className="text-green-500" strokeWidth={3} />
                            ) : (
                              <div className="w-3 h-3 rounded-full border border-gray-300 flex-shrink-0" />
                            )}
                            <span className={item.met ? 'text-green-600 font-medium' : 'text-gray-500'}>
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {renderError('password')}
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-0">Your Message (Optional)</label>
                <div className="relative group">
                  <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none">
                    <MessageSquare size={14} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                  </div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Write any additional details here..." 
                    rows={2} 
                    className="w-full pl-9 pr-3 py-1.5 text-[13px] border border-gray-300 rounded-md focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-300 resize-none custom-scroll"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button 
                  type="submit" 
                  className="w-full py-2 text-[14px] font-bold text-white bg-[#007BFF] rounded-md hover:bg-[#0069D9] transition-colors shadow-md shadow-[#007BFF]/30"
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
