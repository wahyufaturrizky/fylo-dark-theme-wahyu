import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as LogoMobile } from "assets/images/logo-mobile.svg";

export interface ListMenuInterface {
  label: string;
}
interface HeaderPropsInterface {
  listMenu: Array<ListMenuInterface>;
}

const Header = (props: HeaderPropsInterface) => {
  return (
    <header className="flex items-center justify-center px-80 px-16-xs pt-80 pt-16-xs pb-80 bg-dark-blue-intro justify-between">
      <div
        onClick={() =>
          window.open("https://www.linkedin.com/in/wahyu-fatur-rizky", "_blank")
        }
        className="hide-on-mobile cursor-pointer"
      >
        <Logo />
      </div>
      <div className="hide-on-dekstop">
        <LogoMobile />
      </div>
      <div className="flex items-center">
        {props.listMenu.map((data, index) => (
          <p
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wahyu-fatur-rizky",
                "_blank"
              )
            }
            className="white hover-active-opacity cursor-pointer ml-40 font-size-8-xs"
            key={index}
          >
            {data.label}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
