import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { connect } from "react-redux";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

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

const BossMats = {
    "Stormterror": ["Dvalin's Claw", "Dvalin's Plume", "Dvalin's Sigh"],
    "Lupus Boreas": ["Ring of Boreas", "Spirit Locket of Boreas", "Tail of Boreas"],
    "Childe": ["Shadow of the Warrior", "Shard of a Foul Legacy", "Tusk of Monoceros Caeli"],
    "Azhdaha": ["Bloodjade Branch", "Dragon Lord's Crown", "Gilded Scale"],
    "La Signora": ["Ashen Heart", "Hellfire Butterfly", "Molten Moment"],
    "Narukami no Mikoto": ["Mudra of the Malefic General", "Tears of the Calamitous God", "The Meaning of Aeons"],
    "Shouki no Kami": ["Daka's Bell", "Mirror of Mushin", "Puppet Strings"],
    "Guardian of Apep's Oasis": ["Everamber", "Primordial Greenbloom", "Worldspan Fern"],
}

const BossMatFilter = (props) => {

    const theme = useTheme();

    return (
        <Box style={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(BossMats).map((boss, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <CardHeader
                                avatar={
                                    <Avatar src={`${process.env.REACT_APP_URL}/bosses/${boss.split(" ").join("_")}_Icon.png`} alt={boss} sx={{ height: "32px", width: "32px", border: `1px solid ${theme.border.color}`, borderRadius: "5px" }} />
                                }
                                title={<BossNameText>{boss}</BossNameText>}
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                BossMats[boss].sort().map((material, index) => (
                                    <FilterTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} />
                                    </FilterTooltip>
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