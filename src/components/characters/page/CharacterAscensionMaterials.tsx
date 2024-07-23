// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import { formatCommonMats, formatBossMats, formatGemstone } from "../../../helpers/TooltipText"
import { Backgrounds } from "../../../helpers/Backgrounds"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterAscensionMaterials(props: any) {

    const theme = useTheme()

    let { element, values } = props
    let { bossMat, localMat, commonMat } = props.materials
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
        mt: "-5px",
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}//materials/Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[0]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Boss Material */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatBossMats(bossMat)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat}.png`} alt={formatBossMats(bossMat)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Local Specialty */
                costs[2] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={localMat} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat}.png`} alt={localMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Gemstone */
                costs[3] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Sliver`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Sliver.png`} alt={formatGemstone(`${element}_Sliver`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Gemstone */
                costs[4] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Fragment`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Fragment.png`} alt={formatGemstone(`${element}_Fragment`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[4]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Gemstone */
                costs[5] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Chunk`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Chunk.png`} alt={formatGemstone(`${element}_Chunk`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[5]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Gemstone */
                costs[6] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Gemstone`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`} alt={formatGemstone(`${element}_Gemstone`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[6]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Common Material */
                costs[7] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[7]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs[8] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[8]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs[9] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[9]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
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