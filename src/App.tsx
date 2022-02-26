import Footer from "components/Footer";
import Header, { ListMenuInterface } from "components/Header";
import Intro from "components/Intro";
import Main, {
  ListFeatureInterface,
  ListTestiInterface,
} from "components/Main";
import React, { ChangeEvent, useState } from "react";

const listMenu: Array<ListMenuInterface> = [
  {
    label: "Features",
  },
  {
    label: "Team",
  },
  {
    label: "Sign In",
  },
];

const listFeature: Array<ListFeatureInterface> = [
  {
    label: "Access your files, anywhere",
    desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    label: "Security you can trust",
    desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    label: "Real-time collaboration",
    desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    label: "Store any type of file",
    desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const listTesti: Array<ListTestiInterface> = [
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Satish Patel",
    job: "Founder & CEO, Huddle",
  },
  {
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Bruce McKenzie",
    job: "Founder & CEO, Huddle",
  },
  {
    text: " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    author: "Iva Boyd",
    job: "Founder & CEO, Huddle",
  },
];

function App() {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmitEmail = () => {
    const isValidEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    isValidEmail ? setIsError(false) : setIsError(true);
  };

  return (
    <main>
      <Header listMenu={listMenu} />

      <Intro
        labelButton="Get Started"
        descText="Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers."
        headerText="All your files in one secure location, accessible anywhere."
      />

      <Main
        email={email}
        submitEmail={handleSubmitEmail}
        isError={isError}
        setEmail={handleSetEmail}
        listTesti={listTesti}
        listFeature={listFeature}
      />

      <Footer />
    </main>
  );
}

export default App;
