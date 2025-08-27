import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
