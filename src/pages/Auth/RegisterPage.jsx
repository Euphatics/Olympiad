import {
  Eye,
  EyeOff,
  Check
} from 'lucide-react';
import { FloatingLabel } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import useSchoolRegistrationForm from '../../hooks/useSchoolRegistrationForm';

export default function RegisterPage() {
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

  const getSelectClass = (fieldName) => {
    const baseClass = "w-full pl-9 pr-3 py-1.5 text-[13px] border rounded-md outline-none transition-all text-gray-600 bg-white cursor-pointer appearance-none";
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-1 focus:ring-red-500 focus:border-red-500`;
    }
    return `${baseClass} border-gray-300 focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF]`;
  };

  const renderError = (fieldName) => {
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return <p className="text-[10px] text-red-500 mt-1 font-medium">{errors[fieldName]}</p>;
    }
    return null;
  };

  const steps = [
    {
      num: 1,
      title: 'Register Your School',
      desc: 'Fill out the School Registration Form with your school and coordinator details. It takes less than 5 minutes!',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      num: 2,
      title: 'Login & Add Students',
      desc: 'Use your credentials to log in to your School Admin Panel.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      num: 3,
      title: 'Make Payment',
      desc: 'Based on the number of students enrolled, make the payment securely through the online gateway.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      )
    },
    {
      num: 4,
      title: 'Activate Students',
      desc: 'Activate student accounts to start practicing for the olympiad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <polyline points="16 11 18 13 22 9"/>
        </svg>
      )
    }
  ];

  return (
    <div className="register-page">
      <Helmet>
        <title>School Registration Portal – NTI Olympiad</title>
        <meta name="description" content="Register your school or student profile for upcoming NTI Olympiad academic competitions." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ntiolympiad.in/register" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="School Registration Portal – NTI Olympiad" />
        <meta property="og:description" content="Register your school or student profile for upcoming NTI Olympiad academic competitions." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/register" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School Registration Portal – NTI Olympiad" />
        <meta name="twitter:description" content="Register your school or student profile for upcoming NTI Olympiad academic competitions." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />
      </Helmet>

      {/* Background layer */}
      <div className="register-blue-bg"></div>

      {/* Content layer */}
      <div className="register-content">

        {/* ───────── LEFT SIDE — How to Get Started ───────── */}
        <div className="register-left">
          <div className="register-info-card rgs-panel">

            {/* Logo */}
          <div className="rgs-logo">
            <div className="rgs-logo-icon">
              <span>N</span>
            </div>
            <span className="rgs-logo-text">
              NTI<span className="rgs-logo-sub">Olympiad</span>
            </span>
          </div>

          {/* Title block */}
          <div className="rgs-title-block">
            <h1 className="rgs-main-title">SCHOOL REGISTRATION</h1>
            <p className="rgs-sub-title">How to Get Started?</p>
            <div className="rgs-divider" />
          </div>

          {/* Steps */}
          <div className="rgs-steps">
            {steps.map((step, i) => (
              <div key={step.num} className={`rgs-step${i === steps.length - 1 ? ' rgs-step--last' : ''}`}>
                {/* Number bubble */}
                <div className={`rgs-step-num${i === steps.length - 1 ? ' rgs-step-num--accent' : ''}`}>
                  {step.num}
                </div>

                {/* Body */}
                <div className="rgs-step-body">
                  <div className="rgs-step-icon-wrap">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="rgs-step-title">{step.title}</h4>
                    <p className="rgs-step-desc">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Why Register card ── */}
          <div className="rgs-why-card">
            <p className="rgs-why-heading">Why schools choose NTI?</p>
            <ul className="rgs-why-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                Free dashboard &amp; student management tools
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                CBSE &amp; ICSE aligned question bank
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                Certificates &amp; medals for top performers
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>
                Dedicated coordinator support
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="rgs-divider rgs-divider--bottom" />

          {/* Contact Info */}
          <div className="rgs-contact">
            <div className="rgs-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rgs-contact-icon" width="17" height="17">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div>
                <span className="rgs-contact-label">Email Id: </span>
                <span className="rgs-contact-value">Olympiad[at]cscacademy[dot]org</span>
              </div>
            </div>
            <div className="rgs-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rgs-contact-icon" width="17" height="17">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <span className="rgs-contact-label">Phone No.: </span>
                <span className="rgs-contact-value">011-49754923/24</span>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* ───────── RIGHT SIDE — Registration Form ───────── */}
        <div className="register-right">
          <div className="register-form-card">
            {/* Header */}
            <div className="mb-2">
              <h2 className="text-lg lg:text-xl font-bold text-gray-800 tracking-tight">School Registration</h2>
              <div className="h-1 w-12 bg-[#007BFF] mt-1 rounded-full"></div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Row 1: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FloatingLabel
                    variant="outlined"
                    label="Candidate Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color={(touched.name || submitted) && errors.name ? "error" : "default"}
                  />
                  {renderError('name')}
                </div>
                <div>
                  <FloatingLabel
                    variant="outlined"
                    label="Your Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color={(touched.designation || submitted) && errors.designation ? "error" : "default"}
                  />
                  {renderError('designation')}
                </div>
              </div>

              {/* Row 2: Country & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="relative group h-full flex flex-col justify-end">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getSelectClass('country') + " h-[50px] !pl-3"}
                      style={{ paddingTop: '8px', paddingBottom: '8px' }}
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
                  <FloatingLabel
                    variant="outlined"
                    label="WhatsApp / Mobile"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color={(touched.phone || submitted) && errors.phone ? "error" : "default"}
                  />
                  {renderError('phone')}
                </div>
              </div>

              {/* Section: School Details */}
              <div className="pt-2">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-100 pb-0.5">School Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FloatingLabel
                      variant="outlined"
                      label="School Name"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={(touched.schoolName || submitted) && errors.schoolName ? "error" : "default"}
                    />
                    {renderError('schoolName')}
                  </div>
                  <div>
                    <FloatingLabel
                      variant="outlined"
                      label="Official Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={(touched.email || submitted) && errors.email ? "error" : "default"}
                    />
                    {renderError('email')}
                  </div>
                </div>

                {/* School Address */}
                <div className="mt-4">
                  <FloatingLabel
                    variant="outlined"
                    label="School Address"
                    name="schoolAddress"
                    value={formData.schoolAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color={(touched.schoolAddress || submitted) && errors.schoolAddress ? "error" : "default"}
                  />
                  {renderError('schoolAddress')}
                </div>
              </div>

              {/* Section: Login Credentials */}
              <div className="pt-2">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-100 pb-0.5">Login Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FloatingLabel
                      variant="outlined"
                      label="Choose a Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={(touched.username || submitted) && errors.username ? "error" : "default"}
                    />
                    {renderError('username')}
                  </div>
                  <div>
                    <div className="relative group">
                      <FloatingLabel
                        variant="outlined"
                        label="Set Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        color={(touched.password || submitted) && errors.password ? "error" : "default"}
                        className="pr-10"
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
              <div className="pt-2">
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Message (Optional)..."
                    rows={2}
                    className="w-full px-4 py-3 text-[14px] border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#007BFF] focus:border-[#007BFF] outline-none transition-all placeholder:text-gray-500 resize-none custom-scroll bg-gray-50 hover:bg-white focus:bg-white"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 text-[15px] font-bold text-white bg-[#007BFF] rounded-lg hover:bg-[#0069D9] transition-colors shadow-md shadow-[#007BFF]/30"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Page shell ── */
        .register-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 64px);
          font-family: 'Inter', sans-serif;
        }

        .register-blue-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #2196F3 0%, #1E88E5 40%, #1976D2 100%);
          z-index: 0;
        }

        .register-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* ── LEFT ── */
        .register-left {
          flex: 0 0 44%;
          padding: 32px 20px 40px 44px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }

        .register-info-card {
          width: 100%;
          max-width: 500px;
          background: #fff;
          border-radius: 20px;
          padding: 32px 32px 40px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        /* ── RIGHT ── */
        .register-right {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 32px 44px 40px 36px;
        }

        .register-form-card {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border-radius: 20px;
          padding: 28px 28px 32px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05);
        }

        /* ──────────────────────────────────────
           HOW TO GET STARTED PANEL
        ────────────────────────────────────── */
        .rgs-panel {
          display: flex;
          flex-direction: column;
        }

        /* Logo */
        .rgs-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          user-select: none;
        }
        .rgs-logo-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(255,255,255,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .rgs-logo-icon span {
          font-family: 'Poppins', sans-serif;
          font-weight: 900;
          font-size: 14px;
          color: #1E3A8A;
        }
        .rgs-logo-text {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: 0.3px;
        }
        .rgs-logo-sub {
          font-weight: 500;
          color: #4b5563;
          margin-left: 4px;
        }

        /* Title */
        .rgs-title-block {
          margin-bottom: 4px;
        }
        .rgs-main-title {
          font-family: 'Poppins', sans-serif !important;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #1f2937;
          margin: 0 0 3px 0;
          line-height: 1.2;
        }
        .rgs-sub-title {
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          color: #4b5563;
          margin: 0 0 10px 0;
        }

        /* Divider */
        .rgs-divider {
          width: 100%;
          height: 1px;
          background: #E5E7EB;
          margin: 8px 0 20px 0;
          border-radius: 999px;
        }
        .rgs-divider--bottom {
          margin: 18px 0 14px 0;
        }

        /* Steps list */
        .rgs-steps {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .rgs-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid #F3F4F6;
          transition: opacity 0.15s;
        }
        .rgs-step:hover {
          opacity: 0.95;
        }
        .rgs-step--last {
          border-bottom: none;
        }

        /* Step number bubble */
        .rgs-step-num {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #EFF6FF;
          border: 2px solid #BFDBFE;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #007BFF;
          transition: transform 0.2s ease, background 0.2s ease;
          margin-top: 1px;
        }
        .rgs-step:hover .rgs-step-num {
          background: #DBEAFE;
          transform: scale(1.07);
        }
        .rgs-step-num--accent {
          background: #DBEAFE;
          border-color: #93C5FD;
        }

        /* Step body */
        .rgs-step-body {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .rgs-step-icon-wrap {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #007BFF;
          margin-top: 2px;
          transition: background 0.2s ease;
        }
        .rgs-step:hover .rgs-step-icon-wrap {
          background: #F1F5F9;
        }
        .rgs-step-title {
          font-family: 'Poppins', sans-serif !important;
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 3px 0;
          line-height: 1.3;
        }
        .rgs-step-desc {
          font-size: 12px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          max-width: 280px;
        }

        /* Contact info */
        .rgs-contact {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .rgs-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .rgs-contact-icon {
          flex-shrink: 0;
          color: #007BFF;
        }
        .rgs-contact-label {
          font-size: 12.5px;
          font-weight: 700;
          color: #1f2937;
          font-family: 'Poppins', sans-serif;
        }
        .rgs-contact-value {
          font-size: 12px;
          color: #4b5563;
          word-break: break-word;
        }

        /* ── Why NTI card ── */
        .rgs-why-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 4px;
        }
        .rgs-why-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 10px 0;
          letter-spacing: 0.1px;
          text-transform: uppercase;
        }
        .rgs-why-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rgs-why-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #4b5563;
          line-height: 1.4;
        }
        .rgs-why-list li svg {
          flex-shrink: 0;
          color: #10B981;
          stroke: #10B981;
        }
      `}</style>
    </div>
  );
}