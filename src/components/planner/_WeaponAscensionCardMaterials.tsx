import { connect } from "react-redux"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../helpers/MaterialImage"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"
import { WeaponCosts } from "../../types/weapon/WeaponCosts"

function WeaponAscensionCardMaterials(props: any) {

    let { name } = props.weapon
    let { ascensionMat, eliteMat, commonMat } = props.weapon.materials
    let costs = props.costs.find((wep: WeaponCosts) => wep.name === name).costs

    let costData = [
        { name: "Mora", rarity: "3", img: "Mora" },
        { name: "Enhancement Ore", rarity: "2", img: "xp_mats/wep_xp1" },
        { name: "Fine Enhancement Ore", rarity: "3", img: "xp_mats/wep_xp2" },
        { name: "Mystic Enhancement Ore", rarity: "4", img: "xp_mats/wep_xp3" },
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

    let keys = Object.keys(costs)

    return (
        <Grid container rowSpacing={1} columnSpacing={0} sx={{ my: "15px" }}>
            {
                costData.map((material, index) => (
                    costs[keys[index]] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costs[keys[index]].toLocaleString()} img={material.img} size={64} />
                ))
            }
        </Grid>
    )

}

const mapStateToProps = (state: RootState) => ({
    costs: state.ascensionPlanner.weaponCosts
})

export default connect(mapStateToProps)(WeaponAscensionCardMaterials)