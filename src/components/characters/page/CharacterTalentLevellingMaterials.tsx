// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats, formatTalents, formatWeeklyBossMats } from "../../../helpers/TooltipText"

function CharacterTalentLevellingMaterials(props: any) {

    let { values } = props
    let { commonMat, talentBook, weeklyBossMat } = props.materials
    let start = values[0]
    let stop = values[1]

    let costs = Materials.map((material, index) => (Materials[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
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
                    costs[index] !== "0" &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costs[index]} img={material.img} />
                ))
            }
        </Grid>
    )

}

export default CharacterTalentLevellingMaterials

const Materials = [
    // Level [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    [0, 12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000], // Mora
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Talent Book
    [0, 0, 2, 4, 6, 9, 0, 0, 0, 0], // T2 Talent Book
    [0, 0, 0, 0, 0, 0, 4, 6, 12, 16], // T3 Talent Book
    [0, 6, 0, 0, 0, 0, 0, 0, 0, 0], // T1 Common Material
    [0, 0, 3, 4, 6, 9, 0, 0, 0, 0], // T2 Common Material
    [0, 0, 0, 0, 0, 0, 4, 6, 9, 12], // T3 Common Material
    [0, 0, 0, 0, 0, 0, 1, 1, 2, 2], // Weekly Boss Material
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Crown
]