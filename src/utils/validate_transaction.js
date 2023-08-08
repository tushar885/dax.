import * as Yup from "yup";

export default Yup.object({
  from: Yup.string()
    .max(30, "*Must be Less than 30")
    .trim()
    .required("*Required"),
  to: Yup.string().trim().required("*Required"),
  amount: Yup.number()
    .positive("*Amount must be a positive number")
    .required("*Required"),
  transactionDate: Yup.date().required("*Required"),
});
