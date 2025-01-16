import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import { BackBtnIcon } from "../assets/icons";
import ShowMessage from "../components/ShowMessage";

const Country = () => {
  let { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);
  console.log(result);
  return (
    <>
      {isError && <ShowMessage>Someting Went Worng!</ShowMessage>}
      {isLoading && <ShowMessage>Loading countries data...!</ShowMessage>}
      {!isError && !isLoading && result && (
        <div>
          <Link
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
            to="/"
          >
            <img src={BackBtnIcon} />
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img className="w-full" src={result[0]?.flags.svg} alt="" />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result[0]?.name?.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Name: </span>
                    <span className="font-light">{result[0]?.name.common}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result[0]?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result[0]?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result[0]?.capital}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result[0]?.currencies &&
                        Object.keys(result[0]?.currencies)
                          .map((cur) => `${result[0]?.currencies[cur]?.name}`)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result[0]?.languages &&
                        Object.values(result[0].languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Country;
