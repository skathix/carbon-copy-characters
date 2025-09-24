import { CharacterModel } from "@/app/types/character.types";
import { Field, useFormikContext } from "formik";

export default function SavingThrows() {
  {
    /* Saving Throws List */
  }
  const { values } = useFormikContext<CharacterModel>();
  function getSavingThrowModifier(save: string, isProficient: boolean): string {
    // Calculate saving throw modifier based on ability score and proficiency
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

  function getAbilityModifier(abilityScore: string): number {
    if (!abilityScore || isNaN(parseInt(abilityScore))) return -5;
    return Math.floor((parseInt(abilityScore) - 10) / 2);
  }

  return (
    <div className={"p-3 border-bottom"}>
      <h6>Saving Throws</h6>
      {Object.keys(values.proficiencies.savingThrows).map((save, index) => {
        const isProficient =
          values.proficiencies.savingThrows[
            save as keyof typeof values.proficiencies.savingThrows
          ];
        return (
          <div key={index} className={"d-flex align-items-center gap-2 mb-1"}>
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
            <span className={"fw-bold"}>
              {getSavingThrowModifier(save, isProficient)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
