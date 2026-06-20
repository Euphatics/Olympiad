import {
  Eye,
  EyeOff,
  Check
} from 'lucide-react';
import { FloatingLabel } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import AuthSidebar from '../../components/AuthSidebar';
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
        {/* ───────── LEFT SIDE ───────── */}
        <AuthSidebar title="Sign Up to" className="register-left" />

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
        .register-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 64px);
          background: #EDF2F7;
          font-family: 'Inter', sans-serif;
        }

        .register-blue-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 45%;
          background: linear-gradient(160deg, #2196F3 0%, #1E88E5 40%, #1976D2 100%);
          z-index: 0;
        }

        .register-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          min-height: calc(100vh - 64px);
        }

        /* ── LEFT ── */
        .register-left {
          flex: 0 0 42%;
          padding: 28px 40px 32px;
        }

        /* ── RIGHT ── */
        .register-right {
          flex: 0 0 58%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 24px 40px 40px;
        }

        .register-form-card {
          width: 100%;
          max-width: 520px;
          background: #fff;
          border-radius: 20px;
          padding: 28px 28px 32px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
        }
      `}</style>
      </div>
      );

}