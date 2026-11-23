import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../analytics";

/** Sends a GA page_view whenever the route changes. Renders nothing. */
const RouteTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // wait a tick so Helmet has updated document.title for the new page
    const id = window.setTimeout(() => trackPageView(pathname + search), 0);
    return () => window.clearTimeout(id);
  }, [pathname, search]);

  return null;
};

export default RouteTracker;
