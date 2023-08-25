import * as Yup from "yup";

export const formConfig = Yup.object({
        relationship:Yup.string(),
        age :Yup.number().positive().integer().typeError("age must be a number").required("required"),
        occation :Yup.string(),
        budget :Yup.number().typeError("budget must be a number").required("required")
})

