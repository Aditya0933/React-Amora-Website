// Price Section
import { FaBeer } from 'react-icons/fa'
import { HiLightBulb } from "react-icons/hi";
import { RiVipCrownFill } from "react-icons/ri";
import { FaFlag } from "react-icons/fa";

const Price = () => {
  return (
    <div className="h-full">
      <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] pt-[20px] sm:pt-[30px] md:pt-[40px] pb-[50px] md:pb-[40px] max-w-[90%] sm:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] mt-10 sm:mt-14 md:mt-20 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          <div className="grid items-center">
            <h1 className="text-3xl font-bold text-white">
              Opções de preços flexíveis para todos
            </h1>
          </div>
          <div>
            <p className="text-[18px] font-semibold text-white">
              Escolha a melhor assinatura da Amora este valor servira para
              sustentar sua grande parceira e mentora no período escolhido.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="priceBox border-[6px] border-solid border-gray-400 shadow-xl shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px]  hover:bg-blue-600 hover:text-white hover:cursor-pointer transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
              Uma vez
              </div>
              <div className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">10$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><HiLightBulb/></div>
          </div>
          <div className="shadow-xl border-[6px] border-solid border-gray-400 shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px] hover:bg-blue-600 hover:text-white hover:cursor-pointer transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
              Por ano
              </div>
              <div className="text-[24px] font-bold">20$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><RiVipCrownFill/></div>
          </div>
          <div className="shadow-xl border-[6px] border-solid border-gray-400 shadow-indigo-500/40 group mb-4 lg:mb-0 w-[250px] sm:w-[145px] md:w-[180px] lg:w-[230px] hover:bg-blue-600 hover:text-white hover:cursor-pointer transition-all  bg-white flex justify-between items-center py-[18px] px-[22px] mx-auto rounded-[25px]">
            <div>
              <div className="text-gray-600 font-bold text-[14px] group-hover:text-white ">
              Por mês

              </div>
              <div className="text-[24px] font-bold">100$</div>
            </div>
            <div className='text-[28px] priceBox-hover:text-white'><FaFlag/></div>
          </div>
        </div>
        <div className="absolute right-[50px] lg:-bottom-[20px] text-[12px] lg:text-[12px] py-1 px-8 lg:px-12 font-bold text-white">
          <p>Os primeiros 7 dias são de graça.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Price;
