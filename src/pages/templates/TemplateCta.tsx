import { AppleButtonSvg } from "../../assets/svgs/Svg";
import { GooglePlaySvg } from "../../assets/svgs/GooglePlaySvg";
import { WebAppSvg } from "../../assets/svgs/WebAppSvg";
import Button from "../../components/shared/Button";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "../../constants/links";

/** "Use this in PMU Forms" box with the web app and both app stores. */
const TemplateCta = ({ heading, text }: { heading: string; text: string }) => (
  <section className="template-cta" aria-label="Use PMU Forms">
    <h2>{heading}</h2>
    <p>{text}</p>
    <div className="template-cta__buttons">
      <Button href={WEB_APP_URL} target="_blank" icon={<WebAppSvg />} variant="primary" size="small">
        Use this form in PMU Forms free
      </Button>
      <Button href={IOS_APP_URL} target="_blank" icon={<AppleButtonSvg />} variant="primary" size="small">
        Download on iOS
      </Button>
      <Button href={ANDROID_APP_URL} target="_blank" icon={<GooglePlaySvg />} variant="primary" size="small">
        Download on Android
      </Button>
    </div>
  </section>
);

export default TemplateCta;
