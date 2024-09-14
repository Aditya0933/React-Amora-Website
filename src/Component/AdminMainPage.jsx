import WebLogo from "../Img/AmoraMainFinalLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminMainPage = () => {
  return (
    <div className="xl:mx-8 xl:mt-8 xl:mb-3 xl:h-custom-h xl:relative bg-customBlue xl:rounded-[40px]">
      <div className="relative h-[100px] bg-transparent flex justify-between flex-col md:flex-row items-center font-medium text-white text-lg px-[2%] lg:px-[3%] py-4 text-center mb-14 md:mb-0">
        {/* Logo Div */}
        <div>
          <img
            className="max-w-[230px] h-[85px]"
            src={WebLogo}
            alt="main-logo"
          />
        </div>

        {/* DashBoard Heading */}
        <div className="mt-3 md:mt-0">
          <h1 className="text-[25px] md:text-3xl font-bold">Dashboard Admin Only</h1>
        </div>

        {/* Month Filter */} 
        <div className="flex items-center mt-4 md:mt-0">
          <div>
            <p className="text-[14px] font-semibold">
              <span>Month : </span>
              <span>April</span>/<span>24</span>
            </p>
          </div>
          <div className="ml-2">
            <FaFilter />
          </div>
        </div>
      </div>


      <div className="px-[5%] pt-8">
        <h2 className=" text-[14px] md:text-xl font-semibold text-white mb-2 md:mb-6">
          Where have we arrived?:
        </h2>
        <div className="grid  grid-cols-1 gap-2 md:gap-0 md:grid-cols-3">
          <div className="text center mx-auto w-[95%] overflow-hidden">
            <div className="h-[330px] w-[100%]">
              <iframe
                className="h-full w-[100%]"
                title="Google Map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.556216195352!2d-0.12775868437880887!3d51.5073509822834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760540fe2d2c4d%3A0xc3baf2e451c22cc!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1624102785806!5m2!1sen!2suk"
                allowtransparency="true"
              ></iframe>
            </div>
          </div>
          <div className="text center mx-auto w-[95%]">
            <div className="h-[330px] w-[100%] bg-white">
              <div className="flex justify-between px-2">
                <div>
                  <span className="text-red-700 font-bold text-[12px]">
                    User Volume
                  </span>
                </div>
                <div className="px-[10px] bg-yellow-300">
                  <span className="font-bold text-[12px]">Extract Excel</span>
                </div>
              </div>
              <div className="px-2 mt-2">
                <div className="grid grid-cols-4 place-items-start gap-[2px]">
                  <div>
                    <span className="text-[12px]">Months</span>
                  </div>
                  <div>
                    <span className="text-[12px]">Active Users</span>
                  </div>
                  <div>
                    <span className="text-[12px]">Inactive Users</span>
                  </div>
                  <div>
                    <span className="text-[12px]">Total Users</span>
                  </div>
                </div>
                <ul className="h-[230px] overflow-x-auto">
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                      <div>
                        <span>19</span>
                      </div>
                      <div>
                        <span>434</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    
          </div>
          <div className="text center mx-auto w-[95%]">
            <div className="h-[330px] w-[100%] bg-white">
              <div className="flex justify-between px-2">
                <div>
                  <span className="text-red-700 font-bold text-[12px]">
                    Subscription Volume
                  </span>
                </div>
                <div className="px-[10px] bg-yellow-300">
                  <span className="font-bold text-[12px]">Extract Excel</span>
                </div>
              </div>
              <div className="px-2 mt-2">
                <div className="grid grid-cols-4 place-items-start gap-[2px]">
                  <div>
                    <span className="text-[12px]">Months</span>
                  </div>
                  <div>
                    <span className="text-[12px]">Number</span>
                  </div>
                </div>
                <ul className="h-[230px] overflow-x-auto">
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                  <li className="text-[12px]">
                    <div className="grid grid-cols-4 place-items-start gap-[2px]">
                      <div>
                        <span>Jav-24</span>
                      </div>
                      <div>
                        <span>419</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:absolute w-[100%] md:w-[94%] flex-col sm:flex-row sm:justify-between items-center bottom-3 pb-2 px-[4%] text-white mt-0 md:mt-8">
        <div className="flex flex-row md:flex-row-reverse items-center">
          <div className="ml-2">
            <span className="text-[24px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0 cursor-pointer">
              <a
                href="https://www.instagram.com/iamaadi_033/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="flex flex-row sm:flex-col items-center">
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
              Termo de Uso e Política de Privacidade
            </Link>
          </div>
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
      </div>
    </div>
  );
};

export default AdminMainPage;
