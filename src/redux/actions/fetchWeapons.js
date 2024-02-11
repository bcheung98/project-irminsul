export const fetchWeapons = () => {
    // https://bcheung98.github.io/project-irminsul-db/weapons.json
    const url = "https://bcheung98.github.io/project-irminsul-db/weapons.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_WEAPONS_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(weapons => dispatch({ type: "GET_WEAPONS", weapons }))
            .catch((error) => {
                console.error(error);
            });
    }
}