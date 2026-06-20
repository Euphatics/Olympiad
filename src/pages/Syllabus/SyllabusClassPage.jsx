/**
 * Dynamic syllabus page.
 * Route: /syllabus/:subjectSlug/:classSlug
 *
 * Renders the full syllabus detail for any published subject+class combo.
 * Unpublished combos get the UnpublishedPage instead.
 */

import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSubjectBySlug, getClassBySlug } from '../../config/subjects';
import { ROUTES } from '../../config/routes';
import { getSyllabusData } from '../../data/syllabusData';
import { buildPageMeta } from '../../seo/meta';
import { buildBreadcrumbSchema, buildFAQSchema } from '../../seo/schemaBuilders';
import PageHelmet from '../../seo/PageHelmet';
import UnpublishedPage from './UnpublishedPage';
import { getDefaultMetaTitle, getDefaultMetaDescription } from '../../data/defaults';
import { Breadcrumb, PageContainer, SectionHeading, Card, Button } from '../../components/ui';

export default function SyllabusClassPage() {
  const { subjectSlug, classSlug } = useParams();
  const navigate = useNavigate();

  const subject = getSubjectBySlug(subjectSlug);
  const classLevel = getClassBySlug(classSlug);

  // Invalid subject or class → 404-style redirect
  if (!subject || !classLevel) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h1>
          <p className="text-gray-500 mb-6">The syllabus page you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/syllabus-pyqs" className="text-[#007BFF] hover:underline">
            Browse All Subjects
          </Link>
        </div>
      </div>
    );
  }

  const pageData = getSyllabusData(subjectSlug, classSlug);

  // Unpublished page
  if (!pageData?.published) {
    return (
      <UnpublishedPage
        subjectName={subject.shortName}
        className={classLevel.name}
        subjectSlug={subjectSlug}
      />
    );
  }

  // ── SEO ──
  const path = ROUTES.syllabusClass(subjectSlug, classSlug);

  const meta = buildPageMeta({
    title: pageData.metaTitle || getDefaultMetaTitle(subject.shortName, classLevel.name),
    description: pageData.metaDescription || getDefaultMetaDescription(subject.shortName, classLevel.name),
    path,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Exam Syllabus and PYQs', path: '/syllabus-pyqs' },
    { name: `${subject.shortName} Syllabus`, path: ROUTES.syllabusDetail(subjectSlug) },
    { name: `${subject.shortName} Olympiad ${classLevel.name}` },
  ]);

  const schemas = [breadcrumbSchema];

  // If there's a FAQ section, add FAQPage schema
  const faqSection = pageData.sections?.['frequently-asked-questions'];
  if (faqSection?.type === 'faq' && faqSection.content?.length) {
    schemas.push(buildFAQSchema(faqSection.content));
  }

  // ── Render helpers ──

  const renderSection = (sectionId, section) => {
    switch (section.type) {
      case 'paragraphs':
        return (
          <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
            {section.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        );

      case 'list':
        return (
          <div className="text-[14px] text-[#333] leading-[1.8]">
            {section.content.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        );

      case 'ordered-list':
        return (
          <div className="text-[14px] text-[#333] leading-[1.8] pl-4">
            {section.content.map((item, i) => (
              <p key={i}>
                {String.fromCharCode(97 + i)}. {item}
              </p>
            ))}
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
            {section.content.map((faq, i) => (
              <div key={i}>
                <p className="font-bold text-black">
                  {i + 1}. {faq.question}
                </p>
                <p className="mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  // ── Section order from navLinks ──
  const sectionIds = pageData.navLinks
    ? pageData.navLinks.map((link) => link.id)
    : Object.keys(pageData.sections || {});

  return (
    <div className="min-h-screen bg-white">
      <PageHelmet meta={meta} schemas={schemas} />

      {/* ── Breadcrumb Bar ── */}
      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Exam Syllabus and PYQs', path: '/syllabus-pyqs' },
        { label: `${subject.shortName} Syllabus`, path: ROUTES.syllabusDetail(subjectSlug) },
        { label: classLevel.name }
      ]} />

      <PageContainer className="py-8">
        {/* ── Page Header ── */}
        <div className="w-full border-b border-gray-300 pb-4 mb-8">
          <SectionHeading level="h1">
            {pageData.title}
          </SectionHeading>
        </div>

        {/* ── Layout: Sidebar + Content ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-4">
          {/* Left Sidebar (TOC) */}
          {pageData.navLinks && (
            <div className="w-full lg:w-[280px] flex-shrink-0">
              <Card className="p-5">
                <nav className="flex flex-col">
                  {pageData.navLinks.map((link, index) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block text-[14px] py-2.5 text-[#007BFF] hover:text-[#0056b3] hover:underline transition-colors ${
                        index !== pageData.navLinks.length - 1
                          ? 'border-b border-gray-200'
                          : ''
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </Card>

              {/* Action buttons below TOC */}
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  onClick={() => navigate(ROUTES.markingScheme)}
                  className="w-full"
                >
                  View Marking Scheme
                </Button>
              </div>
            </div>
          )}

          {/* Right Content Area */}
          <div className="flex-1 space-y-8">
            {sectionIds.map((id) => {
              const section = pageData.sections?.[id];
              if (!section) return null;

              return (
                <section key={id} id={id}>
                  <SectionHeading level="h3" className="mb-3">
                    {section.heading}
                  </SectionHeading>
                  {renderSection(id, section)}
                </section>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
