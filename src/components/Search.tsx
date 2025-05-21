import { IoIosSearch } from "react-icons/io";

const Search: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <input 
        type="text" 
        placeholder="Type a book name..."
        className="bg-white text-secondary px-3 py-2 rounded-l outline-none w-1/3" />
      <button className="bg-btn px-4 py-2.5 rounded-r text-white cursor-pointer">
        <IoIosSearch className="h-5 w-5"/>
      </button>
    </div>
  )
}

export default Search
