import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../zustand/useConservation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search term must be at least 3 character long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No search user found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 mt-10 p-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
