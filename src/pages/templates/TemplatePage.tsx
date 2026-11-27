import { Link, useParams } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import { SITE_URL } from "../../constants/links";
import NotFound from "../notfound/NotFound";
import TemplateCta from "./TemplateCta";
import {
  type FormTemplate,
  type TemplateBlock,
  FORM_TEMPLATES,
  TEMPLATE_DISCLAIMER,
  TEMPLATES_PUBLISHED,
  findTemplate,
  templatePath,
} from "./templateData";
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
        dateModified: t.published ?? TEMPLATES_PUBLISHED,
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
        modifiedDate={template.published ?? TEMPLATES_PUBLISHED}
        structuredData={structuredData(template)}
      />

      <nav className="template-page__crumbs" aria-label="Breadcrumb">
        <Link to="/templates">← All free templates</Link>
      </nav>

      <header className="template-page__header">
        <p className="template-page__eyebrow">Free printable template</p>
        <h1>{template.title}</h1>
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
