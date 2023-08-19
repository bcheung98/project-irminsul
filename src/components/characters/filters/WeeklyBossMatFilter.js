import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { WeeklyBossMats } from "../../../helpers/MaterialList";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: `${theme.paper.backgroundColor}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "dodgerblue" }} />}
        {...props}
    />
))(({ theme }) => ({
    height: "32px",
    backgroundColor: `${theme.paper.backgroundColor}`,
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: "-5px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: `${theme.paper.backgroundColor}`,
    padding: "10px",
    marginTop: "-5px",
}));

const BossNameText = styled(Typography)(({ theme }) => ({
    fontFamily: "Genshin, monospace",
    color: `${theme.text.color}`,
    textDecoration: "none",
}))

const BossMatFilter = (props) => {

    const theme = useTheme();

    return (
        <Box style={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(WeeklyBossMats).map((boss, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <CardHeader
                                avatar={
                                    <Avatar src={`${process.env.REACT_APP_URL}/bosses/${boss.split(" ").join("_")}_Icon.png`} alt={boss} sx={{ height: "32px", width: "32px", border: `1px solid ${theme.border.color}`, borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                }
                                title={<BossNameText>{boss}</BossNameText>}
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                WeeklyBossMats[boss].sort().map((material, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                                    </CustomTooltip>
                                ))
                            }
                        </AccordionDetails>
                    </Accordion>
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