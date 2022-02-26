import Button from "./Button";

interface IntroPropsInterface {
  headerText?: string;
  descText?: string;
  labelButton?: string;
}

const Intro = (props: IntroPropsInterface) => {
  return (
    <section className="px-16-xs px-80 pt-56 pt-56 pb-0 bg-dark-blue-intro flex justify-center bg-curvy-desktop bg-no-repeat bg-bottom bg-w-100-h-50">
      <div className="w-500 w-274-xs">
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/wahyu-fatur-rizky",
              "_blank"
            )
          }
          className="container-image-intro"
        >
          <img
            className="w-500 w-274-xs"
            src={require("../assets/images/illustration-intro.png")}
            alt="IllustrationIntro"
          />
        </div>
        <h1 className="font-700-raleway white text-center mt-40 font-size-16-xs mt-16-xs">
          {props.headerText}
        </h1>
        <h3 className="font-400-raleway white text-center mt-40 mt-16-xs font-size-10-xs">
          {props.descText}
        </h3>
        <div className="flex justify-center mt-40 mb-80 mt-16-xs">
          <Button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wahyu-fatur-rizky",
                "_blank"
              )
            }
            label={props.labelButton}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
