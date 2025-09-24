import { CharacterModel } from "@/app/types/character.types";
import { useFormikContext } from "formik";

export default function ProficiencyBonus() {
    const { values } = useFormikContext<CharacterModel>();

    {/* Proficiency Bonus Display */}
    return (
      <div className={"p-2 border-bottom"}>
        <strong>
          Proficiency Bonus: {values.proficiencies.proficiencyBonus}
        </strong>
        <small className={"d-block text-muted"}>
          (Based on total level:{" "}
          {values.character.classes.reduce(
            (sum, charClass) => sum + charClass.level,
            0
          )}
          )
        </small>
      </div>
    )
}