import { CostArray, PayloadCostObject } from "types/costs"

export const characterLevel: CostArray = {
    mora: [0, 20000, 40000, 60000, 80000, 100000, 120000],
    bossMat: [0, 0, 2, 4, 8, 12, 20],
    localMat: [0, 3, 10, 20, 30, 45, 60],
    gemstone1: [0, 1, 0, 0, 0, 0, 0],
    gemstone2: [0, 0, 3, 6, 0, 0, 0],
    gemstone3: [0, 0, 0, 0, 3, 6, 0],
    gemstone4: [0, 0, 0, 0, 0, 0, 6],
    commonMat1: [0, 3, 15, 0, 0, 0, 0],
    commonMat2: [0, 0, 0, 12, 18, 0, 0],
    commonMat3: [0, 0, 0, 0, 0, 12, 24]
}

export const characterLevelWithXP: CostArray = {
    mora: [0, 24200, 20000, 115800, 40000, 116000, 60000, 171000, 80000, 239200, 100000, 322400, 120000, 684800],
    characterXP1: [0, 1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 2, 0, 4],
    characterXP2: [0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 2, 0, 0],
    characterXP3: [0, 6, 0, 28, 0, 29, 0, 42, 0, 59, 0, 80, 0, 171],
    bossMat: [0, 0, 0, 0, 2, 0, 4, 0, 8, 0, 12, 0, 20, 0],
    localMat: [0, 0, 3, 0, 10, 0, 20, 0, 30, 0, 45, 0, 60, 0],
    gemstone1: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    gemstone2: [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0],
    gemstone3: [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0],
    gemstone4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    commonMat1: [0, 0, 3, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    commonMat2: [0, 0, 0, 0, 0, 0, 12, 0, 18, 0, 0, 0, 0, 0],
    commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 24, 0]
}

export const getCharacterLevelCost = ([start, stop]: number[], selected: boolean): PayloadCostObject => {
    let [mora, characterXP1, characterXP2, characterXP3, bossMat, localMat, gemstone1, gemstone2, gemstone3, gemstone4, commonMat1, commonMat2, commonMat3] = [...Array(13).keys()].map(() => 0)
    if (selected) {
        [mora, characterXP1, characterXP2, characterXP3, bossMat, localMat, gemstone1, gemstone2, gemstone3, gemstone4, commonMat1, commonMat2, commonMat3] = Object.keys(characterLevelWithXP).map((material) => characterLevelWithXP[material].slice(start, stop).reduce((a, c) => a + c))
    }
    return {
        mora: mora,
        characterXP: {
            characterXP1: characterXP1,
            characterXP2: characterXP2,
            characterXP3: characterXP3,
        },
        bossMat: {
            bossMat: bossMat
        },
        localMat: {
            localMat: localMat
        },
        gemstone: {
            gemstone1: gemstone1,
            gemstone2: gemstone2,
            gemstone3: gemstone3,
            gemstone4: gemstone4
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3
        }
    }
}

export const characterTalentLevel: CostArray = {
    mora: [0, 12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000],
    weeklyBossMat: [0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    crown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    talentBook1: [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    talentBook2: [0, 0, 2, 4, 6, 9, 0, 0, 0, 0],
    talentBook3: [0, 0, 0, 0, 0, 0, 4, 6, 12, 16],
    commonMat1: [0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
    commonMat2: [0, 0, 3, 4, 6, 9, 0, 0, 0, 0],
    commonMat3: [0, 0, 0, 0, 0, 0, 4, 6, 9, 12]
}

export const getCharacterTalentCost = ([start, stop]: number[], selected: boolean): PayloadCostObject => {
    let [mora, weeklyBossMat, crown, talentBook1, talentBook2, talentBook3, commonMat1, commonMat2, commonMat3] = [...Array(9).keys()].map(() => 0)
    if (selected) {
        [mora, weeklyBossMat, crown, talentBook1, talentBook2, talentBook3, commonMat1, commonMat2, commonMat3] = Object.keys(characterTalentLevel).map((material) => characterTalentLevel[material].slice(start, stop).reduce((a, c) => a + c))
    }
    return {
        mora: mora,
        weeklyBossMat: {
            weeklyBossMat: weeklyBossMat
        },
        crown: crown,
        talentBook: {
            talentBook1: talentBook1,
            talentBook2: talentBook2,
            talentBook3: talentBook3
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3
        }
    }
}

export const weaponLevel = (rarity: number): CostArray => {
    return {
        mora: weaponCosts.mora[rarity],
        ascensionMat1: weaponCosts.ascensionMat1[rarity],
        ascensionMat2: weaponCosts.ascensionMat2[rarity],
        ascensionMat3: weaponCosts.ascensionMat3[rarity],
        ascensionMat4: weaponCosts.ascensionMat4[rarity],
        eliteMat1: weaponCosts.eliteMat1[rarity],
        eliteMat2: weaponCosts.eliteMat2[rarity],
        eliteMat3: weaponCosts.eliteMat3[rarity],
        commonMat1: weaponCosts.commonMat1[rarity],
        commonMat2: weaponCosts.commonMat2[rarity],
        commonMat3: weaponCosts.commonMat3[rarity]
    }
}

export const weaponLevelWithXP = (rarity: number): CostArray => {
    return {
        mora: weaponCostsWithXP.mora[rarity],
        weaponXP1: weaponCostsWithXP.weaponXP1[rarity],
        weaponXP2: weaponCostsWithXP.weaponXP2[rarity],
        weaponXP3: weaponCostsWithXP.weaponXP3[rarity],
        ascensionMat1: weaponCostsWithXP.ascensionMat1[rarity],
        ascensionMat2: weaponCostsWithXP.ascensionMat2[rarity],
        ascensionMat3: weaponCostsWithXP.ascensionMat3[rarity],
        ascensionMat4: weaponCostsWithXP.ascensionMat4[rarity],
        eliteMat1: weaponCostsWithXP.eliteMat1[rarity],
        eliteMat2: weaponCostsWithXP.eliteMat2[rarity],
        eliteMat3: weaponCostsWithXP.eliteMat3[rarity],
        commonMat1: weaponCostsWithXP.commonMat1[rarity],
        commonMat2: weaponCostsWithXP.commonMat2[rarity],
        commonMat3: weaponCostsWithXP.commonMat3[rarity]
    }
}

export const getWeaponLevelCost = (rarity: number, [start, stop]: number[]): PayloadCostObject => {
    const costs = weaponLevelWithXP(rarity - 1)
    const [mora, weaponXP1, weaponXP2, weaponXP3, ascensionMat1, ascensionMat2, ascensionMat3, ascensionMat4, eliteMat1, eliteMat2, eliteMat3, commonMat1, commonMat2, commonMat3] = Object.keys(costs).map((material) => costs[material].slice(start, stop).reduce((a, c) => a + c))
    return {
        mora: mora,
        weaponXP: {
            weaponXP1: weaponXP1,
            weaponXP2: weaponXP2,
            weaponXP3: weaponXP3,
        },
        ascensionMat: {
            ascensionMat1: ascensionMat1,
            ascensionMat2: ascensionMat2,
            ascensionMat3: ascensionMat3,
            ascensionMat4: ascensionMat4
        },
        eliteMat: {
            eliteMat1: eliteMat1,
            eliteMat2: eliteMat2,
            eliteMat3: eliteMat3,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        }
    }
}

const weaponCosts = {
    mora: [
        [0, 0, 5000, 5000, 10000],
        [0, 5000, 10000, 10000, 15000],
        [0, 5000, 10000, 15000, 20000, 25000, 30000],
        [0, 5000, 15000, 20000, 30000, 35000, 45000],
        [0, 10000, 20000, 30000, 45000, 55000, 65000]
    ],
    ascensionMat1: [
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 5, 0, 0, 0, 0, 0]
    ],
    ascensionMat2: [
        [0, 0, 1, 2, 0],
        [0, 0, 1, 3, 0],
        [0, 0, 2, 4, 0, 0, 0],
        [0, 0, 3, 6, 0, 0, 0],
        [0, 0, 5, 9, 0, 0, 0]
    ],
    ascensionMat3: [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 2, 4, 0],
        [0, 0, 0, 0, 3, 6, 0],
        [0, 0, 0, 0, 5, 9, 0]
    ],
    ascensionMat4: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 6]
    ],
    eliteMat1: [
        [0, 1, 4, 0, 0],
        [0, 1, 5, 0, 0],
        [0, 2, 8, 0, 0, 0, 0],
        [0, 3, 12, 0, 0, 0, 0],
        [0, 5, 18, 0, 0, 0, 0],
    ],
    eliteMat2: [
        [0, 0, 0, 2, 4],
        [0, 0, 0, 3, 5],
        [0, 0, 0, 4, 8, 0, 0],
        [0, 0, 0, 6, 12, 0, 0],
        [0, 0, 0, 9, 18, 0, 0],
    ],
    eliteMat3: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 6, 12],
        [0, 0, 0, 0, 0, 9, 18],
        [0, 0, 0, 0, 0, 14, 27]
    ],
    commonMat1: [
        [0, 1, 2, 0, 0],
        [0, 1, 4, 0, 0],
        [0, 1, 5, 0, 0, 0, 0],
        [0, 2, 8, 0, 0, 0, 0],
        [0, 3, 12, 0, 0, 0, 0]
    ],
    commonMat2: [
        [0, 0, 0, 2, 3],
        [0, 0, 0, 3, 4],
        [0, 0, 0, 4, 6, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 9, 14, 0, 0],
    ],
    commonMat3: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 4, 8],
        [0, 0, 0, 0, 0, 6, 12],
        [0, 0, 0, 0, 0, 9, 18]
    ]
}

const weaponCostsWithXP = {
    mora: [
        [0, 2440, 0, 12460, 5000, 12580, 5000, 18560, 10000, 26000],
        [0, 3640, 5000, 18700, 5000, 18860, 10000, 27840, 15000, 38980],
        [0, 5360, 5000, 27400, 10000, 27640, 15000, 40820, 20000, 57180, 25000, 77020, 30000, 163460],
        [0, 8100, 5000, 41520, 15000, 41880, 20000, 61840, 30000, 86620, 35000, 116700, 45000, 247660],
        [0, 12160, 10000, 62280, 20000, 62820, 30000, 92780, 45000, 129920, 55000, 175040, 65000, 371480],
    ],
    weaponXP1: [
        [0, 0, 0, 3, 0, 4, 0, 0, 0, 4],
        [0, 1, 0, 0, 0, 3, 0, 3, 0, 2],
        [0, 3, 0, 2, 0, 0, 0, 1, 0, 3, 0, 0, 0, 2],
        [0, 2, 0, 1, 0, 3, 0, 3, 0, 2, 0, 2, 0, 4],
        [0, 3, 0, 2, 0, 0, 0, 2, 0, 3, 0, 0, 0, 4]
    ],
    weaponXP2: [
        [0, 2, 0, 0, 0, 2, 0, 0, 0, 3],
        [0, 3, 0, 1, 0, 1, 0, 2, 0, 3],
        [0, 1, 0, 3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 3],
        [0, 0, 0, 2, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1],
        [0, 0, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 2],
    ],
    weaponXP3: [
        [0, 2, 0, 12, 0, 11, 0, 17, 0, 23],
        [0, 3, 0, 18, 0, 17, 0, 25, 0, 35],
        [0, 5, 0, 26, 0, 25, 0, 37, 0, 52, 0, 70, 0, 154],
        [0, 8, 0, 40, 0, 38, 0, 56, 0, 79, 0, 106, 0, 234],
        [0, 12, 0, 60, 0, 57, 0, 85, 0, 118, 0, 160, 0, 351]
    ],
    ascensionMat1: [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    ascensionMat2: [
        [0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 0, 9, 0, 0, 0, 0, 0, 0, 0]
    ],
    ascensionMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 9, 0, 0, 0]
    ],
    ascensionMat4: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0]
    ],
    eliteMat1: [
        [0, 0, 1, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 5, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    eliteMat2: [
        [0, 0, 0, 0, 0, 0, 2, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 12, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 0, 18, 0, 0, 0, 0, 0]
    ],
    eliteMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 27, 0]
    ],
    commonMat1: [
        [0, 0, 1, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    commonMat2: [
        [0, 0, 0, 0, 0, 0, 2, 0, 3, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 0, 14, 0, 0, 0, 0, 0]
    ],
    commonMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0]
    ]
}