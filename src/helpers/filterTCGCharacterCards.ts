import { TCGCharacterFilterState } from "../redux/reducers/TCGCharacterFilterReducer"
import { TCGCardData } from "../types/tcg/TCGData"

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
    switch (filters.sortBy) {
        case "name":
            cards = cards.sort((a, b) => a.name.localeCompare(b.name))
            break
        case "element":
            cards = cards.sort((a, b) => a.element.localeCompare(b.element) || a.name.localeCompare(b.name))
            break
        case "weapon":
            cards = cards.sort((a, b) => a.weapon.localeCompare(b.weapon) || a.name.localeCompare(b.name))
            break
        case "energy":
            cards = cards.sort((a: any, b: any) => b.talents.burst.cost.split(" ")[1].slice(0, -1) > a.talents.burst.cost.split(" ")[1].slice(0, -1) || a.name.localeCompare(b.name))
            break
        default:
            break
    }
    if (filters.sortDirection === "asc") {
        return cards
    }
    else {
        return cards.reverse()
    }
}