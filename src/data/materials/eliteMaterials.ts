import { objectKeys } from "helpers/utils";
import { EliteMaterialKeys } from "types/materials";

export const eliteMaterials = <const>{
    Horn: {
        Horn0: "Hilichurl Horn",
        Horn1: "Heavy Horn",
        Horn2: "Black Bronze Horn",
        Horn3: "Black Crystal Horn",
    },
    "Ley Line Branch": {
        "Ley Line Branch0": "Abyssal Ley Line Branch",
        "Ley Line Branch1": "Dead Ley Line Branch",
        "Ley Line Branch2": "Dead Ley Line Leaves",
        "Ley Line Branch3": "Ley Line Sprout",
    },
    "Chaos Part": {
        "Chaos Part0": "Ruin Machine Core",
        "Chaos Part1": "Chaos Device",
        "Chaos Part2": "Chaos Circuit",
        "Chaos Part3": "Chaos Core",
    },
    "Mist Grass": {
        "Mist Grass0": "Cicin Mage Mist Grass",
        "Mist Grass1": "Mist Grass Pollen",
        "Mist Grass2": "Mist Grass",
        "Mist Grass3": "Mist Grass Wick",
    },
    "Sacrificial Knife": {
        "Sacrificial Knife0": "Pyro Agent Knife",
        "Sacrificial Knife1": " Hunter's Sacrificial Knife",
        "Sacrificial Knife2": "Agent's Sacrificial Knife",
        "Sacrificial Knife3": "Inspector's Sacrificial Knife",
    },
    "Bone Shard": {
        "Bone Shard0": "Vishap Bone Shard",
        "Bone Shard1": "Fragile Bone Shard",
        "Bone Shard2": "Sturdy Bone Shard",
        "Bone Shard3": "Fossilized Bone Shard",
    },
    "Sentinel Chaos Part": {
        "Sentinel Chaos Part0": "Ruin Sentinel Core",
        "Sentinel Chaos Part1": "Chaos Gear",
        "Sentinel Chaos Part2": "Chaos Axis",
        "Sentinel Chaos Part3": "Chaos Oculus",
    },
    "Mirror Maiden Prism": {
        "Mirror Maiden Prism1": "Dismal Prism",
        "Mirror Maiden Prism2": "Crystal Prism",
        "Mirror Maiden Prism3": "Polarizing Prism",
    },
    "Riftwolf Claw": {
        "Riftwolf Claw1": "Concealed Claw",
        "Riftwolf Claw2": "Concealed Unguis",
        "Riftwolf Claw3": "Concealed Talon",
    },
    Statuette: {
        Statuette0: "Abyssal Statuette",
        Statuette1: "Gloomy Statuette",
        Statuette2: "Dark Statuette",
        Statuette3: "Deathly Statuette",
    },
    "Fungal Nucleus": {
        "Fungal Nucleus1": "Inactivated Fungal Nucleus",
        "Fungal Nucleus2": "Dormant Fungal Nucleus",
        "Fungal Nucleus3": "Robust Fungal Nucleus",
    },
    "Drake Chaos Part": {
        "Drake Chaos Part0": "Ruin Drake Core",
        "Drake Chaos Part1": "Chaos Storage",
        "Drake Chaos Part2": "Chaos Module",
        "Drake Chaos Part3": "Chaos Bolt",
    },
    "Primal Construct Prism": {
        "Primal Construct Prism1": "Damaged Prism",
        "Primal Construct Prism2": "Turbid Prism",
        "Primal Construct Prism3": "Radiant Prism",
    },
    Shell: {
        Shell0: "Consecrated Beast Shell",
        Shell1: "Desiccated Shell",
        Shell2: "Sturdy Shell",
        Shell3: "Marked Shell",
    },
    Flower: {
        Flower0: "Hilichurl Flower",
        Flower1: "A Flower Yet to Bloom",
        Flower2: "Treasured Flower",
        Flower3: "Wanderer's Blooming Flower",
    },
    "Tainted Water": {
        "Tainted Water0": "Phantasm Tainted Water",
        "Tainted Water1": "Drop of Tainted Water",
        "Tainted Water2": "Scoop of Tainted Water",
        "Tainted Water3": "Newborn Tainted Hydro Phantasm",
    },
    "Rift Core": {
        "Rift Core0": "Breacher Primus Core",
        "Rift Core1": "Rift Core",
        "Rift Core2": "Foreign Synapse",
        "Rift Core3": "Alien Life Core",
    },
    Watch: {
        Watch0: "Fatui Operative Watch",
        Watch1: "Old Operative's Pocket Watch",
        Watch2: "Operative's Standard Pocket Watch",
        Watch3: "Operative's Constancy",
    },
    Fin: {
        Fin0: "Xuanwen Beast Fin",
        Fin1: "Feathery Fin",
        Fin2: "Lunar Fin",
        Fin3: "Chasmlight Fin",
    },
    Hilt: {
        Hilt0: "Praetorian Golem Hilt",
        Hilt1: "Ruined Hilt",
        Hilt2: "Splintered Hilt",
        Hilt3: "Still-Smoldering Hilt",
    },
    Will: {
        Will0: "Wayob Manifestation Will",
        Will1: "Shard of a Shattered Will",
        Will2: "Locus of a Clear Will",
        Will3: "Sigil of a Striding Will",
    },
    "Ignited Core": {
        "Ignited Core0": "Avatar Lava Core",
        "Ignited Core1": "Ignited Stone",
        "Ignited Core2": "Ignited Seed of Life",
        "Ignited Core3": "Ignited Seeing Eye",
    },
    "Secret Source": {
        "Secret Source0": "Secret Source Automaton Core",
        "Secret Source1": "Axis of the Secret Source",
        "Secret Source2": "Sheath of the Secret Source",
        "Secret Source3": "Heart of the Secret Source",
    },
    Leafcoil: {
        Leafcoil0: "Mimiflora Leafcoil",
        Leafcoil1: "Refractive Bud",
        Leafcoil2: "Bewildering Broadleaf",
        Leafcoil3: "Illusory Leafcoil",
    },
};

export const filteredEliteMaterials = (showUnreleased = false) => {
    if (showUnreleased) {
        return objectKeys(eliteMaterials);
    } else {
        return objectKeys(eliteMaterials).filter(
            (material) =>
                !Object.keys(eliteMaterials[material]).includes("unreleased")
        );
    }
};

export const formatEliteMaterials = (material: EliteMaterialKeys): string => {
    const mat = eliteMaterials[material];
    return mat[`${material}0` as keyof typeof mat] || material;
};
