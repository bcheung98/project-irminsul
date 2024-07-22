import { TCGCharacterFilterState } from "../redux/reducers/TCGCharacterFilterReducer"
import { TCGCardData } from "../types/TCGData"

export const filterTCGCharacterCards = (characterCards: TCGCardData[], filters: TCGCharacterFilterState, searchValue: string) => {
    let cards = [...characterCards]
    if (filters.element.length > 0) {
        cards = cards.filter(card => filters.element.includes(card.element))
    }
    if (filters.weapon.length > 0) {
        cards = cards.filter(card => filters.weapon.includes(card.weapon))
    }
    if (filters.faction.length > 0) {
        cards = cards.filter(card => filters.faction.some(f => card.factions.includes(f)))
    }
    if (searchValue !== "") {
        cards = cards.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return cards
}