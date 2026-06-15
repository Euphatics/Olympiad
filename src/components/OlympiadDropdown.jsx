import { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */
const CATEGORIES = [
  'Mathematics Olympiad',
  'English Olympiad',
  'Science Olympiad',
  'Information Technology Olympiad',
  'Finance Olympiad',
];

const CLASS_LEVELS = [

  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
];

/* ═══════════════════════════════════════════════════════════════
   OLYMPIAD DROPDOWN  —  self-contained accordion + flyout
   ═══════════════════════════════════════════════════════════════ */
export default function OlympiadDropdown({ onSelect = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggle = () => {
    setIsOpen((p) => !p);
    setActiveCategory(null);
  };

  const handleSelect = (category, classLevel) => {
    onSelect(category, classLevel);
    setActiveCategory(null);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-md font-sans">
      {/* ── Accordion Header ── */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-5 py-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 group"
      >
        <span className="text-base font-semibold text-gray-800 group-hover:text-royal-800 transition-colors duration-200">
          Olympiads
        </span>
        {isOpen ? (
          <ChevronUp size={20} strokeWidth={2.5} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} strokeWidth={2.5} className="text-gray-400" />
        )}
      </button>

      {/* ── Dropdown Panel ── */}
      {isOpen && (
        <div className="mt-1.5 bg-white rounded-xl border border-royal-100 shadow-lg overflow-visible animate-dropdown origin-top">
          {/* Royal accent bar */}
          <div className="h-[2.5px] bg-gradient-to-r from-royal-600 to-royal-800 rounded-t-xl" />

          <div className="py-1.5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="relative"
                onMouseEnter={() => setActiveCategory(cat)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category row */}
                <button
                  onClick={() =>
                    setActiveCategory((p) => (p === cat ? null : cat))
                  }
                  className={`w-full flex items-center justify-between px-5 py-3 text-sm font-semibold transition-colors duration-150 ${
                    activeCategory === cat
                      ? 'bg-royal-50 text-royal-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{cat}</span>
                  <ChevronRight
                    size={15}
                    strokeWidth={2.5}
                    className={`transition-colors duration-150 ${
                      activeCategory === cat ? 'text-royal-600' : 'text-gray-300'
                    }`}
                  />
                </button>

                {/* ── Flyout submenu ── */}
                {activeCategory === cat && (
                  <>
                    {/* Desktop: flyout to the right */}
                    <div className="hidden sm:block absolute left-full top-0 ml-1.5 z-20">
                      <div className="bg-white rounded-xl border border-gray-200/80 shadow-xl shadow-gray-900/8 py-1.5 min-w-[180px] max-h-[360px] overflow-y-auto custom-scroll animate-fade-in">
                        {CLASS_LEVELS.map((cls) => (
                          <button
                            key={cls}
                            onClick={() => handleSelect(cat, cls)}
                            className="w-full text-left px-4 py-2 text-[13px] font-medium text-gray-600 hover:bg-royal-50 hover:text-royal-800 transition-colors duration-150"
                          >
                            {cls}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Mobile: inline below */}
                    <div className="sm:hidden ml-5 border-l-2 border-royal-100 pl-2 py-1 space-y-0.5 animate-fade-in">
                      {CLASS_LEVELS.map((cls) => (
                        <button
                          key={cls}
                          onClick={() => handleSelect(cat, cls)}
                          className="w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:bg-royal-50 hover:text-royal-800 transition-colors duration-150"
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
