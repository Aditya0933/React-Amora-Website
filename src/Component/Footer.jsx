//Footer Component ...
const Footer = () => {
  return (
    // <div className="flex w-[94%] justify-between items-center  bottom-3 px-[4%] bg-transperent text-white">
    <div className="flex xl:absolute w-[94%] flex-col sm:flex-row sm:justify-between items-center bottom-3 px-[4%] bg-transperent text-white mt-8">
      <div className="flex flex-row sm:flex-col">
        <span className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0">Contato</span>
        <span className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0">to FAQ T</span>
        <span className="text-[8px] font-semibold mx-[8px] sm:mx-[0px] mb-2 sm:mb-0">Termo de Uso e Política de Privacidade</span>
      </div>
      <div>
        <p className="text-[10px]">85ED Tech Dev - All rights reserved - CNPJ: 12.888.241/0001-06</p>
      </div>
      <div className="bg-customBlue xl:absolute xl:h-[20px] xl:w-[150px] xl:-right-[60px] xl:top-[40px]"></div>
      
    </div>
  );
};

export default Footer;
