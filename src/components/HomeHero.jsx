import React, { useState } from 'react';
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
  Image as ImageIcon,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';

export default function HomeHero() {
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
    let baseClass = "w-full pl-9 py-2 text-[14px] border rounded-md outline-none transition-all placeholder:text-gray-300";
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
    const baseClass = "w-full pl-9 pr-3 py-2 text-[14px] border rounded-md outline-none transition-all text-gray-600 bg-white cursor-pointer appearance-none";
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

            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Candidate Name</label>
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
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Designation</label>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Select Country</label>
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
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Mobile</label>
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
              <div className="pt-1">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">School Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">School Name</label>
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
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Official Email</label>
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
                  <label className="block text-xs font-semibold text-gray-700 mb-1">School Address</label>
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
              <div className="pt-1">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">Login Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Choose a Username</label>
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
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Set Password</label>
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
              <div className="pt-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message (Optional)</label>
                <div className="relative group">
                  <div className="absolute top-2.5 left-0 pl-3 flex items-start pointer-events-none">
                    <MessageSquare size={16} className="text-gray-400 group-focus-within:text-[#007BFF] transition-colors" />
                  </div>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
