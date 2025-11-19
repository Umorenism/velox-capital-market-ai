// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import OurServices from "./pages/Ourservices";
import Contact from "./pages/Contact";
import Login from "./pages/Signin";
import Signup from "./pages/Signup";
 import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Trade from "./pages/Trade";
import AIEngine from "./pages/AiEngine";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
export default function App() {
  return (
    <>
   
    <Router>
      <Routes>
        {/* Main Site Routes */}
        <Route
          path="/"
          element={
            //  <MainLayout>
              <Home />
            //  </MainLayout>
          }
        />
        <Route
          path="/media"
          element={
             <MainLayout>
              <Media />
             </MainLayout>
          }
        />
        <Route
          path="/our-services"
          element={
            //  <MainLayout>
              <OurServices />
            //  </MainLayout>
          }
        />
        <Route
          path="/markets"
          element={
              <MainLayout>
              < Trade/>
             </MainLayout>
          }
        />
        <Route
          path="/engine"
          element={
              <MainLayout>
              < AIEngine/>
             </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
             <MainLayout>
              <Contact />
             </MainLayout>
          }
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
    </>
  );
}
