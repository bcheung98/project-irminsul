export const characterXPMaterials = [
    {
        id: "characterXP_0",
        category: "characterXP",
        tag: "CharacterXP1",
        name: "Wanderer's Advice",
        displayName: "Wanderer's Advice",
        rarity: 2,
        release: {
            version: "1.0",
        },
    },
    {
        id: "characterXP_1",
        category: "characterXP",
        tag: "CharacterXP2",
        name: "Adventurer's Experience",
        displayName: "Adventurer's Experience",
        rarity: 3,
        release: {
            version: "1.0",
        },
    },
    {
        id: "characterXP_2",
        category: "characterXP",
        tag: "CharacterXP3",
        name: "Hero's Wit",
        displayName: "Hero's Wit",
        rarity: 4,
        release: {
            version: "1.0",
        },
    },
] as const;

export const weaponXPMaterials = [
    {
        id: "weaponXP_0",
        category: "weaponXP",
        tag: "WeaponXP1",
        name: "Enhancement Ore",
        displayName: "Enhancement Ore",
        rarity: 1,
        release: {
            version: "1.0",
        },
    },
    {
        id: "weaponXP_1",
        category: "weaponXP",
        tag: "WeaponXP2",
        name: "Fine Enhancement Ore",
        displayName: "Fine Enhancement Ore",
        rarity: 2,
        release: {
            version: "1.0",
        },
    },
    {
        id: "weaponXP_2",
        category: "weaponXP",
        tag: "WeaponXP3",
        name: "Mystic Enhancement Ore",
        displayName: "Mystic Enhancement Ore",
        rarity: 3,
        release: {
            version: "1.0",
        },
    },
] as const;

export const characterXPMatNames = characterXPMaterials.map((mat) => mat.tag);
export const weaponXPMatNames = weaponXPMaterials.map((mat) => mat.tag);

export function getCharacterXPMaterial({
    id,
    tag,
}: {
    id?: string;
    tag: string;
}) {
    return characterXPMaterials.find((mat) => mat.id === id || mat.tag === tag);
}

export function getWeaponXPMaterial({ id, tag }: { id?: string; tag: string }) {
    return weaponXPMaterials.find((mat) => mat.id === id || mat.tag === tag);
}
