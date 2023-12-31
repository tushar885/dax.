import React from "react";
import { Formik, ErrorMessage } from "formik";
import back_icon from "../../public/assests/back-arrow.svg";
import validate_transaction from "../utils/validate_transaction";
import { Link } from "react-router-dom";
import { post_Transaction } from "../utils/constants";

const TransactionForm = () => {
  async function postTransaction(data) {
    const res = await fetch(post_Transaction, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    // c;
    // const res_data = await res.json();
    console.log(res);
    console.log(res_data);
  }

  return (
    <Formik
      initialValues={{
        from: "",
        to: "",
        amount: 0.0,
        transactionDate: "",
      }}
      validationSchema={validate_transaction}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        const data = {
          ...values,
          transactionDate: new Date(values.transactionDate).toISOString(),
        };
        console.log(data);
        console.log(new Date(values.transactionDate).toISOString());
        postTransaction(JSON.stringify(data));
        setSubmitting(false);
        resetForm();
      }}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <div className="flex border-t border-[#8af1ee] flex-col items-center max-w-[480px] gap-6 sm:gap-8 self-center w-full rounded-lg shadow-lg shadow-slate-700 p-4 py-6">
            <div className="w-full flex justify-between">
              <Link to={"/"}>
                <img
                  src={back_icon}
                  alt="back_icon"
                  className="h-[26px] w-[26px] self-start"
                />
              </Link>
              <span className="font-fira text-lg text-[#ff4df9] tracking-widest">
                {" "}
                /transaction{" "}
              </span>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-stretch w-full gap-5 sm:gap-7"
            >
              <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
                <label htmlFor="from" className="text-white font-semibold">
                  {" "}
                  From :{" "}
                </label>
                <input
                  type="text"
                  id="from"
                  name="from"
                  placeholder="Pragun"
                  className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
                  {...formik.getFieldProps("from")}
                />
                <ErrorMessage
                  name="from"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <div className="w-full flex  flex-col sm:flex-row sm:items-center gap-2">
                <label htmlFor="to" className="text-white font-semibold">
                  {" "}
                  To :{" "}
                </label>
                <input
                  type="text"
                  id="to"
                  name="to"
                  placeholder="Tuhsar"
                  className="grow bg-[hsl(236, 33%, 92%)] rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
                  {...formik.getFieldProps("to")}
                />
                <ErrorMessage
                  name="to"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <div className="w-full flex  flex-col sm:flex-row sm:items-center gap-2 flex-wrap">
                <label htmlFor="amount" className="text-white font-semibold">
                  {" "}
                  Amount :{" "}
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="grow bg-[hsl(236, 33%, 92%)] rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
                  {...formik.getFieldProps("amount")}
                />
                <ErrorMessage
                  name="amount"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <div className="w-full flex  flex-col sm:flex-row sm:items-center gap-2">
                <label
                  htmlFor="transactionDate"
                  className="text-white font-semibold"
                >
                  {" "}
                  Transaction Date :{" "}
                </label>
                <input
                  type="datetime-local"
                  id="transactionDate"
                  name="transactionDate"
                  className="grow bg-[hsl(236, 33%, 92%)] rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
                  {...formik.getFieldProps("transactionDate")}
                />
                <ErrorMessage
                  name="transactionDate"
                  className="font-semibold text-red-700"
                  component="div"
                />
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="px-5 py-1 border border-[#3DEFE9] shadow-md shadow-[#3DEFE9] hover:cursor-pointer  rounded-md text-[#3DEFE9] mt-2  tracking-widest select-none self-center"
              >
                Submit
              </button>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default TransactionForm;
