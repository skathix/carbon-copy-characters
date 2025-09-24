import { CharacterModel } from "@/app/types/character.types";
import { Field, useFormikContext } from "formik";
import React from "react";
import InspirationToggle from "./panels/minor/InspirationToggle";
import ProficiencyBonus from "./panels/minor/ProficiencyBonus";
import SavingThrows from "./panels/minor/SavingThrows";
import Skills from "./panels/minor/Skills";

export default function InspirationColumn() {
  return (
    <>
      {/* Inspiration, Proficiency Bonus, Skills, Saving Throws */}
      <InspirationToggle />
      <ProficiencyBonus />
      <SavingThrows />
      {/* Skills List */}
      <Skills />
    </>
  );
}
