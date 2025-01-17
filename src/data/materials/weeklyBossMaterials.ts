import { objectKeys } from "helpers/utils";
import { WeeklyBossMaterial } from "types/materials";

export const weeklyBossMaterials = <const>{
    Stormterror: ["Dvalin's Claw", "Dvalin's Plume", "Dvalin's Sigh"],
    "Lupus Boreas": [
        "Ring of Boreas",
        "Spirit Locket of Boreas",
        "Tail of Boreas",
    ],
    Childe: [
        "Shadow of the Warrior",
        "Shard of a Foul Legacy",
        "Tusk of Monoceros Caeli",
    ],
    Azhdaha: ["Bloodjade Branch", "Dragon Lord's Crown", "Gilded Scale"],
    "La Signora": ["Ashen Heart", "Hellfire Butterfly", "Molten Moment"],
    "Narukami no Mikoto": [
        "Mudra of the Malefic General",
        "Tears of the Calamitous God",
        "The Meaning of Aeons",
    ],
    "Shouki no Kami": ["Daka's Bell", "Mirror of Mushin", "Puppet Strings"],
    "Guardian of Apep's Oasis": [
        "Everamber",
        "Primordial Greenbloom",
        "Worldspan Fern",
    ],
    "All-Devouring Narwhal": [
        "Lightless Eye of the Maelstrom",
        "Lightless Mass",
        "Lightless Silk String",
    ],
    "The Knave": ["Fading Candle", "Silken Feather", "Denial and Judgment"],
    "Lord of Eroded Primal Fire": [
        "Eroded Horn",
        "Eroded Sunfire",
        "Eroded Scale-Feather",
    ],
};

export const weeklyBossNames = objectKeys(weeklyBossMaterials);

// Add any unreleased materials to this array
const unreleasedMats: WeeklyBossMaterial[] = [];

export const filteredWeeklyBossMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return weeklyBossMaterials;
    } else {
        return Object.assign(
            {},
            ...Object.entries(weeklyBossMaterials).map(([boss, bossMats]) => {
                return {
                    [boss]: bossMats.filter(
                        (material) =>
                            !unreleasedMats.some((mat) => material === mat)
                    ),
                };
            })
        ) as typeof weeklyBossMaterials;
    }
};

export const weeklyBossMatNames = weeklyBossNames
    .map((boss) => weeklyBossMaterials[boss])
    .flat();

export const formatWeeklyBossMaterials = (material: WeeklyBossMaterial) => {
    let bossName = "";
    weeklyBossNames.forEach((boss) => {
        if ([...weeklyBossMaterials[boss]].includes(material)) {
            bossName = ` (${boss})`;
        }
    });
    return `${material}${bossName}`;
};
