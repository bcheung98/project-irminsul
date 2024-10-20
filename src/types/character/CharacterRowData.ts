export interface CharacterRowData {
    id: number,
    name: string,
    rarity: number,
    element: string,
    weapon: string,
    ascensionStat: string,
    nation: string,
    gender: string,
    release: {
        date: string,
        version: string
    }
}