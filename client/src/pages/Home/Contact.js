import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const { name, email, mobile, country } = contact;
  return (
    <div>
      <SectionTitle title="Say hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-tertiary">{"{"}</p>
          <p>
            <span className="text-white px-2 pl-7">name : </span>
            <span className="text-white">{name}</span>
          </p>
          <p>
            <span className="text-white px-2 pl-7">email : </span>
            <span className="text-white">{email}</span>
          </p>
          <p>
            <span className="text-white px-2 pl-7">mobile : </span>
            <span className="text-white">{mobile}</span>
          </p>
          <p>
            <span className="text-white px-2 pl-7">country : </span>
            <span className="text-white">{country}</span>
          </p>
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[350px]">
          <dotlottie-player
            src="https://lottie.host/c7f51aeb-779d-483b-aba5-f9e8f44a43c5/jnY1lNajKM.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
