import * as React from "react";
import { styled } from '@mui/material/styles';
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader, Paper } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { FormatTalentKey } from "../../../helpers/FormatTalentKey";
import { ElementalBorderColor } from "../../../helpers/ElementalColors";
import CharacterTalentScalingTable from "./CharacterTalentScalingTable";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "dodgerblue" }} />}
        {...props}
    />
))(() => ({
    backgroundColor: "rgb(9, 24, 39)",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: "10px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: "rgb(9, 24, 39)",
    padding: "10px",
}));

const CharacterTalentDisplay = (props) => {

    let { name, element, weapon, talents } = props.character;

    return (
        <Box
            sx={{
                border: "1px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                color: "white",
                width: "95vw",
                margin: "auto",
                padding: "15px",
            }}>
            <Typography
                variant="h4"
                noWrap
                component="p"
                sx={{
                    fontFamily: "Genshin, sans-serif",
                    mb: "15px",
                }}
            >
                Talents
            </Typography>
            {Object.keys(talents).map((key, index) => {
                return (
                    <Box key={key}>
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", }}>
                            <i>{FormatTalentKey(key).toUpperCase()}</i>
                        </Typography>
                        <CardHeader
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            avatar={
                                key === "attack" ?
                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../../assets/characters/talents/attack_${weapon.toLowerCase()}.png`)} style={ElementalBorderColor(element)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "48px",
                                            height: "48px",
                                            border: "2px solid rgb(30, 73, 118)",
                                        }} />
                                    :
                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../../assets/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "48px",
                                            height: "48px",
                                            border: "2px solid rgb(30, 73, 118)",
                                        }} />
                            }
                            title={
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {talents[key].name}
                                </Typography>
                            }
                        />
                        <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                            {parse(talents[key].description)}
                        </Typography>
                        {
                            talents[key].splash &&
                            <React.Fragment>
                                <br />
                                <Typography variant="body1" sx={{ fontSize: "15px", fontStyle: "italic", ml: "20px", color: "rgb(225, 225, 225)" }}>
                                    {parse(talents[key].splash)}
                                </Typography>
                            </React.Fragment>
                        }
                        <br />
                        {
                            ["attack", "skill", "burst", "altsprint"].includes(key) &&
                            <Paper variant="outlined" sx={{
                                color: "white",
                                border: "none",
                            }}>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>Talent Scaling</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <CharacterTalentScalingTable attackType={key} stats={talents[key].scaling} />
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                        }
                        < hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
                    </Box>
                )
            })}
        </Box >
    )
}

export default CharacterTalentDisplay;