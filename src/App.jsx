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
import ZeroLatency from "./pages/ZeroLatency";
import RiskManagement from "./pages/RiskManagement";
import PortfolioAnalysis from "./pages/PortfolioAnalysis";
import FinEduPage from "./pages/FinEduPage";
import FintechTradingPage from "./pages/FintechTradingPage";
import CopyTradingPage from "./pages/CopyTradingPage";
import PAMMPage from "./pages/PAMMPage";
import LiveTradingPage from "./pages/LiveTradingPage";
import RetirementBloq from "./pages/RetirementBloq";
import SMEInstitutionalPage from "./pages/SMEInstitutionalPage";
import BankApiPage from "./pages/BankApiPage";
import MentorshipLivePage from "./pages/MentorshipLivePage";
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
          path="/fin-education"
          element={
              <MainLayout>
              < FinEduPage/>
             </MainLayout>
          }
        />
        <Route
          path="/live-trading"
          element={
              <MainLayout>
              < LiveTradingPage/>
             </MainLayout>
          }
        />
        <Route
          path="/retirement-blog"
          element={
              <MainLayout>
              < RetirementBloq/>
             </MainLayout>
          }
        />
        <Route
          path="/sme-institutional"
          element={
              <MainLayout>
              < SMEInstitutionalPage/>
             </MainLayout>
          }
        />
        <Route
          path="/bank-api"
          element={
              <MainLayout>
              < BankApiPage/>
             </MainLayout>
          }
        />
        <Route
          path="/mentorship-live"
          element={
              <MainLayout>
              < MentorshipLivePage/>
             </MainLayout>
          }
        />
        <Route
          path="/fintech"
          element={
              <MainLayout>
              < FintechTradingPage/>
             </MainLayout>
          }
        />
        <Route
          path="/copy-trading"
          element={
              <MainLayout>
              < CopyTradingPage/>
             </MainLayout>
          }
        />
        <Route
          path="/pamm"
          element={
              <MainLayout>
              < PAMMPage/>
             </MainLayout>
          }
        />
        <Route
          path="/infra"
          element={
              <MainLayout>
              < ZeroLatency/>
             </MainLayout>
          }
        />
        <Route
          path="/risk"
          element={
              <MainLayout>
              < RiskManagement/>
             </MainLayout>
          }
        />
        <Route
          path="/analytics"
          element={
              <MainLayout>
              < PortfolioAnalysis/>
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
