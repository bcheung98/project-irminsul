import { connect } from "react-redux"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../helpers/MaterialImage"
import { formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"
import { CharacterCosts } from "../../types/character/CharacterCosts"

function CharacterAscensionCardMaterials(props: any) {

    let { name, element } = props.character
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials
    let costs = props.costs.find((char: CharacterCosts) => char.name === name).costs

    let costArray = Object.keys(costs).map(key => costs[key].slice(0, 5).reduce((a: number, c: number) => Number(a) + Number(c)))

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: "Wanderer's Advice", rarity: "2", img: "xp_mats/char_xp1" },
        { name: "Adventurer's Experience", rarity: "3", img: "xp_mats/char_xp2" },
        { name: "Hero's Wit", rarity: "4", img: "xp_mats/char_xp3" },
        { name: formatBossMats(bossMat), rarity: "4", img: `boss_mats/${bossMat.split(" ").join("_")}` },
        { name: localMat, rarity: "1", img: `local_specialties/${localMat.split(" ").join("_")}` },
        { name: formatGemstone(`${element}_Sliver`), rarity: "2", img: `ascension_gems/${element}_Sliver` },
        { name: formatGemstone(`${element}_Fragment`), rarity: "3", img: `ascension_gems/${element}_Fragment` },
        { name: formatGemstone(`${element}_Chunk`), rarity: "4", img: `ascension_gems/${element}_Chunk` },
        { name: formatGemstone(`${element}_Gemstone`), rarity: "5", img: `ascension_gems/${element}_Gemstone` },
        { name: formatTalents(`${talentBook}1`), rarity: "2", img: `talent_mats/${talentBook.split(" ").join("_")}1` },
        { name: formatTalents(`${talentBook}2`), rarity: "3", img: `talent_mats/${talentBook.split(" ").join("_")}2` },
        { name: formatTalents(`${talentBook}3`), rarity: "4", img: `talent_mats/${talentBook.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "1", img: `common_mats/${commonMat.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "2", img: `common_mats/${commonMat.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "3", img: `common_mats/${commonMat.split(" ").join("_")}3` },
        { name: formatWeeklyBossMats(weeklyBossMat), rarity: "5", img: `weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}` },
        { name: "Crown of Insight", rarity: "5", img: "talent_mats/Crown_of_Insight" }
    ]

    return (
        <Grid container rowSpacing={1} columnSpacing={0}>
            {
                costData.map((material, index) => (
                    costArray[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costArray[index].toLocaleString()} img={material.img} size={64} />
                ))
            }
        </Grid>
    )

}

const mapStateToProps = (state: RootState) => ({
    costs: state.ascensionPlanner.characterCosts
})

export default connect(mapStateToProps)(CharacterAscensionCardMaterials)