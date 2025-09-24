// FormField.tsx
// a component that wraps a label and a Field from formik
import { Field } from "formik";
import React from "react";

export default function FormField({
    label,
    name,
    errors,
    type = "text",
}: {
    label: string;
    name: string;
    type?: string;
    //errors is a dictionary of FormikErrors
    errors: { [key: string]: any } | undefined;
}) {
    return (
        <div className={"d-flex flex-column"}>
            <label htmlFor={name}>{label}</label>
            <Field
                type={type}
                name={name}
                id={name}
                className="form-control"
            />
            {errors && errors[name] && (
                <div className="text-danger">{errors[name]}</div>
            )}
        </div>
    );
}