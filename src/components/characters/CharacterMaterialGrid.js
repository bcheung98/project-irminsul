import React from "react";
import { formatTalents, formatCommonMats, formatBossMats, formatWeeklyBossMats, formatGemstone } from "../../helpers/TooltipText";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
import { Box } from "@mui/material";

const CharacterMaterialGrid = (props) => {

    let { element } = props.character;
    let { talentBook, bossMat, localMat, commonMat, weeklyBossMat } = props.character.materials;

    const materialImage = {
        height: props.size,
        border: "1px solid rgb(30, 73, 118)",
        borderRadius: "5px",
        backgroundColor: "rgb(9, 24, 39)",
    }

    return (
        <Box sx={{ ml: "10px" }}>
            <Grid container spacing={1}>
                <Grid xs="auto">
                    <MaterialTooltip title={formatTalents(talentBook)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/talent_mats/${talentBook}3.png`)} alt={talentBook} />
                    </MaterialTooltip>
                </Grid>
                <Grid >
                    <MaterialTooltip title={formatWeeklyBossMats(weeklyBossMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`)} alt={weeklyBossMat} />
                    </MaterialTooltip>
                </Grid>
                <Grid>
                    <MaterialTooltip title={formatCommonMats(commonMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} />
                    </MaterialTooltip>
                </Grid>
                <Grid >
                    <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`)} alt={bossMat} />
                    </MaterialTooltip>
                </Grid>
                <Grid >
                    <MaterialTooltip title={localMat} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`)} alt={localMat} />
                    </MaterialTooltip>
                </Grid>
                <Grid>
                    <MaterialTooltip title={formatGemstone(element)} arrow placement="top">
                        <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`)} alt={element} />
                    </MaterialTooltip>
                </Grid>
            </Grid>
        </Box>
    )
}

CharacterMaterialGrid.defaultProps = {
    size: "48px",
}

export default CharacterMaterialGrid;