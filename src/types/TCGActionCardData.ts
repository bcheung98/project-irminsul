export interface TCGActionCardData {
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