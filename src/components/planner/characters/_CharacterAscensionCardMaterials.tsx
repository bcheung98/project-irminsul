import { useSelector } from "react-redux"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"
import { reduceCosts } from "../../../redux/reducers/AscensionPlannerReducer"

// Type imports
import { RootState } from "redux/store"
import { CharacterCost, CharacterCostObject } from "types/costs"

function CharacterAscensionCardMaterials({ character }: { character: CharacterCostObject }) {

    const characterCosts = useSelector((state: RootState) => state.ascensionPlanner.characterCosts)

    const { name, element } = character
    const { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = character.materials
    const costs = characterCosts.find((char: CharacterCostObject) => char.name === name)?.costs as CharacterCost

    let costArray: number[] = []
    Object.entries(reduceCosts(costs)).forEach(([key, value]) => {
        if (key === "mora" || key === "crown") {
            costArray.push(value as number)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                costArray.push(v as number)
            })
        }
    })

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: "Wanderer's Advice", rarity: "2", img: "xp_mats/char_xp1" },
        { name: "Adventurer's Experience", rarity: "3", img: "xp_mats/char_xp2" },
        { name: "Hero's Wit", rarity: "4", img: "xp_mats/char_xp3" },
        { name: formatBossMats(bossMat), rarity: "4", img: `boss_mats/${bossMat.split(" ").join("_")}` },
        { name: formatWeeklyBossMats(weeklyBossMat), rarity: "5", img: `weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}` },
        { name: "Crown of Insight", rarity: "5", img: "talent_mats/Crown_of_Insight" },
        { name: formatGemstone(`${element}_Sliver`), rarity: "2", img: `ascension_gems/${element}_Sliver` },
        { name: formatGemstone(`${element}_Fragment`), rarity: "3", img: `ascension_gems/${element}_Fragment` },
        { name: formatGemstone(`${element}_Chunk`), rarity: "4", img: `ascension_gems/${element}_Chunk` },
        { name: formatGemstone(`${element}_Gemstone`), rarity: "5", img: `ascension_gems/${element}_Gemstone` },
        { name: localMat, rarity: "1", img: `local_specialties/${localMat.split(" ").join("_")}` },
        { name: formatTalents(`${talentBook}1`), rarity: "2", img: `talent_mats/${talentBook.split(" ").join("_")}1` },
        { name: formatTalents(`${talentBook}2`), rarity: "3", img: `talent_mats/${talentBook.split(" ").join("_")}2` },
        { name: formatTalents(`${talentBook}3`), rarity: "4", img: `talent_mats/${talentBook.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "1", img: `common_mats/${commonMat.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "2", img: `common_mats/${commonMat.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "3", img: `common_mats/${commonMat.split(" ").join("_")}3` }
    ]

    return (
        <Grid container rowSpacing={1} columnSpacing={0} sx={{ my: "15px" }}>
            {
                costData.map((material, index) =>
                    costArray[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costArray[index].toLocaleString()} img={material.img} size={64} />
                )
            }
        </Grid>
    )

}

export default CharacterAscensionCardMaterials