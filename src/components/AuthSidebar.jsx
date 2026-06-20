export default function AuthSidebar({ title, className = '' }) {
  return (
    <div className={`auth-left ${className}`}>
      {/* Logo */}
      <div className="auth-logo flex items-center gap-2.5 select-none">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
          <span className="text-royal-800 font-black text-sm">N</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-white">
          <span className="text-white">NTI</span>
          <span className="text-blue-100 font-semibold ml-1">Olympiad</span>
        </span>
      </div>

      {/* Hero text */}
      <div className="auth-hero">
        <h1 className="auth-hero-title">{title}</h1>
        <p className="auth-hero-subtitle">NTI Olympiad Portal</p>
        <p className="auth-hero-desc">
          Join India's premier academic competition platform. Challenge your reasoning, benchmark your performance, and achieve national excellence.
        </p>
      </div>

      {/* Rocket Illustration */}
      <div className="auth-illustration">
        {/* Clouds */}
        <div className="auth-cloud" style={{ top: '5%', left: '35%', width: 60, height: 30 }} />
        <div className="auth-cloud" style={{ top: '18%', right: '12%', width: 42, height: 21 }} />
        <div className="auth-cloud" style={{ bottom: '22%', right: '8%', width: 28, height: 14 }} />
        <div className="auth-cloud" style={{ bottom: '35%', left: '48%', width: 22, height: 11 }} />
        <div className="auth-cloud" style={{ top: '42%', left: '22%', width: 18, height: 9 }} />

        {/* Rocket + Person */}
        <div className="auth-rocket-group">
          <svg viewBox="0 0 200 280" width="160" height="220" className="auth-rocket-svg">
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
          <div className="auth-person">
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

      <style>{`
        .auth-left {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .auth-logo {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.3px;
        }

        .auth-hero {
          margin-top: 40px;
          max-width: 340px;
          position: relative;
          z-index: 2;
        }

        .auth-hero-title {
          font-size: 36px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .auth-hero-subtitle {
          font-size: 20px;
          font-weight: 600;
          margin: 4px 0 0;
          color: rgba(255,255,255,0.95);
          font-family: 'Poppins', sans-serif;
        }

        .auth-hero-desc {
          font-size: 13px;
          line-height: 1.65;
          margin-top: 18px;
          color: rgba(255,255,255,0.85);
          max-width: 300px;
        }

        /* ── Illustration ── */
        .auth-illustration {
          position: absolute;
          top: 6%;
          right: -5%;
          width: 55%;
          height: 55%;
          z-index: 1;
        }

        .auth-cloud {
          position: absolute;
          background: rgba(255,255,255,0.5);
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(255,255,255,0.15);
        }

        .auth-rocket-group {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%) rotate(-25deg);
        }

        .auth-rocket-svg {
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.15));
        }

        .auth-person {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%) rotate(25deg);
        }
      `}</style>
    </div>
  );
}
