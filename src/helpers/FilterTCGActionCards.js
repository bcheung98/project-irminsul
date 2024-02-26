export const filterTCGActionCards = (actionCards, filters, searchValue) => {
    let cards = [...actionCards];
    if (filters.type.length > 0) {
        cards = cards.filter(card => filters.type.includes(card.type));
    }
    if (filters.subType.length > 0) {
        cards = cards.filter(card => filters.subType.includes(card.subType));
    }
    if (searchValue !== "") {
        cards = cards.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
    return cards
}