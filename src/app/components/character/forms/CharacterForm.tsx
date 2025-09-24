import { Form } from "formik";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PrimaryCharacterInfo from "./panels/PrimaryCharacterInfo";

type CharacterFormProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function CharacterForm({handleSubmit}: CharacterFormProps) {
  return (
    <Form onSubmit={handleSubmit} className={"border"}>
      <div className={"d-flex gap-3 justify-content-start mb-3"}>
        <PrimaryCharacterInfo />
      </div>
      <div className={"d-flex gap-3 justify-content-start p-3"}>
        <button type="submit" className="btn btn-sm btn-primary">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </div>
    </Form>
  );
}
