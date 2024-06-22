import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Circle from "./pages/Circle/page";
import Index from "./pages/example/page";
import Slide_page1 from "./pages/slide_mode/page_1";
import Transiton_1 from "./pages/transition/page_1";
import Animate_1 from "./pages/animate/page_1";
import Animate_presence from "./pages/AnimatePresence/page_1";
function Main() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <nav>
                  <li>
                    <Link to="/circle">Circle</Link>
                  </li>
                  <li>
                    <Link to="/index">index</Link>
                  </li>
                  <li>
                    <Link to="/slide_mode">slide_mode</Link>
                  </li>
                  <li>
                    <Link to="/transition">transition</Link>
                  </li>
                  <li>
                    <Link to="/animate">Animate</Link>
                  </li>
                  <li>
                    <Link to="/animatePresence">AnimatePresenc</Link>
                  </li>
                </nav>
              </div>
            </>
          }
        />
        <Route path="/circle" element={<Circle />} />
        <Route path="/index" element={<Index />} />
        <Route path="/slide_mode" element={<Slide_page1 />} />
        <Route path="/transition" element={<Transiton_1 />} />
        <Route path="/animate" element={<Animate_1 />} />
        <Route path="/animatePresence" element={<Animate_presence />} />
      </Routes>
    </Router>
  );
}
export default Main;
