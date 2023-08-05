import React from "react";
import { Link } from "react-router-dom";

const Route_btn = ({ path, method }) => {
  return (
    <Link
      to={path}
      className="px-6 py-3 border border-[#3DEFE9] shadow-md shadow-[#3DEFE9] hover:cursor-pointer hover:shadow-lg rounded-md "
    >
      <p className="text-[#3DEFE9] font-fira tracking-widest select-none font-semibold">
        {path}
      </p>
    </Link>
  );
};

export default Route_btn;
