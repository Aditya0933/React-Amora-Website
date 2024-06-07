import React from "react";
import SVG from "../Img/google-play-store-logo-svgrepo-com.svg"
import HomeBanner1 from "../Img/amora-home-banner.png"

const Home = () => {
  return (
    <div className="px-[4%] max-w-[1200px] mx-auto">
      {/* Home 1st Section */}
      {/* <div className="grid grid-cols-2">
        <div className="p-[5%] pl-0 mt-[25px]">
          <h1 className="text-4xl font-bold leading-normal">
            Saúde mental que atende as pessoas onde elas estão!
          </h1>
          <h3 className="text-3xl pt-2 font-bold">Terapia por IA</h3>
          <h4 className="text-2xl pt-8 font-semibold">
            Completamente anônimo.
          </h4>
          <h4 className="text-2xl font-semibfont-medium">
            Sem estigma. Sem limites.
          </h4>
          <p className="text-xl py-6 font-medium">
            A maioria das pessoas se sente melhor após a primeira conversa e
            conta com a Amora
          </p>
          <button
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Clique para Baixar
          </button>
        </div>
        <div>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_4/v1552400042/finalsite/xsqgdbknn0wvlgmjverq/GreatMobileDesignBlogHeader.png"
            alt="Mental Health"
          />
        </div>
      </div> */}

      {/* Home Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="sm:p-[5%] pl-0 mt-[25px] mx-auto">
          <div className="">
            <h1 className="text-[25px] sm:text-4xl font-bold leading-normal text-white">
              Baixe agora o aplicativo <br></br> Amora.IA
            </h1>
            <p className="text-[18px] sm:text-xl py-6 font-medium text-white">
              É anônimo, seguro, e você se sentirá melhor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
            <button
              type="button"
              class=" max-w-[218px] bg-white hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center transition-all hover:text-white me-2 mb-2"
            >
              <img className="h-8 w-8" src={SVG}></img>
              <p className="pl-2 text-left text-[13px] font-semibold">
                GET IT ON<br></br>
                <span className="font-semibold text-[25px] mt-2">Google Play</span>
              </p>
            </button>
            <button
              type="button"
              class=" max-w-[218px] bg-white hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center transition-all hover:text-white me-2 mb-2"
            >
              <svg
                class="w-10 h-10 me-2 -ms-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
              <p className="text-left text-[13px] font-semibold">
                Downoload on the <br></br>
                <span className="font-semibold text-[25px]">Apple Store</span>
              </p>
            </button>
          </div>
          <div className="mt-10">
            <button
              type="button"
              class="mt-4 sm:mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white bg-buttonBackColor focus:outline-none border-gray-200"
            >
              Clique para Baixar
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full overflow-hidden">
          <img className="h-[380px] sm:h-[500px]"
            src={HomeBanner1}
            alt="home banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
