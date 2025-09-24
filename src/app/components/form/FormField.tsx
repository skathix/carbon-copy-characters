// FormField.tsx
// a component that wraps a label and a Field from formik
import { Field, FormikErrors } from "formik";
import React from "react";

// Helper function to get nested error by path
function getErrorByPath(
  errors: Record<string, unknown>,
  path: string
): string | undefined {
  return path.split(".").reduce((current: unknown, key: string) => {
    return current && typeof current === "object" && current !== null
      ? (current as Record<string, unknown>)[key]
      : undefined;
  }, errors) as string | undefined;
}

export default function FormField({
  label,
  name,
  errors,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
  errors: FormikErrors<Record<string, unknown>> | undefined;
}) {
  const errorMessage = errors ? getErrorByPath(errors, name) : undefined;

  return (
    <div className={"d-flex flex-column"}>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} className="form-control" />
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
    </div>
  );
}
