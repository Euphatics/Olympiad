import {
  Eye,
  EyeOff,
  Check,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { FloatingLabel } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import useSchoolRegistrationForm from '../../hooks/useSchoolRegistrationForm';

export default function RegisterPage() {
  const {
    currentStep,
    totalSteps,
    formData,
    errors,
    touched,
    submitted,
    showPassword,
    isSubmitting,
    setShowPassword,
    handleChange,
    handleBlur,
    handleNext,
    handlePrev,
    handleSubmit,
    criteria
  } = useSchoolRegistrationForm();

  const getSelectClass = (fieldName) => {
    const baseClass = "w-full pl-3 pr-3 py-1.5 text-[14px] border rounded-md outline-none transition-all text-gray-800 bg-white cursor-pointer relative z-10 font-medium";
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

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="section-header">
        <h3>1. School Details</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="School Name" name="schoolName" value={formData.schoolName} onChange={handleChange} onBlur={handleBlur} color={(touched.schoolName || submitted) && errors.schoolName ? "error" : "default"} />
          {renderError('schoolName')}
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Official Email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} color={(touched.email || submitted) && errors.email ? "error" : "default"} />
          {renderError('email')}
        </div>
      </div>
      <div className="input-wrapper">
        <FloatingLabel variant="outlined" label="School Address" name="schoolAddress" value={formData.schoolAddress} onChange={handleChange} onBlur={handleBlur} color={(touched.schoolAddress || submitted) && errors.schoolAddress ? "error" : "default"} />
        {renderError('schoolAddress')}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="City" name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur} color={(touched.city || submitted) && errors.city ? "error" : "default"} />
          {renderError('city')}
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="State" name="state" value={formData.state} onChange={handleChange} onBlur={handleBlur} color={(touched.state || submitted) && errors.state ? "error" : "default"} />
          {renderError('state')}
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Pin Code" name="pinCode" value={formData.pinCode} onChange={handleChange} onBlur={handleBlur} color={(touched.pinCode || submitted) && errors.pinCode ? "error" : "default"} />
          {renderError('pinCode')}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="input-wrapper">
          <label className="block text-[13px] text-gray-500 mb-1">Country</label>
          <select name="country" value={formData.country} onChange={handleChange} onBlur={handleBlur} className={getSelectClass('country')}>
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label className="block text-[13px] text-gray-500 mb-1">School Type</label>
          <select name="schoolType" value={formData.schoolType} onChange={handleChange} className={getSelectClass('schoolType')}>
            <option value="">Select Type</option>
            <option value="Government">Government</option>
            <option value="Private">Private</option>
            <option value="Semi-Government">Semi-Government</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Phone No. (Landline)" name="phoneLandline" value={formData.phoneLandline} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Mobile No." name="phoneMobile" type="tel" value={formData.phoneMobile} onChange={handleChange} onBlur={handleBlur} color={(touched.phoneMobile || submitted) && errors.phoneMobile ? "error" : "default"} />
          {renderError('phoneMobile')}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Affiliation / Board" name="affiliationBoard" value={formData.affiliationBoard} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Affiliation No." name="affiliationNo" value={formData.affiliationNo} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="School Website" name="website" value={formData.website} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Year of Establishment" name="yearOfEstablishment" type="number" value={formData.yearOfEstablishment} onChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Total Strength" name="totalStrength" type="number" value={formData.totalStrength} onChange={handleChange} />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="form-section">
        <div className="section-header">
          <h3>2. Principal / Head of Institution</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Name" name="principalName" value={formData.principalName} onChange={handleChange} onBlur={handleBlur} color={(touched.principalName || submitted) && errors.principalName ? "error" : "default"} />
            {renderError('principalName')}
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Designation" name="principalDesignation" value={formData.principalDesignation} disabled />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Email ID" name="principalEmail" type="email" value={formData.principalEmail} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Mobile No." name="principalMobile" type="tel" value={formData.principalMobile} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h3>3. Coordinator Details (Olympiad In-Charge)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Name" name="coordinatorName" value={formData.coordinatorName} onChange={handleChange} onBlur={handleBlur} color={(touched.coordinatorName || submitted) && errors.coordinatorName ? "error" : "default"} />
            {renderError('coordinatorName')}
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Designation" name="coordinatorDesignation" value={formData.coordinatorDesignation} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Email ID" name="coordinatorEmail" type="email" value={formData.coordinatorEmail} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Mobile No." name="coordinatorMobile" type="tel" value={formData.coordinatorMobile} onChange={handleChange} onBlur={handleBlur} color={(touched.coordinatorMobile || submitted) && errors.coordinatorMobile ? "error" : "default"} />
            {renderError('coordinatorMobile')}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="form-section">
        <div className="section-header">
          <h3>4. Participation Details</h3>
        </div>
        
        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-gray-700 mb-3">We wish to participate in the following subjects:</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Mathematics Olympiad', 'Science Olympiad', 'English Olympiad', 'Information Technology Olympiad', 'Finance Olympiad'].map(subject => (
              <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="subjects" value={subject} checked={formData.subjects.includes(subject)} onChange={handleChange} className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-[14px] text-gray-700">{subject}</span>
              </label>
            ))}
          </div>
          {renderError('subjects')}
        </div>

        <div className="mb-6">
          <label className="block text-[14px] font-semibold text-gray-700 mb-3">Classes to be enrolled (Tick all applicable):</label>
          <div className="flex flex-wrap gap-6">
            {['1-4', '5-7', '8-10', '11-12'].map(cls => (
              <label key={cls} className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="classes" value={cls} checked={formData.classes.includes(cls)} onChange={handleChange} className="rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-[14px] text-gray-700">{cls}</span>
              </label>
            ))}
          </div>
          {renderError('classes')}
        </div>
      </div>

      <div className="form-section">
        <div className="section-header">
          <h3>5. Total Participation (Approximate)</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Classes 1 - 4" name="count1to4" type="number" value={formData.count1to4} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Classes 5 - 7" name="count5to7" type="number" value={formData.count5to7} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Classes 8 - 10" name="count8to10" type="number" value={formData.count8to10} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <FloatingLabel variant="outlined" label="Classes 11 - 12" name="count11to12" type="number" value={formData.count11to12} onChange={handleChange} />
          </div>
        </div>
        <div className="input-wrapper sm:w-1/2">
          <FloatingLabel variant="outlined" label="Total Participation (All Classes)" name="totalCount" type="number" value={formData.totalCount} onChange={handleChange} />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="section-header">
        <h3>Login Credentials & Declaration</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="input-wrapper">
          <FloatingLabel variant="outlined" label="Choose a Username" name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} color={(touched.username || submitted) && errors.username ? "error" : "default"} />
          {renderError('username')}
        </div>
        <div className="input-wrapper">
          <div className="relative">
            <FloatingLabel variant="outlined" label="Set Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} onBlur={handleBlur} color={(touched.password || submitted) && errors.password ? "error" : "default"} className="pr-10" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none transition-colors z-10">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {formData.password && (
            <div className="mt-3 bg-gray-50 rounded-md p-3 border border-gray-200">
              <div className="space-y-2">
                {criteria.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[13px]">
                    {item.met ? <Check size={14} className="text-green-600" strokeWidth={3} /> : <div className="w-3.5 h-3.5 rounded-full border border-gray-300 bg-white" />}
                    <span className={item.met ? 'text-green-700 font-medium' : 'text-gray-600'}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {renderError('password')}
        </div>
      </div>
      <div className="input-wrapper">
        <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} placeholder="Additional Information (Optional)..." rows={2} className="w-full px-4 py-3.5 text-[15px] border border-gray-300 rounded-md outline-none transition-all placeholder:text-gray-500 resize-none custom-scroll bg-transparent relative z-10 font-medium"></textarea>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-md mt-6">
        <h4 className="font-semibold text-blue-900 text-[14px] mb-2">Declaration</h4>
        <p className="text-[13px] text-blue-800 leading-relaxed">
          We hereby confirm that the information provided above is true and correct. We agree to abide by the terms and conditions of NTI Olympiad. By submitting this form, you are registering your institution for the upcoming events.
        </p>
      </div>
    </div>
  );

  return (
    <div className="register-page">
      <Helmet>
        <title>School Registration Portal – NTI Olympiad</title>
      </Helmet>

      <div className="register-bg">
        <div className="bg-pattern"></div>
      </div>

      <div className="register-content flex-col lg:flex-row">
        {/* Left Side Info */}
        <div className="register-left flex-none lg:flex-1 p-8 lg:p-16 flex items-center lg:justify-end justify-center">
          <div className="register-info-card w-full max-w-md lg:max-w-lg">
            <div className="rgs-logo mb-6">
              <div className="rgs-logo-icon w-10 h-10 bg-white rounded flex items-center justify-center text-xl font-bold text-gray-900">N</div>
              <span className="text-2xl font-bold text-white ml-3">NTI<span className="font-normal opacity-80 ml-1">Olympiad</span></span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Register Your School</h1>
            <p className="text-white/80 mb-8">Join thousands of progressive schools across India and empower your students to learn, compete, and excel.</p>
            
            <div className="space-y-6">
              {[
                "1. Complete School Details",
                "2. Principal & Coordinator Info",
                "3. Participation Details",
                "4. Account Setup & Declaration"
              ].map((step, idx) => (
                <div key={idx} className={`flex items-center space-x-3 ${currentStep === idx + 1 ? 'opacity-100' : 'opacity-50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep === idx + 1 ? 'bg-white text-blue-900' : 'bg-white/20 text-white'}`}>
                    {idx + 1}
                  </div>
                  <span className="text-white font-medium">{step.substring(3)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="register-right flex-none lg:flex-1 p-8 lg:p-16 flex items-center justify-center lg:justify-start">
          <div className="register-form-card w-full max-w-xl bg-white rounded-xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Step {currentStep} of {totalSteps}</h2>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); if (currentStep === totalSteps) handleSubmit(e); else handleNext(); }}>
              
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}

              <div className="mt-8 flex justify-between items-center pt-6 border-t border-gray-100">
                {currentStep > 1 ? (
                  <button type="button" onClick={handlePrev} className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
                    <ArrowLeft size={16} className="mr-2" /> Previous
                  </button>
                ) : <div></div>}

                {currentStep < totalSteps ? (
                  <button type="button" onClick={handleNext} className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none">
                    Next <ArrowRight size={16} className="ml-2" />
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="flex items-center px-6 py-2.5 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none disabled:opacity-70">
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'} <Check size={16} className="ml-2" />
                  </button>
                )}
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
