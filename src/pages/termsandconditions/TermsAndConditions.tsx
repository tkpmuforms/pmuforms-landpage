import Seo from "../../components/seo/Seo";
import { TERMS_OF_SERVICE } from "../../legal/legalContent";
import LegalDocumentView from "../../legal/LegalDocumentView";
import "./termsandconditions.scss";

const TermsAndConditions = () => {
  return (
    <>
      <Seo
        title="Terms of Service - PMU Forms"
        description="The Terms of Service for PMU Forms: accounts and subscriptions, artists' responsibilities for client information, information you must not upload, text messages, and other terms for using our website, apps and client forms."
        keywords="terms of service, terms and conditions, PMU Forms"
        canonical="https://pmuforms.com/terms"
        ogTitle="Terms of Service - PMU Forms"
        ogDescription="The terms for using the PMU Forms website, apps and client forms."
        ogUrl="https://pmuforms.com/terms"
        robots="index, follow"
      />
      <div className="terms-agreement-container">
        <LegalDocumentView doc={TERMS_OF_SERVICE} />
      </div>
    </>
  );
};

export default TermsAndConditions;
