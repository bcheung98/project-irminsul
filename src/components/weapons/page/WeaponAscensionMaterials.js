import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../../helpers/TooltipText";
import { Backgrounds } from "../../../helpers/Backgrounds";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponAscensionMaterials = (props) => {

    const theme = useTheme();

    let { rarity, values } = props;
    let { ascensionMat, eliteMat, commonMat } = props.materials;
    let start = values[0];
    let stop = values[1];

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

    let costs = Materials[rarity.toString()].map((material, index) => (Materials[rarity.toString()][index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()));

    return (
        <Box sx={MaterialStyle}>
            {/* Mora */}
            <Box sx={MaterialImageRootBig}>
                <CustomTooltip title="Mora" arrow placement="top">
                    <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/Item_Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Box sx={MaterialTextContainer}>
                    <Typography variant="subtitle2" sx={MaterialText}>
                        {costs[0]}
                    </Typography>
                </Box>
            </Box>
            {
                /* T1 Ascension Material */
                costs[1] !== "0" &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}1.png`} alt={formatWeaponAscMats(`${ascensionMat}1`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}2.png`} alt={formatWeaponAscMats(`${ascensionMat}2`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}3.png`} alt={formatWeaponAscMats(`${ascensionMat}3`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}4.png`} alt={formatWeaponAscMats(`${ascensionMat}4`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}1.png`} alt={formatEliteMats(`${eliteMat}1`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}2.png`} alt={formatEliteMats(`${eliteMat}2`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}3.png`} alt={formatEliteMats(`${eliteMat}3`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
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
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
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

export default WeaponAscensionMaterials;

const Materials = {
    /*
    Mora
    T1 Ascension Material
    T2 Ascension Material
    T3 Ascension Material
    T4 Ascension Material
    T1 Elite Material
    T2 Elite Material
    T3 Elite Material
    T1 Common Material
    T2 Common Material
    T3 Common Material
    */
    "5": [
        [0, 10000, 20000, 30000, 45000, 55000, 65000],
        [0, 5, 0, 0, 0, 0, 0],
        [0, 0, 5, 9, 0, 0, 0],
        [0, 0, 0, 0, 5, 9, 0],
        [0, 0, 0, 0, 0, 0, 6],
        [0, 5, 18, 0, 0, 0, 0],
        [0, 0, 0, 9, 18, 0, 0],
        [0, 0, 0, 0, 0, 14, 27],
        [0, 3, 12, 0, 0, 0, 0],
        [0, 0, 0, 9, 14, 0, 0],
        [0, 0, 0, 0, 0, 9, 18]
    ],
    "4": [
        [0, 5000, 15000, 20000, 30000, 35000, 45000],
        [0, 3, 0, 0, 0, 0, 0],
        [0, 0, 3, 6, 0, 0, 0],
        [0, 0, 0, 0, 3, 6, 0],
        [0, 0, 0, 0, 0, 0, 4],
        [0, 3, 12, 0, 0, 0, 0],
        [0, 0, 0, 6, 12, 0, 0],
        [0, 0, 0, 0, 0, 9, 18],
        [0, 2, 8, 0, 0, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 6, 12]
    ],
    "3": [
        [0, 5000, 10000, 15000, 20000, 25000, 30000],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 2, 4, 0, 0, 0],
        [0, 0, 0, 0, 2, 4, 0],
        [0, 0, 0, 0, 0, 0, 3],
        [0, 2, 8, 0, 0, 0, 0],
        [0, 0, 0, 4, 8, 0, 0],
        [0, 0, 0, 0, 0, 6, 12],
        [0, 1, 5, 0, 0, 0, 0],
        [0, 0, 0, 4, 6, 0, 0],
        [0, 0, 0, 0, 0, 4, 8]
    ],
    "2": [
        [0, 5000, 10000, 10000, 15000],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 3, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 5, 0, 0],
        [0, 0, 0, 3, 5],
        [0, 0, 0, 0, 0],
        [0, 1, 4, 0, 0],
        [0, 0, 0, 3, 4],
        [0, 0, 0, 0, 0]
    ],
    "1": [
        [0, 0, 5000, 5000, 10000],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 2, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 4, 0, 0],
        [0, 0, 0, 2, 4],
        [0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 0, 2, 3],
        [0, 0, 0, 0, 0]
    ]
}