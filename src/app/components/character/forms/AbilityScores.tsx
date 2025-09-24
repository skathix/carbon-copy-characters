import { useFormikContext } from "formik";
import FormField from "../../form/FormField";
import { CharacterModel } from "@/app/types/character.types";

export default function AbilityScores() {
    const { values } = useFormikContext<CharacterModel>();
    
    return (
        <>
            {Object.keys(values.abilityScores).map((key, index) => (
          <FormField
            key={index}
            label={key}
            name={`abilityScores.${key}`}
            type="number"
          />
        ))}
        </>
    )
}