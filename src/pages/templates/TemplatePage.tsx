import { Link, useParams } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import { SITE_URL } from "../../constants/links";
import NotFound from "../notfound/NotFound";
import TemplateCta from "./TemplateCta";
import {
  type FormTemplate,
  type TemplateBlock,
  FORM_TEMPLATES,
  TEMPLATE_AUTHOR,
  TEMPLATE_DISCLAIMER,
  TEMPLATES_PUBLISHED,
  findTemplate,
  sectionSummary,
  templatePath,
  templateUpdated,
} from "./templateData";

/** "November 27, 2026", the same on the server and in every time zone. */
const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
import "./templates.scss";

const Block = ({ block }: { block: TemplateBlock }) => {
  switch (block.kind) {
    case "fields":
      return (
        <div className="tpl-fields">
          {block.items.map((label) => (
            <div key={label} className="tpl-line">
              <span>{label}</span>
              <span className="tpl-line__blank" aria-hidden="true" />
            </div>
          ))}
        </div>
      );
    case "yesno":
      return (
        <ol className="tpl-yesno">
          {block.items.map((q) => (
            <li key={q}>
              <span className="tpl-yesno__q">{q}</span>
              <span className="tpl-yesno__a" aria-hidden="true">
                ☐ Yes&nbsp;&nbsp; ☐ No
              </span>
            </li>
          ))}
        </ol>
      );
    case "initials":
      return (
        <ol className="tpl-initials">
          {block.items.map((s) => (
            <li key={s}>
              <span>{s}</span>
              <span className="tpl-initials__box" aria-hidden="true">
                Initials ______
              </span>
            </li>
          ))}
        </ol>
      );
    case "checklist":
      return (
        <ul className="tpl-checklist">
          {block.items.map((item) => (
            <li key={item}>
              <span aria-hidden="true">☐</span> {item}
            </li>
          ))}
        </ul>
      );
    case "list":
      return (
        <ul className="tpl-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "signatures":
      return (
        <div className="tpl-signatures">
          {block.items.map((label, i) => (
            <div key={`${label}-${i}`} className="tpl-line tpl-line--signature">
              <span className="tpl-line__blank" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      );
  }
};

const structuredData = (t: FormTemplate) => {
  const url = `${SITE_URL}${templatePath(t.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: t.title,
        description: t.description,
        url,
        mainEntityOfPage: url,
        datePublished: t.published ?? TEMPLATES_PUBLISHED,
        dateModified: templateUpdated(t),
        image: `${SITE_URL}/og-image.png`,
        author: { "@type": "Organization", name: "PMU Forms", url: `${SITE_URL}/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Free templates", item: `${SITE_URL}/templates` },
          { "@type": "ListItem", position: 3, name: t.title, item: url },
        ],
      },
      ...(t.faq?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#questions`,
              mainEntity: t.faq.map((q) => ({
                "@type": "Question",
                name: q.question,
                acceptedAnswer: { "@type": "Answer", text: q.answer },
              })),
            },
          ]
        : []),
    ],
  };
};

const TemplatePage = () => {
  const { slug } = useParams();
  const template = findTemplate(slug);
  if (!template) return <NotFound />;

  const url = `${SITE_URL}${templatePath(template.slug)}`;

  return (
    <div className="template-page">
      <Seo
        title={template.seoTitle}
        description={template.description}
        keywords={template.keywords}
        canonical={url}
        ogUrl={url}
        type="article"
        publishedDate={template.published ?? TEMPLATES_PUBLISHED}
        modifiedDate={templateUpdated(template)}
        structuredData={structuredData(template)}
      />

      <nav className="template-page__crumbs" aria-label="Breadcrumb">
        <Link to="/templates">← All free templates</Link>
      </nav>

      <header className="template-page__header">
        <p className="template-page__eyebrow">Free printable template</p>
        <h1>{template.title}</h1>
        <p className="template-page__byline">
          By {TEMPLATE_AUTHOR.name} · Updated{" "}
          <time dateTime={templateUpdated(template)}>{formatDate(templateUpdated(template))}</time>
        </p>

        <aside className="template-page__summary" aria-labelledby="template-summary">
          <h2 id="template-summary">At a glance</h2>
          <p>{template.summary}</p>
          <ul>
            <li>
              <strong>Sections:</strong>{" "}
              {template.sections.map(sectionSummary).join(", ")}
            </li>
            <li>
              <strong>Use it:</strong> print it free below, or send it digitally so clients sign on
              their phone before they arrive.
            </li>
          </ul>
        </aside>

        {template.intro.map((p) => (
          <p key={p} className="template-page__intro">
            {p}
          </p>
        ))}
        <div className="template-page__actions">
          <button type="button" className="template-page__print" onClick={() => window.print()}>
            Print this template
          </button>
        </div>
      </header>

      <TemplateCta heading="Skip the paper" text={template.inApp} />

      <article className="template-sheet" aria-label={template.title}>
        <h2 className="template-sheet__title">{template.title}</h2>
        <div className="template-sheet__business tpl-line">
          <span>Business name</span>
          <span className="tpl-line__blank" aria-hidden="true" />
        </div>
        {template.sections.map((section) => (
          <section key={section.heading} className="template-sheet__section">
            <h3>{section.heading}</h3>
            {section.note && <p className="template-sheet__note">{section.note}</p>}
            {section.blocks.map((block, i) => (
              <Block key={`${block.kind}-${i}`} block={block} />
            ))}
          </section>
        ))}
      </article>

      <p className="template-page__disclaimer">{TEMPLATE_DISCLAIMER}</p>

      {template.faq?.length ? (
        <section className="template-page__faq" aria-labelledby="template-faq">
          <h2 id="template-faq">Common questions</h2>
          {template.faq.map((q) => (
            <div key={q.question} className="template-page__question">
              <h3>{q.question}</h3>
              <p>{q.answer}</p>
            </div>
          ))}
        </section>
      ) : null}

      <nav className="template-page__related" aria-labelledby="related-templates">
        <h2 id="related-templates">More free PMU templates</h2>
        <ul>
          {FORM_TEMPLATES.filter((t) => t.slug !== template.slug).map((t) => (
            <li key={t.slug}>
              <Link to={templatePath(t.slug)}>{t.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <TemplateCta
        heading="Send it digitally with PMU Forms"
        text="Clients fill in and sign forms on their phone before they arrive. Start free on the web or download the app."
      />
    </div>
  );
};

export default TemplatePage;
