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

    // Don't ask why I'm sorting twice here. 
    // I honestly don't know why but this is the only way I could keep the cards alphabetically sorted from A-Z.
    // Without the second sort, the cards are sorted Z-A.
    // Maybe I'm just a doofus who doesn't know how array.sort() actually works. 
    cards.sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1);
    cards.sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1);

    return cards
}