import { Rarity } from "types/_common";
import { PayloadCostObject } from "types/costs";
import { objectKeys, range } from "./utils";
import { characterLevel, characterSkill, weaponLevel } from "data/levelUpCosts";

export interface GetLevelUpCostsProps {
    start?: number;
    stop?: number;
    selected?: boolean;
    withXP?: boolean;
    rarity?: Rarity;
}

export function getCharacterLevelCost({
    start,
    stop,
    selected,
    withXP,
}: Required<
    Pick<GetLevelUpCostsProps, "start" | "stop" | "selected" | "withXP">
>) {
    const costs = { ...characterLevel };
    if (!withXP) {
        objectKeys(costs).forEach((material) => {
            costs[material] = costs[material]
                .map((value, index) => (index % 2 === 0 ? value : -1))
                .filter((i) => (i! -= -1));
        });
    }
    let [
        credits,
        characterXP1,
        characterXP2,
        characterXP3,
        bossMat,
        localMat,
        gemstone1,
        gemstone2,
        gemstone3,
        gemstone4,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            characterXP1,
            characterXP2,
            characterXP3,
            bossMat,
            localMat,
            gemstone1,
            gemstone2,
            gemstone3,
            gemstone4,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }
    return {
        credits: {
            Credit: credits,
        },
        characterXP: {
            characterXP1: characterXP1,
            characterXP2: characterXP2,
            characterXP3: characterXP3,
        },
        bossMat: {
            bossMat: bossMat,
        },
        localMat: {
            localMat: localMat,
        },
        gemstone: {
            gemstone1: gemstone1,
            gemstone2: gemstone2,
            gemstone3: gemstone3,
            gemstone4: gemstone4,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        },
    } as PayloadCostObject;
}

export function getCharacterSkillCost({
    start,
    stop,
    selected,
}: Required<Pick<GetLevelUpCostsProps, "start" | "stop" | "selected">>) {
    const costs = { ...characterSkill };

    let [
        credits,
        weeklyBossMat,
        crown,
        talentBook1,
        talentBook2,
        talentBook3,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            weeklyBossMat,
            crown,
            talentBook1,
            talentBook2,
            talentBook3,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }

    return {
        credits: {
            Credit: credits,
        },
        weeklyBossMat: {
            weeklyBossMat: weeklyBossMat,
        },
        crown: {
            Crown: crown,
        },
        talentBook: {
            talentBook1: talentBook1,
            talentBook2: talentBook2,
            talentBook3: talentBook3,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        },
    } as PayloadCostObject;
}

export function getWeaponLevelCost({
    start,
    stop,
    selected,
    withXP,
    rarity,
}: Required<GetLevelUpCostsProps>) {
    const costs = { ...weaponLevel(rarity) };
    if (!withXP) {
        objectKeys(costs).forEach((material) => {
            costs[material] = costs[material]
                .map((value, index) => (index % 2 === 0 ? value : -1))
                .filter((i) => (i! -= -1));
        });
    }
    let [
        credits,
        weaponXP1,
        weaponXP2,
        weaponXP3,
        weaponAscensionMat1,
        weaponAscensionMat2,
        weaponAscensionMat3,
        weaponAscensionMat4,
        eliteMat1,
        eliteMat2,
        eliteMat3,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            weaponXP1,
            weaponXP2,
            weaponXP3,
            weaponAscensionMat1,
            weaponAscensionMat2,
            weaponAscensionMat3,
            weaponAscensionMat4,
            eliteMat1,
            eliteMat2,
            eliteMat3,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }
    return {
        credits: {
            Credit: credits,
        },
        weaponXP: {
            weaponXP1: weaponXP1,
            weaponXP2: weaponXP2,
            weaponXP3: weaponXP3,
        },
        weaponAscensionMat: {
            weaponAscensionMat1: weaponAscensionMat1,
            weaponAscensionMat2: weaponAscensionMat2,
            weaponAscensionMat3: weaponAscensionMat3,
            weaponAscensionMat4: weaponAscensionMat4,
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
        },
    } as PayloadCostObject;
}

function calculateCosts<T extends { [key: string]: number[] }>(
    costs: T,
    start: number,
    stop: number
) {
    return Object.values(costs).map((arr) =>
        arr.slice(start, stop).reduce((a, c) => a + c)
    );
}
