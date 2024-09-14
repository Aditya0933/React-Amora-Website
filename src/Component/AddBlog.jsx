const AddBlog = () => {
  return (
    <div>
      <div className="bg-customBlue h-full m-4 rounded-3xl p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">Add Blog</h1>
        <form class="max-w-lg mx-auto text-center bg-white text-black py-6 px-10 rounded-3xl mt-6">
          <label
            class="block mb-2 mt-3  text-left text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
          >
            Upload file
          </label>
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          ></input>
          <label
            for="category-input"
            class="block mb-2 text-sm mt-3 text-left font-medium"
          >
            Category Name:
          </label>
          <input
            type="text"
            id="category-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
          ></input>
          <label
            for="base-input"
            class="block mb-2 text-left mt-3 text-sm font-medium "
          >
            Short Discreption:
          </label>
          <input
            type="text"
            id="base-input"
            class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>

          <label
            for="message"
            class="block mb-2 text-left mt-3 text-sm font-medium"
          >
            Discreption:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-auto scrollbar-w-2rem"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            type="submit"
            class="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
