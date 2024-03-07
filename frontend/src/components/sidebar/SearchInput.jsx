import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-4 mt-10 p-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button className="btn btn-circle bg-gray-500 text-white text-3xl">
        <IoMdSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-4 mt-10 p-4">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input input-bordered rounded-full"
//       />
//       <button className="btn btn-circle bg-gray-500 text-white text-3xl">
//         <IoMdSearch className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
