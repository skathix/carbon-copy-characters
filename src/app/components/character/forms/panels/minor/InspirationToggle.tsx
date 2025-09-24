import { Field } from "formik";

export default function InspirationToggle() {
    {/* Inspiration Toggle */}
    return (
      <div className={"p-2 border-bottom"}>
        <div className={"form-check form-switch"}>
          <Field
            type="checkbox"
            role={"switch"}
            className={"form-check-input"}
            name={`proficiencies.inspiration`}
            id={`proficiencies.inspiration`}
          />
          <label
            htmlFor={`proficiencies.inspiration`}
            className={"form-check-label"}
          >
            Inspiration
          </label>
        </div>
      </div>
    )
}