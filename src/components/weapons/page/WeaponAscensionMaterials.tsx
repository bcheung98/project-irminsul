// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../../helpers/MaterialImage"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../../helpers/TooltipText"

function WeaponAscensionMaterials(props: any) {

    let { rarity, values } = props
    let { ascensionMat, eliteMat, commonMat } = props.materials
    let start = values[0]
    let stop = values[1]

    let costs = Materials[rarity as keyof typeof Materials].map((material, index) => (Materials[rarity as keyof typeof Materials][index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: formatWeaponAscMats(`${ascensionMat}1`), rarity: "2", img: `weapon_ascension_mats/${ascensionMat.split(" ").join("_")}1` },
        { name: formatWeaponAscMats(`${ascensionMat}2`), rarity: "3", img: `weapon_ascension_mats/${ascensionMat.split(" ").join("_")}2` },
        { name: formatWeaponAscMats(`${ascensionMat}3`), rarity: "4", img: `weapon_ascension_mats/${ascensionMat.split(" ").join("_")}3` },
        { name: formatWeaponAscMats(`${ascensionMat}4`), rarity: "5", img: `weapon_ascension_mats/${ascensionMat.split(" ").join("_")}4` },
        { name: formatEliteMats(`${eliteMat}1`), rarity: "2", img: `elite_mats/${eliteMat.split(" ").join("_")}1` },
        { name: formatEliteMats(`${eliteMat}2`), rarity: "3", img: `elite_mats/${eliteMat.split(" ").join("_")}2` },
        { name: formatEliteMats(`${eliteMat}3`), rarity: "4", img: `elite_mats/${eliteMat.split(" ").join("_")}3` },
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

export default WeaponAscensionMaterials

const Materials = {
    "5": [
        // Level [1, 20, 40, 50, 60, 70, 80, 90] 
        [0, 10000, 20000, 30000, 45000, 55000, 65000], // Mora
        [0, 5, 0, 0, 0, 0, 0], // T1 Ascension Material
        [0, 0, 5, 9, 0, 0, 0], // T2 Ascension Material
        [0, 0, 0, 0, 5, 9, 0], // T3 Ascension Material
        [0, 0, 0, 0, 0, 0, 6], // T4 Ascension Material
        [0, 5, 18, 0, 0, 0, 0], // T1 Elite Material
        [0, 0, 0, 9, 18, 0, 0], // T2 Elite Material
        [0, 0, 0, 0, 0, 14, 27], // T3 Elite Material
        [0, 3, 12, 0, 0, 0, 0], // T1 Common Material
        [0, 0, 0, 9, 14, 0, 0], // T2 Common Material
        [0, 0, 0, 0, 0, 9, 18] // T3 Common Material
    ],
    "4": [
        // Level [1, 20, 40, 50, 60, 70, 80, 90] 
        [0, 5000, 15000, 20000, 30000, 35000, 45000], // Mora
        [0, 3, 0, 0, 0, 0, 0], // T1 Ascension Material
        [0, 0, 3, 6, 0, 0, 0], // T2 Ascension Material
        [0, 0, 0, 0, 3, 6, 0], // T3 Ascension Material
        [0, 0, 0, 0, 0, 0, 4], // T4 Ascension Material
        [0, 3, 12, 0, 0, 0, 0], // T1 Elite Material
        [0, 0, 0, 6, 12, 0, 0], // T2 Elite Material
        [0, 0, 0, 0, 0, 9, 18], // T3 Elite Material
        [0, 2, 8, 0, 0, 0, 0], // T1 Common Material
        [0, 0, 0, 6, 9, 0, 0], // T2 Common Material
        [0, 0, 0, 0, 0, 6, 12] // T13 Common Material
    ],
    "3": [
        // Level [1, 20, 40, 50, 60, 70, 80, 90] 
        [0, 5000, 10000, 15000, 20000, 25000, 30000], // Mora
        [0, 2, 0, 0, 0, 0, 0], // T1 Ascension Material
        [0, 0, 2, 4, 0, 0, 0], // T2 Ascension Material
        [0, 0, 0, 0, 2, 4, 0], // T3 Ascension Material
        [0, 0, 0, 0, 0, 0, 3], // T4 Ascension Material
        [0, 2, 8, 0, 0, 0, 0], // T1 Elite Material
        [0, 0, 0, 4, 8, 0, 0], // T2 Elite Material
        [0, 0, 0, 0, 0, 6, 12], // T3 Elite Material
        [0, 1, 5, 0, 0, 0, 0], // T1 Common Material
        [0, 0, 0, 4, 6, 0, 0], // T2 Common Material
        [0, 0, 0, 0, 0, 4, 8] // T3 Common Material
    ],
    "2": [
        // Level [1, 20, 40, 50, 60, 70] 
        [0, 5000, 10000, 10000, 15000], // Mora
        [0, 1, 0, 0, 0], // T1 Ascension Material
        [0, 0, 1, 3, 0], // T2 Ascension Material
        [0, 0, 0, 0, 1], // T3 Ascension Material
        [0, 0, 0, 0, 0], // T4 Ascension Material
        [0, 1, 5, 0, 0], // T1 Elite Material
        [0, 0, 0, 3, 5], // T2 Elite Material
        [0, 0, 0, 0, 0], // T3 Elite Material
        [0, 1, 4, 0, 0], // T1 Common Material
        [0, 0, 0, 3, 4], // T2 Common Material
        [0, 0, 0, 0, 0] // T3 Common Material
    ],
    "1": [
        // Level [1, 20, 40, 50, 60, 70] 
        [0, 0, 5000, 5000, 10000], // Mora
        [0, 1, 0, 0, 0], // T1 Ascension Material
        [0, 0, 1, 2, 0], // T2 Ascension Material
        [0, 0, 0, 0, 1], // T3 Ascension Material
        [0, 0, 0, 0, 0], // T4 Ascension Material
        [0, 1, 4, 0, 0], // T1 Elite Material
        [0, 0, 0, 2, 4], // T2 Elite Material
        [0, 0, 0, 0, 0], // T3 Elite Material
        [0, 1, 2, 0, 0], // T1 Common Material
        [0, 0, 0, 2, 3], // T2 Common Material
        [0, 0, 0, 0, 0] // T3 Common Material
    ]
}