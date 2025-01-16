import { EmptySearchIcon } from "../assets/icons";

const NoPage = () => {
  return (
    <div className="col-span-4 mt-6 flex flex-col items-center text-center">
      <img src={EmptySearchIcon} alt="Search Icon" />
      <h2 className="text-4xl"> Error 404</h2>
      <p className="font-light">sorry for the error</p>
    </div>
  );
};
export default NoPage;
