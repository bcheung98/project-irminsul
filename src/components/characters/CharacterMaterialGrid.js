import React from "react";
import { formatTalents, formatCommonMats, formatBossMats, formatWeeklyBossMats, formatGemstone } from "../../helpers/TooltipText";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";

const CharacterMaterialGrid = (props) => {
    let { element } = props.character;
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials;

    const materialRow = {
        marginLeft: props.margin
    }

    const materialImage = {
        height: props.imageSize,
        border: "1px solid rgb(30, 73, 118)",
        borderRadius: "5px",
        marginBottom: "-14px",
        marginRight: "7px",
        backgroundColor: "rgb(9, 24, 39)",
    }

    return (
        <Grid item sm sx={{mt: "-3px"}}>
            <Grid style={materialRow}>
                <MaterialTooltip title={formatTalents(talentBook)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}3.png`)} alt={talentBook} />
                </MaterialTooltip>
                <MaterialTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`)} alt={weeklyBossMat} />
                </MaterialTooltip>
                <MaterialTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} />
                </MaterialTooltip>
            </Grid>
            <Grid style={materialRow}>
                <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`)} alt={bossMat} />
                </MaterialTooltip>
                <MaterialTooltip title={localMat} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`)} alt={localMat} />
                </MaterialTooltip> 
                <MaterialTooltip title={formatGemstone(element)} arrow placement="top">
                    <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`)} alt={element} />
                </MaterialTooltip>
            </Grid>
        </Grid>
    )
}

export default CharacterMaterialGrid;