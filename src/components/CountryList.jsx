import CountryCard from "./CountryCard";
import SearchEmpty from "./SearchEmpty";

const CountryList = ({ data }) => {
  return (
    <div className="md mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {data.length > 0 ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population.toLocaleString()}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          ></CountryCard>
        ))
      ) : (
        <SearchEmpty></SearchEmpty>
      )}
    </div>
  );
};
export default CountryList;
