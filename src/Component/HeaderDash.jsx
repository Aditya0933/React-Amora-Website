import React from "react";
import LogoImg from "../Img/AmoraMainFinalLogo.png";
import "../Dashboard.css";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsBoxArrowRight } from "react-icons/bs";
// import { BsBoxArrowRight } from 'react-icons/bs';

function HeaderDash({ OpenSidebar, openSidebarToggle }) {
  return (
    <header className={`header bg-customBlue grid ${openSidebarToggle ? 'grid-cols-[0px,1fr]' : 'headerRes'} items-center transition-all duration-500 ease-in-out`}>
      <div className=" overflow-hidden">
        <img className={`transition-all duration-500 ease-in-out ${openSidebarToggle ? 'h-[35px] w-[77px]' : 'h-[70px] w-[155px]'} py-1 pl-3`} src={LogoImg} alt="Logo" />
      </div>
      <div className={`flex px-4 justify-between items-center py-6 ${openSidebarToggle ? '' : ''}`}>
        <div className="menu-icon">
          <BsJustify className="icon text-3xl text-white cursor-pointer" onClick={OpenSidebar} />
        </div>
        <div className="header-right flex">
          {/* <BsFillBellFill className="icon ml-4 text-xl text-white" />
          <BsFillEnvelopeFill className="icon ml-4 text-xl text-white" /> */}
          <span className="text-white font-semibold cursor-pointer">Log Out</span>
          <BsBoxArrowRight className="icon ml-4 text-xl text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default HeaderDash;
