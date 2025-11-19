import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Signup from "../auth/Signup";
import Signin from "../auth/Signin";
import MainLayout from "../layouts/MainLayout";
import AIEngine from "../pages/AiEngine";
import Media from "../pages/Media";
import Trade from "../pages/Trade";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Main layout routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          
          <Route path="/contact" element={<Contact />} />
          
        </Route>

        {/* Auth routes (outside layout) */}
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
