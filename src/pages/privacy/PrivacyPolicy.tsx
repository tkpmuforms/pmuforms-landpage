import Seo from "../../components/seo/Seo";
import { PRIVACY_POLICY } from "../../legal/legalContent";
import LegalDocumentView from "../../legal/LegalDocumentView";
import "./privacypolicy.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy - PMU Forms"
        description="How PMU Forms collects, uses, shares and protects information about artists, their clients and website visitors, including health information on consent forms, and the choices and rights you have."
        keywords="privacy policy, data protection, client health information, PMU Forms"
        canonical="https://pmuforms.com/privacy"
        ogTitle="Privacy Policy - PMU Forms"
        ogDescription="How PMU Forms handles artist and client information, and your privacy choices and rights."
        ogUrl="https://pmuforms.com/privacy"
        robots="index, follow"
      />
      <div className="privacy-policy">
        <LegalDocumentView doc={PRIVACY_POLICY} />
      </div>
    </>
  );
};

export default PrivacyPolicy;
