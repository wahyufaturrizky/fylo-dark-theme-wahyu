import { ReactComponent as AccessIcon } from "assets/images/icon-access-anywhere.svg";
import { ReactComponent as FileIcon } from "assets/images/icon-any-file.svg";
import { ReactComponent as CollaborationIcon } from "assets/images/icon-collaboration.svg";
import { ReactComponent as SecurityIcon } from "assets/images/icon-security.svg";
import { ReactComponent as ArrowIcon } from "assets/images/icon-arrow.svg";
import { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

export interface ListFeatureInterface {
  label?: string;
  desc?: string;
}

export interface ListTestiInterface {
  text: string;
  author: string;
  job: string;
}

export interface MainPropsInterface {
  listFeature?: Array<ListFeatureInterface>;
  listTesti?: Array<ListTestiInterface>;
  labelLink?: string;
  email?: string;
  isError?: boolean;
  submitEmail?: () => void;
  setEmail?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Main = (props: MainPropsInterface) => {
  return (
    <div className="bg-main px-80 px-16-xs pb-246 relative">
      <section className="flex items-center flex-wrap flex-no-wrap-xs flex-col-xs pt-56">
        {props.listFeature?.map((data, index) => (
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wahyu-fatur-rizky",
                "_blank"
              )
            }
            className="w-6-12 w-full-xs justify-center flex-col mt-80 items-center flex p-24 cursor-pointer"
            key={index}
          >
            {index === 0 ? (
              <SecurityIcon />
            ) : index === 1 ? (
              <AccessIcon />
            ) : index === 2 ? (
              <CollaborationIcon />
            ) : (
              <FileIcon />
            )}
            <div className="w-390 w-254-xs mt-16">
              <h3 className="font-700-raleway mt-16 white text-center">
                {data.label}
              </h3>
              <h5 className="font-400-raleway white text-center mt-16">
                {data.desc}
              </h5>
            </div>
          </div>
        ))}
      </section>

      <section className="flex w-full flex-col-xs pt-146 items-center">
        <div className="w-full-xs">
          <img
            className="w-274-xs"
            src={require("../assets/images/illustration-stay-productive.png")}
            alt="stay-prod"
          />
        </div>
        <div className="w-full-xs">
          <h1 className="font-700-raleway white text-left">Stay productive,</h1>
          <h1 className="font-700-raleway white text-left">wherever you are</h1>
          <p className="white font-400-raleway mt-16">
            Never let location be an issue when accessing your files. Fylo has
            you
          </p>
          <p className="white font-400-raleway">
            covered for all of your file storage needs.
          </p>
          <p className="white font-400-raleway mt-16">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <div className="flex items-center mt-16">
            <ArrowIcon />

            <p
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/wahyu-fatur-rizky",
                  "_blank"
                )
              }
              className="cyan-hover text-underline cursor-pointer ml-16"
            >
              See how Fylo works
            </p>
          </div>
        </div>
      </section>

      <section className="pt-146 relative">
        <div className="flex items-center flex-col-xs justify-between inherit z-index-2">
          {props.listTesti?.map((data, index) => (
            <div
              key={index}
              className="bg-testi mt-16-xs p-24 w-full-xs w-360 h-193 rounded-12"
            >
              <p className="white font-400-raleway">{data.text}</p>
              <div className="flex items-center mt-16">
                <img
                  height={26}
                  width={26}
                  className="rounded-full"
                  src={require(`../assets/images/profile-${index + 1}.jpg`)}
                  alt="as"
                />
                <div className="pl-16">
                  <p className="white font-700-raleway font-size-12">
                    {data.author}
                  </p>
                  <p className="white font-400-raleway font-size-12">
                    {data.job}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-113 top-143-xs z-index-1">
          <img
            className="w-24-xs"
            src={require("../assets/images/bg-quotes.png")}
            alt=""
          />
        </div>
      </section>

      <section className="w-full-xs w-857 h-270 h-auto-xs rounded-12 absolute bottom-139 left-337 left-0-xs bg-main box-shadow px-72 px-16-xs">
        <div className="flex justify-center">
          <div className="w-690 mt-24">
            <h1 className="white text-center font-700-raleway">
              Get early access today
            </h1>
            <h4 className="white font-400-raleway text-center mt-24">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </h4>
          </div>
        </div>

        <div className="flex items-center items-baseline-xs flex-col-xs w-full mt-40">
          <div className="w-60 pr-24 w-full-xs pr-0-xs">
            <Input
              type="email"
              errorText="Please enter a valid email address"
              value={props.email}
              onChange={props.setEmail}
              placeholder="email@example.com"
            />
          </div>
          <div className="w-40 w-full mt-16-xs mb-16-xs">
            <Button onClick={props.submitEmail} label="Get Started For Free" />
          </div>
        </div>
        {props.isError ? (
          <p className="red font-700-raleway font-size-12 mt-8 text-center-xs">
            Please enter a valid email address
          </p>
        ) : null}
      </section>
    </div>
  );
};

export default Main;
