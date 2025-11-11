import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import Footer from "./components/footer/Footer";
import BlogsList from "./components/howitWorks/BlogsList";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./pages/contact/ContactUs";
import Home from "./pages/home/Home";
import LegallyProtect from "./components/howitWorks/features/LegallyProtect";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<BlogsList />} />
            <Route path="/blogs/legally-protect" element={<LegallyProtect />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
