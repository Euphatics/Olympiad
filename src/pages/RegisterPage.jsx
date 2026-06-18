import { useState } from 'react';
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
import { FloatingLabel } from 'flowbite-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    country: '',
    phone: '',
    schoolName: '',
    schoolAddress: '',
    email: '',
    username: '',
    password: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (data) => {
    let newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Required';
    else if (!/^[A-Za-z\s]+$/.test(data.name)) newErrors.name = 'Only alphabets allowed';

    if (!data.designation.trim()) newErrors.designation = 'Required';
    if (!data.country) newErrors.country = 'Required';

    if (!data.phone.trim()) newErrors.phone = 'Required';
    else if (!/^\d+$/.test(data.phone)) newErrors.phone = 'Only numbers allowed';

    if (!data.schoolName.trim()) newErrors.schoolName = 'Required';
    if (!data.schoolAddress.trim()) newErrors.schoolAddress = 'Required';
    if (!data.email.trim()) newErrors.email = 'Required';
    if (!data.username.trim()) newErrors.username = 'Required';
    
    if (!data.password) newErrors.password = 'Required';
    else if (
      data.password.length < 8 || 
      !/[0-9]/.test(data.password) || 
      !/[^A-Za-z0-9]/.test(data.password)
    ) {
      newErrors.password = 'Password does not meet all criteria';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    if (touched[name] || submitted) {
      setErrors(validate(newData));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

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

  const criteria = [
    { label: '8+ characters', met: formData.password.length >= 8 },
    { label: 'At least 1 number', met: /[0-9]/.test(formData.password) },
    { label: 'At least 1 special char (@, #, etc.)', met: /[^A-Za-z0-9]/.test(formData.password) }
  ];

  return (
    <div className="register-page">
      {/* Blue background that covers top ~55% */}
      <div className="register-blue-bg" />

      {/* Content layer */}
      <div className="register-content">
        {/* ───────── LEFT SIDE ───────── */}
        <div className="register-left">
          {/* Logo */}
          <div className="register-logo">Your Logo</div>

          {/* Hero text */}
          <div className="register-hero">
            <h1 className="register-hero-title">Sign Up to</h1>
            <p className="register-hero-subtitle">Lorem Ipsum is simply</p>
            <p className="register-hero-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Rocket Illustration */}
          <div className="register-illustration">
            <div className="register-cloud" style={{ top: '5%', left: '35%', width: 60, height: 30 }} />
            <div className="register-cloud" style={{ top: '18%', right: '12%', width: 42, height: 21 }} />
            <div className="register-cloud" style={{ bottom: '22%', right: '8%', width: 28, height: 14 }} />
            <div className="register-cloud" style={{ bottom: '35%', left: '48%', width: 22, height: 11 }} />
            <div className="register-cloud" style={{ top: '42%', left: '22%', width: 18, height: 9 }} />

            <div className="register-rocket-group">
              <svg viewBox="0 0 200 280" width="150" height="210" className="register-rocket-svg">
                <ellipse cx="100" cy="270" rx="18" ry="12" fill="#FF6B35" opacity="0.7" />
                <ellipse cx="100" cy="262" rx="12" ry="10" fill="#FFD700" opacity="0.9" />
                <path d="M70,220 L70,100 Q70,40 100,20 Q130,40 130,100 L130,220 Z" fill="url(#rktGrad2)" stroke="#e05030" strokeWidth="1.5" />
                <rect x="70" y="130" width="60" height="14" fill="#E8432A" />
                <rect x="70" y="155" width="60" height="14" fill="#E8432A" />
                <rect x="70" y="180" width="60" height="14" fill="#E8432A" />
                <circle cx="100" cy="90" r="18" fill="#1a3a6e" stroke="#e05030" strokeWidth="2.5" />
                <circle cx="100" cy="90" r="14" fill="#4A90D9" />
                <ellipse cx="95" cy="85" rx="5" ry="7" fill="rgba(255,255,255,0.3)" />
                <path d="M70,190 L45,235 L70,220 Z" fill="#E8432A" stroke="#c0341d" strokeWidth="1" />
                <path d="M130,190 L155,235 L130,220 Z" fill="#E8432A" stroke="#c0341d" strokeWidth="1" />
                <path d="M85,70 Q85,45 100,25 Q100,45 95,70 Z" fill="rgba(255,255,255,0.15)" />
                <defs>
                  <linearGradient id="rktGrad2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F5A88A" />
                    <stop offset="50%" stopColor="#F28C6E" />
                    <stop offset="100%" stopColor="#E07050" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="register-person">
                <svg viewBox="0 0 80 100" width="65" height="82">
                  <rect x="22" y="40" width="36" height="30" rx="6" fill="#4A6CF7" />
                  <rect x="10" y="45" width="16" height="7" rx="3.5" fill="#FBBF94" />
                  <rect x="54" y="45" width="16" height="7" rx="3.5" fill="#FBBF94" />
                  <rect x="15" y="38" width="22" height="14" rx="2" fill="#333" />
                  <rect x="16" y="39" width="20" height="11" rx="1" fill="#6DD5FA" />
                  <circle cx="40" cy="25" r="16" fill="#FBBF94" />
                  <path d="M24,20 Q24,8 40,8 Q56,8 56,20 Q56,14 40,14 Q24,14 24,20 Z" fill="#4A3728" />
                  <rect x="26" y="68" width="10" height="20" rx="4" fill="#2D3748" />
                  <rect x="44" y="68" width="10" height="20" rx="4" fill="#2D3748" />
                  <ellipse cx="31" cy="90" rx="7" ry="4" fill="#E8432A" />
                  <ellipse cx="49" cy="90" rx="7" ry="4" fill="#E8432A" />
                </svg>
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
              <div class            <form className="space-y-4" onSubmit={handleSubmit}>
              
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
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .register-logo {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.3px;
        }

        .register-hero {
          margin-top: 10px;
          max-width: 320px;
          position: relative;
          z-index: 2;
        }

        .register-hero-title {
          font-size: 32px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .register-hero-subtitle {
          font-size: 18px;
          font-weight: 600;
          margin: 4px 0 0;
          color: rgba(255,255,255,0.95);
          font-family: 'Poppins', sans-serif;
        }

        .register-hero-desc {
          font-size: 12px;
          line-height: 1.65;
          margin-top: 14px;
          color: rgba(255,255,255,0.85);
          max-width: 280px;
        }

        /* ── Illustration ── */
        .register-illustration {
          position: absolute;
          top: 2%;
          right: -15%;
          width: 65%;
          height: 55%;
          z-index: 1;
        }

        .register-cloud {
          position: absolute;
          background: rgba(255,255,255,0.5);
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(255,255,255,0.15);
        }

        .register-rocket-group {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%) rotate(-25deg);
        }

        .register-rocket-svg {
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.15));
        }

        .register-person {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%) rotate(25deg);
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
