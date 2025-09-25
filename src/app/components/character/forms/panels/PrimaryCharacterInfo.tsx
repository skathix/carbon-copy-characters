import React from "react";
import FormField from "../../../form/FormField";

export default function PrimaryCharacterInfo() {
  return (
    <>
      <div className={"d-flex flex-column align-self-center border gap-3 p-3"}>
        <FormField label={"character.name"} name={"character.name"} />
      </div>
      <div className={"d-flex flex-column border gap-3 p-3"}>
        <div className={"d-flex gap-3"}>
          <FormField
            label={"character.classes[0].name"}
            name={"character.classes[0].name"}
          />
          <FormField
            label={"character.background"}
            name={"character.background"}
          />
          <FormField
            label={"character.playerName"}
            name={"character.playerName"}
          />
        </div>
        <div className={"d-flex gap-3"}>
          <FormField label={"character.race"} name={"character.race"} />
          <FormField
            label={"character.alignment"}
            name={"character.alignment"}
          />
          <FormField label={"character.xp"} name={"character.xp"} />
        </div>
      </div>
    </>
  );
}
