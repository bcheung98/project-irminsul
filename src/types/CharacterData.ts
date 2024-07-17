export type CharacterData = {
    id: number,
    name: string,
    fullName?: string,
    title: string,
    rarity: number,
    element: string,
    weapon: string,
    talents: {
        attack: {
            name: string,
            description: string,
            scaling: string[][],
        },
        skill: {
            name: string,
            description: string,
            scaling: string[][],
            splash: string
        },
        burst: {
            name: string,
            description: string,
            scaling: string[][],
            splash: string
        },
        a1passive: {
            name: string,
            description: string
        },
        a4passive: {
            name: string,
            description: string
        },
        utilpassive: {
            name: string,
            description: string
        }
    },
    constellation: {
        name: string,
        c1: {
            name: string,
            description: string
        },
        c2: {
            name: string,
            description: string
        },
        c3: {
            name: string,
            description: string
        },
        c4: {
            name: string,
            description: string
        },
        c5: {
            name: string,
            description: string
        },
        c6: {
            name: string,
            description: string
        }
    },
    stats: {
        ascensionStat: string,
        hp: number[],
        atk: number[],
        def: number[]
    },
    materials: {
        talentBook: string,
        bossMat: string,
        localMat: string,
        commonMat: string,
        weeklyBossMat: string
    },
    description: string,
    birthday: string,
    gender: string,
    nation: string,
    outfits: [
        {
            name: string,
            displayName?: string,
            rarity: number,
            description: string
        }
    ],
    voiceActors: {
        en: string,
        jp: string
    },
    release: {
        date: string,
        version: string
    }
}