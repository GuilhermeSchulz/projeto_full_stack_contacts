import * as yup from "yup";


export const schemaLogin = yup.object().shape({
    email: yup.string().required("Email required").email("Invalid email"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            "Its necessary to include a lowercase letter, an uppercase letter, a number and a special character."
        ),
});

export const schemaRegister = yup.object().shape({
    email: yup.string().required("Email required").email("Invalid email"),
    password: yup
        .string()
        .required("Password is required")
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            "Its necessary to include a lowercase letter, an uppercase letter, a number and a special character."
        ),
    name: yup.string().required("Please enter your name"),
    phone: yup.string().required("Please enter your phone number"),
});