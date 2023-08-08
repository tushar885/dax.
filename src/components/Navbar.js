import React from "react";
import sunIcon from "../../public/assests/icon-sun.svg";

const Navbar = () => {
  return (
    <div className="flex justify-end mb-8">
      <img src={sunIcon} alt="sun_icon" width={"26px"} height={"26px"} />
    </div>
  );
};

export default Navbar;
