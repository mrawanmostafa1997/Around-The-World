import { useEffect, useState } from "react";

export const useFetchData = (country) => {
  const [result, setResult] = useState();
  const [filteredCountriesList, setFilteredCountryList] = useState([]);

  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();
  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);
  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setResult(data);
      setFilteredCountryList(data);
    } else {
      fetchDataFromAPI();
    }
  };
  const fetchDataFromAPI = () => {
    let url = "https://restcountries.com/v3.1/all";
    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    }
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          if (country) {
            setResult(data);
          } else {
            setResult(data);
            setFilteredCountryList(data);
            localStorage.setItem("countries", JSON.stringify(data));
          }
        })
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  return {
    result,
    filteredCountriesList,
    setFilteredCountryList,
    isLoading,
    isError,
  };
};
