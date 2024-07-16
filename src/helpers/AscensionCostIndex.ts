export const SetCharacterCostsLevel = (start: number, stop: number, selected: boolean) => {

    let materialArray = [
        // Level ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"]
        [0, 24200, 20000, 115800, 40000, 116000, 60000, 171000, 80000, 239200, 100000, 322400, 120000, 684800], // Mora
        [0, 1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 2, 0, 4], // T1 Character EXP Material
        [0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 2, 0, 0], // T2 Character EXP Material
        [0, 6, 0, 28, 0, 29, 0, 42, 0, 59, 0, 80, 0, 171], // T3 Character EXP Material
        [0, 0, 0, 0, 2, 0, 4, 0, 8, 0, 12, 0, 20, 0], // Boss Material
        [0, 0, 3, 0, 10, 0, 20, 0, 30, 0, 45, 0, 60, 0], // Local Specialty
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Gemstone
        [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0], // T2 Gemstone
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0], // T3 Gemstone
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0], // T4 Gemstone
        [0, 0, 3, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
        [0, 0, 0, 0, 0, 0, 12, 0, 18, 0, 0, 0, 0, 0], // T2 Commmon Material
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 24, 0] // T3 Common Material
    ]

    if (selected) {
        let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)));
        return {
            mora: costArray[0],
            char_xp1: costArray[1],
            char_xp2: costArray[2],
            char_xp3: costArray[3],
            bossMat: costArray[4],
            localMat: costArray[5],
            gemstone1: costArray[6],
            gemstone2: costArray[7],
            gemstone3: costArray[8],
            gemstone4: costArray[9],
            common1: costArray[10],
            common2: costArray[11],
            common3: costArray[12],
        }
    }
    else {
        return {
            mora: 0,
            char_xp1: 0,
            char_xp2: 0,
            char_xp3: 0,
            bossMat: 0,
            localMat: 0,
            gemstone1: 0,
            gemstone2: 0,
            gemstone3: 0,
            gemstone4: 0,
            common1: 0,
            common2: 0,
            common3: 0,
        }
    }

}

export const SetCharacterCostsSkill = (start: number, stop: number, selected: boolean) => {

    let materialArray = [
        // Level [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        [0, 12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000], // Mora
        [0, 3, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Talent Book
        [0, 0, 2, 4, 6, 9, 0, 0, 0, 0], // T2 Talent Book
        [0, 0, 0, 0, 0, 0, 4, 6, 12, 16], // T3 Talent Book
        [0, 6, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
        [0, 0, 3, 4, 6, 9, 0, 0, 0, 0], // T2 Common Material
        [0, 0, 0, 0, 0, 0, 4, 6, 9, 12], // T3 Common Material
        [0, 0, 0, 0, 0, 0, 1, 1, 2, 2], // Weekly Boss Material
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Crown
    ]

    if (selected) {
        let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)));
        return {
            mora: costArray[0],
            talent1: costArray[1],
            talent2: costArray[2],
            talent3: costArray[3],
            common1: costArray[4],
            common2: costArray[5],
            common3: costArray[6],
            weeklyBossMat: costArray[7],
            crown: costArray[8]
        }
    }
    else {
        return {
            mora: 0,
            talent1: 0,
            talent2: 0,
            talent3: 0,
            common1: 0,
            common2: 0,
            common3: 0,
            weeklyBossMat: 0,
            crown: 0
        }
    }

}

export const SetWeaponCostsLevel = (start: number, stop: number, rarity: number) => {
    let materialArray: [number[], number[], number[], number[], number[], number[], number[], number[], number[], number[], number[], number[], number[], number[]] | [number[], number[], number[], number[], number[], number[], number[], number[], number[]]

    if (rarity === 5) {
        materialArray = [
            // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80, 80+, 90] 
            [0, 12160, 10000, 62280, 20000, 62820, 30000, 92780, 45000, 129920, 55000, 175040, 65000, 371480], // Mora
            [0, 3, 0, 2, 0, 0, 0, 2, 0, 3, 0, 0, 0, 4], // T1 Weapon EXP Material
            [0, 0, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 2], // T2 Weapon EXP Material
            [0, 12, 0, 60, 0, 57, 0, 85, 0, 118, 0, 160, 0, 351], // T3 Weapon Exp Material
            [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Ascension Material
            [0, 0, 0, 0, 5, 0, 9, 0, 0, 0, 0, 0, 0, 0], // T2 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 9, 0, 0, 0], // T3 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0], // T4 Ascension Material
            [0, 0, 5, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Elite Material
            [0, 0, 0, 0, 0, 0, 9, 0, 18, 0, 0, 0, 0, 0], // T2 Elite Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 27, 0], // T3 Elite Material
            [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
            [0, 0, 0, 0, 0, 0, 9, 0, 14, 0, 0, 0, 0, 0], // T2 Common Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0] // T3 Common Material
        ]
    }
    else if (rarity === 4) {
        materialArray = [
            // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80, 80+, 90] 
            [0, 8100, 5000, 41520, 15000, 41880, 20000, 61840, 30000, 86620, 35000, 116700, 45000, 247660], // Mora
            [0, 2, 0, 1, 0, 3, 0, 3, 0, 2, 0, 2, 0, 4], // T1 Weapon EXP Material
            [0, 0, 0, 2, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1], // T2 Weapon EXP Material
            [0, 8, 0, 40, 0, 38, 0, 56, 0, 79, 0, 106, 0, 234], // T3 Weapon EXP Material
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Ascension Material
            [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0], // T2 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0], // T3 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0], // T4 Ascension Material
            [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Elite Material
            [0, 0, 0, 0, 0, 0, 6, 0, 12, 0, 0, 0, 0, 0], // T2 Elite Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0], // T3 Elite Material
            [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
            [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0], // T2 Common Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0] // T3 Common Material
        ]
    }
    else if (rarity === 3) {
        materialArray = [
            // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80, 80+, 90] 
            [0, 5360, 5000, 27400, 10000, 27640, 15000, 40820, 20000, 57180, 25000, 77020, 30000, 163460], // Mora
            [0, 3, 0, 2, 0, 0, 0, 1, 0, 3, 0, 0, 0, 2], // T1 Weapon EXP Material
            [0, 1, 0, 3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 3], // T2 Weapon EXP Material
            [0, 5, 0, 26, 0, 25, 0, 37, 0, 52, 0, 70, 0, 154], // T3 Weapon EXP Material
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Ascension Material
            [0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0], // T2 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0], // T3 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0], // T4 Ascension Material
            [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Elite Material
            [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0], // T2 Elite Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0], // T3 Elite Material
            [0, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
            [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0], // T2 Common Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0] // T3 Common Material
        ]
    }
    else if (rarity === 2) {
        materialArray = [
            // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70]
            [0, 3640, 5000, 18700, 5000, 18860, 10000, 27840, 15000, 38980], // Mora
            [0, 1, 0, 0, 0, 3, 0, 3, 0, 2], // T1 Weapon EXP Material
            [0, 3, 0, 1, 0, 1, 0, 2, 0, 3], // T2 Weapon EXP Material
            [0, 3, 0, 18, 0, 17, 0, 25, 0, 35], // T3 Weapon EXP Material
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // T1 Ascension Material
            [0, 0, 0, 0, 1, 0, 3, 0, 0, 0], // T2 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // T3 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T4 Ascension Material
            [0, 0, 1, 0, 5, 0, 0, 0, 0, 0], // T1 Elite Material
            [0, 0, 0, 0, 0, 0, 3, 0, 5, 0], // T2 Elite Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T3 Elite Material
            [0, 0, 1, 0, 4, 0, 0, 0, 0, 0], // T1 Common Material
            [0, 0, 0, 0, 0, 0, 3, 0, 4, 0], // T2 Common Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // T3 Common Material
        ]
    }
    else {
        materialArray = [
            // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70]
            [0, 2440, 0, 12460, 5000, 12580, 5000, 18560, 10000, 26000], // Mora
            [0, 0, 0, 3, 0, 4, 0, 0, 0, 4], // T1 Weapon EXP Material
            [0, 2, 0, 0, 0, 2, 0, 0, 0, 3], // T2 Weapon EXP Material
            [0, 2, 0, 12, 0, 11, 0, 17, 0, 23], // T3 Weapon EXP Material
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // T1 Ascension Material
            [0, 0, 0, 0, 1, 0, 2, 0, 0, 0], // T2 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0], // T3 Ascension Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T4 Ascension Material
            [0, 0, 1, 0, 4, 0, 0, 0, 0, 0], // T1 Elite Material
            [0, 0, 0, 0, 0, 0, 2, 0, 4, 0], // T2 Elite Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // T3 Elite Material
            [0, 0, 1, 0, 2, 0, 0, 0, 0, 0], // T1 Common Material
            [0, 0, 0, 0, 0, 0, 2, 0, 3, 0], // T2 Common Material
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // T3 Common Material
        ]
    }

    let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)))

    return {
        mora: costArray[0],
        wep_xp1: costArray[1],
        wep_xp2: costArray[2],
        wep_xp3: costArray[3],
        ascension1: costArray[4],
        ascension2: costArray[5],
        ascension3: costArray[6],
        ascension4: costArray[7],
        elite1: costArray[8],
        elite2: costArray[9],
        elite3: costArray[10],
        common1: costArray[11],
        common2: costArray[12],
        common3: costArray[13],
    }


}