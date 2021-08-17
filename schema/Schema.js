import * as yup from "yup";

export const loginIntialValues = { email: "", password: "" };

export const registerIntialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const addressFormIntialValues = {
  address: "",
  landmark: "",
};

export const addressFormValidationSchema = yup.object().shape({
  address: yup.string().required("Required"),
  landmark: yup.string(),
});

export const jobDetailValidationSchema = yup.object().shape({
  address: yup.object().shape({
    id: yup.number().required("Required"),
    address: yup.string().required("Required"),
    landmark: yup.string(),
    city: yup.string().required("Required"),
  }),
  description: yup.string().required("Required"),
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export const registerValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .length(11, "Please provide a valid phone number"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const schemas = {
  jobDetailValidationSchema,
  loginValidationSchema,
  loginIntialValues,
  registerIntialValues,
  registerValidationSchema,
  addressFormIntialValues,
  addressFormValidationSchema,
};

export default schemas;
