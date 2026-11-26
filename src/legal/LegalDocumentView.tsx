import type { LegalBlock, LegalDocument } from "./legalContent";
import "./legalDocument.scss";

/**
 * Renders a LegalDocument (Terms of Service / Privacy Policy) in full: no
 * accordions, so every word is on the page, searchable and printable.
 */

const renderBlock = (block: LegalBlock, key: number) =>
  typeof block === "string" ? (
    <p key={key}>{block}</p>
  ) : (
    <ul key={key}>
      {block.list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

interface LegalDocumentViewProps {
  doc: LegalDocument;
  className?: string;
}

const LegalDocumentView = ({ doc, className }: LegalDocumentViewProps) => (
  <article className={["legal-document", className].filter(Boolean).join(" ")}>
    <header className="legal-document__header">
      <h1>{doc.title}</h1>
      <p className="legal-document__updated">Last updated {doc.updated}</p>
    </header>

    <div className="legal-document__intro">{doc.intro.map(renderBlock)}</div>

    {doc.sections.map((section) => (
      <section key={section.id} className="legal-document__section">
        <h2 id={section.id}>{section.title}</h2>
        {section.body.map(renderBlock)}
      </section>
    ))}
  </article>
);

export default LegalDocumentView;
