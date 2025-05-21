import Search from "./Search"

const Header: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-pimary h-[200px] w-full gap-10">
        <h1 className="text-center text-secondary text-2xl">Discover the pages that shape your imagination</h1>
        <Search />
    </div>
  )
}

export default Header
