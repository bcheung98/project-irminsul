export const CharacterAscensionStatScalings = (rarity, ascensionStat) => {

    // Default CRIT Rate and CRIT DMG scalings
    let stats = {
        "critRate": ["5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%", "5%"],
        "critDMG": ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"]
    }

    // CRIT Rate ascension
    if (ascensionStat === "CRIT Rate") {
        stats["critRate"] = ["5%", "5%", "5%", "5%", "9.8%", "9.8%", "14.6%", "14.6%", "14.6%", "14.6%", "19.4%", "19.4%", "24.2%", "24.2%"];
    }

    // CRIT DMG ascension
    if (ascensionStat === "CRIT DMG") {
        stats["critDMG"] = ["50%", "50%", "50%", "50%", "59.6%", "59.6%", "69.2%", "69.2%", "69.2%", "69.2%", "78.8%", "78.8%", "88.4%", "88.4%"];
    }

    // Healing Bonus ascension
    if (ascensionStat === "Healing Bonus") {
        stats[ascensionStat] = ["0%", "0%", "0%", "0%", "5.5%", "5.5%", "11.1%", "11.1%", "11.1%", "11.1%", "16.6%", "16.6%", "22.2%", "22.2%"];
    }

    // DEF or Physical DMG Bonus ascension
    if (["DEF", "Physical DMG Bonus"].includes(ascensionStat)) {
        stats[ascensionStat] = ["0%", "0%", "0%", "0%", "7.5%", "7.5%", "15%", "15%", "15%", "15%", "22.5%", "22.5%", "30%", "30%"];
    }

    // ATK, HP, or Elemental DMG Bonus ascension
    if (["ATK", "HP", "Pyro DMG Bonus", "Hydro DMG Bonus", "Electro DMG Bonus", "Cryo DMG Bonus", "Anemo DMG Bonus", "Geo DMG Bonus", "Dendro DMG Bonus"].includes(ascensionStat)) {
        if (rarity === 4) {
            stats[ascensionStat] = ["0%", "0%", "0%", "0%", "6%", "6%", "12%", "12%", "12%", "12%", "18%", "18%", "24%", "24%"];
        }
        if (rarity === 5) {
            stats[ascensionStat] = ["0%", "0%", "0%", "0%", "7.2%", "7.2%", "14.4%", "14.4%", "14.4%", "14.4%", "21.6%", "21.6%", "28.8%", "28.8%"];
        }
    }

    // Energy Recharge ascension
    if (ascensionStat === "Energy Recharge") {
        if (rarity === 4) {
            stats[ascensionStat] = ["0%", "0%", "0%", "0%", "6.7%", "6.7%", "13.3%", "13.3%", "13.3%", "13.3%", "20%", "20%", "26.7%", "26.7%"];
        }
        if (rarity === 5) {
            stats[ascensionStat] = ["0%", "0%", "0%", "0%", "8%", "8%", "16%", "16%", "16%", "16%", "24%", "24%", "32%", "32%"];
        }
    }

    // Elemental Mastery ascension
    if (ascensionStat === "Elemental Mastery") {
        if (rarity === 4) {
            stats[ascensionStat] = ["0", "0", "0", "0", "24", "24", "48", "48", "48", "48", "72", "72", "96", "96"];
        }
        if (rarity === 5) {
            stats[ascensionStat] = ["0", "0", "0", "0", "28.8", "28.8", "57.6", "57.6", "57.6", "57.6", "86.4", "86.4", "115.2", "115.2"];
        }
    }

    return stats;
}