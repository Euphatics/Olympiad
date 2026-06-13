import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

/* ═══════════ SUBJECT SVG ICONS ═══════════ */
const MathIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="36" r="16" fill="#FFD666" />
    <circle cx="32" cy="36" r="14" fill="#FFC933" />
    <circle cx="27" cy="34" r="2" fill="#333" />
    <circle cx="37" cy="34" r="2" fill="#333" />
    <path d="M27 40 Q32 44 37 40" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M24 24 L28 20" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />
    <text x="10" y="18" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="11" fill="#333">√2</text>
    <text x="36" y="14" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="13" fill="#333">A</text>
    <text x="48" y="38" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="12" fill="#333">B</text>
    <text x="8" y="46" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="14" fill="#333">+</text>
    <text x="46" y="18" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="9" fill="#f59e0b">⚡</text>
    <text x="6" y="28" fontFamily="sans-serif" fontSize="8" fill="#666">×</text>
    <text x="52" y="52" fontFamily="sans-serif" fontSize="8" fill="#666">×</text>
  </svg>
)

const ScienceIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Atom */}
    <ellipse cx="20" cy="20" rx="12" ry="5" stroke="#333" strokeWidth="2.2" transform="rotate(-30 20 20)" fill="none" />
    <ellipse cx="20" cy="20" rx="12" ry="5" stroke="#333" strokeWidth="2.2" transform="rotate(30 20 20)" fill="none" />
    <ellipse cx="20" cy="20" rx="12" ry="5" stroke="#333" strokeWidth="2.2" fill="none" />
    <circle cx="20" cy="20" r="3" fill="#f59e0b" stroke="#333" strokeWidth="1.5" />
    {/* Microscope */}
    <rect x="38" y="50" width="20" height="4" rx="1" fill="#333" />
    <rect x="44" y="46" width="8" height="4" rx="1" fill="#94a3b8" />
    <path d="M48 46 L48 30 Q48 26 44 24 L42 22" stroke="#67c7e8" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M48 46 L48 30 Q48 26 44 24 L42 22" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="38" y="18" width="8" height="4" rx="1" fill="#94a3b8" stroke="#333" strokeWidth="1" />
    <circle cx="42" cy="32" r="3" fill="#67c7e8" stroke="#333" strokeWidth="1.5" />
  </svg>
)

const EnglishIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Book body */}
    <rect x="14" y="8" width="38" height="48" rx="3" fill="#4d9ef5" stroke="#333" strokeWidth="2.5" />
    {/* Spine */}
    <rect x="10" y="8" width="8" height="48" rx="2" fill="#f87171" stroke="#333" strokeWidth="2.5" />
    {/* Label */}
    <rect x="22" y="24" width="24" height="16" rx="2" fill="#fff" stroke="#333" strokeWidth="1.5" />
    <text x="34" y="36" textAnchor="middle" fontFamily="Merriweather, serif" fontWeight="900" fontSize="12" fill="#333">ENG</text>
    {/* Bottom page edge */}
    <line x1="14" y1="52" x2="52" y2="52" stroke="#fff" strokeWidth="2" />
    {/* Bookmark */}
    <path d="M16 56 L16 62 L19 59 L22 62 L22 56" fill="#f87171" stroke="#333" strokeWidth="1.5" />
  </svg>
)

const ITIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Laptop body */}
    <rect x="8" y="20" width="48" height="32" rx="3" fill="#64748b" stroke="#333" strokeWidth="2.5" />
    <rect x="12" y="24" width="40" height="24" rx="2" fill="#475569" />
    {/* Screen content bars */}
    <rect x="6" y="18" width="10" height="28" rx="2" fill="#334155" stroke="#333" strokeWidth="1.5" />
    <rect x="8" y="22" width="6" height="3" rx="1" fill="#94a3b8" />
    <rect x="8" y="27" width="6" height="3" rx="1" fill="#94a3b8" />
    <rect x="8" y="32" width="6" height="3" rx="1" fill="#94a3b8" />
    <rect x="8" y="37" width="6" height="3" rx="1" fill="#94a3b8" />
    <rect x="20" y="36" width="24" height="4" rx="2" fill="#f87171" />
    <rect x="20" y="42" width="28" height="4" rx="2" fill="#fbbf24" />
    <rect x="20" y="30" width="20" height="4" rx="2" fill="#4ade80" />
    {/* Gear with code */}
    <circle cx="40" cy="14" r="12" fill="#67c7e8" stroke="#333" strokeWidth="2.5" />
    <circle cx="40" cy="14" r="8" fill="#fff" />
    {/* Gear teeth */}
    <rect x="37" y="1" width="6" height="4" rx="1" fill="#67c7e8" stroke="#333" strokeWidth="1" />
    <rect x="37" y="23" width="6" height="4" rx="1" fill="#67c7e8" stroke="#333" strokeWidth="1" />
    <rect x="27" y="11" width="4" height="6" rx="1" fill="#67c7e8" stroke="#333" strokeWidth="1" />
    <rect x="49" y="11" width="4" height="6" rx="1" fill="#67c7e8" stroke="#333" strokeWidth="1" />
    <text x="40" y="18" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="11" fill="#333">&lt;/&gt;</text>
  </svg>
)

/* ═══════════ DATA ═══════════ */
const programs = [
  { cls: 'prog-math', Icon: MathIcon, name: 'Mathematics Olympiad', abbr: 'IMO', desc: 'Develop logical thinking and problem-solving skills through competitive mathematics.', tag: 'Class 1–10' },
  { cls: 'prog-sci', Icon: ScienceIcon, name: 'Science Olympiad', abbr: 'NSO', desc: 'Explore scientific concepts and build analytical thinking through hands-on challenges.', tag: 'Class 1–10' },
  { cls: 'prog-eng', Icon: EnglishIcon, name: 'English Olympiad', abbr: 'IEO', desc: 'Strengthen language proficiency, grammar, vocabulary and comprehension skills.', tag: 'Class 1–10' },
  { cls: 'prog-cyber', Icon: ITIcon, name: 'IT Olympiad', abbr: 'NCO', desc: 'Master computer fundamentals, logical reasoning and digital literacy skills.', tag: 'Class 1–10' },
]

const whyCards = [
  { icon: '🌐', title: 'International Exposure', desc: 'Students compete with peers across 25+ countries, gaining global benchmarking experience.' },
  { icon: '🏆', title: 'Awards & Scholarships', desc: 'Cash prizes, medals, certificates and scholarships for top performers at every level.' },
  { icon: '📊', title: 'Detailed Analytics', desc: 'Comprehensive performance reports with subject-wise analysis and improvement insights.' },
  { icon: '📚', title: 'Quality Content', desc: 'Questions designed by subject experts following CBSE, ICSE and international curricula.' },
  { icon: '🔒', title: 'Secure & Fair', desc: 'AI-proctored online exams with randomized question sets ensuring complete fairness.' },
  { icon: '🤝', title: 'School Support', desc: 'Dedicated coordinator portal, bulk registration, real-time tracking and phone support.' },
]

const steps = [
  { num: '01', title: 'Register School', desc: 'Sign up through the portal with basic school details.' },
  { num: '02', title: 'Add Students', desc: 'Import student lists via Excel or add them individually.' },
  { num: '03', title: 'Select Olympiads', desc: 'Choose subjects and register students for exams.' },
  { num: '04', title: 'Make Payment', desc: 'Secure payment via net banking, UPI or card.' },
  { num: '05', title: 'Download Admit Cards', desc: 'Get hall tickets and exam schedules instantly.' },
  { num: '06', title: 'View Results', desc: 'Access detailed results, rankings and certificates.' },
]

const awards = [
  { icon: '🥇', title: 'Gold Medal', desc: 'For international rank holders and top scorers.' },
  { icon: '🎓', title: 'Scholarships', desc: 'Up to ₹50,000 for exceptional performers.' },
  { icon: '📜', title: 'Certificates', desc: 'Participation, Merit and Excellence certificates.' },
  { icon: '🏅', title: 'Trophies', desc: 'Best School and Best Coordinator awards.' },
]

const testimonials = [
  { text: 'The Olympiad portal made it incredibly easy to register 500+ students. The dashboard gives us real-time insights into every student\'s performance.', name: 'Priya Sharma', role: 'Coordinator, DPS Gurugram', init: 'PS' },
  { text: 'Our students\' confidence has grown tremendously since participating. The question quality is excellent and truly challenges their thinking.', name: 'Rajesh Kumar', role: 'Principal, St. Xavier\'s', init: 'RK' },
  { text: 'The support team is exceptional. Any query we had was resolved within hours. Bulk registration via Excel saved us so much time.', name: 'Anita Desai', role: 'Admin, Modern School', init: 'AD' },
]

const resources = [
  { icon: '📝', title: 'Sample Papers', desc: 'Download free previous year question papers for all subjects and classes.', link: 'Download Papers →' },
  { icon: '📕', title: 'Workbooks', desc: 'Comprehensive study material with chapter-wise practice questions and solutions.', link: 'Browse Workbooks →' },
  { icon: '🎯', title: 'Practice Tests', desc: 'Online mock tests with instant results and detailed performance analysis.', link: 'Start Practicing →' },
]

const faqs = [
  { q: 'How can a school register for Olympiad exams?', a: 'Schools can register through our online portal by filling in basic details like school name, board affiliation, address and coordinator information. After admin approval, login credentials are sent via email.' },
  { q: 'What subjects are available for Olympiad exams?', a: 'We offer Olympiads in Mathematics, Science, English, Cyber/IT, Reasoning, Spell Bee, General Knowledge, and Drawing for students from Class 1 to 10.' },
  { q: 'Is there a minimum number of students required?', a: 'There is no minimum requirement. Schools can register even a single student. However, group registrations of 10 or more students receive a discounted rate.' },
  { q: 'How are the exams conducted?', a: 'Exams can be conducted online (AI-proctored) or offline at the school premises. Schools can choose the mode based on their infrastructure and convenience.' },
  { q: 'When are the results declared?', a: 'Results are typically declared within 4–6 weeks of the exam. Schools and students can access detailed scorecards, rankings and certificates through the portal.' },
  { q: 'What is the fee structure?', a: 'The registration fee varies by subject and exam level. Detailed fee information is available during the registration process. Bulk discounts are available for schools.' },
]

/* ═══════════ ICONS ═══════════ */
const ChevronDown = () => (
  <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
)

/* ═══════════ COMPONENT ═══════════ */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Registrations Open 2025–26
            </div>
            <h1 className="hero-title">
              India's Leading<br/><span className="accent">Olympiad</span> Platform<br/>for Schools
            </h1>
            <p className="hero-desc">
              Empower your students with world-class competitive exams in Mathematics, Science, English, IT and more. Trusted by thousands of schools across 25+ countries.
            </p>
            <div className="hero-actions">
              <a href="/register" className="btn-primary">Register Your School →</a>
              <a href="#programs" className="btn-outline">Explore Olympiads</a>
            </div>
          </div>
          <div className="hero-visual">
            {[
              { cls: 'math', Icon: MathIcon, t: 'Mathematics', d: 'Logical reasoning & problem solving' },
              { cls: 'sci', Icon: ScienceIcon, t: 'Science', d: 'Analytical & experimental thinking' },
              { cls: 'eng', Icon: EnglishIcon, t: 'English', d: 'Language proficiency & comprehension' },
              { cls: 'cyber', Icon: ITIcon, t: 'IT / Cyber', d: 'Digital literacy & coding basics' },
            ].map(c => (
              <div className="hero-card" key={c.cls}>
                <div className={`hero-card-icon ${c.cls}`}><c.Icon size={36} /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip" id="trust">
        <div className="trust-inner">
          {[
            { num: '25+', label: 'Countries' },
            { num: '2,500+', label: 'Schools' },
            { num: '50,000+', label: 'Students' },
            { num: '4', label: 'Olympiad Subjects' },
            { num: '98%', label: 'Satisfaction' },
          ].map(t => (
            <div className="trust-item" key={t.label}>
              <span className="trust-num">{t.num}</span>
              <span className="trust-label">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OLYMPIAD PROGRAMS ── */}
      <section className="section section-light" id="programs">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Our Programs</span>
            <h2 className="section-title">Olympiad Programs</h2>
            <p className="section-subtitle">Comprehensive competitive exams designed to challenge, inspire and reward young minds across multiple disciplines.</p>
          </div>
          <div className="programs-grid">
            {programs.map(p => (
              <div className={`program-card ${p.cls}`} key={p.abbr}>
                <div className="program-icon"><p.Icon size={48} /></div>
                <h3>{p.name}</h3>
                <div className="program-abbr">{p.abbr}</div>
                <p>{p.desc}</p>
                <span className="program-tag">{p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section section-dark" id="why-us">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">A platform built specifically for schools, with everything you need to manage olympiad participation seamlessly.</p>
          </div>
          <div className="why-grid">
            {whyCards.map(w => (
              <div className="why-card" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section-white" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Simple 6-step process from school registration to results — everything managed through one portal.</p>
          </div>
          <div className="how-steps">
            {steps.map(s => (
              <div className="how-step" key={s.num}>
                <div className="how-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="section section-light" id="awards">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-subtitle">Outstanding achievers are celebrated with prestigious awards, medals and scholarships.</p>
          </div>
          <div className="awards-grid">
            {awards.map(a => (
              <div className="award-card" key={a.title}>
                <div className="award-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-dark" id="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Schools Say</h2>
            <p className="section-subtitle">Hear from coordinators and principals who trust our platform for their olympiad needs.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.init}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="section section-white" id="resources">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Preparation</span>
            <h2 className="section-title">Resources & Preparation</h2>
            <p className="section-subtitle">Everything students need to prepare confidently for their olympiad exams.</p>
          </div>
          <div className="resources-grid">
            {resources.map(r => (
              <div className="resource-card" key={r.title}>
                <div className="resource-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <a href="#" className="resource-link">{r.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section section-light" id="faqs">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to the most common queries from schools and coordinators.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <ChevronDown />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <h2>Ready to Get Started?</h2>
        <p>Register your school today and give your students the competitive edge they deserve.</p>
        <a href="/register" className="btn-cta-white">Register Your School →</a>
      </section>
    </main>
  )
}
