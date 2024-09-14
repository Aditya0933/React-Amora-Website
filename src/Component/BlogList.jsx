import BlogImg from "../Img/AmoraFinalMobileIcon.png";

const BlogList = () => {
  return (
    <div className=" pt-4 pb-4">
      <div className="bg-customBlue h-full rounded-3xl m-4 mt-0 p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">Blog List</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[800px] mx-auto mt-6">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-gray-700 uppercase bg-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Blog Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Blog Category{" "}
                </th>
                <th scope="col" class="px-6 py-3">
                  Short Discreption
                </th>
                <th scope="col" class="px-6 py-3">
                  Discreption
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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
              <tr class="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="px-2 py-4 h-[100px] w-[80px]">
                  <img className="h-auto w-auto" src={BlogImg}></img>
                </td>
                <td class="px-4 py-4">Web Dev</td>
                <td class="px-4 py-4 text-[11px]">Stylish category addition form with responsive design and background image.</td>
                <td class="py-4 text-[11px]">UserList component facilitates category addition with a stylish form interface. Featuring a centered title and inputs for category name and type.</td>
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

export default BlogList;
