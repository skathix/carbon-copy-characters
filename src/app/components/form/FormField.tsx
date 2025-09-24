// FormField.tsx
// a component that wraps a label and a Field from formik
import { Field } from "formik";
import React from "react";

// Helper function to get nested error by path

export default function FormField({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className={"d-flex flex-column"}>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} className="form-control" />
    </div>
  );
}
