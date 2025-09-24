import { Form, useFormikContext, Field } from "formik";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PrimaryCharacterInfo from "./panels/PrimaryCharacterInfo";
import FormField from "../../form/FormField";
import { CharacterModel } from "@/app/types/character.types";

export default function CharacterForm() {
  const { values, handleSubmit } = useFormikContext<CharacterModel>();

  function getAbilityModifier(abilityScore: string): number {
    if (!abilityScore || isNaN(parseInt(abilityScore))) return -5;
    return Math.floor((parseInt(abilityScore) - 10) / 2);
  }

  function getSavingThrowModifier(save: string, isProficient: boolean): string {
    // Calculate saving throw modifier based on ability score and proficiency
    console.log("Calculating saving throw for:", save, "Proficient:", isProficient, "Proficiency Bonus:", values.proficiencies.proficiencyBonus);
    const abilityScore =
      values.abilityScores[
        save as keyof typeof values.abilityScores
      ];
    let modifier = getAbilityModifier(abilityScore);
    if (isProficient) {
        modifier += values.proficiencies.proficiencyBonus;
    }
    return (modifier >= 0 ? "+" : "") + modifier.toString();
  }

  function getSkillModifier(skill: string): string {
    // Calculate skill modifier based on ability score, proficiency, and expertise
    const skillData =
      values.proficiencies.skills[
        skill as keyof typeof values.proficiencies.skills
      ];
    const abilityScore =
      values.abilityScores[
        skillData.abilityScore as keyof typeof values.abilityScores
      ];

    // Get base ability modifier
    let modifier = getAbilityModifier(abilityScore);
    // Add proficiency bonus if proficient
    if (skillData.proficient) {
      modifier += values.proficiencies.proficiencyBonus;
    }

    // Double proficiency bonus if expert (expertise)
    if (skillData.expert) {
      modifier += values.proficiencies.proficiencyBonus;
    }

    return (modifier >= 0 ? "+" : "") + modifier.toString();
  }

  return (
    <Form onSubmit={handleSubmit} className={"border"}>
      <div className={"d-flex flex-column"}>
        <div className={"d-flex gap-3 justify-content-start mb-3"}>
          <PrimaryCharacterInfo />
        </div>
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
        <div className={"d-flex justify-content-start"}>
          {/* Attributes */}
          <div className={"d-flex flex-column border"}>
            {Object.keys(values.abilityScores).map((key, index) => (
              <FormField
                key={index}
                label={key}
                name={`abilityScores.${key}`}
                type="number"
              />
            ))}
          </div>
          <div className={"d-flex flex-column border"}>
          {/* Inspiration, Proficiency Bonus, Skills, Saving Throws */}
            {/* Inspiration Toggle */}
            <div className={"p-2 border-bottom"}>
              <div className={"form-check form-switch"}>
                <Field
                    type="checkbox"
                    role={"switch"}
                    className={"form-check-input"}
                    name={`proficiencies.inspiration`}
                    id={`proficiencies.inspiration`}
                />
                <label htmlFor={`proficiencies.inspiration`} className={"form-check-label"}>
                  Inspiration
                </label>
              </div>
            </div>
            {/* Proficiency Bonus Display */}
            <div className={"p-2 border-bottom"}>
              <strong>Proficiency Bonus: {values.proficiencies.proficiencyBonus}</strong>
              <small className={"d-block text-muted"}>
                (Based on total level:{" "}
                {values.character.classes.reduce(
                  (sum, charClass) => sum + charClass.level,
                  0
                )}
                )
              </small>
            </div>
            {/*
            Saving Throws List
            */}
            <div className={"p-3 border-bottom"}>
              <h6>Saving Throws</h6>
                {Object.keys(values.proficiencies.savingThrows).map((save, index) => {
                  const isProficient =
                      values.proficiencies.savingThrows[
                        save as keyof typeof values.proficiencies.savingThrows
                      ];
                  return (
                    <div
                        key={index}
                        className={"d-flex align-items-center gap-2 mb-1"}
                    >
                        <Field
                            type="checkbox"
                            name={`proficiencies.savingThrows.${save}`}
                            id={`proficiencies.savingThrows.${save}`}
                        />
                        <label
                            className={"flex-grow-1"}
                            htmlFor={`proficiencies.savingThrows.${save}`}
                        >
                            {save.charAt(0).toUpperCase() + save.slice(1)}
                        </label>
                        <span className={"fw-bold"}>{getSavingThrowModifier(save, isProficient)}</span>
                    </div>
                  );
                })}
            </div>
            {/* Skills List */}
            <div className={"p-3"}>
              <h6>Skills</h6>
              {/* Add Headers to the Skills List for proficiency and expertise, just a P and E */}
              <div className={"d-flex justify-content-start gap-2 px-1"}>
                <div className={"text-center"}>P</div>
                <div className={"text-center"}>E</div>
              </div>
              {Object.keys(values.proficiencies.skills).map((skill, index) => {
                const skillData =
                  values.proficiencies.skills[
                    skill as keyof typeof values.proficiencies.skills
                  ];
                return (
                  <div
                    key={index}
                    className={"d-flex align-items-center gap-2 mb-1"}
                  >
                    <Field
                      type="checkbox"
                      name={`proficiencies.skills.${skill}.proficient`}
                      id={`proficiencies.skills.${skill}.proficient`}
                    />
                    <Field
                      type="checkbox"
                      name={`proficiencies.skills.${skill}.expert`}
                      id={`proficiencies.skills.${skill}.expert`}
                      disabled={!skillData.proficient}
                      title="Expertise (double proficiency)"
                    />
                    <label
                      className={"flex-grow-1"}
                      htmlFor={`proficiencies.skills.${skill}.proficient`}
                    >
                      {skill.charAt(0).toUpperCase() + skill.slice(1)} (
                      {skillData.abilityScore.substring(0, 3).toUpperCase()})
                    </label>
                    <span className={"fw-bold"}>{getSkillModifier(skill)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={"d-flex gap-3 justify-content-start p-3"}>
          <button type="submit" className="btn btn-sm btn-primary">
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
      </div>
    </Form>
  );
}
