import React, { useEffect } from "react";
import Route_btn_Container from "./Route_btn_Container";
import { useState } from "react";
import { avatarList } from "../utils/constants";

const HomeMain = () => {
  const [avatarName, setAvatarName] = useState("Sittu");

  useEffect(() => {
    const name = localStorage.getItem("avatar_name") || "Sittu";
    setAvatarName(name);
  }, []);

  function clickHandler(e) {
    let index;
    do {
      index = Math.floor(Math.random() * 4);
    } while (avatarList[index] === avatarName);

    setAvatarName(avatarList[index]);
    localStorage.setItem("avatar_name", avatarList[index]);
  }

  return (
    <div className=" flex flex-col">
      <p className="font-founder text-white font-bold text-4xl leading-[2.5rem] tracking-normal">
        Hello Mr. <br />
        <span
          className="before:block before:-z-10 before:absolute before:-inset-1 before:-skew-y-3 before:bg-svgColor relative z-20 mr-4 my-2 text-5xl select-none inline-block hover:cursor-pointer"
          onClick={clickHandler}
        >
          {avatarName},
        </span>
        <br />
        how may I assist you :){" "}
      </p>
      <Route_btn_Container />
    </div>
  );
};

export default HomeMain;
