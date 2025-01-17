import { LocalMaterial } from "types/materials";

export const localMaterials = <const>{
    Mondstadt: [
        "Calla Lily",
        "Cecilia",
        "Dandelion Seed",
        "Philanemo Mushroom",
        "Small Lamp Grass",
        "Valberry",
        "Windwheel Aster",
        "Wolfhook",
    ],
    Liyue: [
        "Cor Lapis",
        "Glaze Lily",
        "Jueyun Chili",
        "Noctilucous Jade",
        "Qingxin",
        "Silk Flower",
        "Starconch",
        "Violetgrass",
        "Clearwater Jade",
    ],
    Inazuma: [
        "Crystal Marrow",
        "Dendrobium",
        "Naku Weed",
        "Onikabuto",
        "Sakura Bloom",
        "Sea Ganoderma",
        "Amakumo Fruit",
        "Sango Pearl",
        "Fluorescent Fungus",
    ],
    Sumeru: [
        "Kalpalata Lotus",
        "Nilotpala Lotus",
        "Padisarah",
        "Rukkhashava Mushrooms",
        "Henna Berry",
        "Scarab",
        "Sand Grease Pupa",
        "Mourning Flower",
        "Trishiraite",
    ],
    Fontaine: [
        "Beryl Conch",
        "Lumidouce Bell",
        "Rainbow Rose",
        "Romaritime Flower",
        "Lumitoile",
        "Subdetection Unit",
        "Lakelight Lily",
        "Spring of the First Dewdrop",
    ],
    Natlan: [
        "Brilliant Chrysanthemum",
        "Quenepa Berry",
        "Saurian Claw Succulent",
        "Sprayfeather Gill",
        "Glowing Hornshroom",
        "Withering Purpurbloom",
    ],
};

export const localSpecialtyNames = Object.values(localMaterials).flat();

// Add any unreleased materials to this array
const unreleasedMats: LocalMaterial[] = [];

export const filteredLocalSpecialties = (showUnreleased = false) => {
    if (showUnreleased) {
        return localMaterials;
    } else {
        return Object.assign(
            {},
            ...Object.entries(localMaterials).map(([local, localMats]) => {
                return {
                    [local]: localMats.filter(
                        (material) =>
                            !unreleasedMats.some((mat) => material === mat)
                    ),
                };
            })
        ) as typeof localMaterials;
    }
};
