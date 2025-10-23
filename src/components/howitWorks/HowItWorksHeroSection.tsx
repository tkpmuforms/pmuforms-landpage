import "./howItWorksHeroSection.scss";
import TipsImages from "../../assets/images/tipsTrendTutorial.jpg";
import { useNavigate } from "react-router-dom";

const BlogHero = () => {
  const navigate = useNavigate();
  return (
    <section className="blog-hero-section">
      <div className="hero-content">
        <div className="hero-container-tips">
          <h1 className="hero-main-title">
            Tips, Trends & Tutorials for Artists
          </h1>
          <p className="hero-subtitle">
            Grow your business, stay compliant, and learn how to elevate the
            client experience — all from the PMU Forms team.
          </p>

          <div className="hero-feature-card">
            <div
              className="feature-image"
              style={{
                backgroundImage: `url(${TipsImages})`,
              }}
            >
              <div className="image-overlay">
                <div className="feature-content">
                  <h2 className="feature-title">
                    How to Legally Protect Your PMU Business with Consent Forms
                  </h2>
                  <div className="feature-meta">
                    <span className="feature-date">March 22, 2025</span>
                    <span className="meta-divider">|</span>
                    <span className="feature-author">by Michael Reed</span>
                  </div>
                  <button
                    className="btn-watch-demo"
                    onClick={() => navigate("/blogs/legally-protect")}
                  >
                    <span className="demo-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle cx="10" cy="10" r="10" fill="currentColor" />
                        <path d="M8 6l6 4-6 4V6z" fill="white" />
                      </svg>
                    </span>
                    Read Blog
                  </button>
                </div>
              </div>
            </div>

            <div className="navigation-controls">
              <button className="nav-arrow nav-arrow-prev">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="nav-dots">
                <button className="nav-dot"></button>
                <button className="nav-dot active"></button>
              </div>

              <button className="nav-arrow nav-arrow-next">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
