export type TCGCharacterCardData = {
    name: string,
    displayName?: string,
    fullName?: string,
    element: string,
    weapon: string,
    factions: string[],
    arkhe?: string,
    hp: number,
    talents: {
        attack: {
            name: string,
            cost: string,
            description: string
        },
        skill: {
            name: string,
            cost: string,
            description: string
        },
        burst: {
            name: string,
            cost: string,
            energy: number,
            description: string
        },
        passive?: {
            name: string,
            description: string
        }
    },
    keywords: {
        tag: string,
        name: string,
        description: string
    }[],
    splash: {
        title: string,
        description: string
    },
    release: {
        version: string
    }
}

export type TCGActionCardData = {
    name: string,
    displayName?: string,
    type: string,
    subType: string,
    combatAction?: boolean,
    character?: string,
    cost: string,
    description: string,
    keywords: {
        tag: string,
        type?: string,
        name: string,
        description: string
    }[],
    splash: {
        title: string,
        description: string
    },
    release: {
        version: string
    }
}