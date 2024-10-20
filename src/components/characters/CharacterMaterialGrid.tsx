// MUI imports
import { useTheme } from "@mui/material/styles"
import Grid from "@mui/material/Grid2"

// Helper imports
import { CustomTooltip } from "../_custom/CustomTooltip"
import { formatTalents, formatCommonMats, formatBossMats, formatWeeklyBossMats, formatGemstone } from "../../helpers/TooltipText"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

interface CharacterMaterialGridProps {
    element: "Pyro" | "Hydro" | "Electro" | "Cryo" | "Anemo" | "Geo" | "Dendro",
    materials: {
        talentBook: string,
        bossMat: string,
        localMat: string,
        commonMat: string,
        weeklyBossMat: string
    },
    size?: string
}

function CharacterMaterialGrid({
    element,
    materials,
    size = "48px"
}: CharacterMaterialGridProps) {

    const theme = useTheme()

    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = materials

    const materialImage: React.CSSProperties = {
        height: size,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
    }

    return (
        <Grid container rowSpacing={0} columnSpacing={1}>
            <Grid size={4}>
                <CustomTooltip title={formatTalents(talentBook)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}3.png`)} alt={talentBook} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
            <Grid size={4}>
                <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`)} alt={weeklyBossMat} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
            <Grid size={4}>
                <CustomTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
            <Grid size={4}>
                <CustomTooltip title={formatBossMats(bossMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`)} alt={bossMat} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
            <Grid size={4}>
                <CustomTooltip title={localMat} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`)} alt={localMat} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
            <Grid size={4}>
                <CustomTooltip title={formatGemstone(element)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`)} alt={element} onError={ErrorLoadingImage} />
                </CustomTooltip>
            </Grid>
        </Grid>
    )
}

export default CharacterMaterialGrid