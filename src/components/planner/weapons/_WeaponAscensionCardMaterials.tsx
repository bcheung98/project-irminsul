import { useSelector } from "react-redux"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../../helpers/TooltipText"

// Type imports
import { RootState } from "../../../redux/store"
import { WeaponCost, WeaponCostObject } from "types/costs"

function WeaponAscensionCardMaterials({ weapon }: { weapon: WeaponCostObject }) {

    const weaponCosts = useSelector((state: RootState) => state.ascensionPlanner.weaponCosts)

    const { name } = weapon
    const { ascensionMat, eliteMat, commonMat } = weapon.materials
    const costs = weaponCosts.find((wep: WeaponCostObject) => wep.name === name)?.costs as WeaponCost

    let costArray: number[] = []
    Object.entries(costs).forEach(([key, value]) => {
        if (key === "mora") {
            costArray.push(value as number)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                costArray.push(v as number)
            })
        }
    })

    const costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: "Enhancement Ore", rarity: "1", img: "xp_mats/wep_xp1" },
        { name: "Fine Enhancement Ore", rarity: "2", img: "xp_mats/wep_xp2" },
        { name: "Mystic Enhancement Ore", rarity: "3", img: "xp_mats/wep_xp3" },
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
        <Grid container rowSpacing={1} columnSpacing={0} sx={{ my: "15px" }}>
            {
                costData.map((material, index) => (
                    costArray[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costArray[index].toLocaleString()} img={material.img} size={64} />
                ))
            }
        </Grid>
    )

}

export default WeaponAscensionCardMaterials