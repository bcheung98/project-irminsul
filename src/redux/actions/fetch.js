// https://bcheung98.github.io/project-irminsul-db/characters.json
const charactersURL = "https://bcheung98.github.io/project-irminsul-db/characters.json";

// https://bcheung98.github.io/project-irminsul-db/weapons.json
const weaponsURL = "https://bcheung98.github.io/project-irminsul-db/weapons.json";

// https://bcheung98.github.io/project-irminsul-db/cards.json
const cardsURL = "https://bcheung98.github.io/project-irminsul-db/cards.json";

// https://bcheung98.github.io/project-irminsul-db/artifacts.json
const artifactsURL = "https://bcheung98.github.io/project-irminsul-db/artifacts.json";

const characterBannerURL = "https://bcheung98.github.io/project-irminsul-db/characterBanners.json";
const weaponBannerURL = "https://bcheung98.github.io/project-irminsul-db/weaponBanners.json";
const chronicledWishURL = "https://bcheung98.github.io/project-irminsul-db/chronicledWish.json";

export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHARS_REQUEST" });
        fetch(charactersURL)
            .then(res => res.json())
            .then(characters => dispatch({ type: "GET_CHARS", characters }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchWeapons = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_WEAPONS_REQUEST" });
        fetch(weaponsURL)
            .then(res => res.json())
            .then(weapons => dispatch({ type: "GET_WEAPONS", weapons }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchCards = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CARDS_REQUEST" });
        fetch(cardsURL)
            .then(res => res.json())
            .then(cards => dispatch({ type: "GET_CARDS", cards }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchArtifacts = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ARTIFACTS_REQUEST" });
        fetch(artifactsURL)
            .then(res => res.json())
            .then(artifacts => dispatch({ type: "GET_ARTIFACTS", artifacts }))
            .catch((error) => {
                console.error(error);
            });
    }
}

export const fetchBanners = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHAR_BANNERS_REQUEST" });
        fetch(characterBannerURL)
            .then(res => res.json())
            .then(characterBanners => dispatch({ type: "GET_CHAR_BANNERS", characterBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_WEAPON_BANNERS_REQUEST" });
        fetch(weaponBannerURL)
            .then(res => res.json())
            .then(weaponBanners => dispatch({ type: "GET_WEAPON_BANNERS", weaponBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_CHRONICLED_WISH_REQUEST" });
        fetch(chronicledWishURL)
            .then(res => res.json())
            .then(chronicledWish => dispatch({ type: "GET_CHRONICLED_WISH", chronicledWish }))
            .catch((error) => {
                console.error(error);
            });
    }
}