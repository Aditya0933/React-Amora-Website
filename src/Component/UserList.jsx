const UserList = () => {
  return (
    <div className="">
      <div className="py-6 bg-customBlue h-full m-4 rounded-3xl p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
          User List
        </h1>
        <div className="">
          <form class="max-w-md mx-auto mt-6">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search User Name ..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[800px] mx-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  User name
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="text-black border-b dark:border-gray-700 bg-gray-50 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Aditya</td>
                <td class="px-6 py-4">1234567890</td>
                <td class="px-6 py-4">aditya0933gmail.com</td>
                <td class="px-6 py-4">
                  <div class="inline-flex">
                    <button class="bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Edit
                    </button>
                    <button class="ml-2 bg-gray-300 hover:bg-customBlue text-customBlue hover:text-white font-bold py-2 px-4 rounded-2xl border-[2px] border-customBlue hover:border-transparent">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
