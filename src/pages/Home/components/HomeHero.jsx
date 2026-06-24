import { Carousel } from "flowbite-react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="w-full bg-[#f9fafb] py-6 lg:py-8 border-b border-gray-200">
      <Helmet>
        <title>NTI Olympiad – Academic Excellence Starts Here</title>
        <meta name="description" content="NTI Olympiad – India's premier academic competition platform for students from Class 1 to Class 10." />
        <link rel="canonical" href="https://ntiolympiad.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NTI Olympiad – Academic Excellence Starts Here" />
        <meta property="og:description" content="NTI Olympiad – India's premier academic competition platform for students from Class 1 to Class 10." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NTI Olympiad – Academic Excellence Starts Here" />
        <meta name="twitter:description" content="NTI Olympiad – India's premier academic competition platform for students from Class 1 to Class 10." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NTI Olympiad",
            "url": "https://ntiolympiad.in/"
          })}
        </script>

        {/* EducationalOrganization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "National Talent Identification Olympiad (NTI)",
            "alternateName": "NTI Olympiad",
            "url": "https://ntiolympiad.in/",
            "logo": "https://ntiolympiad.in/favicon.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7972621561",
              "contactType": "customer service",
              "email": "info@ntiolympiad.in",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/ntiolympiad",
              "https://www.instagram.com/ntiolympiad",
              "https://twitter.com/ntiolympiad"
            ]
          })}
        </script>
      </Helmet>
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
          
          {/* SLIDESHOW */}
          <div className="w-full lg:col-span-7 h-[250px] sm:h-[350px] lg:h-full rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <Carousel>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Students participating in NTI Olympiad examination classroom" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Academic excellence certificates and gold medals ceremony" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="National Talent Identification Olympiad study materials and books" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Interactive online test preparation portal dashboard" />
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Happy school students celebrating academic success" />
            </Carousel>
          </div>

          {/* RIGHT COLUMN: INFORMATION & CTA */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center pt-4 lg:pt-0 lg:pl-6">
            <div className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full mb-4 w-fit uppercase tracking-wider">
              NTI Olympiad 2026-27
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-5 tracking-tight">
              India's Emerging Academic Olympiad Platform for <span className="text-[#007BFF]">School Students</span>
            </h1>
            
            <ul className="space-y-3.5 mb-8">
              {[
                'National-Level Olympiad Competition',
                'Cash Prizes, Tablets & Merit Awards',
                'Certificates for Students & Schools',
                'Offline Examination Format',
                'Mathematics, Science, English & More',
                'Open for Classes 1–10'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-[#007BFF] flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] sm:text-[16px] lg:text-[17px] text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="flex items-center justify-center gap-2 bg-[#007BFF] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#0056b3] transition-colors shadow-lg shadow-blue-500/30 text-[15px]">
                Register Now
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <Link to="/syllabus-pyqs" className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-6 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm text-[15px]">
                Explore Olympiads
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

