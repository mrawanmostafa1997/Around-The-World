import { SearchIcon } from "../assets/icons";

const SearchInput = ({ CountriesList, filterCountriesList }) => {
  const handleSearchCountires = (e) => {
    e.preventDefault();
    const targetValue = e.target.elements.search.value;
    const filteredCountries =
      !targetValue || targetValue === ""
        ? CountriesList
        : CountriesList.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(targetValue.toLowerCase()),
          );
    filterCountriesList(filteredCountries);
  };
  return (
    <form onSubmit={handleSearchCountires} className="relative flex-1">
      <img className="absolute left-8 top-5" src={SearchIcon} />
      <input
        type="text"
        name="search"
        className="h-12 w-full max-w-md rounded-full pl-20 shadow dark:bg-gray-800 md:h-14"
        placeholder="Search..."
      ></input>
    </form>
  );
};
export default SearchInput;
