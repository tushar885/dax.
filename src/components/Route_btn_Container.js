import React from "react";
import Route_btn from "./Route_btn";

const Route_btn_Container = () => {
  return (
    <div className="flex justify-evenly mt-16 gap-6 flex-wrap ">
      <Route_btn path={"/transaction"} method={"post"} />
      <Route_btn path={"/store/order"} method={"post"} />
    </div>
  );
};

export default Route_btn_Container;
