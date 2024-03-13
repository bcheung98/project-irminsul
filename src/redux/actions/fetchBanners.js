export const fetchBanners = () => {
    const charUrl = "https://bcheung98.github.io/project-irminsul-db/characterBanners.json";
    const wepUrl = "https://bcheung98.github.io/project-irminsul-db/weaponBanners.json";
    const chronicledWishUrl = "https://bcheung98.github.io/project-irminsul-db/chronicledWish.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_CHAR_BANNERS_REQUEST" });
        fetch(charUrl)
            .then(res => res.json())
            .then(characterBanners => dispatch({ type: "GET_CHAR_BANNERS", characterBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_WEAPON_BANNERS_REQUEST" });
        fetch(wepUrl)
            .then(res => res.json())
            .then(weaponBanners => dispatch({ type: "GET_WEAPON_BANNERS", weaponBanners }))
            .catch((error) => {
                console.error(error);
            });
        dispatch({ type: "START_GETTING_CHRONICLED_WISH_REQUEST" });
        fetch(chronicledWishUrl)
            .then(res => res.json())
            .then(chronicledWish => dispatch({ type: "GET_CHRONICLED_WISH", chronicledWish }))
            .catch((error) => {
                console.error(error);
            });
    }
}