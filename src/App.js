import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home, About, Services, Works, Contact } from "./pages";
import { MobileViewUnderConstruction } from "../src/assets";
import "./App.scss";
function App() {
  return (
    <div className="app_main">
      <div className="app_center_1">
        <Router>
          <Navbar />
          <div className="router_container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
      {/* <div className="app_center_2">
        <img
          className="mobile_view_under_construction"
          src={MobileViewUnderConstruction}
          alt="mobile view under construction img"
        />
        <div className="mobile_view_under_construction_text">
          mobile view under construction
        </div>
        <div className="please_use_wider_screen_size">
          please use &gt; 900px screen size
        </div>
      </div> */}
    </div>
  );
}

export default App;
