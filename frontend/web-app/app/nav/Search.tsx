import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm">
      <input
        type="text"
        placeholder="Search for cars by make, model or color"
        className="flex-grow focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-sm text-gray-600 pl-5 bg-transparent"
      />
      <button>
        <FaSearch
          size={34}
          className="bg-red-400 text-white cursor-pointer rounded-full mx-2 p-2"
        />
      </button>
    </div>
  );
}
