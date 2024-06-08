// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Blogs from './Component/Blogs';
import Price from './Component/Price';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Faq from './Component/Faq';
import TermCondition from './Component/TermCondition';
import './index.css';

function App() {
  return (
    <div className="xl:mx-8 xl:mt-8 xl:mb-3 xl:h-custom-h xl:relative bg-customBlue xl:rounded-[40px]">
    {/* // <div className="bg-customBlue"> */}
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
        </Routes>
      </main>
      <Footer />
      <div className="xl:bg-customBlue xl:absolute xl:h-[70px] xl:w-[28px] xl:-right-[28px] xl:bottom-[50px]"></div>
    </div>
  );
}

export default App;
