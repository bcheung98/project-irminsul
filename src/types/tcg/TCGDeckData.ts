import { TCGCardData } from "./TCGData"

export interface TCGDeckData {
    name: string,
    characterCards: TCGCardData[],
    actionCards: TCGCardData[]
}