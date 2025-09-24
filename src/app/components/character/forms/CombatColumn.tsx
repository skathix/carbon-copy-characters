import FormField from "../../form/FormField";

export default function CombatColumn() {
  return (
    <div className={"p-2 border-bottom"}>
      <div className={"d-flex justify-content-between align-items-center"}>
        <div className={"d-flex flex-column"}>
          <FormField label={"Armor Class"} name={"combat.armorClass"} />
        </div>
        <div className={"d-flex flex-column"}>
          {/*To-Do: Calculate initiative from dexterity*/}
          <FormField label={"Initiative"} name={"combat.initiative"} />
        </div>
        <div className={"d-flex flex-column"}>
          <FormField label={"Speed"} name={"combat.speed"} />
        </div>
      </div>
      <div className={"d-flex justify-content-between align-items-center mt-2"}>
        <div className={"d-flex flex-column"}>
          <FormField label={"Hit Points"} name={"combat.hitPoints.current"} />
        </div>
        <div className={"d-flex flex-column"}>
          <FormField
            label={"Temporary Hit Points"}
            name={"combat.hitPoints.temporary"}
          />
        </div>
        <div className={"d-flex flex-column"}>
          <FormField
            label={"Total Hit Points"}
            name={"combat.hitPoints.total"}
          />
        </div>
      </div>
      <div className={"d-flex justify-content-between align-items-center mt-2"}>
        <div className={"d-flex flex-column"}></div>
          <FormField label={"Hit Dice"} name={"combat.hitDice"} />
        </div>
        <div className={"d-flex flex-column"}>
          <FormField label={"Death Saves"} name={"combat.deathSaves"} />
        </div>
      </div>
  );
}
