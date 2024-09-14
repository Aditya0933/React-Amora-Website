import LoginWebLogo from "../Img/AmoraMainFinalLogo.png"

const AdminScreen = () => {
  const backgroundImageStyle = {
    backgroundImage:
    "url(https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    //   "url(https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundSize: "cover", // Adjust this as needed
    backgroundPosition: "center", // Adjust this as needed
    width: "100%", // Adjust this as needed
    height: "100vh", // Adjust this as needed
  };

  return (
    <div className="relative grid place-items-center" style={backgroundImageStyle}>
      {/* <div className="absolute h-full w-full bg-white opacity-70 -z-10 "></div> */}
      <div className="bg-customBlue px-[50px] pb-[60px] pt-[40px] w-[450px] rounded-3xl">
        <div className="w-full grid place-items-center">
            <img className="h-[100px]" src={LoginWebLogo}></img>
        </div>
        <form class="max-w-md mx-auto text-center">
            <h1 className="text-center font-bold text-3xl text-white mb-6 mt-6">Admin LogIn</h1>
          <div class="relative z-0 w-full mb-5 group text-start">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group text-start">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            class=" bg-white hover:bg-blue-100 cursor-pointer py-[8px] px-[16px] rounded-lg mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminScreen;
