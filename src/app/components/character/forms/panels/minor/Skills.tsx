import { CharacterModel } from "@/app/types/character.types";
import { Field, useFormikContext } from "formik";

export default function Skills() {
  const { values } = useFormikContext<CharacterModel>();

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

  function getAbilityModifier(abilityScore: string): number {
    if (!abilityScore || isNaN(parseInt(abilityScore))) return -5;
    return Math.floor((parseInt(abilityScore) - 10) / 2);
  }

  return (
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
          <div key={index} className={"d-flex align-items-center gap-2 mb-1"}>
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
  );
}
