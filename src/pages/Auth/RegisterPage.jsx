import { useState } from 'react';
import { Eye, EyeOff, Check, UserPlus } from 'lucide-react';
import { FloatingLabel } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: '',
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data) => {
    let newErrors = {};
    if (!data.schoolName.trim()) newErrors.schoolName = 'Required';
    if (!data.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email';
    if (!data.username.trim()) newErrors.username = 'Required';
    if (!data.password) newErrors.password = 'Required';
    else if (
      data.password.length < 8 ||
      !/[0-9]/.test(data.password) ||
      !/[^A-Za-z0-9]/.test(data.password)
    ) {
      newErrors.password = 'Password must be at least 8 chars, 1 number, 1 special char';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...formData, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      schoolName: true,
      email: true,
      username: true,
      password: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          alert('Registration successful! Please check your email for verification. You can log in now.');
          navigate('/login');
        } else {
          alert(`Error: ${data.error || data.message || 'Registration failed'}`);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('Network error. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const renderError = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return (
        <p className="text-[12px] text-red-600 mt-1.5 font-medium">
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };

  const criteria = [
    { label: '8+ characters', met: formData.password.length >= 8 },
    { label: 'At least 1 number', met: /[0-9]/.test(formData.password) },
    { label: 'At least 1 special char', met: /[^A-Za-z0-9]/.test(formData.password) }
  ];

  return (
    <>
      <Helmet>
        <title>Register | NTI Olympiad</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 pt-[80px] pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-xl mt-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden">
            {/* Header Area */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-extrabold mb-3 tracking-tight">School Registration</h1>
                  <p className="text-blue-100 font-medium text-[15px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                    Join the NTI Olympiad Network
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hidden sm:flex">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <FloatingLabel variant="outlined" label="School Name" name="schoolName" value={formData.schoolName} onChange={handleChange} onBlur={handleBlur} color={touched.schoolName && errors.schoolName ? "error" : "default"} />
                  {renderError('schoolName')}
                </div>
                <div>
                  <FloatingLabel variant="outlined" label="Official Email" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} color={touched.email && errors.email ? "error" : "default"} />
                  {renderError('email')}
                </div>
                <div>
                  <FloatingLabel variant="outlined" label="Username" name="username" value={formData.username} onChange={handleChange} onBlur={handleBlur} color={touched.username && errors.username ? "error" : "default"} />
                  {renderError('username')}
                </div>
                <div>
                  <div className="relative">
                    <FloatingLabel variant="outlined" label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} onBlur={handleBlur} color={touched.password && errors.password ? "error" : "default"} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {renderError('password')}
                  <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[13px] font-semibold text-gray-700 mb-3">Password requirements:</p>
                    <ul className="space-y-2.5">
                      {criteria.map((c, i) => (
                        <li key={i} className={`flex items-center gap-2.5 text-[13px] ${c.met ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                          {c.met ? <Check className="w-4 h-4" /> : <div className="w-1.5 h-1.5 rounded-full bg-gray-300 ml-1.5 mr-1" />}
                          {c.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Registering...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <p className="text-[14px] text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
