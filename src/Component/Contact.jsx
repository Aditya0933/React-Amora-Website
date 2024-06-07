// Price Section

const Contact = () => {
  return (
    <div className="w-[290px] sm:w-[450px] lg:w-[550px] bg-white text-black mx-auto mt-10 sm:mt-14 md:mt-20 px-3 py-2 rounded-[15px]">
      <h1 className="text-center font-bold text-2xl py-2">CONTACT</h1>
      <div className="bg-yellow-300 h-1 w-full mx-auto"></div>
      <div>
        <form>
          <label
            for="reason"
            class="block mb-2 text-sm font-medium text-gray-900 mt-10"
          >
            HELLO! WHY ARE YOU CONTACTING US TODAY ?
          </label>
          <select
            id="reason"
            class=" border text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[80%]"
          >
            <option selected>Please Select</option>
            <option value="US">Select 1</option>
            <option value="CA">Select 2</option>
            <option value="FR">Select 3</option>
            <option value="DE">Select 4</option>
          </select>

          <h2 class="block mb-2 text-sm font-medium text-gray-900 mt-8">TELL US ABOUT YOU:</h2>
          <label
            for="name"
            class="block mb-2 text-[10px] font-medium text-gray-600"
          >
            First and last name*:
          </label>
          <input id="name" className="w-[80%] rounded-lg border focus:ring-blue-500 focus:border-blue-500 block p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name"></input>
          <label
            for="email"
            class="block mb-2 mt-3 text-[10px] font-medium text-gray-600"
          >
            Email address*:
          </label>
          <input id="email" className="w-[80%] rounded-lg border focus:ring-blue-500 focus:border-blue-500 block p-1 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter Your Mail ..."></input>
          <br></br>
          <button
            type="button"
            class="py-1 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
