import * as React from "react"
import { useSelector } from "react-redux"
import { exportComponentAsJPEG } from "react-component-export-image"

// Component imports
import MaterialImage from "components/_custom/MaterialImage"

// MUI imports
import { useTheme, Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { formatXPMats, formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats, formatWeaponAscMats, formatEliteMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"

function AscensionTotalCost() {

    const theme = useTheme()

    const componentRef = React.useRef() as React.RefObject<React.ReactInstance>

    const totalCosts = useSelector((state: RootState) => state.ascensionPlanner.totalCost)

    // Rarities for each type of material
    // [Start rarity, end rarity]
    const materialRarities = {
        characterXP: [2, 4],
        weaponXP: [1, 3],
        bossMat: [4, 4],
        weeklyBossMat: [5, 5],
        gemstone: [2, 5],
        localMat: [1, 1],
        talentBook: [2, 4],
        ascensionMat: [2, 5],
        eliteMat: [2, 4],
        commonMat: [1, 3],
    }

    let costData: { name: string, rarity: number, cost: number, img: string }[] = []

    // Populate the above array
    // Object.entries will preserve the original order of materials
    Object.entries(totalCosts).forEach(([key, value]) => {
        if (key === "mora") {
            costData.push({ name: "Mora", rarity: 3, cost: value, img: "Mora" })
        }
        else if (key === "crown") {
            costData.push({ name: "Crown of Insight", rarity: 5, cost: value, img: "talent_mats/Crown_of_Insight" })
        }
        else {
            let rarityIndex = materialRarities[key as keyof typeof materialRarities]
            let rarity = rarityIndex[0]
            let maxRarity = rarityIndex[1]
            Object.keys(value).forEach((mat) => {
                costData.push({ name: getMaterialName(key, mat), rarity: rarity, cost: value[mat], img: `${getImagePath(key)}/${mat.split(" ").join("_")}` })
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
                Object.values(costData).map((obj) => obj.cost).reduce((a, c) => a + c) > 0 &&
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
                                    <MaterialImage key={index} name={material.name} rarity={material.rarity.toString()} cost={material.cost.toLocaleString()} img={material.img} size={64} />
                                ))
                            }
                        </Grid>
                    </Box>
                </React.Fragment>
            }
        </React.Fragment>
    )

}

export default AscensionTotalCost

const getMaterialName = (type: string, material: string) => {
    switch (type) {
        case "characterXP":
        case "weaponXP":
            return formatXPMats(material)
        case "bossMat":
            return formatBossMats(material)
        case "weeklyBossMat":
            return formatWeeklyBossMats(material)
        case "gemstone":
            return formatGemstone(material.split(" ").join("_"))
        case "commonMat":
            return formatCommonMats(material)
        case "talentBook":
            return formatTalents(material)
        case "ascensionMat":
            return formatWeaponAscMats(material)
        case "eliteMat":
            return formatEliteMats(material)
        default:
            return material
    }
}

const getImagePath = (type: string) => {
    let path = ""
    switch (type) {
        case "characterXP":
        case "weaponXP":
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
        case "commonMat":
            path = "common_mats"
            break
        case "talentBook":
            path = "talent_mats"
            break
        case "ascensionMat":
            path = "weapon_ascension_mats"
            break
        case "eliteMat":
            path = "elite_mats"
            break
        default:
            break
    }
    return path
}