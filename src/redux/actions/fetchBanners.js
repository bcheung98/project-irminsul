export const fetchBanners = () => {
    const charUrl = "https://bcheung98.github.io/project-irminsul-db/characterBanners.json";
    const wepUrl = "https://bcheung98.github.io/project-irminsul-db/weaponBanners.json";
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
    }
}