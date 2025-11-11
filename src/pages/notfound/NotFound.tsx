import { Link } from "react-router-dom";
import Seo from "../../components/seo/Seo";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Seo
        title="404 - Page Not Found | PMU Forms"
        description="The page you're looking for doesn't exist. Return to the PMU Forms homepage."
        keywords="404, not found, error page"
        canonical="https://pmuforms.com/404"
        robots="noindex, follow"
      />
      <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-number">404</div>
        <h1>Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="not-found-button">
          Back to Home
        </Link>
      </div>
      </div>
    </>
  );
}

export default NotFound;
