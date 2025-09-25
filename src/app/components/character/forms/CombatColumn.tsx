import { Field } from "formik";
import FormField from "../../form/FormField";

export default function CombatColumn() {
  return (
    <div className={"d-flex flex-column border"}>
      <div className={"p-2 border-bottom"}>
        <div
          className={"d-flex justify-content-between gap-3 align-items-center"}
        >
          <div className={"d-flex flex-column border p-1"}>
            <FormField label={"Armor Class"} name={"combat.armorClass"} />
          </div>
          <div className={"d-flex flex-column border p-1"}>
            {/*To-Do: Calculate initiative from dexterity*/}
            <FormField label={"Initiative"} name={"combat.initiative"} />
          </div>
          <div className={"d-flex flex-column border p-1"}>
            <FormField label={"Speed"} name={"combat.speed"} />
          </div>
        </div>
        <div className={"d-flex flex-column mt-3 border p-2"}>
          <div className={"d-flex justify-content-start mb-2"}>
            <div
              className={
                "d-flex flex-column justify-content-start align-self-center fs-6"
              }
            >
              <label>Max HP</label>
            </div>
            <div className={"d-flex flex-column flex-fill px-3"}>
              <Field
                className={"form-control"}
                name={"combat.hitPoints.total"}
              />
            </div>
          </div>
          <div className={"d-flex justify-content-start"}>
            <div className={"d-flex flex-column flex-fill px-3"}>
              <Field
                className={"form-control"}
                name={"combat.hitPoints.current"}
              />
            </div>
          </div>
          <div className={"d-flex justify-content-center"}>
            <label>Current Hit Points</label>
          </div>
        </div>
        <div className={"d-flex border align-items-center p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              className={"form-control"}
              name={"combat.hitPoints.temporary"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Temporary Hit Points</label>
            </div>
          </div>
        </div>
      </div>
      <div className={"d-flex justify-content-around align-items-center mt-2"}>
        <div className={"d-flex flex-column flex-fill p-3 border"}>
          <div className={"d-flex"}>
            <label className={"align-self-center px-2"}>Total</label>
            <Field className={"form-control"} name={"combat.hitDice.total"} />
          </div>
          <div className={"d-flex"}>
            <Field
              as={"textarea"}
              className={"form-control"}
              name={"combat.hitPoints.type"}
            />
          </div>
          <div className={"d-flex justify-content-center"}>
            <label>Hit Dice</label>
          </div>
        </div>
        <div className={"d-flex flex-column"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
              <div className={"d-flex"}>
                <div className={"d-flex flex-column"}>
                  <label className={"px-2"}>Successes</label>
                </div>
                <div className={"d-flex gap-1 flex-fill"}>
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.success1"}
                />
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.success2"}
                />
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.success3"}
                />
                </div>
              </div>
              <div className={"d-flex gap-1 py-1"}>
                <div className={"d-flex flex-column"}>
                  <label className={"px-3"}>Failures</label>
                </div>
                <div className={"d-flex gap-1"}>
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.failure1"}
                />
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.failure2"}
                />
                <Field
                  as={"checkbox"}
                  className={"form-control"}
                  name={"combat.deathSaves.failure3"}
                />
                </div>
              </div>
            <div className={"d-flex justify-content-center"}>
              <label>Death Saves</label>
            </div>
          </div>
        </div>
      </div>
      {/* Add the Attacks & Spellcasting Block
        Should be a panel that starts with 3 rows, 3 inputs each, {Name, Attack Bonus, Damage/Type}
        After that panel there should be a text area
        3 rows group should be 1/3 of the panel height, text area should be 2/3 of the panel height
        "weapons": [
      {
        "name": "",
        "quantity": 1,
        "weight": 0,
        "description": "",
        "damage": "",
        "damageType": "",
        "properties": ""
      }
    ]

    Header - Name | Attack Bonus | Damage/Type
    Row 1 - 
       Input {equipment.weapons[0].name} 
       Input {calculateAttackBonus(equipment.weapons[0])} 
       Input {equipment.weapons[0].damage + " " + equipment.weapons[0].damageType} }
    Row 2 -
        Input {equipment.weapons[1].name}
        Input {calculateAttackBonus(equipment.weapons[1])}
        Input {equipment.weapons[1].damage + " " + equipment.weapons[1].damageType} }
    Row 3 -
        Input {equipment.weapons[2].name}
        Input {calculateAttackBonus(equipment.weapons[2])}
        Input {equipment.weapons[2].damage + " " + equipment.weapons[2].damageType} }
      */}
      <div className={"d-flex justify-content-around align-items-center mt-2"}>
        <div className={"d-flex flex-column flex-fill p-3 border"}>
          <div className={"d-flex justify-content-around align-items-center gap-3 p-2"}>
            <div className={"d-flex flex-column gap-1"}>
              <div className={"d-flex"}>
                <label>Name</label>
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].name"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].name"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].name"}
                />
              </div>
            </div>
            <div className={"d-flex flex-column gap-1"}>
              <div className={"d-flex"}>
                <label>Attack Bonus</label>
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damage"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damage"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damage"}
                />
              </div>
            </div>
            <div className={"d-flex flex-column gap-1"}>
              <div className={"d-flex"}>
                <label>Damage/Type</label>
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damageType"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damageType"}
                />
              </div>
              <div className={"d-flex"}>
                <Field
                  as={"input"}
                  className={"form-control"}
                  name={"equipment.weapons[0].damageType"}
                />
              </div>
            </div>
          </div>
          <div className={"d-flex justify-content-around align-items-center gap-3 p-2"}>
            <Field as={"textarea"} className={"form-control"} name={"combat.spellcasting"} rows={5}/>
          </div>
          <div className={"d-flex justify-content-center"}>
            <label>Attacks & Spellcasting</label>
          </div>
        </div>
      </div>
    </div>
  );
}
