// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../../helpers/TooltipText"
import { Backgrounds } from "../../../helpers/Backgrounds"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function WeaponAscensionMaterials(props: any) {

    const theme = useTheme()

    let { rarity, values } = props
    let { ascensionMat, eliteMat, commonMat } = props.materials
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

    let costs = Materials[rarity as keyof typeof Materials].map((material, index) => (Materials[rarity as keyof typeof Materials][index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

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
                /* T1 Ascension Material */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat}1.png`} alt={formatWeaponAscMats(`${ascensionMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Ascension Material */
                costs[2] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat}2.png`} alt={formatWeaponAscMats(`${ascensionMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Ascension Material */
                costs[3] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat}3.png`} alt={formatWeaponAscMats(`${ascensionMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Ascension Material */
                costs[4] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}4`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat}4.png`} alt={formatWeaponAscMats(`${ascensionMat}4`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[4]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Elite Material */
                costs[5] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat}1.png`} alt={formatEliteMats(`${eliteMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[5]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Elite Material */
                costs[6] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat}2.png`} alt={formatEliteMats(`${eliteMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[6]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Elite Material */
                costs[7] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat}3.png`} alt={formatEliteMats(`${eliteMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[7]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Common Material */
                costs[8] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[8]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs[9] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[9]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs[10] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs[10]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
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