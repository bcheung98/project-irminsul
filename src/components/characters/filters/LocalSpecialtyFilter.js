import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, CardHeader, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { LocalMats } from "../../../helpers/MaterialList";
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

const LocalMatFilter = (props) => {

    const theme = useTheme();

    return (
        <Box sx={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(LocalMats).map((nation, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
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
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                LocalMats[nation].sort().map((material, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/local_specialties/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
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
        setFilter: (target) => dispatch({ type: "SET_CHAR_LOCAL_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LocalMatFilter);