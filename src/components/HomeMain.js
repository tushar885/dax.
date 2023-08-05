import React from "react";
import Route_btn_Container from "./Route_btn_Container";

const HomeMain = () => {
  function clickHandler(e) {
    console.log(e.target.textContent);
  }
  return (
    <div className=" flex flex-col">
      <p className="font-founder text-white font-bold text-4xl leading-[2.5rem] tracking-normal">
        Hello Mr. <br />
        <span
          className="before:block before:-z-10 before:absolute before:-inset-1 before:-skew-y-3 before:bg-svgColor relative z-20 mr-4 my-2 text-5xl select-none inline-block hover:cursor-pointer"
          onClick={clickHandler}
        >
          sachin,
        </span>
        <br />
        how may I assist you :){" "}
      </p>
      <Route_btn_Container />
    </div>
  );
};

export default HomeMain;
