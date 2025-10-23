import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import BlogsList from "./components/howitWorks/BlogsList";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./pages/contact/ContactUs";
import Home from "./pages/home/Home";
import LegallyProtect from "./components/howitWorks/features/LegallyProtect";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/legally-protect" element={<LegallyProtect />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
