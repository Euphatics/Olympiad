import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * Gallery data structure.
 * This array will be populated dynamically from the admin panel later.
 */
const GALLERY_DATA = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/nti1/600/400',
    name: 'RADHIKA NARANG',
    school: 'VIVEK INTERNATIONAL PUBLIC SCHOOL, BADDI, SOLAN',
    className: 'Class 9',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/nti2/600/400',
    name: 'AARAV SHARMA',
    school: 'DELHI PUBLIC SCHOOL, NEW DELHI',
    className: 'Class 7',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/nti3/600/400',
    name: 'PRIYA PATEL',
    school: 'ST. XAVIER\'S HIGH SCHOOL, MUMBAI',
    className: 'Class 5',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/nti4/600/400',
    name: 'ROHAN GUPTA',
    school: 'KENDRIYA VIDYALAYA, CHANDIGARH',
    className: 'Class 10',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/nti5/600/400',
    name: 'ANANYA SINGH',
    school: 'RYAN INTERNATIONAL SCHOOL, BANGALORE',
    className: 'Class 3',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/nti6/600/400',
    name: 'VIKRAM REDDY',
    school: 'NARAYANA E-TECHNO SCHOOL, HYDERABAD',
    className: 'Class 8',
  },
  {
    id: 7,
    image: 'https://picsum.photos/seed/nti7/600/400',
    name: 'MEERA JOSHI',
    school: 'MODERN PUBLIC SCHOOL, JAIPUR',
    className: 'Class 6',
  },
  {
    id: 8,
    image: 'https://picsum.photos/seed/nti8/600/400',
    name: 'ARJUN NAIR',
    school: 'BHAVAN\'S VIDYA MANDIR, KOCHI',
    className: 'Class 4',
  },
];

export default function Gallery() {
  const [photos] = useState(GALLERY_DATA);
  const [activeIndex, setActiveIndex] = useState(null); // null = grid view, number = viewer

  // SEO
  useEffect(() => {
    document.title = 'Gallery – NTI Olympiad';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Explore the photo gallery of NTI Olympiad achievers, events, and highlights.');
    }
  }, []);

  // Keyboard navigation (only when viewer is open)
  const handleKey = useCallback((e) => {
    if (activeIndex === null) return;
    if (e.key === 'Escape') setActiveIndex(null);
    if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % photos.length);
    if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [activeIndex, photos.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const goPrev = () => setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % photos.length);
  const closeViewer = () => setActiveIndex(null);

  const current = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section className="w-full bg-[#f9fafb] py-8 lg:py-12" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 id="gallery-heading" className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
          NTI Awards Gallery
        </h1>
        <div className="h-[2px] bg-gradient-to-r from-[#007BFF] to-transparent mb-10"></div>

        {/* ─── Viewer (only when a photo is clicked) ─── */}
        {current && (
          <div className="mb-10 relative">
            {/* Close button */}
            <button
              onClick={closeViewer}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close viewer"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 sm:gap-8">
              {/* Left Arrow */}
              <button
                onClick={goPrev}
                className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Photo + Info */}
              <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
                {/* Selected Photo */}
                <div className="flex-shrink-0 w-full sm:w-[480px] rounded-xl overflow-hidden border-[3px] border-[#40E0D0] shadow-lg">
                  <img
                    src={current.image}
                    alt={`${current.name} – ${current.school}`}
                    className="w-full h-[350px] sm:h-[450px] object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center py-4 sm:py-10">
                  <div className="space-y-5">
                    <p className="text-base lg:text-lg text-gray-800">
                      <span className="font-bold">Name : </span>
                      <span className="text-gray-700">{current.name}</span>
                    </p>
                    <p className="text-base lg:text-lg text-gray-800">
                      <span className="font-bold">School : </span>
                      <span className="text-gray-700">{current.school}</span>
                    </p>
                    <p className="text-base lg:text-lg text-gray-800">
                      <span className="font-bold">Class : </span>
                      <span className="text-[#007BFF] font-semibold">{current.className}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        )}

        {/* ─── Photo Grid (always visible) ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => setActiveIndex(i)}
              className={`overflow-hidden rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-offset-2 ${
                i === activeIndex
                  ? 'border-[#40E0D0] shadow-lg scale-[1.03]'
                  : 'border-gray-200 hover:border-gray-400 hover:shadow-md'
              }`}
            >
              <img
                src={photo.image}
                alt={photo.name}
                className="w-full h-[120px] sm:h-[140px] lg:h-[160px] object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
