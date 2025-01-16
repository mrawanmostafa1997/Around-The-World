import { EmptySearchIcon } from "../assets/icons";

const SearchEmpty = () => {
  return (
    <div className="col-span-4 mt-6 flex flex-col items-center text-center">
      <img src={EmptySearchIcon} alt="Search Icon" />
      <h2 className="text-4xl">Search for a country</h2>
      <h2 className="text-4xl"> No Results found</h2>
      <p className="font-light">we can't find any results</p>
    </div>
  );
};

export default SearchEmpty;
