import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as IconLocation } from "assets/images/icon-location.svg";
import { ReactComponent as IconPhone } from "assets/images/icon-phone.svg";
import { ReactComponent as IconEmail } from "assets/images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="bg-footer px-80 px-16-xs pt-228">
      <Logo />

      <div className="flex w-full mt-40 flex-col-xs">
        <div className="flex w-40 w-full-xs">
          <div className="mr-16">
            <IconLocation />
          </div>
          <p className="white font-400-raleway">
            Dusun X RT.005/RW.003 Desa Buntubedimbar, Kabupaten Deli Serdang,
            Kecamatan Tanjung Morawa, No Rumah 88A, 20362, Indonesia
          </p>
        </div>
        <div className="w-15 w-full-xs mt-16-xs">
          <div className="flex items-center">
            <IconPhone />
            <p className="white font-400-raleway ml-16">+1-543-123-4567</p>
          </div>
          <div className="flex items-center mt-16">
            <IconEmail />
            <p className="white font-400-raleway ml-16">example@fylo.com</p>
          </div>
        </div>
        <div className="w-15 w-full-xs mt-16-xs">
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            About Us
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Jobs
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Press
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Blog
          </p>
        </div>
        <div className="w-15 w-full-xs mt-16-xs">
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Contact Us
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Terms
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Press
          </p>
          <p className="white font-400-raleway mb-16 cursor-pointer hover-active-opacity">
            Privacy
          </p>
        </div>
        <div className="w-15 w-full-xs mt-16-xs text-center-xs">
          <img
            onClick={() =>
              window.open(
                "https://www.facebook.com/wahyu.faturrizky/",
                "_blank"
              )
            }
            alt="social"
            className="cursor-pointer"
            src="https://img.icons8.com/ios/32/FFFFFF/facebook-circled--v5.png"
          />
          <img
            onClick={() =>
              window.open("https://twitter.com/wbocahbijak1", "_blank")
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/twitter-circled--v4.png"
          />
          <img
            onClick={() =>
              window.open(
                "https://www.instagram.com/wahyufaturrizky/",
                "_blank"
              )
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/instagram-new--v1.png"
          />
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/wahyu-fatur-rizky"
          target="_blank"
        >
          Wahyu Fatur Rizki
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
