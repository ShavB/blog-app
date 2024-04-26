import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface SearchBarProps {
  size?: Number;
}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState("hidden");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleShow = () => {
    searchBarStatus === false
      ? setShowSearchBar("")
      : setShowSearchBar("hidden");
    setSearchBarStatus(true);
  };

  const handleCancel = () => {
    searchBarStatus === true
      ? setShowSearchBar("hidden")
      : setShowSearchBar("");
    setSearchBarStatus(false);
  };

  return (
    <div className="h-10 flex">
      <form action="">
        <span
          className="flex 
        bg-gray-600 rounded-xl h-10 p-2 items-center cursor-pointer"
        >
          <IoSearch onClick={handleShow} size={30} color="white" />
          <input
            type="text"
            onChange={handleSearch}
            className={`rounded-2xl p-3 h-10 text-white bg-gray-600 focus:outline-none ${showSearchBar}`}
            value={searchValue}
            placeholder="Search for blogs..."
          />
          <RxCross2
            onClick={handleCancel}
            className={`${showSearchBar}`}
            size={30}
          />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
