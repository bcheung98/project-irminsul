export interface CharacterCosts {
    name: string,
    costs: {
        mora: number[],
        char_xp1: number[],
        char_xp2: number[],
        char_xp3: number[],
        bossMat: number[],
        localMat: number[],
        gemstone1: number[],
        gemstone2: number[],
        gemstone3: number[],
        gemstone4: number[],
        talent1: number[],
        talent2: number[],
        talent3: number[],
        common1: number[],
        common2: number[],
        common3: number[],
        weeklyBossMat: number[],
        crown: number[]
    }
}