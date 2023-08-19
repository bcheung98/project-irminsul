import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux"
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { formatXPMats, formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats, formatWeaponAscMats, formatEliteMats } from "../../helpers/TooltipText";
import * as Materials from "../../helpers/MaterialList";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const AscensionTotalCost = (props) => {

    const theme = useTheme();

    let { totalCost } = props;

    const MaterialImageRootBig = {
        width: "72px",
        mr: "15px",
        mb: "15px",
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
        fontSize: "11.5px"
    }

    let CommonMatArray = ExpandMaterialArray(Materials.CommonMats, 3);
    let LocalMatArray = Object.values(Materials.LocalMats).flat();
    let TalentBookArray = ExpandMaterialArray(Object.values(Materials.TalentBooks).flat(), 3);
    let WeeklyBossMatArray = Object.values(Materials.WeeklyBossMats).flat()
    let WepAscensionMatArray = ExpandMaterialArray(Object.values(Materials.WepAscensionMats).flat(), 4);
    let EliteMatArray = ExpandMaterialArray(Materials.EliteMats, 4)

    return (
        <React.Fragment>
            {
                Object.keys(totalCost).length > 0 &&
                <Box
                    sx={{
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        mx: "20px",
                        mb: "30px",
                        p: 1,
                    }}
                >
                    <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "15px", my: "15px" }}>
                        Total Materials Required
                    </Typography>
                    <Grid container sx={{ mx: "15px", mt: "10px" }}>
                        {
                            Object.keys(totalCost).map((material, index) => {
                                return (
                                    <Box key={index}>
                                        {
                                            /* Mora */
                                            material === "mora" && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title="Mora" arrow placement="top">
                                                    <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/Item_Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material].toLocaleString()}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Character XP Materials */
                                            Materials.CharXPMats.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatXPMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/xp_mats/${material}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[7]) + 1] + ")" }} alt={formatXPMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Weapon XP Materials */
                                            Materials.WepXPMats.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatXPMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/xp_mats/${material}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[6])] + ")" }} alt={formatXPMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Boss Materials */
                                            Materials.BossMats.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatBossMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/boss_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} alt={formatBossMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Common Materials */
                                            CommonMatArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatCommonMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/common_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1])] + ")" }} alt={formatCommonMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Local Specialties */
                                            LocalMatArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={material} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/local_specialties/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[1] + ")" }} alt={material} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Ascension Gemstones */
                                            Materials.Gemstones.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatGemstone(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[GetGemstoneBackground(material)] + ")" }} alt={formatGemstone(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Talent Books */
                                            TalentBookArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatTalents(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/talent_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1]) + 1] + ")" }} alt={formatTalents(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Weekly Boss Materials */
                                            WeeklyBossMatArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatWeeklyBossMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[5] + ")" }} alt={formatWeeklyBossMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Crowns */
                                            material === "crown" && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title="Crown of Insight" arrow placement="top">
                                                    <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/Crown_of_Insight.png`} alt="Crown of Insight" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Weapon Ascension Materials */
                                            WepAscensionMatArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatWeaponAscMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1]) + 1] + ")" }} alt={formatWeaponAscMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        {
                                            /* Elite Materials */
                                            EliteMatArray.includes(material) && totalCost[material] !== 0 &&
                                            <Box sx={MaterialImageRootBig}>
                                                <CustomTooltip title={formatEliteMats(material)} arrow placement="top">
                                                    <img src={`${process.env.REACT_APP_URL}/materials/elite_mats/${material.split(" ").join("_")}.png`} style={{ backgroundImage: "url(" + Backgrounds[Number(material[material.length - 1]) + 1] + ")" }} alt={formatEliteMats(material)} className="material-image-big" onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                                <Box sx={MaterialTextContainer}>
                                                    <Typography variant="subtitle2" sx={MaterialText}>
                                                        {totalCost[material]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            }
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        totalCost: state.ascensionPlanner.totalCost
    }
}

export default connect(mapStateToProps)(AscensionTotalCost);

const GetGemstoneBackground = (material) => {
    let gem_type = material.split("_")[1];
    switch (gem_type) {
        case "Sliver":
            return 2;
        case "Fragment":
            return 3;
        case "Chunk":
            return 4;
        case "Gemstone":
            return 5;
        default:
            return 1;
    }
}

const ExpandMaterialArray = (arr, n) => {
    let output = [];
    for (const material in arr) {
        for (let i = 1; i <= n; i++) {
            output.push(`${arr[material]}${i}`)
        }
    }
    return output;
}