// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../../helpers/MaterialImage"
import { formatCommonMats, formatBossMats, formatGemstone } from "../../../helpers/TooltipText"

function CharacterAscensionMaterials(props: any) {

    let { element, values } = props
    let { bossMat, localMat, commonMat } = props.materials
    let start = values[0]
    let stop = values[1]

    let costs = Materials.map((material, index) => (Materials[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: formatBossMats(bossMat), rarity: "4", img: `boss_mats/${bossMat.split(" ").join("_")}` },
        { name: localMat, rarity: "1", img: `local_specialties/${localMat.split(" ").join("_")}` },
        { name: formatGemstone(`${element}_Sliver`), rarity: "2", img: `ascension_gems/${element}_Sliver` },
        { name: formatGemstone(`${element}_Fragment`), rarity: "3", img: `ascension_gems/${element}_Fragment` },
        { name: formatGemstone(`${element}_Chunk`), rarity: "4", img: `ascension_gems/${element}_Chunk` },
        { name: formatGemstone(`${element}_Gemstone`), rarity: "5", img: `ascension_gems/${element}_Gemstone` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "1", img: `common_mats/${commonMat.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "2", img: `common_mats/${commonMat.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "3", img: `common_mats/${commonMat.split(" ").join("_")}3` }
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

export default CharacterAscensionMaterials

const Materials = [
    // Level ["1", "20", "40", "50", "60", "70", "80", "90"]
    [0, 20000, 40000, 60000, 80000, 100000, 120000], // Mora
    [0, 0, 2, 4, 8, 12, 20], // Boss Material
    [0, 3, 10, 20, 30, 45, 60], // Local Specialty
    [0, 1, 0, 0, 0, 0, 0], // T1 Gemstone
    [0, 0, 3, 6, 0, 0, 0], // T2 Gemstone
    [0, 0, 0, 0, 3, 6, 0], // T3 Gemstone
    [0, 0, 0, 0, 0, 0, 6], // T4 Gemstone
    [0, 3, 15, 0, 0, 0, 0], // T1 Common Material
    [0, 0, 0, 12, 18, 0, 0], // T2 Common Material
    [0, 0, 0, 0, 0, 12, 24] // T3 Common Material
]