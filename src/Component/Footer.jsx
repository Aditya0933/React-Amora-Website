import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // For Open Link in New Tab
  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // For Open Insta Link in New Tab
  const handleInstaClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex xl:absolute w-[94%] flex-col sm:flex-row sm:justify-between items-center bottom-3 pb-2 px-[4%] text-white mt-8">
      <div className="flex flex-row sm:flex-col">
        <span className="text-[20px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer">
          <a
            href="https://www.instagram.com/amoraterapia.ia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
        <Link
          to="/contact"
          className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer"
        >
          Contato
        </Link>
        <Link
          to="/faq"
          className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer"
        >
          FAQ
        </Link>
        <Link
          to="/terms"
          className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer"
        >
          Termo de Uso
        </Link>
        <Link
          to="/policy"
          className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer"
        >
        Política de Privacidade
        </Link>
      </div>
      <div>
        <p className="text-[10px]">
          <a href="https://google.com"></a>
          <a
            href="https://nexinfosoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(e.target.href);
            }}
          >
            Made with ❤️ By Nexinfosoft Pvt Ltd.
          </a>
        </p>
      </div>
      <div className="bg-customBlue xl:absolute xl:h-[30px] xl:w-[150px] xl:-right-[54px] xl:top-[57px]"></div>
    </div>
  );
};

export default Footer;
