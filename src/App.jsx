import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Blogs from "./Component/Blogs";
import Price from "./Component/Price";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Faq from "./Component/Faq";
import TermCondition from "./Component/TermCondition";
import AdminScreen from "./Component/AdminScreen";
import Dashboard from "./Component/Dashboard";
import AdminMainPage from "./Component/AdminMainPage";
import DownloadAppPage from "./Component/DownloadAppPage";
import PrivacyPolicy from "./Component/PrivacyPolicy";

import "./index.css";
import "./Font.css";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isAdminMainDashboard = location.pathname === "/admin/xdashboard";
  const isAdminDashboard = location.pathname === "/admin/dashboard";
  

  // Rendering logic with if-else
  if (isAdminMainDashboard) {
    return <AdminMainPage />;
  }

  if (isAdmin) {
    if (isAdminDashboard) {
      return <Dashboard />;
    } else {
      return <AdminScreen />;
    }
  } else {
    return (
      <div className="xl:mx-8 xl:mt-8 xl:mb-3 xl:h-custom-h xl:relative bg-customBlue xl:rounded-[40px]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<TermCondition />} />
            <Route path="/appstore" element={<DownloadAppPage />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            {/* <Route path="/admin" element={<AdminScreen />} /> */}
            {/* <Route path="/adminmaindashboard" element={<AdminMainPage />} /> */}
            {/* <Route path="/admin28dash" element={<Dashboard />} /> */}
          </Routes>
        </main>
        <Footer />
        <div className="xl:bg-customBlue xl:absolute xl:h-[70px] xl:w-[28px] xl:-right-[28px] xl:bottom-[50px]"></div>
      </div>
    );
  }
}

export default App;
