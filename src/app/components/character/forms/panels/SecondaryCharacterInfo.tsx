import React from "react";
import AbilityScores from "../AbilityScores";
import InspirationColumn from "../InspirationColumn";

export default function SecondaryCharacterInfo() {
  
  return (
    <div className={"d-flex justify-content-start"}>
      {/* Attributes */}
      <div className={"d-flex flex-column border"}>
        <AbilityScores />
      </div>
      <div className={"d-flex flex-column border"}>
        <InspirationColumn />
      </div>
    </div>
  );
}
