import * as React from "react"
import { connect } from "react-redux"
import { exportComponentAsJPEG } from "react-component-export-image"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../helpers/MaterialImage"
import { formatXPMats, formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats, formatWeaponAscMats, formatEliteMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"

function AscensionTotalCost(props: any) {

    const theme = useTheme()

    const componentRef = React.useRef() as React.RefObject<React.ReactInstance>

    let { totalCost } = props

    // This object will sort all the materials from `totalCost` based on their type
    let costs: TotalCost = {
        mora: 0,
        char_xp: {},
        wep_xp: {},
        bossMat: {},
        weeklyBossMat: {},
        crown: 0,
        gemstone: {},
        localMat: {},
        common: {},
        talent: {},
        ascension: {},
        elite: {},
    }

    // Sort and populate the above object
    Object.keys(totalCost).forEach((material: string) => {
        let cost = totalCost[material][0]
        let materialType = totalCost[material][1]
        if (materialType === "mora" || materialType === "crown") {
            costs[materialType] += cost
        }
        else if (Object.keys(costs).includes(materialType)) {
            if (!Object.keys(costs[materialType as keyof typeof costs]).includes(material)) {
                costs[materialType][material] = 0
            }
            costs[materialType][material] += cost
        }
    })

    // Rarities for each type of material
    // [Start rarity, end rarity]
    const materialRarities = {
        char_xp: [2, 4],
        wep_xp: [2, 4],
        bossMat: [4, 4],
        weeklyBossMat: [5, 5],
        localMat: [1, 1],
        gemstone: [2, 5],
        common: [1, 3],
        talent: [2, 4],
        ascension: [2, 5],
        elite: [2, 4],
    }

    // Array that will hold all the cost data to be rendered
    let costData: TotalCostArray[] = []

    // Populate the above array
    // Object.entries will preserve the original order of materials
    Object.entries(costs).forEach(arr => {
        if (arr[0] === "mora") {
            costData.push({ name: "Mora", rarity: "3", cost: arr[1], img: "Mora" })
        }
        else if (arr[0] === "crown") {
            costData.push({ name: "Crown of Insight", rarity: "5", cost: arr[1], img: "talent_mats/Crown_of_Insight" })
        }
        else {
            let rarityIndex = materialRarities[arr[0] as keyof typeof materialRarities]
            let rarity = rarityIndex[0]
            let maxRarity = rarityIndex[1]
            Object.keys(arr[1]).forEach((mat) => {
                costData.push({ name: getMaterialName(arr[0], mat), rarity: rarity.toString(), cost: arr[1][mat], img: `${getImagePath(arr[0])}/${mat.split(" ").join("_")}` })
                rarity += 1
                if (rarity > maxRarity) {
                    rarity = rarityIndex[0]
                }
            })
        }
    })

    return (
        <React.Fragment>
            {
                Object.keys(totalCost).length > 0 &&
                <React.Fragment>
                    <Button
                        variant="contained"
                        sx={{
                            my: "20px",
                            p: 1,
                        }}
                        onClick={() => exportComponentAsJPEG(componentRef, { fileName: "Materials.jpg" })}
                    >
                        Download as Image
                    </Button>
                    <Box
                        sx={{
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            mb: "30px",
                            p: 2
                        }}
                        ref={componentRef}
                    >
                        <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                            Total Materials Required
                        </Typography>
                        <Grid container rowSpacing={1} columnSpacing={0} sx={{ my: "15px" }}>
                            {
                                costData.map((material, index) => (
                                    material.cost !== 0 &&
                                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={material.cost.toLocaleString()} img={material.img} size={64} />
                                ))
                            }
                        </Grid>
                    </Box>
                </React.Fragment>
            }
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    totalCost: state.ascensionPlanner.totalCost
})

export default connect(mapStateToProps)(AscensionTotalCost)

const getMaterialName = (type: string, material: string) => {
    switch (type) {
        case "char_xp":
        case "wep_xp":
            return formatXPMats(material)
        case "bossMat":
            return formatBossMats(material)
        case "weeklyBossMat":
            return formatWeeklyBossMats(material)
        case "gemstone":
            return formatGemstone(material)
        case "common":
            return formatCommonMats(material)
        case "talent":
            return formatTalents(material)
        case "ascension":
            return formatWeaponAscMats(material)
        case "elite":
            return formatEliteMats(material)
        default:
            return material
    }
}

const getImagePath = (type: string) => {
    let path = ""
    switch (type) {
        case "char_xp":
        case "wep_xp":
            path = "xp_mats"
            break
        case "bossMat":
            path = "boss_mats"
            break
        case "weeklyBossMat":
            path = "weekly_boss_mats"
            break
        case "localMat":
            path = "local_specialties"
            break
        case "gemstone":
            path = "ascension_gems"
            break
        case "common":
            path = "common_mats"
            break
        case "talent":
            path = "talent_mats"
            break
        case "ascension":
            path = "weapon_ascension_mats"
            break
        case "elite":
            path = "elite_mats"
            break
        default:
            break
    }
    return path
}

interface TotalCost {
    [key: string]: any
}

type TotalCostArray = { name: string, rarity: string, cost: number, img: string }