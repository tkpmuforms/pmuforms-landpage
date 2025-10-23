import "./tipsandtrends.scss";
import image1 from "../../assets/images/africanwoman.png";
import image2 from "../../assets/images/happy-black-woman-wearing-golden-eye-mask 1.png";
import image3 from "../../assets/images/professional-tattoo-artist-his-customer-workshop 1.png";
import { ArrowIconTipsandTrendSvg } from "../../assets/svgs/Svg";

const TipsandTrends = () => {
  return (
    <section className="tips-trends" id="blogs">
      <div className="tips-trends__header">
        <h2 className="tips-trends__title">
          Tips, Trends & Tutorials for Artists
        </h2>
        <a href="/blogs" className="tips-trends__view-all">
          View All
        </a>
      </div>

      <div className="tips-trends__content">
        <article className="tips-trends__featured-article">
          <div className="tips-trends__article-image">
            <img src={image1} alt="Woman receiving face massage treatment" />
          </div>
          <div className="tips-trends__article-content">
            <time className="tips-trends__date">March 9, 2025</time>
            <h3 className="tips-trends__article-title">
              How to Legally Protect Your PMU Business with Consent Forms
            </h3>
            <div className="tips-trends__arrow-icon">
              <ArrowIconTipsandTrendSvg />
            </div>
          </div>
        </article>

        <div className="tips-trends__secondary-articles">
          <article className="tips-trends__article">
            <div className="tips-trends__article-image">
              <img src={image2} alt="Professional doing microblading work" />
            </div>
            <div className="tips-trends__article-content">
              <time className="tips-trends__date">March 1, 2025</time>
              <h3 className="tips-trends__article-title">
                What to Include in Your Microblading Consent Form
              </h3>
              <div className="tips-trends__arrow-icon">
                <ArrowIconTipsandTrendSvg />
              </div>
            </div>
          </article>

          <article className="tips-trends__article">
            <div className="tips-trends__article-image">
              <img src={image3} alt="PMU work being performed on client" />
            </div>
            <div className="tips-trends__article-content">
              <time className="tips-trends__date">February 12, 2025</time>
              <h3 className="tips-trends__article-title">
                How to Create a 5-Star Client Experience with Digital Forms
              </h3>
              <div className="tips-trends__arrow-icon">
                <ArrowIconTipsandTrendSvg />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TipsandTrends;
