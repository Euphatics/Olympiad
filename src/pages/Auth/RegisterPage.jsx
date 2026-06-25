import {
  Eye,
  EyeOff,
  Check,
  Globe,
  Mail,
  Phone
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
    const baseClass = "w-full pl-9 pr-3 py-1.5 text-[14px] border rounded-md outline-none transition-all text-gray-800 bg-white cursor-pointer appearance-none relative z-10 font-medium";
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return `${baseClass} border-red-500 focus:ring-0 focus:border-red-500`;
    }
    return `${baseClass} border-gray-300 focus:ring-0 focus:border-blue-600`;
  };

  const renderError = (fieldName) => {
    if ((touched[fieldName] || submitted) && errors[fieldName]) {
      return (
        <p className="text-[12px] text-red-600 mt-1.5 font-medium">
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="register-page">
      <Helmet>
        <title>School Registration Portal – NTI Olympiad</title>
        <meta name="description" content="Register your school or student profile for upcoming NTI Olympiad academic competitions." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ntiolympiad.in/register" />
      </Helmet>

      {/* Academic Background layer */}
      <div className="register-bg">
        <div className="bg-pattern"></div>
      </div>

      <div className="register-content">
        {/* ───────── LEFT SIDE — Information ───────── */}
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
              <h1 className="rgs-main-title">Register Your School for NTI Olympiad 2026–27</h1>
              <p className="rgs-sub-title">Join India's National Olympiad Network.</p>
              <div className="rgs-divider" />
            </div>

            {/* Steps Timeline */}
            <div className="rgs-timeline">
              <div className="rgs-timeline-item">
                <div className="rgs-timeline-marker">1</div>
                <div className="rgs-timeline-content">
                  <h4 className="rgs-step-title">Register Your School</h4>
                  <p className="rgs-step-desc">Complete the registration form with your coordinator and school details.</p>
                </div>
              </div>
              
              <div className="rgs-timeline-item">
                <div className="rgs-timeline-marker">2</div>
                <div className="rgs-timeline-content">
                  <h4 className="rgs-step-title">Sign In to Your Dashboard</h4>
                  <p className="rgs-step-desc">Access your secure school dashboard using your registered credentials.</p>
                </div>
              </div>

              <div className="rgs-timeline-item">
                <div className="rgs-timeline-marker">3</div>
                <div className="rgs-timeline-content">
                  <h4 className="rgs-step-title">Add Students & Select Subjects</h4>
                  <p className="rgs-step-desc">Enter student names, classes, and choose the Olympiad subjects for each participant.</p>
                </div>
              </div>

              <div className="rgs-timeline-item">
                <div className="rgs-timeline-marker">4</div>
                <div className="rgs-timeline-content">
                  <h4 className="rgs-step-title">Review & Submit</h4>
                  <p className="rgs-step-desc">Verify your entries and submit the registrations before the deadline.</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="rgs-trust">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3 text-white/90 text-[14.5px]">
                  <Check size={16} className="text-white" strokeWidth={3} />
                  <span>2,500+ Participating Schools</span>
                </div>
                <div className="flex items-center gap-3 text-white/90 text-[14.5px]">
                  <Check size={16} className="text-white" strokeWidth={3} />
                  <span>100,000+ Enrolled Students</span>
                </div>
                <div className="flex items-center gap-3 text-white/90 text-[14.5px]">
                  <Check size={16} className="text-white" strokeWidth={3} />
                  <span>National Olympiad Platform</span>
                </div>
                <div className="flex items-center gap-3 text-white/90 text-[14.5px]">
                  <Check size={16} className="text-white" strokeWidth={3} />
                  <span>ISO Certified Institution</span>
                </div>
              </div>
            </div>

            <div className="rgs-divider rgs-divider--bottom" />

            {/* Contact Info */}
            <div className="rgs-contact">
              <div className="rgs-contact-item">
                <Mail size={16} className="text-[#94a3b8]" />
                <span className="rgs-contact-value">Olympiad[at]cscacademy[dot]org</span>
              </div>
              <div className="rgs-contact-item mt-3">
                <Phone size={16} className="text-[#94a3b8]" />
                <span className="rgs-contact-value">011-49754923/24</span>
              </div>
            </div>
          </div>
        </div>

        {/* ───────── RIGHT SIDE — Registration Form ───────── */}
        <div className="register-right">
          <div className="register-form-card">
            
            <div className="mb-10 sm:text-left text-center">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">School Registration</h2>
              <p className="text-[15px] text-gray-500 mt-2">Please complete the form below to register your institution.</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              
              {/* Section: Coordinator Information */}
              <div className="form-section">
                <div className="section-header">
                  <h3>Coordinator Information</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="input-wrapper">
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
                  <div className="input-wrapper">
                    <FloatingLabel
                      variant="outlined"
                      label="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      color={(touched.designation || submitted) && errors.designation ? "error" : "default"}
                    />
                    {renderError('designation')}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <div className="input-wrapper">
                    <div className="relative h-full flex flex-col justify-end">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-20 h-[50px] bottom-0">
                         <Globe size={16} />
                      </div>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getSelectClass('country') + " h-[50px] bg-transparent relative z-10"}
                      >
                        <option value="" disabled>Select Country</option>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                      </select>
                      {/* Flowbite Floating Label Style Border emulation for select */}
                      <div className={`absolute inset-0 border rounded-md pointer-events-none z-0 ${((touched.country || submitted) && errors.country) ? 'border-red-500' : 'border-gray-300'}`}></div>
                    </div>
                    {renderError('country')}
                  </div>
                  <div className="input-wrapper">
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
              </div>

              {/* Section: School Details */}
              <div className="form-section">
                <div className="section-header">
                  <h3>School Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="input-wrapper">
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
                  <div className="input-wrapper">
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

                <div className="input-wrapper mt-5">
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
              <div className="form-section">
                <div className="section-header">
                  <h3>Login Credentials</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="input-wrapper">
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
                  <div className="input-wrapper">
                    <div className="relative">
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
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none transition-colors z-10"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {/* Password Criteria Checklist */}
                    {formData.password && (
                      <div className="mt-3 bg-gray-50 rounded-md p-3 border border-gray-200">
                        <div className="space-y-2">
                          {criteria.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[13px]">
                              {item.met ? (
                                <Check size={14} className="text-green-600" strokeWidth={3} />
                              ) : (
                                <div className="w-3.5 h-3.5 rounded-full border border-gray-300 bg-white" />
                              )}
                              <span className={item.met ? 'text-green-700 font-medium' : 'text-gray-600'}>
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {renderError('password')}
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="input-wrapper">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Additional Information (Optional)..."
                  rows={2}
                  className="w-full px-4 py-3.5 text-[15px] border border-gray-300 rounded-md outline-none transition-all placeholder:text-gray-500 resize-none custom-scroll bg-transparent relative z-10 font-medium"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-[16px] font-semibold text-white bg-[#111827] hover:bg-black rounded-md transition-all active:scale-[0.99] flex justify-center items-center"
                >
                  Submit Registration
                </button>
                <p className="text-center text-[13px] text-gray-500 mt-4">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
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
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: #0f4c9c;
        }

        /* ── Academic Background ── */
        .register-bg {
          display: none;
        }
        
        .bg-pattern {
          display: none;
        }

        .register-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          max-width: 100%;
          margin: 0;
          min-height: calc(100vh - 64px);
        }

        /* ── LEFT ── */
        .register-left {
          flex: 1;
          padding: 64px 48px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .register-info-card {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          margin-right: 0;
          gap: 2rem;
        }

        /* ── RIGHT ── */
        .register-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 64px 48px;
        }

        .register-form-card {
          width: 100%;
          max-width: 560px;
          background: #ffffff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ──────────────────────────────────────
           FORM STYLES (RIGHT PANEL)
        ────────────────────────────────────── */
        
        .section-header {
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 10px;
          margin-bottom: 24px;
        }
        
        .section-header h3 {
          font-size: 14px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .input-wrapper {
          position: relative;
        }
        
        .input-wrapper textarea:focus,
        .input-wrapper input:focus, 
        .input-wrapper select:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15) !important;
        }
        
        .input-wrapper input, .input-wrapper select {
          border-radius: 6px !important;
          border-color: #cbd5e1 !important;
          background-color: #ffffff !important;
          font-weight: 500 !important;
          color: #1e293b !important;
          transition: all 0.2s ease !important;
        }
        
        .input-wrapper label {
          color: #64748b;
          font-weight: 500;
        }

        /* ──────────────────────────────────────
           LEFT PANEL STYLES
        ────────────────────────────────────── */
        .rgs-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          user-select: none;
        }
        .rgs-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rgs-logo-icon span {
          font-family: 'Georgia', serif;
          font-weight: 700;
          font-size: 20px;
          color: #0f172a;
        }
        .rgs-logo-text {
          font-family: 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.5px;
        }
        .rgs-logo-sub {
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          margin-left: 6px;
        }

        /* Title */
        .rgs-main-title {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .rgs-sub-title {
          font-size: 17px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* Divider */
        .rgs-divider {
          width: 40px;
          height: 3px;
          background: #3b82f6;
          margin-top: 16px;
          border-radius: 2px;
        }
        .rgs-divider--bottom {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.4);
          margin: 0;
        }

        /* Timeline list */
        .rgs-timeline {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .rgs-timeline::before {
          content: '';
          position: absolute;
          left: 13px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }
        .rgs-timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          position: relative;
          margin-bottom: 24px;
        }
        .rgs-timeline-item:last-child {
          margin-bottom: 0;
        }
        .rgs-timeline-marker {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #111827;
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          z-index: 1;
          flex-shrink: 0;
        }
        .rgs-timeline-content {
          padding-top: 2px;
        }
        .rgs-step-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .rgs-step-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
          margin: 0;
        }

        /* Contact info */
        .rgs-contact {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .rgs-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .rgs-contact-value {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .register-content {
            flex-direction: column;
          }
          .register-left {
            flex: none;
            width: 100%;
            padding: 40px 20px 20px;
            justify-content: center;
          }
          .register-right {
            flex: none;
            width: 100%;
            padding: 20px 20px 40px;
            justify-content: center;
          }
          .register-info-card, .register-form-card {
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .register-form-card {
            padding: 24px;
          }
          .rgs-timeline-item {
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}