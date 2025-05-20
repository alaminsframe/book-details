import { IoIosSearch } from "react-icons/io";

const Search: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <input 
        type="text" 
        placeholder="Type a book name..."
        className="bg-white px-3 py-2 rounded outline-none" />
      <button className="">
        <IoIosSearch />
      </button>
    </div>
  )
}

export default Search
