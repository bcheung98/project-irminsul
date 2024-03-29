import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import { formatGemstone, formatCommonMats, formatTalents, formatBossMats, formatWeeklyBossMats } from "../../helpers/TooltipText";
import { Backgrounds } from "../../helpers/Backgrounds";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterAscensionCardMaterials = (props) => {

    const theme = useTheme();

    let { name, element } = props.character;
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials;
    let costs = props.costs.find(char => char.name === name).costs;

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",
    }

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

    let costArray = Object.keys(costs).map(key => costs[key].slice(0, 5).reduce((a, c) => Number(a) + Number(c)));

    return (
        <Grid container sx={MaterialStyle}>
            {/* Mora */
                costArray[0] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Mora" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/Item_Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[0].toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Character EXP Material */
                costArray[1] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Wanderer's Advice" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/char_xp1.png`} alt="Wanderer's Advice" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[1]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Character EXP Material */
                costArray[2] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Adventurer's Experience" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/char_xp2.png`} alt="Adventurer's Experience" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[2]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Character EXP Material */
                costArray[3] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Hero's Wit" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/char_xp3.png`} alt="Hero's Wit" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[3]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Boss Material */
                costArray[4] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatBossMats(bossMat)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`} alt={formatBossMats(bossMat)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[4]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Local Specialty */
                costArray[5] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={localMat} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`} alt={localMat} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[5]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Gemstone */
                costArray[6] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Sliver`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Sliver.png`} alt={formatGemstone(`${element}_Sliver`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[6]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Gemstone */
                costArray[7] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Fragment`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Fragment.png`} alt={formatGemstone(`${element}_Fragment`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[7]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Gemstone */
                costArray[8] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Chunk`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Chunk.png`} alt={formatGemstone(`${element}_Chunk`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[8]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Gemstone */
                costArray[9] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatGemstone(`${element}_Gemstone`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`} alt={formatGemstone(`${element}_Gemstone`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[9]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Talent Book */
                costArray[10] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook.split(" ").join("_")}1.png`} alt={formatTalents(`${talentBook}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[10]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Talent Book */
                costArray[11] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook.split(" ").join("_")}2.png`} alt={formatTalents(`${talentBook}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[11]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Talent Book */
                costArray[12] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatTalents(`${talentBook}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook.split(" ").join("_")}3.png`} alt={formatTalents(`${talentBook}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[12]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Common Material */
                costArray[13] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[13]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costArray[14] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[14]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costArray[15] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[15]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Weekly Boss Material */
                costArray[16] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`} alt={formatWeeklyBossMats(`${weeklyBossMat}`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[16]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* Crown */
                costArray[17] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Crown of Insight" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/talent_mats/Crown_of_Insight.png`} alt="Crown of Insight" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costArray[17]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Grid>
    )

}

const mapStateToProps = (state) => {
    return {
        costs: state.ascensionPlanner.characterCosts
    }
}

export default connect(mapStateToProps)(CharacterAscensionCardMaterials);