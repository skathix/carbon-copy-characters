export interface CharacterModel {
  page1: {
    topLevel: {
      name: string;
      class: string;
      level: number;
      playerName: string;
      background: string;
      race: string;
      alignment: string;
      xp: string;
    };
    abilityScores: {
      strength: string;
      dexterity: string;
      constitution: string;
      intelligence: string;
      wisdom: string;
      charisma: string;
    };
    inspiration: boolean;
    proficiencyBonus: string;
    savingThrows: {
      strength: boolean;
      dexterity: boolean;
      constitution: boolean;
      intelligence: boolean;
      wisdom: boolean;
      charisma: boolean;
    };
    skills: {
      [key: string]: {
        proficient: boolean;
        expert: boolean;
        abilityScore: string;
      };
    };
    otherProficienciesAndLanguages: string;
    combatStatistics: {
      armorClass: string;
      initiative: string;
      speed: string;
      hitPoints: {
        current: string;
        temporary: string;
        total: string;
      };
      hitDice: {
        total: string;
        type: string;
      };
      deathSaves: {
        success1: boolean;
        success2: boolean;
        success3: boolean;
        failure1: boolean;
        failure2: boolean;
        failure3: boolean;
      };
    };
    characteristics: {
      personalityTraits: string;
      ideals: string;
      bonds: string;
      flaws: string;
    };
    attacksAndSpellcasting: Array<{
      name: string;
      ability: string;
      proficient: boolean;
      damage: string;
      damageType: string;
      range: string;
      description: string;
    }>;
    featuresAndTraits: Array<{
      name: string;
      description: string;
    }>;
    equipment: {
      currency: {
        cp: number;
        sp: number;
        ep: number;
        gp: number;
        pp: number;
      };
      items: Array<{
        name: string;
        quantity: number;
        weight: number;
        description: string;
      }>;
      weapons: Array<{
        name: string;
        quantity: number;
        weight: number;
        description: string;
        damage: string;
        damageType: string;
        properties: string;
      }>;
      armor: Array<{
        name: string;
        quantity: number;
        weight: number;
        description: string;
        armorClass: string;
        stealthDisadvantage: boolean;
        strengthRequirement: string;
      }>;
      otherEquipment: Array<{
        name: string;
        quantity: number;
        weight: number;
        description: string;
      }>;
    };
  };
  page2: {
    characterDetails: {
      age: string;
      height: string;
      weight: string;
      eyes: string;
      skin: string;
      hair: string;
    };
    characterAppearance: string;
    alliesAndOrganizations: string;
    additionalFeaturesAndTraits: string;
    treasure: string;
    backstory: string;
  };
  page3: {
    spellcasting: {
      classes: Array<{
        name: string;
        level: number;
        spellcastingAbility: string;
      }>;
      spellSlots: {
        total: Array<{
          level: number;
          slots: number;
        }>;
        used: Array<{
          level: number;
          slots: number;
        }>;
      };
      spells: Array<{
        name: string;
        level: number;
        school: string;
        ritual: boolean;
        castingTime: string;
        range: string;
        components: string;
        duration: string;
        description: string;
      }>;
    };
  };
}
