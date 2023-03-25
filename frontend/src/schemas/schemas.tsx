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
    phone: yup.string().required("Please enter your phone number").max(11),
});
export const schemaUpdate = yup.object().shape({
    email: yup.string().notRequired().email("Invalid email"),
    password: yup
        .string()
        .notRequired()
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            "Its necessary to include a lowercase letter, an uppercase letter, a number and a special character."
        ),
    name: yup.string().notRequired(),
    phone: yup.string().notRequired(),
})

export const schemaContact = yup.object().shape({
    email: yup.string().required("Email required").email("Invalid email"),
    name: yup.string().required("Please enter a name"),
    phone: yup.string().required("Please enter a phone number").max(11),
    avatar: yup.string().notRequired(),
})

export const schemaUpdateContact = yup.object().shape({
    email: yup.string().notRequired().email("Invalid email"),
    name: yup.string().notRequired(),
    phone: yup.string().notRequired().max(11),
    avatar: yup.string().notRequired(),
})