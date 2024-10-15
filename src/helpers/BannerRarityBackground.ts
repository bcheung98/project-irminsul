function BannerRarityBackgrounds(rarity: string) {
    if (rarity !== undefined) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`
    }
    else {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.png)`
    }
}

export default BannerRarityBackgrounds