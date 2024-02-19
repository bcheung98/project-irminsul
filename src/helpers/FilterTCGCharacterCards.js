export const filterTCGCharacterCards = (characterCards, filters, searchValue) => {
    let cards = [...characterCards];
    if (filters.element.length > 0) {
        cards = cards.filter(card => filters.element.includes(card.element));
    }
    if (filters.weapon.length > 0) {
        cards = cards.filter(card => filters.weapon.includes(card.weapon));
    }
    if (filters.faction.length > 0) {
        cards = cards.filter(card => filters.faction.some(f => card.factions.includes(f)));
    }
    if (searchValue !== "") {
        cards = cards.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return cards
}