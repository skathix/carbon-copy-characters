import React from "react";
import AbilityScores from "../AbilityScores";
import InspirationColumn from "../InspirationColumn";
import CombatColumn from "../CombatColumn";
import PersonalityColumn from "../PersonalityColumn";

export default function SecondaryCharacterInfo() {
  {
    /* Attributes */
  }
  return (
    <div className={"d-flex gap-3"}>
      <div
        className={"d-flex flex-column border"}
        style={{ flex: "1 1 16.67%" }}
      >
        <AbilityScores />
      </div>
      <div
        className={"d-flex flex-column border"}
        style={{ flex: "1 1 16.67%" }}
      >
        <InspirationColumn />
      </div>
      <div
        className={"d-flex flex-column border"}
        style={{ flex: "1 1 33.33%" }}
      >
        <CombatColumn />
      </div>
      <div
        className={"d-flex flex-column border"}
        style={{ flex: "1 1 33.33%" }}
      >
        <PersonalityColumn />
      </div>
    </div>
  );
}
