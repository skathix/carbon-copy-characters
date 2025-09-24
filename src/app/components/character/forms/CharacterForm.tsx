import { Form, useFormikContext } from "formik";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PrimaryCharacterInfo from "./panels/PrimaryCharacterInfo";
import SecondaryCharacterInfo from "./panels/SecondaryCharacterInfo";

export default function CharacterForm() {
  const { handleSubmit } = useFormikContext();

  return (
    <Form onSubmit={handleSubmit} className={"border"}>
      <div className={"d-flex flex-column"}>
        <div className={"d-flex gap-3 justify-content-start mb-3"}>
          <PrimaryCharacterInfo />
        </div>
        <SecondaryCharacterInfo />
        {/*
            This is the second half, 80% of the visual height of the pdf form
            it includes the following sections:
            - Attributes
            - Skills
            - Combat
            - Equipment
            - Details
            - Features
            - Other Proficiencies & Languages
            Each section should be its own component
            The Layout should reflect the pdf form as closely as possible
            From left to right, top to bottom you will have:
            - Attributes (6 fields) stacked vertically
            - Skills (a long list of skills with checkboxes and fields for each skill)
            - Combat (AC, Initiative, Speed, HP, Hit Dice, Death Saves)
            - Equipment (a large text area, with currency fields below)
            - Details (Personality Traits, Ideals, Bonds, Flaws)
            - Features (a large text area)
            - Other Proficiencies & Languages (a text area)
            */}
        {/* Outer Shell (80% Row) */}
      </div>
      <div className={"d-flex gap-3 justify-content-start p-3"}>
        <button type="submit" className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
    </Form>
  );
}
