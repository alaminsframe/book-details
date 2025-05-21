import Categories from "./Categories"
import Search from "./Search"

const Header: React.FC = () => {
  return (
    <div className="w-full bg-pimary px-5">
      <div className="flex flex-col justify-center items-center h-[500px] max-w-7xl mx-auto gap-10">
          <h1 className="text-center text-back font-bold text-4xl">Discover the pages that shape your imagination</h1>
          <Search />
          <Categories/>
      </div>
    </div>
  )
}

export default Header
