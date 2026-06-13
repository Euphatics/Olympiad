import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/RegisterPage.css'

/* ── SVG Icons (matching the Crest form style) ── */
const PersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)
const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
)
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const SchoolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M6 18V8l6-4 6 4v10"/><path d="M10 22v-4h4v4"/><rect x="10" y="10" width="4" height="4"/></svg>
)
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4 12 13 2 4"/></svg>
)
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
)
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)
const HashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>
)

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
)

const countries = [
  'India', 'United States', 'United Kingdom', 'UAE', 'Singapore', 'Australia',
  'Canada', 'Malaysia', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'Nepal', 'Bangladesh', 'Sri Lanka', 'South Africa', 'Nigeria', 'Kenya',
  'Philippines', 'Indonesia', 'Thailand', 'Vietnam', 'Other'
]

const boards = [
  'CBSE', 'ICSE / ISC', 'State Board', 'IB', 'IGCSE / Cambridge', 'Other'
]

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '', designation: '', country: '', phone: '',
    schoolName: '', email: '', schoolCode: '', board: '',
    city: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '' })
  const toastTimer = useRef(null)

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.designation.trim()) e.designation = 'Designation is required'
    if (!form.country) e.country = 'Select a country'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.schoolName.trim()) e.schoolName = 'School name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.board) e.board = 'Select a board'
    if (!form.city.trim()) e.city = 'City is required'
    if (!captchaChecked) e.captcha = 'Please verify you are not a robot'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function showToast(msg) {
    setToast({ show: true, msg })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast({ show: false, msg: '' }), 4000)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      showToast('Registration submitted! You will receive login credentials via email after admin approval.')
      setForm({ name: '', designation: '', country: '', phone: '', schoolName: '', email: '', schoolCode: '', board: '', city: '', message: '' })
      setCaptchaChecked(false)
    }, 2000)
  }

  return (
    <main className="register-page">
      {/* Toast */}
      <div className={`reg-toast${toast.show ? ' show' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        {toast.msg}
      </div>

      <div className="register-wrapper">
        {/* Header */}
        <div className="reg-header">
          <h1>Register For Olympiads!</h1>
          <p>Fill in your details below. After admin approval, login credentials will be sent to your email.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* ── Row 1: Name + Designation ── */}
          <div className="reg-row">
            <div>
              <div className={`reg-field${errors.name ? ' error' : ''}`}>
                <span className="reg-field-icon"><PersonIcon /></span>
                <input className="reg-input" type="text" placeholder="Name" value={form.name}
                  onChange={e => update('name', e.target.value)} />
              </div>
              {errors.name && <p className="reg-error">{errors.name}</p>}
            </div>
            <div>
              <div className={`reg-field${errors.designation ? ' error' : ''}`}>
                <span className="reg-field-icon"><BriefcaseIcon /></span>
                <input className="reg-input" type="text" placeholder="Your Designation" value={form.designation}
                  onChange={e => update('designation', e.target.value)} />
              </div>
              {errors.designation && <p className="reg-error">{errors.designation}</p>}
            </div>
          </div>

          {/* ── Row 2: Country + Phone ── */}
          <div className="reg-row">
            <div>
              <div className={`reg-field${errors.country ? ' error' : ''}`}>
                <span className="reg-field-icon"><MapPinIcon /></span>
                <div className="reg-select-wrap">
                  <select className="reg-select" value={form.country} onChange={e => update('country', e.target.value)}>
                    <option value="">Select Country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              {errors.country && <p className="reg-error">{errors.country}</p>}
            </div>
            <div>
              <div className={`reg-field${errors.phone ? ' error' : ''}`}>
                <span className="reg-field-icon"><PhoneIcon /></span>
                <input className="reg-input" type="tel" placeholder="WhatsApp / Mobile" value={form.phone}
                  onChange={e => update('phone', e.target.value)} />
              </div>
              {errors.phone && <p className="reg-error">{errors.phone}</p>}
            </div>
          </div>

          {/* ── Section: School Details ── */}
          <div className="reg-section-label">School Details:</div>

          {/* ── Row 3: School Name + Email ── */}
          <div className="reg-row">
            <div>
              <div className={`reg-field${errors.schoolName ? ' error' : ''}`}>
                <span className="reg-field-icon"><SchoolIcon /></span>
                <input className="reg-input" type="text" placeholder="School Name" value={form.schoolName}
                  onChange={e => update('schoolName', e.target.value)} />
              </div>
              {errors.schoolName && <p className="reg-error">{errors.schoolName}</p>}
            </div>
            <div>
              <div className={`reg-field${errors.email ? ' error' : ''}`}>
                <span className="reg-field-icon"><MailIcon /></span>
                <input className="reg-input" type="email" placeholder="School Email" value={form.email}
                  onChange={e => update('email', e.target.value)} />
              </div>
              {errors.email && <p className="reg-error">{errors.email}</p>}
            </div>
          </div>

          {/* ── Row 4: Board + City ── */}
          <div className="reg-row">
            <div>
              <div className={`reg-field${errors.board ? ' error' : ''}`}>
                <span className="reg-field-icon"><BookIcon /></span>
                <div className="reg-select-wrap">
                  <select className="reg-select" value={form.board} onChange={e => update('board', e.target.value)}>
                    <option value="">Board / Affiliation</option>
                    {boards.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              {errors.board && <p className="reg-error">{errors.board}</p>}
            </div>
            <div>
              <div className={`reg-field${errors.city ? ' error' : ''}`}>
                <span className="reg-field-icon"><GlobeIcon /></span>
                <input className="reg-input" type="text" placeholder="City / State" value={form.city}
                  onChange={e => update('city', e.target.value)} />
              </div>
              {errors.city && <p className="reg-error">{errors.city}</p>}
            </div>
          </div>

          {/* ── Row 5: School Code ── */}
          <div className="reg-row full">
            <div>
              <div className="reg-field">
                <span className="reg-field-icon"><HashIcon /></span>
                <input className="reg-input" type="text" placeholder="School Code (optional)" value={form.schoolCode}
                  onChange={e => update('schoolCode', e.target.value)} />
              </div>
            </div>
          </div>

          {/* ── Message ── */}
          <div className="reg-row full">
            <div className="reg-field">
              <span className="reg-field-icon" style={{ alignSelf: 'flex-start', paddingTop: 4 }}><MessageIcon /></span>
              <textarea className="reg-textarea" placeholder="Your message (optional)" value={form.message}
                onChange={e => update('message', e.target.value)} />
            </div>
          </div>

          {/* ── reCAPTCHA ── */}
          <div className="reg-captcha">
            <div className="captcha-box" onClick={() => setCaptchaChecked(!captchaChecked)}>
              <div className={`captcha-checkbox${captchaChecked ? ' checked' : ''}`} />
              <span className="captcha-text">I'm not a robot</span>
              <div className="captcha-brand">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4" opacity="0.2"/>
                  <path d="M12 2v4l3-3-3-3v2z" fill="#4285F4"/>
                  <path d="M20 12h-4l3 3 3-3h-2z" fill="#34A853"/>
                  <path d="M12 20v-4l-3 3 3 3v-2z" fill="#FBBC05"/>
                  <path d="M4 12h4l-3-3-3 3h2z" fill="#EA4335"/>
                </svg>
                <span>reCAPTCHA</span>
                <span>Privacy - Terms</span>
              </div>
            </div>
          </div>
          {errors.captcha && <p className="reg-error" style={{ textAlign: 'center', paddingLeft: 0 }}>{errors.captcha}</p>}

          {/* ── Submit ── */}
          <div className="reg-submit-wrap">
            <button type="submit" className="reg-submit" disabled={loading}>
              {loading ? (
                <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31.4 31.4" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="0.8s" repeatCount="indefinite"/></circle></svg>
              ) : 'Register School'}
            </button>
          </div>
        </form>

        {/* ── Bottom link ── */}
        <div className="reg-bottom">
          <p>Already have credentials?</p>
          <Link to="/login">Login to School Portal →</Link>
        </div>
      </div>
    </main>
  )
}
