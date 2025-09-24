export interface AbilityScores {
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
}

export interface SavingThrows {
  strength: boolean;
  dexterity: boolean;
  constitution: boolean;
  intelligence: boolean;
  wisdom: boolean;
  charisma: boolean;
}

export interface Skill {
  proficient: boolean;
  expert: boolean;
  abilityScore: string;
}

export interface Skills {
  acrobatics: Skill;
  animalHandling: Skill;
  arcana: Skill;
  athletics: Skill;
  deception: Skill;
  history: Skill;
  insight: Skill;
  intimidation: Skill;
  investigation: Skill;
  medicine: Skill;
  nature: Skill;
  perception: Skill;
  performance: Skill;
  persuasion: Skill;
  religion: Skill;
  sleightOfHand: Skill;
  stealth: Skill;
  survival: Skill;
}

export interface Proficiencies {
  proficiencyBonus: number;
  inspiration: boolean;
  savingThrows: SavingThrows;
  skills: Skills;
  otherProficienciesAndLanguages: string;
}

export interface HitPoints {
  current: string;
  temporary: string;
  total: string;
}

export interface HitDice {
  total: string;
  type: string;
}

export interface DeathSaves {
  success1: boolean;
  success2: boolean;
  success3: boolean;
  failure1: boolean;
  failure2: boolean;
  failure3: boolean;
}

export interface Attack {
  name: string;
  ability: string;
  proficient: boolean;
  damage: string;
  damageType: string;
  range: string;
  description: string;
}

export interface Combat {
  armorClass: string;
  initiative: string;
  speed: string;
  hitPoints: HitPoints;
  hitDice: HitDice;
  deathSaves: DeathSaves;
  attacks: Attack[];
}

export interface SpellcastingClass {
  name: string;
  level: number;
  spellcastingAbility: string;
}

export interface SpellSlot {
  level: number;
  slots: number;
}

export interface SpellSlots {
  total: SpellSlot[];
  used: SpellSlot[];
}

export interface Spell {
  name: string;
  level: number;
  school: string;
  ritual: boolean;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
}

export interface Spellcasting {
  classes: SpellcastingClass[];
  spellSlots: SpellSlots;
  spells: Spell[];
}

export interface FeatureAndTrait {
  name: string;
  description: string;
}

export interface Features {
  featuresAndTraits: FeatureAndTrait[];
  additionalFeaturesAndTraits: string;
}

export interface Currency {
  cp: number;
  sp: number;
  ep: number;
  gp: number;
  pp: number;
}

export interface Item {
  name: string;
  quantity: number;
  weight: number;
  description: string;
}

export interface Weapon extends Item {
  damage: string;
  damageType: string;
  properties: string;
}

export interface Armor extends Item {
  armorClass: string;
  stealthDisadvantage: boolean;
  strengthRequirement: string;
}

export interface Equipment {
  currency: Currency;
  items: Item[];
  weapons: Weapon[];
  armor: Armor[];
  otherEquipment: Item[];
  treasure: string;
}

export interface PhysicalDescription {
  age: string;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  appearance: string;
}

export interface Personality {
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
}

export interface CharacterClass {
  name: string;
  subclass: string;
  level: number;
}

export interface Character {
  physicalDescription: PhysicalDescription;
  personality: Personality;
  backstory: string;
  alliesAndOrganizations: string;
  name: string;
  playerName: string;
  classes: CharacterClass[];
  background: string;
  race: string;
  alignment: string;
  xp: string;
}

export interface CharacterModel {
  abilityScores: AbilityScores;
  proficiencies: Proficiencies;
  combat: Combat;
  spellcasting: Spellcasting;
  features: Features;
  equipment: Equipment;
  character: Character;
}
