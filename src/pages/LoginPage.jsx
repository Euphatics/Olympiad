import { useState, useRef } from 'react'
import '../styles/LoginPage.css'

/* ── Inline SVG icons ── */
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4 12 13 2 4"/></svg>
)
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
)
const EyeOpen = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
)
const EyeClosed = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
)
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const SmallMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4 12 13 2 4"/></svg>
)

const LogoSVG = () => (
  <svg width="44" height="44" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="17" stroke="url(#flg)" strokeWidth="2.2" fill="none"/>
    <path d="M18 6 L22 14 L18 12 L14 14 Z" fill="url(#flg)"/>
    <path d="M12 16 Q18 28 24 16" stroke="url(#flg)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="18" cy="20" r="2.5" fill="url(#flg)"/>
    <defs><linearGradient id="flg" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/></linearGradient></defs>
  </svg>
)

/* ── Validation helpers ── */
function validateEmail(v) {
  if (!v.trim()) return 'Please enter your School Email or ID'
  if (v.includes('@') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Please enter a valid email'
  return ''
}
function validatePassword(v) {
  if (!v) return 'Please enter your password'
  if (v.length < 6) return 'Password must be at least 6 characters'
  return ''
}

/* ── Steps data ── */
const steps = [
  { num: 1, label: 'Register School' },
  { num: 2, label: 'Admin Approval' },
  { num: 3, label: 'School Login', active: true },
  { num: 4, label: 'Dashboard Access' },
]

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [remember, setRemember] = useState(false)
  const [emailErr, setEmailErr] = useState('')
  const [pwdErr, setPwdErr] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '' })
  const toastTimer = useRef(null)

  function showToast(msg) {
    setToast({ show: true, msg })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast({ show: false, msg: '' }), 3500)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const eErr = validateEmail(email)
    const pErr = validatePassword(password)
    setEmailErr(eErr)
    setPwdErr(pErr)
    if (eErr || pErr) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      showToast('Login successful! Redirecting to Dashboard…')
    }, 1800)
  }

  return (
    <main className="login-main">
      {/* Toast */}
      <div className={`toast${toast.show ? ' show' : ''}`}>
        <span className="toast-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </span>
        {toast.msg}
      </div>

      <div className="login-wrapper">
        {/* ── LEFT PANEL ── */}
        <div className="login-panel-left">
          <div className="panel-content">
            <div className="panel-badge">Trusted by 2,500+ Schools</div>
            <h1 className="panel-heading">Empowering Schools.<br/>Inspiring Olympians.</h1>
            <p className="panel-desc">Manage student registrations, track olympiad performance, and access results — all from one unified dashboard.</p>

            <div className="flow-steps">
              {steps.map((s, i) => (
                <span key={s.num} style={{ display: 'contents' }}>
                  <div className={`flow-step${s.active ? ' active' : ''}`}>
                    <div className="step-num">{s.num}</div>
                    <span>{s.label}</span>
                  </div>
                  {i < steps.length - 1 && <div className="flow-connector" />}
                </span>
              ))}
            </div>

            <div className="panel-stats">
              <div className="stat-item"><span className="stat-number">50K+</span><span className="stat-label">Students Registered</span></div>
              <div className="stat-item"><span className="stat-number">12+</span><span className="stat-label">Olympiad Subjects</span></div>
              <div className="stat-item"><span className="stat-number">98%</span><span className="stat-label">Satisfaction Rate</span></div>
            </div>
          </div>
          <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="login-panel-right">
          <div className="login-form-container">
            <div className="form-header">
              <div className="form-logo-icon"><LogoSVG /></div>
              <h2 className="form-title">Welcome Back</h2>
              <p className="form-subtitle">Login to manage students, registrations, and results.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className={`input-group${emailErr ? ' error' : ''}`}>
                <label htmlFor="email">School Email / School ID</label>
                <div className="input-wrapper">
                  <span className="input-icon"><MailIcon /></span>
                  <input id="email" type="text" placeholder="school@example.com or SCH-XXXX" autoComplete="username"
                    value={email} onChange={e => { setEmail(e.target.value); setEmailErr('') }}
                    onBlur={() => setEmailErr(validateEmail(email))} />
                </div>
                <span className="input-error">{emailErr}</span>
              </div>

              {/* Password */}
              <div className={`input-group${pwdErr ? ' error' : ''}`}>
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon"><LockIcon /></span>
                  <input id="password" type={showPwd ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password"
                    value={password} onChange={e => { setPassword(e.target.value); setPwdErr('') }}
                    onBlur={() => setPwdErr(validatePassword(password))} />
                  <button type="button" className="toggle-password" onClick={() => setShowPwd(!showPwd)} aria-label="Toggle password">
                    {showPwd ? <EyeClosed /> : <EyeOpen />}
                  </button>
                </div>
                <span className="input-error">{pwdErr}</span>
              </div>

              {/* Options */}
              <div className="form-options">
                <label className="checkbox-label" htmlFor="remember">
                  <input type="checkbox" id="remember" checked={remember} onChange={() => setRemember(!remember)} />
                  <span className="custom-checkbox" />
                  Remember Me
                </label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? (
                  <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4 31.4" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="0.8s" repeatCount="indefinite"/></circle></svg>
                ) : 'Login'}
              </button>
            </form>

            <div className="form-divider"><span>or</span></div>

            <div className="register-cta">
              <p>Don&apos;t have an account?</p>
              <a href="#" className="register-link">Register Your School →</a>
            </div>

            <div className="support-section">
              <p className="support-title">Need Help?</p>
              <div className="support-links">
                <a href="tel:+911244951200" className="support-item"><PhoneIcon /> Contact Support</a>
                <a href="mailto:support@olympiad.com" className="support-item"><SmallMail /> support@olympiad.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
