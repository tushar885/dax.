import React from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import validate_order from "../utils/validate_order";
import back_icon from "../../public/assests/back-arrow.svg";
import { Link } from "react-router-dom";

const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        customerName: "",
        stoneName: "",
        stoneShape: "",
        stoneSize: "",
        quantity: 0,
        shipDate: new Date().toISOString().slice(0, 10),
        status: "placed",
        comments: "",
        complete: true,
      }}
      validationSchema={validate_order}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }}
    >
      <div className="flex flex-col  border-t border-[#8af1ee] items-center max-w-[480px] gap-6 sm:gap-8 self-center w-full rounded-lg shadow-lg shadow-slate-700 p-4 py-6">
        <div className="w-full">
          <Link to={"/"}>
            <img
              src={back_icon}
              alt="back_icon"
              className="h-[26px] w-[26px] self-start"
            />
          </Link>
        </div>
        <Form className="flex flex-col justify-stretch w-full gap-5 sm:gap-7">
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="customerName" className="text-white font-semibold">
              Customer Name :{" "}
            </label>
            <Field
              id="customerName"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
              name="customerName"
              placeholder="eg. Tanuj Khandelwal"
              type="text"
            />
            <ErrorMessage
              name="customerName"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="stoneName" className="text-white font-semibold">
              Stone Name :{" "}
            </label>
            <Field
              id="stoneName"
              name="stoneName"
              placeholder="eg. Topaz"
              type="text"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <ErrorMessage
              name="stoneName"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="stoneShape" className="text-white font-semibold">
              Stone Shape :{" "}
            </label>
            <Field
              id="stoneShape"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
              name="stoneShape"
              placeholder="eg. pear, square, round..."
              type="text"
            />
            <ErrorMessage
              name="stoneShape"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="stoneSize" className="text-white font-semibold">
              Stone Size :{" "}
            </label>
            <Field
              id="stoneSize"
              name="stoneSize"
              placeholder="eg. 1ct"
              type="text"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <ErrorMessage
              name="stoneSize"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row flex-wrap">
            <label htmlFor="quantity" className="text-white font-semibold">
              Quantity :{" "}
            </label>
            <Field
              id="quantity"
              name="quantity"
              type="number"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <ErrorMessage
              name="quantity"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="shipDate" className="text-white font-semibold">
              Ship Date :{" "}
            </label>
            <Field
              id="shipDate"
              name="shipDate"
              type="date"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <ErrorMessage
              name="shipDate"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="status" className="text-white font-semibold">
              Order Status :{" "}
            </label>
            <Field
              id="status"
              name="status"
              as="select"
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            >
              <option value="placed">Placed</option>
              <option value="approved">Approved</option>
              <option value="delivered">Delivered</option>
            </Field>
            <ErrorMessage
              name="status"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex sm:items-center gap-2 ">
            <Field
              id="complete"
              name="complete"
              type="checkbox"
              className=" rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <label
              htmlFor="complete"
              className="text-white font-semibold grow select-none"
            >
              Completed{" "}
            </label>
            <ErrorMessage
              name="complete"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <div className="w-full flex flex-col sm:items-center gap-2 sm:flex-row">
            <label htmlFor="comments" className="text-white font-semibold">
              Comments :{" "}
            </label>
            <Field
              id="comments"
              name="comments"
              as="textarea"
              placeholder="comments..."
              className="grow  rounded-lg py-1 px-3 border-2 focus:outline-0 focus:border-[#3DEFE9]"
            />
            <ErrorMessage
              name="comments"
              className="font-semibold text-red-700"
              component="div"
            />
          </div>
          <button
            type="submit"
            // disabled={formik.isSubmitting}
            className="px-5 py-1 border border-[#3DEFE9] shadow-md shadow-[#3DEFE9] hover:cursor-pointer  rounded-md text-[#3DEFE9] mt-2  tracking-widest select-none self-center"
          >
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default OrderForm;
