import * as yup from "yup";

export default yup.object({
  customerName: yup
    .string()
    .trim()
    .max("30", "*Must be Less than 30")
    .required("*Required"),
  stoneName: yup
    .string()
    .trim()
    .max("30", "*Must be Less than 30")
    .required("*Required"),
  stoneShape: yup
    .string()
    .trim()
    .max("30", "*Must be Less than 30")
    .required("*Required"),
  stoneSize: yup
    .string()
    .trim()
    .max("30", "*Must be Less than 30")
    .required("*Required"),
  quantity: yup
    .number()
    .positive("*Quantity must be a positive number")
    .required("*Required"),
  shipDate: yup
    .date()
    .required("*Required")
    .default(() => new Date().toISOString().slice(0, 10)),
  status: yup
    .string()
    .required("*Required")
    .oneOf(["placed", "approved", "delivered"], "*Value not allowed."),
  comments: yup
    .string()
    .notRequired()
    .trim()
    .default(() => "No Comment was made at the time of Entry."),
  complete: yup.boolean().required("*Required"),
});
