import React, { useState } from "react";
import WebLogo from "../Img/AmoraMainFinalLogo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="relative h-[100px] bg-transparent flex justify-between items-center font-medium text-white text-lg px-[2%] lg:px-[3%] py-4">
      {/* Logo Div */}
      <div>
        <img className="max-w-[230px] h-[85px]" src={WebLogo} alt="main-logo" />
      </div>

      {/* Links + Button */}
      <div className="md:hidden mr-4 text-[25px]" onClick={toggleNav}>
        {isNavOpen ? <GiCrossMark /> : <GiHamburgerMenu />}
      </div>

      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center items-center absolute top-[100px] left-0 right-0 z-50 bg-gray-800 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent`}
      >
        <nav>
          <ul className="flex flex-col md:flex-row pt-4 md:pt-0">
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold pt-2 mx-[20px]">
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold pt-2 mx-[20px]">
              <Link to="/about" onClick={closeNav}>
                Sobre Nós
              </Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold pt-2 mx-[20px]">
              <Link to="/blogs" onClick={closeNav}>
                Blog
              </Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold pt-2 mx-[20px]">
              <Link to="/price" onClick={closeNav}>
                Preço
              </Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold pt-2 mx-[20px]">
              <Link to="/contact" onClick={closeNav}>
                Contato
              </Link>
            </li>
            {/* <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold my-2 md:ml-[10px] lg:mx-[12px]">
              <Link to="/contact" onClick={closeNav}>Contact</Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold my-2 md:ml-[10px] lg:mx-[12px]">
              <Link to="/faq" onClick={closeNav}>FAQ</Link>
            </li>
            <li className="md:text-[14px] lg:text-[16px] hover:text-blue-300 font-semibold my-2 md:ml-[10px] lg:mx-[12px]">
              <Link to="/terms" onClick={closeNav}>Terms and Conditions</Link>
            </li> */}
          </ul>
        </nav>
        {/* Button Div */}
        <div className="lg:pr-10 ml-[8px] my-2 pb-4">
        <Link to="/appstore">
          <button
            type="button"
            className="md:hidden py-1.5 lg:py-2.5 px-2 lg:px-5 me-2 mb-2 text-[12px] lg:font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Clique para Baixar
          </button>
          </Link>
        </div>
        <div className="hidden absolute -top-12 left-[31%] xl:flex h-[30px]">
          <div className="bg-customBlue w-[190px]"></div>
          <div className=" bg-transperent w-[70px] "></div>
          <div className="bg-customBlue w-[90px]"></div>
        </div>
      </div>
      {/* Button Div */}
      <div className="hidden md:block lg:pr-10 ml-[8px] my-2">
        <Link to="/appstore">
          <button
            type="button"
            className="py-1.5 lg:py-2.5 px-2 lg:px-5 me-2 mb-2 text-[12px] lg:font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Clique para Baixar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
