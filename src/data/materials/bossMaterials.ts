import { objectKeys } from "helpers/utils";
import { BossMaterial } from "types/materials";

export const bossMaterials = <const>{
    "Basalt Pillar": {
        displayName: "Basalt Pillar",
        source: "Geo Hypostasis",
    },
    "Cleansing Heart": {
        displayName: "Cleansing Heart",
        source: "Oceanid",
    },
    "Crystalline Bloom": {
        displayName: "Crystalline Bloom",
        source: "Cryo Hypostasis",
    },
    "Everflame Seed": {
        displayName: "Everflame Seed",
        source: "Pyro Regisvine",
    },
    "Hoarfrost Core": {
        displayName: "Hoarfrost Core",
        source: "Cryo Regisvine",
    },
    "Hurricane Seed": {
        displayName: "Hurricane Seed",
        source: "Anemo Hypostasis",
    },
    "Juvenile Jade": {
        displayName: "Juvenile Jade",
        source: "Primo Geovishap",
    },
    "Lightning Prism": {
        displayName: "Lightning Prism",
        source: "Electro Hypostasis",
    },
    "Marionette Core": {
        displayName: "Marionette Core",
        source: "Maguu Kenki",
    },
    "Perpetual Heart": {
        displayName: "Perpetual Heart",
        source: "Perpetual Mechanical Array",
    },
    "Smoldering Pearl": {
        displayName: "Smoldering Pearl",
        source: "Pyro Hypostasis",
    },
    "Storm Beads": {
        displayName: "Storm Beads",
        source: "Thunder Manifestation",
    },
    "Dew of Repudiation": {
        displayName: "Dew of Repudiation",
        source: "Hydro Hypostasis",
    },
    "Riftborn Regalia": {
        displayName: "Riftborn Regalia",
        source: "Golden Wolflord",
    },
    "Dragonheir's False Fin": {
        displayName: "Dragonheir's False Fin",
        source: "Bathysmal Vishap Herd",
    },
    "Runic Fang": {
        displayName: "Runic Fang",
        source: "Ruin Serpent",
    },
    "Majestic Hooked Beak": {
        displayName: "Majestic Hooked Beak",
        source: "Jadeplume Terrorshroom",
    },
    "Thunderclap Fruitcore": {
        displayName: "Thunderclap Fruitcore",
        source: "Electro Regisvine",
    },
    "Light Guiding Tetrahedron": {
        displayName: "Light Guiding Tetrahedron",
        source: "Semi-Intransient Matrix",
    },
    "Perpetual Caliber": {
        displayName: "Perpetual Caliber",
        source: "Aeonblight Drake",
    },
    "Quelled Creeper": {
        displayName: "Quelled Creeper",
        source: "Dendro Hypostasis",
    },
    "Pseudo-Stamens": {
        displayName: "Pseudo-Stamens",
        source: "Setekh Wenut",
    },
    "Evergloom Ring": {
        displayName: "Evergloom Ring",
        source: "Iniquitous Baptist",
    },
    "Clockwork Coppelius": {
        displayName: "Artificed Spare Clockwork Component — Coppelius",
        source: "Icewind Suites: Coppelius",
    },
    "Clockwork Geppelia": {
        displayName: "Artificed Spare Clockwork Component — Coppelia",
        source: "Icewind Suites: Coppelia",
    },
    "Emperor's Resolution": {
        displayName: "Emperor's Resolution",
        source: "Emperor of Fire and Iron",
    },
    "Tubion Device": {
        displayName: '"Tourbillon Device"',
        source: "Prototype Cal. Breguet",
    },
    "Fontemer Horn": {
        displayName: "Fontemer Unihorn",
        source: "Millennial Pearl Seahorse",
    },
    "Water That Failed To Transcend": {
        displayName: "Water That Failed To Transcend",
        source: "Hydro Tulpa",
    },
    "Cloudseam Scale": {
        displayName: "Cloudseam Scale",
        source: "Solitary Suanni",
    },
    "Fragment of a Golden Melody": {
        displayName: "Fragment of a Golden Melody",
        source: "Legatus Golems",
    },
    "Mark of the Binding Blessing": {
        displayName: "Mark of the Binding Blessing",
        source: "Goldflame Qucusaur Tyrant",
    },
    "Overripe Flamegranate": {
        displayName: "Overripe Flamegranate",
        source: "Gluttonous Yumkasaur Mountain King",
    },
    "Gold-Inscribed Secret Source Core": {
        displayName: "Gold-Inscribed Secret Source Core",
        source: "Secret Source Automaton: Configuration Device",
    },
    "Ensnaring Gaze": {
        displayName: "Ensnaring Gaze",
        source: "Tenebrous Papilla",
    },
    "Talisman of the Enigmatic Land": {
        displayName: "Talisman of the Enigmatic Land",
        source: "Wayward Hermetic Spiritspeaker",
    },
    "Sparkless Statue Core": {
        unreleased: true,
        displayName: "Sparkless Statue Core",
        source: "Lava Dragon Statue",
    },
};

export const bossMatNames = objectKeys(bossMaterials);

export const filteredBossMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return bossMatNames;
    } else {
        return bossMatNames.filter(
            (material) =>
                !Object.keys(bossMaterials[material]).includes("unreleased")
        );
    }
};

export const formatBossMaterials = (material: BossMaterial) => {
    const mat = bossMaterials[material] || { displayName: "", source: "?" };
    return `${mat.displayName} (${mat.source})`;
};
