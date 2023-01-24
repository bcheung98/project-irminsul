export const fetchCards = () => {
    const url = "https://bcheung98.github.io/project-irminsul-db/cards.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CARDS_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(cards => dispatch({ type: "GET_CARDS", cards }))
            .catch((error) => {
                console.error(error);
            });
    }
}