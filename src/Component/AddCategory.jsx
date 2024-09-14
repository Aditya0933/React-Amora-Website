import React from "react";
import BlogImg from "../Img/AmoraFinalMobileIcon.png";

const UserList = () => {
  return (
    <div className="">
      <div className=" bg-customBlue h-full m-4 rounded-3xl p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
          Add Category
        </h1>

        <form className="max-w-sm mx-auto mt-6 text-center bg-white text-black py-3 px-5 md:py-6 md:px-10 rounded-3xl flex items-center">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block md:text-sm font-medium text-gray-900 e text-left"
            >
              Category Name:
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mt-3"
              placeholder="Enter Category Name"
              required
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-3"
            >
              Submit
            </button>
          </div>
        </form>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[800px] mx-auto mt-6">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
              <tr class="bg-white border-b dark:border-gray-700 border-t-2">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Web Dev</td>
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
