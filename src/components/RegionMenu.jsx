import Select from "react-select";

const options = [
  { value: "all regions", label: "All Region" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
const RegionMenu = ({ CountriesList, filterCountriesList }) => {
  const handleRegionChange = (e) => {
    const filteredCountries =
      e.label === "All Region"
        ? CountriesList
        : CountriesList.filter((country) => country.region === e.label);
    filterCountriesList(filteredCountries);
  };

  return (
    <Select
      options={options}
      onChange={handleRegionChange}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow bg-gray-800 dark:bg-gray-800",
        indicatorSeperator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    ></Select>
  );
};

export default RegionMenu;
