import { Route, Routes } from "react-router-dom";
import "./App.css";
import RouteTracker from "./components/analytics/RouteTracker";
import Footer from "./components/footer/Footer";
import BlogsList from "./components/howitWorks/BlogsList";
import LegallyProtect from "./components/howitWorks/features/LegallyProtect";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./pages/contact/ContactUs";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import PricingPage from "./pages/pricing/PricingPage";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import TemplatePage from "./pages/templates/TemplatePage";
import TemplatesHub from "./pages/templates/TemplatesHub";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";

/**
 * Everything inside the router and Helmet providers. Shared by the browser
 * entry (App.tsx) and the build-time renderer (entry-server.tsx).
 */
const AppShell = () => (
  <div className="app-container">
    <RouteTracker />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<BlogsList />} />
      <Route path="/blogs/legally-protect" element={<LegallyProtect />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/templates" element={<TemplatesHub />} />
      <Route path="/templates/:slug" element={<TemplatePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
);

export default AppShell;
