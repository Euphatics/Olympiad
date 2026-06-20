import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FloatingLabel } from 'flowbite-react';
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
            {/* Header */}
            <div className="login-form-header">
              <div>
                <p className="login-welcome">
                  Welcome to <span className="login-brand">NTI Olympiad</span>
                </p>
                <h2 className="login-signin-title">Sign in</h2>
              </div>
              <div className="login-signup-box">
                <p className="login-no-account">No Account ?</p>
                <a href="#" onClick={(e) => { e.preventDefault(); if(onSignUp) onSignUp(); }} className="login-signup-link">Sign up</a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field">
                <FloatingLabel
                  variant="outlined"
                  label="Username or email address"
                  id="login-email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login-field">
                <div className="login-password-wrap">
                  <FloatingLabel
                    variant="outlined"
                    label="Password"
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
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
                  <a href="#" className="login-forgot-link">Forgot Password</a>
                </div>
              </div>

              <button id="login-submit" type="submit" className="login-submit-btn">
                Sign in
              </button>
            </form>
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
          max-width: 420px;
          background: #fff;
          border-radius: 20px;
          padding: 40px 36px 44px;
          box-shadow: 0 4px 32px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
          margin-top: 16px;
        }

        .login-form-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 36px;
        }

        .login-welcome {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
          font-weight: 500;
        }

        .login-brand {
          color: #2563EB;
          font-weight: 700;
        }

        .login-signin-title {
          font-size: 32px;
          font-weight: 700;
          margin: 6px 0 0;
          color: #111827;
          font-family: 'Poppins', sans-serif;
        }

        .login-signup-box {
          text-align: right;
        }

        .login-no-account {
          font-size: 13px;
          color: #9CA3AF;
          margin: 0;
          font-weight: 500;
        }

        .login-signup-link {
          font-size: 13px;
          color: #2563EB;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
        }
        .login-signup-link:hover {
          text-decoration: underline;
        }

        /* ── Form ── */
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
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }



        .login-password-wrap {
          position: relative;
        }

        .login-eye-btn {
          position: absolute;
          right: 14px;
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
          margin-top: 2px;
        }

        .login-forgot-link {
          font-size: 13px;
          color: #2563EB;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
        }
        .login-forgot-link:hover {
          text-decoration: underline;
        }

        .login-submit-btn {
          width: 100%;
          padding: 15px 0;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 14px rgba(33,150,243,0.35);
          font-family: 'Inter', sans-serif;
          margin-top: 8px;
        }
        .login-submit-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(33,150,243,0.4);
        }
        .login-submit-btn:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
