import React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { SmallAccordion, SmallAccordionDetails, SmallAccordionSummary } from "../../../helpers/CustomAccordion";
import { WeeklyBossMats } from "../../../helpers/MaterialList";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const BossMatFilter = (props) => {

    const theme = useTheme();

    return (
        <Box style={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(WeeklyBossMats).map((boss, index) => (
                    <SmallAccordion key={index}>
                        <SmallAccordionSummary>
                            <CardHeader
                                avatar={
                                    <Avatar src={`${process.env.REACT_APP_URL}/bosses/${boss.split(" ").join("_")}_Icon.png`} alt={boss} sx={{ height: "32px", width: "32px", border: `1px solid ${theme.border.color}`, borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                }
                                title={
                                    <Typography
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {boss}
                                    </Typography>
                                }
                            />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            {
                                WeeklyBossMats[boss].sort().map((material, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                                    </CustomTooltip>
                                ))
                            }
                        </SmallAccordionDetails>
                    </SmallAccordion>
                ))
            }
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_WEEKLYBOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);