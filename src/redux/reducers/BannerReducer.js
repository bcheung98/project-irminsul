const initialState = {
    characterBanners: [],
    weaponBanners: [],
    chronicledWish: [],
    requesting: false
}

const BannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_CHAR_BANNERS_REQUEST":
            return {
                ...state,
                characterBanners: [...state.characterBanners],
                requesting: true
            }
        case "GET_CHAR_BANNERS":
            return {
                ...state,
                characterBanners: action.characterBanners,
                requesting: false
            }
        case "START_GETTING_WEAPON_BANNERS_REQUEST":
            return {
                ...state,
                weaponBanners: [...state.weaponBanners],
                requesting: true
            }
        case "GET_WEAPON_BANNERS":
            return {
                ...state,
                weaponBanners: action.weaponBanners,
                requesting: false
            }
        case "START_GETTING_CHRONICLED_WISH_REQUEST":
            return {
                ...state,
                chronicledWish: [...state.chronicledWish],
                requesting: true
            }
        case "GET_CHRONICLED_WISH":
            return {
                ...state,
                chronicledWish: action.chronicledWish,
                requesting: false
            }
        default:
            return state;
    }
}

export default BannerReducer;