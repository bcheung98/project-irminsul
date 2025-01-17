import { TCGActionFilterState } from "reducers/tcgActionFilterReducer";
import { TCGActionCard } from "types/tcg";

export function filterTCGActionCards(
    actionCards: TCGActionCard[],
    filters: TCGActionFilterState,
    searchValue: string
) {
    let cards = [...actionCards];
    if (filters.type.length > 0) {
        cards = cards.filter((card) => filters.type.includes(card.type));
    }
    if (filters.subType.length > 0) {
        cards = cards.filter((card) => filters.subType.includes(card.subType));
    }
    if (searchValue !== "") {
        cards = cards.filter((card) =>
            card.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }
    switch (filters.sortBy) {
        case "name":
            cards = cards.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "group":
            cards = cards.sort(
                (a, b) =>
                    a.subType.localeCompare(b.subType) ||
                    a.name.localeCompare(b.name)
            );
            break;
        default:
            break;
    }
    if (filters.sortDirection === "asc") {
        return cards;
    } else {
        return cards.reverse();
    }
}
