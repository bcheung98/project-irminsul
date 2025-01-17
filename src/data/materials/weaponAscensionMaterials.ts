import { dropDates } from "helpers/materialDates";
import { objectKeys } from "helpers/utils";
import {
    WeaponAscensionMaterial,
    WeaponAscensionMaterialKeys,
} from "types/materials";

export const weaponAscensionMaterials = {
    Decarabian: {
        Decarabian1: "Tile of Decarabian's Tower",
        Decarabian2: "Debris of Decarabian's City",
        Decarabian3: "Fragment of Decarabian's Epic",
        Decarabian4: "Scattered Piece of Decarabian's Dream",
    },
    "Boreal Wolf": {
        "Boreal Wolf1": "Boreal Wolf's Milk Tooth",
        "Boreal Wolf2": "Boreal Wolf's Cracked Tooth",
        "Boreal Wolf3": "Boreal Wolf's Broken Fang",
        "Boreal Wolf4": "Boreal Wolf's Nostalgia",
    },
    "Dandelion Gladiator": {
        "Dandelion Gladiator1": "Fetters of the Dandelion Gladiator",
        "Dandelion Gladiator2": "Chains of the Dandelion Gladiator",
        "Dandelion Gladiator3": "Shackles of the Dandelion Gladiator",
        "Dandelion Gladiator4": "Dream of the Dandelion Gladiator",
    },
    Guyun: {
        Guyun1: "Luminous Sands from Guyun",
        Guyun2: "Lustrous Stone from Guyun",
        Guyun3: "Relic from Guyun",
        Guyun4: "Divine Body from Guyun",
    },
    "Mist Veiled Elixir": {
        "Mist Veiled Elixir1": "Mist Veiled Lead Elixir",
        "Mist Veiled Elixir2": "Mist Veiled Mercury Elixir",
        "Mist Veiled Elixir3": "Mist Veiled Gold Elixir",
        "Mist Veiled Elixir4": "Mist Veiled Primo Elixir",
    },
    Aerosiderite: {
        Aerosiderite1: "Grain of Aerosiderite",
        Aerosiderite2: "Piece of Aerosiderite",
        Aerosiderite3: "Bit of Aerosiderite",
        Aerosiderite4: "Chunk of Aerosiderite",
    },
    "Sea Branch": {
        "Sea Branch1": "Coral Branch of a Distant Sea",
        "Sea Branch2": "Jeweled Branch of a Distant Sea",
        "Sea Branch3": "Jade Branch of a Distant Sea",
        "Sea Branch4": "Golden Branch of a Distant Sea",
    },
    Narukami: {
        Narukami1: "Narukami's Wisdom",
        Narukami2: "Narukami's Joy",
        Narukami3: "Narukami's Affection",
        Narukami4: "Narukami's Valor",
    },
    "Oni Mask": {
        "Oni Mask1": "Mask of the Wicked Lieutenant",
        "Oni Mask2": "Mask of the Tiger's Bite",
        "Oni Mask3": "Mask of the One-Horned",
        "Oni Mask4": "Mask of the Kijin",
    },
    "Forest Dew": {
        "Forest Dew1": "Copper Talisman of the Forest Dew",
        "Forest Dew2": "Iron Talisman of the Forest Dew",
        "Forest Dew3": "Silver Talisman of the Forest Dew",
        "Forest Dew4": "Golden Talisman of the Forest Dew",
    },
    "Oasis Garden": {
        "Oasis Garden1": "Oasis Garden's Reminiscence",
        "Oasis Garden2": "Oasis Garden's Kindness",
        "Oasis Garden3": "Oasis Garden's Mourning",
        "Oasis Garden4": "Oasis Garden's Truth",
    },
    "Scorching Might": {
        "Scorching Might1": "Echo of Scorching Might",
        "Scorching Might2": "Remnant Glow of Scorching Might",
        "Scorching Might3": "Dream of Scorching Might",
        "Scorching Might4": "Olden Days of Scorching Might",
    },
    Chord: {
        "Scorching Might1": "Fragment of an Ancient Chord",
        "Scorching Might2": "Chapter of an Ancient Chord",
        "Scorching Might3": "Movement of an Ancient Chord",
        "Scorching Might4": "Echo of an Ancient Chord",
    },
    Dewdrop: {
        Dewdrop1: "Dross of Pure Sacred Dewdrop",
        Dewdrop2: "Sublimation of Pure Sacred Dewdrop",
        Dewdrop3: "Spring of Pure Sacred Dewdrop",
        Dewdrop4: "Essense of Pure Sacred Dewdrop",
    },
    "Pristine Sea": {
        "Pristine Sea1": "Broken Goblet of the Pristine Sea",
        "Pristine Sea2": "Wine Goblet of the Pristine Sea",
        "Pristine Sea3": "Silver Goblet of the Pristine Sea",
        "Pristine Sea4": "Golden Goblet of the Pristine Sea",
    },
    "Blazing Sacrificial Heart": {
        "Blazing Sacrificial Heart1": "Blazing Sacrificial Heart's Terror",
        "Blazing Sacrificial Heart2": "Blazing Sacrificial Heart's Hesitance",
        "Blazing Sacrificial Heart3": "Blazing Sacrificial Heart's Resolve",
        "Blazing Sacrificial Heart4": "Blazing Sacrificial Heart's Splendor",
    },
    "Sacred Lord": {
        "Sacred Lord1": "Delirious Decadence of the Sacred Lord",
        "Sacred Lord2": "Delirious Desolation of the Sacred Lord",
        "Sacred Lord3": "Delirious Demeanor of the Sacred Lord",
        "Sacred Lord4": "Delirious Divinity of the Sacred Lord",
    },
    "Night-Wind": {
        "Night-Wind1": "Night-Wind's Mystic Consideration",
        "Night-Wind2": "Night-Wind's Mystic Premonition",
        "Night-Wind3": "Night-Wind's Mystic Augury",
        "Night-Wind4": "Night-Wind's Mystic Revelation",
    },
};

export const weaponAscensionMaterialNames = objectKeys(
    weaponAscensionMaterials
);

export const filteredWeaponAscensionMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return objectKeys(weaponAscensionMaterials);
    } else {
        return objectKeys(weaponAscensionMaterials).filter(
            (material) =>
                !Object.keys(weaponAscensionMaterials[material]).includes(
                    "unreleased"
                )
        );
    }
};

export const formatWeaponAscensionMaterials = (
    material: WeaponAscensionMaterial
): string => {
    if (["1", "2", "3"].includes(material.slice(-1))) {
        material = material.slice(0, -1) as WeaponAscensionMaterialKeys;
    } else {
        material = material as WeaponAscensionMaterialKeys;
    }
    const mat = weaponAscensionMaterials[material];
    const index = weaponAscensionMaterialNames.indexOf(material) % 3;
    const materialName = mat[material as keyof typeof mat] || material;
    return `${materialName} ${dropDates[index]}`;
};
