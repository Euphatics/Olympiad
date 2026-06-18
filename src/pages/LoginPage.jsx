import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="login-page">
      {/* Blue background that covers top ~55% */}
      <div className="login-blue-bg" />

      {/* Content layer */}
      <div className="login-content">
        {/* ───────── LEFT SIDE ───────── */}
        <div className="login-left">
          {/* Logo */}
          <div className="login-logo">Your Logo</div>

          {/* Hero text */}
          <div className="login-hero">
            <h1 className="login-hero-title">Sign in to</h1>
            <p className="login-hero-subtitle">Lorem Ipsum is simply</p>
            <p className="login-hero-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Rocket Illustration */}
          <div className="login-illustration">
            {/* Clouds */}
            <div className="login-cloud" style={{ top: '5%', left: '35%', width: 60, height: 30 }} />
            <div className="login-cloud" style={{ top: '18%', right: '12%', width: 42, height: 21 }} />
            <div className="login-cloud" style={{ bottom: '22%', right: '8%', width: 28, height: 14 }} />
            <div className="login-cloud" style={{ bottom: '35%', left: '48%', width: 22, height: 11 }} />
            <div className="login-cloud" style={{ top: '42%', left: '22%', width: 18, height: 9 }} />

            {/* Rocket + Person */}
            <div className="login-rocket-group">
              <svg viewBox="0 0 200 280" width="160" height="220" className="login-rocket-svg">
                {/* Flame */}
                <ellipse cx="100" cy="270" rx="18" ry="12" fill="#FF6B35" opacity="0.7" />
                <ellipse cx="100" cy="262" rx="12" ry="10" fill="#FFD700" opacity="0.9" />
                {/* Body */}
                <path d="M70,220 L70,100 Q70,40 100,20 Q130,40 130,100 L130,220 Z" fill="url(#rktGrad)" stroke="#e05030" strokeWidth="1.5" />
                {/* Stripes */}
                <rect x="70" y="130" width="60" height="14" fill="#E8432A" />
                <rect x="70" y="155" width="60" height="14" fill="#E8432A" />
                <rect x="70" y="180" width="60" height="14" fill="#E8432A" />
                {/* Window */}
                <circle cx="100" cy="90" r="18" fill="#1a3a6e" stroke="#e05030" strokeWidth="2.5" />
                <circle cx="100" cy="90" r="14" fill="#4A90D9" />
                <ellipse cx="95" cy="85" rx="5" ry="7" fill="rgba(255,255,255,0.3)" />
                {/* Fins */}
                <path d="M70,190 L45,235 L70,220 Z" fill="#E8432A" stroke="#c0341d" strokeWidth="1" />
                <path d="M130,190 L155,235 L130,220 Z" fill="#E8432A" stroke="#c0341d" strokeWidth="1" />
                {/* Nose highlight */}
                <path d="M85,70 Q85,45 100,25 Q100,45 95,70 Z" fill="rgba(255,255,255,0.15)" />
                <defs>
                  <linearGradient id="rktGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F5A88A" />
                    <stop offset="50%" stopColor="#F28C6E" />
                    <stop offset="100%" stopColor="#E07050" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Person */}
              <div className="login-person">
                <svg viewBox="0 0 80 100" width="70" height="88">
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

        {/* ───────── RIGHT SIDE ───────── */}
        <div className="login-right">
          <div className="login-form-card">
            {/* Header */}
            <div className="login-form-header">
              <div>
                <p className="login-welcome">
                  Welcome to <span className="login-brand">LOREM</span>
                </p>
                <h2 className="login-signin-title">Sign in</h2>
              </div>
              <div className="login-signup-box">
                <p className="login-no-account">No Account ?</p>
                <a href="#" className="login-signup-link">Sign up</a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field">
                <label className="login-label">Enter your username or email address</label>
                <input
                  id="login-email"
                  type="text"
                  placeholder="Username or email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`login-input ${focusedField === 'email' ? 'login-input--focused' : ''}`}
                />
              </div>

              <div className="login-field">
                <label className="login-label">Enter your Password</label>
                <div className="login-password-wrap">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`login-input login-input--password ${focusedField === 'password' ? 'login-input--focused' : ''}`}
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
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .login-logo {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.3px;
        }

        .login-hero {
          margin-top: 40px;
          max-width: 340px;
          position: relative;
          z-index: 2;
        }

        .login-hero-title {
          font-size: 36px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .login-hero-subtitle {
          font-size: 20px;
          font-weight: 600;
          margin: 4px 0 0;
          color: rgba(255,255,255,0.95);
          font-family: 'Poppins', sans-serif;
        }

        .login-hero-desc {
          font-size: 13px;
          line-height: 1.65;
          margin-top: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 300px;
        }

        /* ── Illustration ── */
        .login-illustration {
          position: absolute;
          top: 6%;
          right: -5%;
          width: 55%;
          height: 55%;
          z-index: 1;
        }

        .login-cloud {
          position: absolute;
          background: rgba(255,255,255,0.5);
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(255,255,255,0.15);
        }

        .login-rocket-group {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%) rotate(-25deg);
        }

        .login-rocket-svg {
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.15));
        }

        .login-person {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%) rotate(25deg);
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

        .login-input {
          width: 100%;
          padding: 14px 16px;
          font-size: 14px;
          border: 1.5px solid #E5E7EB;
          border-radius: 10px;
          outline: none;
          color: #111827;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }
        .login-input::placeholder {
          color: #9CA3AF;
        }
        .login-input--focused {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
        }
        .login-input--password {
          padding-right: 44px;
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
