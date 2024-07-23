// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Helper imports
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { formatTalents, formatCommonMats, formatBossMats, formatWeeklyBossMats, formatGemstone } from "../../helpers/TooltipText"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterMaterialGrid(props: any) {

    const theme = useTheme()

    let { element } = props.character
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials

    const materialImage = {
        height: "48px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
    }

    return (
        <Box sx={{ ml: "10px" }}>
            <Grid container spacing={1}>
                <Grid xs="auto">
                    <CustomTooltip title={formatTalents(talentBook)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}3.png`)} alt={talentBook} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid >
                    <CustomTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat}.png`)} alt={weeklyBossMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid>
                    <CustomTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}3.png`)} alt={commonMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid >
                    <CustomTooltip title={formatBossMats(bossMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat}.png`)} alt={bossMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid >
                    <CustomTooltip title={localMat} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat}.png`)} alt={localMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
                <Grid>
                    <CustomTooltip title={formatGemstone(element)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`)} alt={element} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CharacterMaterialGrid