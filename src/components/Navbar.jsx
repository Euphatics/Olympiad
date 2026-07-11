import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SUBJECTS, CLASS_LEVELS as CLASS_LEVELS_CONFIG, OLYMPIAD_CATEGORIES } from '../config/subjects';
import { ROUTES } from '../config/routes';

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */
// OLYMPIAD_CATEGORIES and CLASS_LEVELS now imported from config/subjects.js
const CLASS_LEVELS = CLASS_LEVELS_CONFIG.map((c) => c.name);

/** Map subject category name → slug for route building */
const getSubjectSlug = (categoryName) => {
  const subject = SUBJECTS.find((s) => s.name === categoryName);
  return subject ? subject.slug : '';
};

/** Convert class name like 'Class 1' to 'class-1' */
const toClassSlug = (className) => className.toLowerCase().replace(/ /g, '-');

const FAQ_ITEMS = [
  'FAQs',
  'Exam Dates',
  'Exam Syllabus and PYQs',
  'Marking Scheme',
  'Awards & Recognition',
  'Subject Rankers',
  'Contact Us',
];

const getFAQItemPath = (item) => {
  if (item === 'FAQs') return '/faq';
  if (item === 'Exam Dates') return '/exam-dates';
  if (item === 'Exam Syllabus and PYQs') return '/syllabus-pyqs';
  if (item === 'Marking Scheme') return '/marking-scheme';
  if (item === 'Awards & Recognition') return '/awards';
  if (item === 'Subject Rankers') return '/subject-rankers';
  if (item === 'Contact Us') return '/contact';
  return '#';
};

const PREPARATION_ITEMS = ['PYQs', 'Prep Books', 'Prep Guide'];

/* ═══════════════════════════════════════════════════════════════
   NAVBAR COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function Navbar({ onSelect = () => { } }) {
  /* ── State ──────────────────────────────────────────────── */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobAccordion, setMobAccordion] = useState(null);
  const [mobSubAccordion, setMobSubAccordion] = useState(null);

  /* ── Escape key ────────────────────────────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  /* ── Lock body scroll when mobile drawer is open ───────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* ── Handlers ──────────────────────────────────────────── */
  const select = useCallback(
    (category, item) => {
      onSelect(category, item);
      setMobileOpen(false);
      setMobAccordion(null);
      setMobSubAccordion(null);
    },
    [onSelect],
  );

  const toggleMobAcc = (name) => {
    setMobAccordion((p) => (p === name ? null : name));
    setMobSubAccordion(null);
  };

  const toggleMobSub = (name) => {
    setMobSubAccordion((p) => (p === name ? null : name));
  };

  /* ═══════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ─── NAVBAR (Bulma) ──────────────────────────────── */}
      <nav
        id="navbar"
        className="navbar is-fixed-top nti-navbar"
        role="navigation"
        aria-label="main navigation"
      >
        {/* ─── BRAND ─── */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" id="nav-logo" style={{ gap: '0.625rem' }}>
            <div className="nti-logo-icon">
              <span>N</span>
            </div>
            <span className="nti-logo-text">
              <span className="nti-brand">NTI</span>
              <span className="nti-sub">Olympiad</span>
            </span>
          </Link>

          {/* Bulma burger – triggers custom mobile drawer */}
          <a
            role="button"
            className={`navbar-burger ${mobileOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* ─── MENU (visible on desktop >= 1024px) ─── */}
        <div className="navbar-menu">
          <div className="navbar-start">
            {/* ── Olympiads dropdown ── */}
            <div className="navbar-item has-dropdown is-hoverable" id="nav-olympiads">
              <a className="navbar-link">Olympiads</a>
              <div className="navbar-dropdown">
                {OLYMPIAD_CATEGORIES.map((cat) => (
                  <div key={cat} className="navbar-item has-dropdown nti-nested-dd">
                    <a className="navbar-link">{cat}</a>
                    <div className="navbar-dropdown nti-flyout">
                      {CLASS_LEVELS.map((cls) => {
                        const classSlug = toClassSlug(cls);
                        const subjectSlug = getSubjectSlug(cat);
                        return (
                          <Link
                            key={cls}
                            to={ROUTES.syllabusClass(subjectSlug, classSlug)}
                            onClick={() => select(cat, cls)}
                            className="navbar-item"
                          >
                            {cls}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── FAQs dropdown ── */}
            <div className="navbar-item has-dropdown is-hoverable" id="nav-faqs">
              <a className="navbar-link">FAQs</a>
              <div className="navbar-dropdown">
                {FAQ_ITEMS.map((item) => (
                  <Link
                    key={item}
                    to={getFAQItemPath(item)}
                    onClick={() => select('FAQs', item)}
                    className="navbar-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Preparations dropdown ── */}
            <div className="navbar-item has-dropdown is-hoverable" id="nav-preparations">
              <a className="navbar-link">Preparations</a>
              <div className="navbar-dropdown">
                {PREPARATION_ITEMS.map((item) => (
                  <Link
                    key={item}
                    to={item === 'PYQs' ? ROUTES.previousYear : item === 'Prep Guide' ? ROUTES.prepGuide : '#'}
                    onClick={(e) => {
                      if (item !== 'PYQs' && item !== 'Prep Guide') e.preventDefault();
                      select('Preparations', item);
                    }}
                    className="navbar-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Gallery ── */}
            <Link
              id="nav-gallery"
              to="/gallery"
              onClick={() => select('Gallery', 'Gallery')}
              className="navbar-item"
            >
              Gallery
            </Link>
          </div>

          {/* ── Auth buttons ── */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link
                  id="btn-login-desktop"
                  to="/login"
                  onClick={() => select('Login', 'Login')}
                  className="button nti-btn-login"
                >
                  Log In
                </Link>
                <Link
                  id="btn-register-desktop"
                  to="/register"
                  onClick={() => select('Register', 'Register')}
                  className="button nti-btn-register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
         MOBILE DRAWER (slide-in panel)
         ═══════════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[101] w-full max-w-[380px] bg-white shadow-2xl flex flex-col lg:hidden transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 select-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-royal-700 to-royal-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-royal-800">NTI</span>
              <span className="text-gray-500 font-semibold ml-1">
                Olympiad
              </span>
            </span>
          </Link>
          <button
            id="btn-close-mobile"
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-0.5 custom-scroll">
          {/* ── Olympiads Accordion ── */}
          <div>
            <button
              onClick={() => toggleMobAcc('olympiads')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${mobAccordion === 'olympiads'
                ? 'text-royal-800 bg-royal-50'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              Olympiads
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${mobAccordion === 'olympiads' ? 'rotate-180' : ''
                  }`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobAccordion === 'olympiads' ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}>
              <div className="ml-3 border-l-2 border-royal-100 pl-2 space-y-0.5 pb-2">
                {OLYMPIAD_CATEGORIES.map((cat) => (
                  <div key={cat}>
                    <button
                      onClick={() => toggleMobSub(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] transition-all duration-200 ${mobSubAccordion === cat
                        ? 'text-royal-800 bg-royal-50 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 font-medium'
                        }`}
                    >
                      {cat}
                      <ChevronRight
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-200 ${mobSubAccordion === cat ? 'rotate-90' : ''
                          }`}
                      />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${mobSubAccordion === cat ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                      <div className="ml-3 border-l-2 border-royal-100 pl-2 py-1 space-y-0.5">
                        {CLASS_LEVELS.map((cls) => {
                          const classSlug = toClassSlug(cls);
                          const subjectSlug = getSubjectSlug(cat);
                          return (
                            <Link
                              key={cls}
                              to={ROUTES.syllabusClass(subjectSlug, classSlug)}
                              onClick={() => {
                                select(cat, cls);
                              }}
                              className="w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:bg-royal-50 hover:text-royal-800 transition-colors duration-150 block"
                            >
                              {cls}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Preparations Accordion ── */}
          <div>
            <button
              onClick={() => toggleMobAcc('preparations')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${mobAccordion === 'preparations'
                ? 'text-royal-800 bg-royal-50'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              Preparations
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${mobAccordion === 'preparations' ? 'rotate-180' : ''
                  }`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobAccordion === 'preparations' ? 'max-h-[400px] opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}>
              <div className="ml-3 border-l-2 border-royal-100 pl-2 space-y-0.5 pb-2">
                {PREPARATION_ITEMS.map((item) => (
                  <Link
                    key={item}
                    to={item === 'PYQs' ? ROUTES.previousYear : item === 'Prep Guide' ? ROUTES.prepGuide : '#'}
                    onClick={(e) => {
                      if (item !== 'PYQs' && item !== 'Prep Guide') e.preventDefault();
                      select('Preparations', item);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium text-gray-600 hover:bg-royal-50 hover:text-royal-800 transition-colors duration-150 block"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAQs Accordion ── */}
          <div>
            <button
              onClick={() => toggleMobAcc('faqs')}
              className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${mobAccordion === 'faqs'
                ? 'text-royal-800 bg-royal-50'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              FAQs
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className={`transition-transform duration-300 ${mobAccordion === 'faqs' ? 'rotate-180' : ''
                  }`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${mobAccordion === 'faqs' ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}>
              <div className="ml-3 border-l-2 border-royal-100 pl-2 space-y-0.5 pb-2">
                {FAQ_ITEMS.map((item) => (
                  <Link
                    key={item}
                    to={getFAQItemPath(item)}
                    onClick={() => select('FAQs', item)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-[13px] font-medium text-gray-600 hover:bg-royal-50 hover:text-royal-800 transition-colors duration-150 block"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ── Gallery ── */}
          <Link
            to="/gallery"
            onClick={() => select('Gallery', 'Gallery')}
            className="w-full text-left block px-3 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Gallery
          </Link>


        </div>

        {/* Footer Auth */}
        <div className="px-5 py-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4">

            <Link
              id="btn-login-mobile"
              to="/login"
              onClick={() => select('Login', 'Login')}
              className="cursor-pointer h-[42px] text-[15px] font-medium text-gray-700 bg-white border border-[#007BFF] rounded-[4px] hover:bg-gray-50 transition flex items-center justify-center"
            >
              Log In
            </Link>

            <Link
              id="btn-register-mobile"
              to="/register"
              onClick={() => select('Register', 'Register')}
              className="cursor-pointer h-[42px] text-[15px] font-medium text-white bg-[#007BFF] rounded-[4px] hover:bg-[#0069D9] transition flex items-center justify-center"
            >
              Register
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
