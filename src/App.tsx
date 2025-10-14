import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contact/ContactUs";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import LegallyProtect from "./pages/features/LegallyProtect";

function App() {
  return (
    <BrowserRouter>
      <div>
        {" "}
        {/* Changed from <p> to <div> - better semantic structure */}
        <Navbar />
        {/* Other components and routes would go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<LegallyProtect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
