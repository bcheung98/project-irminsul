import * as React from "react";
import PropTypes from 'prop-types';
import "../../../css/CharacterPage.css";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Typography, Tabs, Tab, Box, Dialog } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import CharacterStatsTable from "./CharacterStatsTable";
import CharacterAscensionTable from "./CharacterAscensionTable";
import CharacterTalentDisplay from "./CharacterTalentDisplay";
import CharacterTalentLevellingTable from "./CharacterTalentLevellingTable";
import CharacterConstellationDisplay from "./CharacterConstellationDisplay";
import CharacterMaterialGrid from "../CharacterMaterialGrid";
import CharacterOutfitDisplay from "./CharacterOutfitDisplay";

function TabPanel(props) {

    const { children, value, index, ...other } = props;
    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    () => ({
        fontFamily: "Genshin, sans-serif",
        fontSize: "14px",
        color: "white",
    }),
);

const CharacterPage = (props) => {

    let { char_name } = useParams();
    let { characters } = props;
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name);

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    if (character !== undefined) {
        let { name, title, rarity, element, weapon, constellation, description, birthday, nation, voiceActors, release } = character;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <img src={(`${process.env.REACT_APP_URL}/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`)} alt={name}
                            onClick={() => handleClickOpen()}
                            style={{
                                width: "35vw",
                                height: "600px",
                                objectFit: "cover",
                                marginLeft: "15px",
                                borderLeft: "1px solid rgb(30, 73, 118)",
                                borderRight: "1px solid rgb(30, 73, 118)",
                                borderBottom: "1px solid rgb(30, 73, 118)",
                                borderRadius: "0px 0px 5px 5px",
                                cursor: "pointer",
                            }} />
                        <Box
                            sx={{
                                border: "1px solid rgb(30, 73, 118)",
                                borderRadius: "5px",
                                color: "white",
                                ml: "15px",
                                mt: "10px",
                                px: "20px",
                                py: "10px",
                                width: "32.9vw",
                            }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: "20px",
                                    fontFamily: "Genshin, sans-serif",
                                    color: "white",
                                }}
                            >
                                {description}
                            </Typography>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <div style={{ textAlign: "left" }}>
                                    <Typography variant="body2"><b>Constellation</b></Typography>
                                    <Typography variant="body2"><b>Birthday</b></Typography>
                                    <Typography variant="body2"><b>Release Date</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (EN)</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (JP)</b></Typography>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <Typography variant="body2">{constellation.name}</Typography>
                                    <Typography variant="body2">{birthday}</Typography>
                                    <Typography variant="body2">{`${release.date} (${release.version})`}</Typography>
                                    <Typography variant="body2">{voiceActors["en"]}</Typography>
                                    <Typography variant="body2">{voiceActors["jp"]}</Typography>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid xs>
                        <Box sx={{ display: "flex" }}>
                            <MaterialTooltip title={`${nation} / ${element}`} arrow placement="bottom">
                                <img style={{ marginRight: "-25px", height: "128px" }} src={(`${process.env.REACT_APP_URL}/visions/Vision_${nation}_${element}.png`)} alt={`${nation} / ${element}`} />
                            </MaterialTooltip>
                            <div style={{ marginLeft: "20px" }}>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    sx={{
                                        mt: "20px",
                                        display: { xs: "none", md: "flex" },
                                        fontFamily: "Genshin, sans-serif",
                                        color: "white",
                                        textDecoration: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    {character.fullname ? character.fullname : name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    noWrap
                                    sx={{
                                        my: "2px",
                                        display: { xs: "none", md: "flex" },
                                        fontFamily: "Genshin, sans-serif",
                                        color: "white",
                                        fontStyle: "italic",
                                        textAlign: "center",
                                    }}
                                >
                                    {title}
                                </Typography>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "left",
                                        color: "white"
                                    }}>
                                    <div style={{ marginLeft: "-5px" }}>
                                        <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                                    </div>
                                    <div style={{ marginLeft: "5px" }}>
                                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            • {weapon}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <Box sx={{ mt: "15px", ml: "20px" }}>
                                <CharacterMaterialGrid character={character} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                border: "1px solid rgb(30, 73, 118)",
                                borderRadius: "5px",
                                mx: "20px",
                                mt: "15px",
                            }}
                        >
                            <Tabs value={tabValue} onChange={handleTabChange} centered>
                                <StyledTab label="Stats" />
                                <StyledTab label="Ascension" />
                                <StyledTab label="Talent Levelling" />
                            </Tabs>
                            <TabPanel value={tabValue} index={0}>
                                <CharacterStatsTable character={character} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <CharacterAscensionTable character={character} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={2}>
                                <CharacterTalentLevellingTable character={character} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
                <CharacterTalentDisplay character={character} />
                <CharacterConstellationDisplay character={character} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <CharacterOutfitDisplay character={character} />
                </Dialog>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterPage);