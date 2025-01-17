import { objectKeys } from "helpers/utils";
import { CommonMaterialKeys } from "types/materials";

export const commonMaterials = {
    Arrow: {
        Arrow0: "Hilichurl Arrow",
        Arrow1: "Firm Arrowhead",
        Arrow2: "Sharp Arrowhead",
        Arrow3: "Weathered Arrowhead",
    },
    "Fatui Insignia": {
        "Fatui Insignia1": "Recruit's Insignia",
        "Fatui Insignia2": "Sergeant's Insignia",
        "Fatui Insignia3": "Lieutenant's Insignia",
    },
    Mask: {
        Mask0: "Hilichurl Mask",
        Mask1: "Damaged Mask",
        Mask2: "Stained Mask",
        Mask3: "Ominous Mask",
    },
    Nectar: {
        Nectar: "Whopperflower Nectar",
        Nectar2: "Shimmering Nectar",
        Nectar3: "Energy Nectar",
    },
    Scroll: {
        Scroll0: "Samachurl Scroll",
        Scroll1: "Divining Scroll",
        Scroll2: "Sealed Scroll",
        Scroll3: "Forbidden Curse Scroll",
    },
    Slime: {
        Slime1: "Slime Condensate",
        Slime2: "Slime Secreations",
        Slime3: "Slime Concentrate",
    },
    "Treasure Hoarder Insignia": {
        "Treasure Hoarder Insignia1": "Treasure Hoarder Insignia",
        "Treasure Hoarder Insignia2": "Silver Hoarder Insignia",
        "Treasure Hoarder Insignia3": "Golden Raven Insignia",
    },
    Handguard: {
        Handguard0: "Nobushi Handguard",
        Handguard1: "Old Handguard",
        Handguard2: "Kageuchi Handguard",
        Handguard3: "Famed Handguard",
    },
    Specter: {
        Specter0: "Specter Core",
        Specter1: "Spectral Husk",
        Specter2: "Spectral Heart",
        Specter3: "Spectral Nucleus",
    },
    Fungi: {
        Fungi0: "Fungal Spore Powder",
        Fungi1: "Fungal Spores",
        Fungi2: "Luminescent Pollen",
        Fungi3: "Crystalline Cyst Dust",
    },
    Headband: {
        Headband0: "Eremite Headband",
        Headband1: "Faded Red Satin",
        Headband2: "Trimmed Red Silk",
        Headband3: "Rich Red Brocade",
    },
    Aberrant: {
        Aberrant0: "Aberrant Pearl",
        Aberrant1: "Transoceanic Pearl",
        Aberrant2: "Transoceanic Chunk",
        Aberrant3: "Xenochromatic Crystal",
    },
    Gear: {
        Gear0: "Clockwork Meka Gear",
        Gear1: "Meshing Gear",
        Gear2: "Mechanical Spur Gear",
        Gear3: "Artificed Dynamic Gear",
    },
    Fang: {
        Fang0: "Saurian Fang",
        Fang1: "Juvenile Fang",
        Fang2: "Seasoned Fang",
        Fang3: "Tyrant's Fang",
    },
    Whistle: {
        Whistle0: "Tribal Warrior Whistle",
        Whistle1: "Sentry's Wooden Whistle",
        Whistle2: "Warrior's Metal Whistle",
        Whistle3: "Saurian-Crowned Warrior's Golden Whistle",
    },
};

export const filteredCommonMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return objectKeys(commonMaterials);
    } else {
        return objectKeys(commonMaterials).filter(
            (material) =>
                !Object.keys(commonMaterials[material]).includes("unreleased")
        );
    }
};

export const formatCommonMaterials = (material: CommonMaterialKeys): string => {
    const mat = commonMaterials[material];
    return mat[`${material}0` as keyof typeof mat] || material;
};
