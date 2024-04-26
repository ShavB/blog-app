import { FaGithub } from "react-icons/fa";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <div className="bg-slate-800 h-16 text-white flex items-center p-4">
      <div className="flex h-full justify-between w-full px-6">
        <h1 className="font-extrabold text-2xl">Shav.</h1>

        <div className="flex h-auto items-center">
          <div className="px-2">
            <SearchBar size={20} />
          </div>
          <div className="">
            <FaGithub size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
