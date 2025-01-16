import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    isError,
    isLoading,
    result,
    setFilteredCountryList,
    filteredCountriesList,
  } = useFetchData();
  return (
    <>
      {isError && <ShowMessage>Someting Went Worng!</ShowMessage>}
      {isLoading && <ShowMessage>Loading countries data...!</ShowMessage>}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              CountriesList={result}
              filterCountriesList={setFilteredCountryList}
            />
            <RegionMenu
              CountriesList={result}
              filterCountriesList={setFilteredCountryList}
            />
          </div>
          <CountryList data={filteredCountriesList}></CountryList>
        </>
      )}
    </>
  );
};
export default Home;
