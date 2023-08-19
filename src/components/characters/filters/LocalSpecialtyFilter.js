import React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, CardHeader, Typography } from "@mui/material";
import { SmallAccordion, SmallAccordionDetails, SmallAccordionSummary } from "../../../helpers/CustomAccordion";
import { LocalMats } from "../../../helpers/MaterialList";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LocalMatFilter = (props) => {

    const theme = useTheme();

    return (
        <Box sx={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(LocalMats).map((nation, index) => (
                    <SmallAccordion key={index}>
                        <SmallAccordionSummary>
                            <CardHeader
                                avatar={
                                    <img src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} style={{ height: "32px", width: "32px", borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                }
                                title={
                                    <Typography variant="body1"
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {nation}
                                    </Typography>
                                }
                            />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            {
                                LocalMats[nation].sort().map((material, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/local_specialties/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
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
        setFilter: (target) => dispatch({ type: "SET_CHAR_LOCAL_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LocalMatFilter);