import React from "react";
// import { BaSend } from "react-icons/ba";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white"
          placeholder="Sena a message.."
        />
        <button
          className="absolute inset-y-0 end-0 flex text-white items-center pe-3"
          type="submit"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import React from "react";
// // import { BaSend } from "react-icons/ba";

// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white"
//           placeholder="Sena a message.."
//         />
//         <button
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//           type="submit"
//         >
//           {/* <BaSend /> */}send
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
