import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="mb-6 p-5 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:px-0"></div>

      <div className="flex h20 items-center justify-between">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
