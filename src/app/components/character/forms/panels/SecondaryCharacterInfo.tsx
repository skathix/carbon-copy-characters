import React from "react";
import AbilityScores from "../AbilityScores";
import InspirationColumn from "../InspirationColumn";
import CombatColumn from "../CombatColumn";

export default function SecondaryCharacterInfo() {
  {
    /* Attributes */
  }
  return (
    <>
      <div className={"d-flex flex-column border"}>
        <AbilityScores />
      </div>
      <div className={"d-flex flex-column border"}>
        <InspirationColumn />
      </div>
      <div className={"d-flex flex-column border"}>
        <CombatColumn />
      </div>
    </>
  );
}
