// Price Section
import { FaBeer } from 'react-icons/fa'
import { HiLightBulb } from "react-icons/hi";
import { RiVipCrownFill } from "react-icons/ri";
import { FaFlag } from "react-icons/fa";

const Price = () => {
  return (
    <div className="h-full">
      <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] max-w-[90%] sm:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] mt-10 sm:mt-14 md:mt-20 mx-auto bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          <div className="grid items-center">
            <h1 className="text-3xl font-bold">
              Opções de preços flexíveis para todos
            </h1>
          </div>
          <div>
            <p className="text-[18px] font-semibold">
              Escolha a melhor assinatura da Amora este valor servira para
              sustentar sua grande parceira e mentora no período escolhido.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="priceBox shadow-xl shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px]  hover:bg-blue-600 hover:text-white hover:cursor-pointer border-none transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
                One Time
              </div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">20$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><HiLightBulb/></div>
          </div>
          <div className="shadow-xl shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px] hover:bg-blue-600 hover:text-white hover:cursor-pointer border-none transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
                Year
              </div>
              <div className="text-[24px] font-bold">20$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><RiVipCrownFill/></div>
          </div>
          <div className="shadow-xl shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px] hover:bg-blue-600 hover:text-white hover:cursor-pointer border-none transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
                Month
              </div>
              <div className="text-[24px] font-bold">20$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><FaFlag/></div>
          </div>
        </div>
        <div className=" lg:absolute lg:-right-[95px] lg:-bottom-[20px] lg:-rotate-[16deg] text-[14px] lg:text-[18px] py-1 px-8 lg:px-12 font-bold bg-white">
          <p>The first 7 days are free!</p>
        </div>
      </div>
     
    </div>
  );
};

export default Price;
