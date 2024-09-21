// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import { formatCommonMats, formatTalents, formatWeeklyBossMats } from "../../../helpers/TooltipText"
import { Backgrounds } from "../../../helpers/Backgrounds"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterTalentLevellingMaterials(props: any) {

    const theme = useTheme()

    let { values } = props
    let { commonMat, talentBook, weeklyBossMat } = props.materials
    let start = values[0]
    let stop = values[1]

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",
    }

    const MaterialImageRootBig = {
        width: "72px",
        mr: "15px",
        backgroundColor: "rgb(233, 229, 220)",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
    }

    const MaterialTextContainer = {
        textAlign: "center",
        mt: "-3px",
    }

    const MaterialText = {
        fontFamily: "Genshin, sans-serif",
        color: "rgb(32, 32, 32)",
        fontSize: "12px"
    }

    let costs = Materials.map((material, index) => (Materials[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    return (
        <Box sx={MaterialStyle}>
            {
                /* Mora */
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Mora" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[0]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Talent Book */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}1.png`} alt={formatTalents(`${talentBook}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Talent Book */
                costs[2] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}2.png`} alt={formatTalents(`${talentBook}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Talent Book */
                costs[3] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}3.png`} alt={formatTalents(`${talentBook}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Common Material */
                costs[4] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[4]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs[5] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[5]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs[6] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[6]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Weekly Boss Material */
                costs[7] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} alt={formatWeeklyBossMats(`${weeklyBossMat}`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[7]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Crown */
                costs[8] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Crown of Insight" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/Crown_of_Insight.png`} alt="Crown of Insight" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[8]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
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