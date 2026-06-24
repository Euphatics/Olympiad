import {
  Megaphone,
  ScrollText,
  LayoutGrid,
  FileText,
  BookOpen
} from 'lucide-react';

const infoItems = [
  {
    icon: Megaphone,
    label: 'Announcements',
    color: '#F97316',
    bgGradient: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
  },
  {
    icon: ScrollText,
    label: 'Guidelines',
    color: '#EF4444',
    bgGradient: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
  },
  {
    icon: LayoutGrid,
    label: 'Categories',
    color: '#14B8A6',
    bgGradient: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
  },
  {
    icon: FileText,
    label: 'Past Papers',
    color: '#EAB308',
    bgGradient: 'linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)',
  },
  {
    icon: BookOpen,
    label: 'Topics',
    color: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
  },
];

export default function ImportantInfo() {
  return (
    <section className="w-full bg-[#f9fafb] py-8 lg:py-12 border-b border-gray-200">
      <div className="w-full px-6 sm:px-10 lg:px-16">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
            Important Information
          </h2>
          <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {infoItems.map((item) => (
            <InfoCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual info card ────────────────────────────────── */
function InfoCard({ item }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      className="group relative rounded-2xl p-5 lg:p-6 flex flex-col items-center gap-3
                 transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none"
    >
      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: item.bgGradient }}
      ></div>

      {/* Circular icon badge */}
      <div
        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md
                   group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: item.color }}
      >
        <Icon size={26} color="#fff" strokeWidth={2} />
      </div>

      {/* Label */}
      <span className="relative z-10 text-[13px] font-semibold text-gray-700 text-center tracking-wide group-hover:text-gray-900 transition-colors duration-200">
        {item.label}
      </span>
    </button>
  );
}
