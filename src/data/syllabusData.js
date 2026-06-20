/**
 * Syllabus content data.
 *
 * Structure: syllabusData[subjectSlug][classSlug]
 *
 * Each entry has:
 *   published: boolean   – controls visibility & noindex
 *   title: string        – page heading
 *   metaTitle: string    – <title> tag
 *   metaDescription: string
 *   navLinks: Array<{label, id}>  – sidebar TOC
 *   sections: object     – keyed by section id
 *
 * Only pages with `published: true` will be fully rendered.
 * Unpublished pages show a "Coming Soon" placeholder with noindex.
 */

export const syllabusData = {
  mathematics: {
    'class-1': {
      published: true,
      title: 'Maths Olympiad for Class 1',
      metaTitle: 'Mathematics Class 1 Olympiad Syllabus – NTI',
      metaDescription:
        'Detailed syllabus and guidelines for the NTI Mathematics Class 1 Olympiad exam.',
      navLinks: [
        { label: 'Olympiad Details', id: 'olympiad-details' },
        { label: 'Eligibility', id: 'eligibility' },
        { label: 'Benefits', id: 'benefits' },
        { label: 'How to apply', id: 'how-to-apply' },
        { label: 'Syllabus', id: 'syllabus' },
        { label: 'Exam Dates and Fees', id: 'exam-dates-and-fees' },
        { label: 'How to Prepare', id: 'how-to-prepare' },
        { label: 'Cut-off & Answer Keys', id: 'cut-off-and-answer-keys' },
        { label: 'Results', id: 'results' },
        { label: 'Awards and Recognition', id: 'awards-and-recognition' },
        {
          label: 'Frequently Asked Questions',
          id: 'frequently-asked-questions',
        },
      ],
      sections: {
        'olympiad-details': {
          heading: 'About the Olympiad',
          type: 'paragraphs',
          image: {
            src: '/math_class_1_illustration.png',
            alt: 'Class 1 Mathematics Olympiad - Young students learning mathematics concepts',
          },
          content: [
            'The NTI Class 1 Maths Olympiad is designed to help young learners build a strong foundation in mathematics while developing logical reasoning, critical thinking, and problem-solving skills. Based on the Class 1 curriculum, the Olympiad encourages students to apply mathematical concepts in different situations rather than simply memorizing them.',
            'The examination includes carefully designed questions that assess how well students understand key concepts and their ability to use these concepts to solve problems. Through participation, students gain exposure to national-level academic competition and have the opportunity to benchmark their performance against peers from different schools.',
            'NTI follows a structured examination and evaluation process that provides detailed performance insights. Students, parents, and teachers receive a clear understanding of a student\'s strengths and areas for improvement. This approach helps make mathematics more engaging while supporting continuous academic growth.',
          ],
        },
        benefits: {
          heading: 'Benefits of Participating',
          type: 'list',
          content: [
            'Strengthens understanding of Class 1 mathematics concepts',
            'Develops logical thinking and problem-solving skills',
            'Encourages analytical and critical thinking abilities',
            'Builds confidence through academic achievement',
            'Provides exposure to national-level academic competition',
            'Offers certificates, medals, and recognition for outstanding performance',
            'Creates a strong foundation for future Olympiads and competitive examinations',
          ],
        },
        'why-participate': {
          heading: 'Why Participate in the NTI Class 1 Maths Olympiad?',
          type: 'paragraphs',
          content: [
            'The Olympiad provides an excellent platform for students to challenge themselves beyond routine classroom learning. It encourages curiosity, independent thinking, and confidence while helping students develop essential mathematical skills at an early age.',
            'Whether a student already enjoys mathematics or needs additional encouragement to explore the subject, the NTI Class 1 Maths Olympiad offers a rewarding learning experience that supports both academic growth and personal development.',
          ],
        },
        'key-highlights': {
          heading: 'Key Highlights',
          type: 'list',
          content: [
            'Based on the Class 1 school curriculum',
            'Focus on conceptual understanding and application-based learning',
            'National-level participation opportunity',
            'Detailed performance analysis and ranking',
            'Certificates and awards for deserving participants',
            'Student-friendly examination pattern',
          ],
        },
        eligibility: {
          heading: 'Eligibility Criteria for Mathematics Olympiad',
          type: 'ordered-list',
          content: [
            'Students interested in taking the Maths Olympiad test for class 1 can do the registration either through their schools or on their own.',
            'Candidates from all around the world are welcome to apply for the exam.',
            'The test for class Nursery is performed in 1 level.',
            'Only class 1 students can apply to it.',
          ],
        },
        'how-to-apply': {
          heading: 'How to Apply',
          type: 'paragraphs',
          image: {
            src: '/nti_register_banner.png',
            alt: 'Register for NTI Olympiad Exams - Mathematics, Science, English, IT, Finance - 1st to 10th',
          },
          content: [
            'Schools can register their students by filling out the school registration form available on the NTI Olympiad website. Individual students can also register directly through the website with the help of their parents or guardians.',
            'After successful registration, students will receive their admit cards and examination details via email. Schools will be provided with bulk registration options and dedicated support.',
          ],
        },
        syllabus: {
          heading: 'Syllabus',
          type: 'list',
          content: [
            'Number Sense and Counting (1 to 100)',
            'Addition and Subtraction (Basic)',
            'Shapes and Patterns',
            'Time and Money Basics',
            'Measurement and Data Handling',
            'Logical Reasoning',
          ],
        },
        'exam-dates-and-fees': {
          heading: 'Exam Dates and Fees',
          type: 'table-with-notes',
          intro: 'The exam dates for NTI Maths Olympiad for Class 1 for the Academic year 2026-27 are as given below:',
          rows: [
            { label: 'Level 1 Exam Dates', value: '1st December 2026\n5th December 2026' },
            { label: 'Level 2 Exam Date', value: '30th January 2027\n1st February 2027' },
            { label: 'Last Date for Registration', value: 'It is advisable to register for the exam before November.' },
            { label: 'Level 1 Answer Key Dates', value: '9th - 10th December 2026' },
            { label: 'Level 2 Answer Key Dates', value: '3rd - 4th February 2027' },
            { label: 'Level 1 Result Date', value: 'Generally, the results are announced within 10 days after the last answer key date' },
            { label: 'Level 2 Result Date', value: 'Typically, the results are announced within a month after the final answer key is released.' },
          ],
          notes: [
            'Note: Check the NTI Olympiad website for other NTI Olympiad subjects as well.',
            'The exam fee is INR 275 for students studying and enrolling from India. For students studying and residing outside of India, the fee is country specific.',
          ],
        },
        'how-to-prepare': {
          heading: 'How to Prepare',
          type: 'prep-with-links',
          intro: [
            'To be a top performer in the Maths Olympiad exam then the Class 1 Maths Olympiad sample papers are a key requirement. To get a competitive edge, one must analyze previous years\' Maths Olympiad questions for class 1 and at the same time understand the syllabus. After this, proceed to the next steps of your preparation.',
            'List down all the important topics in the Maths Olympiad syllabus and start preparing for them first. Learning to be focused and utilizing time efficiently is a key to success in preparation. Students can follow above tips to do well in the NTI Maths Olympiad exam for class 1. Students can also take advantage of the test series provided by NTI to have a deeper understanding of the types of questions.',
          ],
          materials: [
            { label: 'Class 1 Maths Olympiad Sample Paper', link: '#', linkText: 'Check here' },
            { label: 'Class 1 Maths Olympiad Previous Year Paper', link: '#', linkText: 'Check here' },
            { label: 'Class 1 Maths Olympiad Workbook', link: '#', linkText: 'Check here' },
            { label: 'Class 1 NTI Fundamentals', link: '#', linkText: 'Check Topics' },
          ],
        },
        'cut-off-and-answer-keys': {
          heading: 'Cut-off & Answer Keys',
          type: 'paragraphs',
          content: [
            'Cut-off marks and answer keys will be published after the examination. Students can check their performance against the official answer keys on the NTI website.',
          ],
        },
        results: {
          heading: 'Results',
          type: 'paragraphs',
          content: [
            'Results will be declared within 4-6 weeks after the examination. Students and schools can access detailed performance reports through the NTI portal.',
          ],
        },
        'awards-and-recognition': {
          heading: 'Awards and Recognition',
          type: 'list',
          content: [
            'Gold, Silver, and Bronze medals for top performers',
            'Merit certificates for qualifying students',
            'Participation certificates for all registered students',
            'Special scholarships for outstanding achievers',
            'School-level recognition and trophies',
          ],
        },
        'frequently-asked-questions': {
          heading: 'Frequently Asked Questions',
          type: 'faq',
          content: [
            {
              question:
                'Who can participate in the NTI Class 1 Maths Olympiad?',
              answer:
                'The NTI Class 1 Mathematics Olympiad is open to all students currently enrolled in Grade 1 across various recognized educational boards (CBSE, ICSE, State Boards, etc.). We encourage young learners who have an interest in mathematics to participate, as it provides an excellent early platform to build logical thinking and numerical skills. There are no minimum marks required in regular school exams to be eligible for this Olympiad.',
            },
            {
              question: 'Is there any negative marking?',
              answer:
                'No, there is absolutely no negative marking in the NTI Class 1 Mathematics Olympiad. We believe that young students should be encouraged to attempt all questions without the fear of losing marks for incorrect answers. This approach builds their confidence and encourages them to apply their reasoning skills freely across all sections of the examination.',
            },
            {
              question: 'Can students register individually?',
              answer:
                'Yes, students have the flexibility to register individually for the examination. While we highly encourage schools to participate and register their students in bulk, parents or guardians can directly enroll their children if their respective schools are not participating. Individual registration can be easily completed by reaching out to the school coordinator or following our independent registration guidelines.',
            },
            {
              question: 'What is the medium of the examination?',
              answer:
                'The NTI Class 1 Mathematics Olympiad is conducted entirely in the English language. All question papers, instructions, and communication related to the examination will be provided in English. Students are expected to have a basic understanding of English to comprehend the mathematical word problems and logical reasoning questions presented in the test.',
            },
          ],
        },
      },
    },
    // Classes 2-10: unpublished — content to be added gradually
    'class-2': { published: false },
    'class-3': { published: false },
    'class-4': { published: false },
    'class-5': { published: false },
    'class-6': { published: false },
    'class-7': { published: false },
    'class-8': { published: false },
    'class-9': { published: false },
    'class-10': { published: false },
  },
  english: {
    'class-1': { published: false },
    'class-2': { published: false },
    'class-3': { published: false },
    'class-4': { published: false },
    'class-5': { published: false },
    'class-6': { published: false },
    'class-7': { published: false },
    'class-8': { published: false },
    'class-9': { published: false },
    'class-10': { published: false },
  },
  science: {
    'class-1': { published: false },
    'class-2': { published: false },
    'class-3': { published: false },
    'class-4': { published: false },
    'class-5': { published: false },
    'class-6': { published: false },
    'class-7': { published: false },
    'class-8': { published: false },
    'class-9': { published: false },
    'class-10': { published: false },
  },
  'information-technology': {
    'class-1': { published: false },
    'class-2': { published: false },
    'class-3': { published: false },
    'class-4': { published: false },
    'class-5': { published: false },
    'class-6': { published: false },
    'class-7': { published: false },
    'class-8': { published: false },
    'class-9': { published: false },
    'class-10': { published: false },
  },
  finance: {
    'class-1': { published: false },
    'class-2': { published: false },
    'class-3': { published: false },
    'class-4': { published: false },
    'class-5': { published: false },
    'class-6': { published: false },
    'class-7': { published: false },
    'class-8': { published: false },
    'class-9': { published: false },
    'class-10': { published: false },
  },
};

/**
 * Lookup a specific subject + class syllabus entry.
 * Returns null if the combination doesn't exist.
 */
export const getSyllabusData = (subjectSlug, classSlug) =>
  syllabusData[subjectSlug]?.[classSlug] || null;

/**
 * Check if a specific subject + class is published.
 */
export const isPublished = (subjectSlug, classSlug) =>
  syllabusData[subjectSlug]?.[classSlug]?.published === true;
