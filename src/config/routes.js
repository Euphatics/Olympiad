/**
 * Centralized route definitions.
 * Use these builders instead of hardcoding paths in components.
 */

export const ROUTES = {
  home: '/',
  contact: '/contact',
  faq: '/faq',
  gallery: '/gallery',
  markingScheme: '/marking-scheme',
  awards: '/awards',
  login: '/login',
  register: '/register',

  // Syllabus
  syllabusPyqs: '/syllabus-pyqs',
  syllabusDetail: (subjectSlug) => `/syllabus/${subjectSlug}`,
  syllabusClass: (subjectSlug, classSlug) =>
    `/syllabus/${subjectSlug}/${classSlug}`,

  // Rankers
  subjectRankers: '/subject-rankers',
  rankersList: (subjectName) =>
    `/rankers-list/${encodeURIComponent(subjectName)}`,
};

/** Base URL used for canonical links and OG tags */
export const BASE_URL = 'https://ntiolympiad.in';
