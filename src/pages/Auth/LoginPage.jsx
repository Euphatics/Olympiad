import { useState } from 'react';
import { Eye, EyeOff, LogIn, UserPlus, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import AuthSidebar from '../../components/AuthSidebar';

export default function LoginPage({ onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="login-page">
      <Helmet>
        <title>Sign In – NTI Olympiad Portal</title>
        <meta name="description" content="Access your NTI Olympiad student or school coordinator portal to view registrations and results." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ntiolympiad.in/login" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sign In – NTI Olympiad Portal" />
        <meta property="og:description" content="Access your NTI Olympiad student or school coordinator portal to view registrations and results." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/login" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign In – NTI Olympiad Portal" />
        <meta name="twitter:description" content="Access your NTI Olympiad student or school coordinator portal to view registrations and results." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />
      </Helmet>
      {/* Blue background that covers top ~55% */}
      <div className="login-blue-bg" />

      {/* Content layer */}
      <div className="login-content">
        {/* ───────── LEFT SIDE ───────── */}
        <AuthSidebar title="Sign in to" className="login-left" />

        {/* ───────── RIGHT SIDE ───────── */}
        <div className="login-right">
          <div className="login-form-card">
            
            {/* Toggle Bar */}
            <div className="login-toggle-bar">
              <button className="login-toggle-btn active">
                <LogIn size={18} className="login-toggle-icon" /> Log In
              </button>
              <button 
                className="login-toggle-btn inactive" 
                onClick={(e) => { e.preventDefault(); if(onSignUp) onSignUp(); }}
              >
                <UserPlus size={18} className="login-toggle-icon" /> Register
              </button>
            </div>

            {/* Header */}
            <div className="login-center-header">
              <h2 className="login-signin-title">LOG IN</h2>
              <p className="login-subtitle">
                Log into your <span className="login-underline">NTI</span> account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field">
                <label className="login-label">
                  EMAIL OR USER ID <span className="login-asterisk">*</span>
                </label>
                <input
                  id="login-email"
                  type="text"
                  className="login-input"
                  placeholder="Enter your Email or Organization User ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login-field">
                <label className="login-label">
                  PASSWORD <span className="login-asterisk">*</span>
                </label>
                <div className="login-password-wrap">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    className="login-input pr-10"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-eye-btn"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} color="#9CA3AF" /> : <Eye size={18} color="#9CA3AF" />}
                  </button>
                </div>
                <div className="login-forgot-row">
                  <a href="#" className="login-forgot-link">Forgot Password?</a>
                </div>
              </div>

              <div className="login-submit-row">
                <button id="login-submit" type="submit" className="login-submit-btn">
                  LOGIN <ArrowRight size={18} />
                </button>
              </div>
            </form>
            
            <div className="login-bottom-text">
              <p>You can use the same email and password to log in all Olympiads or switch between them from your dashboard.</p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .login-page {
          position: relative;
          width: 100%;
          height: calc(100vh - 64px);
          overflow: hidden;
          background: #EDF2F7;
          font-family: 'Inter', sans-serif;
        }

        /* Blue background — covers top portion */
        .login-blue-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 55%;
          background: linear-gradient(160deg, #2196F3 0%, #1E88E5 40%, #1976D2 100%);
          z-index: 0;
        }

        /* Content sits on top */
        .login-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          height: 100%;
        }

        /* ── LEFT ── */
        .login-left {
          flex: 0 0 50%;
          padding: 32px 48px 40px;
        }

        /* ── RIGHT ── */
        .login-right {
          flex: 0 0 50%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 48px 40px;
        }

        .login-form-card {
          width: 100%;
          max-width: 440px;
          background: #fff;
          border-radius: 12px;
          padding: 36px 40px 40px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
          margin-top: 16px;
        }

        /* Toggle Bar */
        .login-toggle-bar {
          display: flex;
          background: #F3F4F6;
          border-radius: 8px;
          padding: 4px;
          margin-bottom: 40px;
        }
        .login-toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 0;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .login-toggle-btn.active {
          background: #1976D2;
          color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .login-toggle-btn.inactive {
          background: transparent;
          color: #6B7280;
        }
        .login-toggle-btn.inactive:hover {
          color: #374151;
          background: #E5E7EB;
        }

        /* Center Header */
        .login-center-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .login-signin-title {
          font-family: 'Inter', sans-serif;
          font-size: 32px;
          font-weight: 400;
          color: #374151;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }
        .login-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #9CA3AF;
          margin: 0;
        }
        .login-underline {
          text-decoration: underline;
          text-decoration-color: #9CA3AF;
          text-underline-offset: 3px;
        }

        /* Form Fields */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .login-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .login-label {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #4B5563;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .login-asterisk {
          color: #EF4444;
          margin-left: 2px;
        }
        .login-input {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          color: #1F2937;
          background: #fff;
          border: 1px solid #D1D5DB;
          border-radius: 6px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .login-input::placeholder {
          color: #9CA3AF;
          font-weight: 400;
        }
        .login-input:focus {
          border-color: #1976D2;
          box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
        }

        .login-password-wrap {
          position: relative;
        }
        .login-input.pr-10 {
          padding-right: 40px;
        }
        .login-eye-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
        }

        .login-forgot-row {
          text-align: right;
          margin-top: 4px;
        }
        .login-forgot-link {
          font-size: 12.5px;
          color: #EF4444;
          font-weight: 500;
          text-decoration: none;
        }
        .login-forgot-link:hover {
          text-decoration: underline;
        }

        /* Submit Button */
        .login-submit-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
        }
        .login-submit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: #1976D2;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .login-submit-btn:hover {
          background: #1565C0;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.2);
        }

        .login-bottom-text {
          margin-top: 32px;
          font-size: 13px;
          color: #6B7280;
          line-height: 1.5;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
