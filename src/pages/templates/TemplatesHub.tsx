import { Link } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import { SITE_URL } from "../../constants/links";
import TemplateCta from "./TemplateCta";
import { FORM_TEMPLATES, TEMPLATE_DISCLAIMER, templatePath } from "./templateData";
import "./templates.scss";

const hubStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free PMU form templates",
  url: `${SITE_URL}/templates`,
  hasPart: FORM_TEMPLATES.map((t) => ({
    "@type": "Article",
    headline: t.title,
    url: `${SITE_URL}${templatePath(t.slug)}`,
  })),
};

const TemplatesHub = () => (
  <div className="template-page template-hub">
    <Seo
      title="Free PMU Form Templates: Consent, Aftercare & Intake | PMU Forms"
      description="Free, printable templates for permanent makeup artists: PMU, microblading, lip blush and SMP consent forms, aftercare instructions and a client intake form."
      keywords="PMU form templates, permanent makeup forms, microblading consent form template, PMU aftercare template, client intake form template"
      canonical={`${SITE_URL}/templates`}
      ogUrl={`${SITE_URL}/templates`}
      structuredData={hubStructuredData}
    />

    <header className="template-page__header">
      <p className="template-page__eyebrow">Free for PMU artists</p>
      <h1>Free PMU form templates</h1>
      <p className="template-page__intro">
        Printable starting points for the forms every permanent makeup studio needs. Read them here,
        print them, or send them to clients digitally with PMU Forms.
      </p>
    </header>

    <ul className="template-hub__grid">
      {FORM_TEMPLATES.map((t) => (
        <li key={t.slug} className="template-hub__card">
          <h2>
            <Link to={templatePath(t.slug)}>{t.title}</Link>
          </h2>
          <p>{t.summary}</p>
          <Link to={templatePath(t.slug)} className="template-hub__open" aria-hidden="true" tabIndex={-1}>
            View template →
          </Link>
        </li>
      ))}
    </ul>

    <p className="template-page__disclaimer">{TEMPLATE_DISCLAIMER}</p>

    <TemplateCta
      heading="Send forms digitally with PMU Forms"
      text="Clients fill in and sign on their phone before they arrive, and aftercare goes out by email. Start free on the web or download the app."
    />
  </div>
);

export default TemplatesHub;
