import * as React from "react";
import { useTheme } from "@mui/material/styles";
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
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

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
    ({ theme }) => ({
        fontFamily: "Genshin, sans-serif",
        fontSize: "14px",
        color: `${theme.text.color}`,
    }),
);

const CharacterPage = (props) => {

    const theme = useTheme();

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
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                cursor: "pointer",
                            }}
                            onError={ErrorLoadingImage}
                        />
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
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
                                    color: `${theme.text.color}`,
                                }}
                            >
                                {description}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="body2"><b>Constellation</b></Typography>
                                    <Typography variant="body2"><b>Birthday</b></Typography>
                                    <Typography variant="body2"><b>Release Date</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (EN)</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (JP)</b></Typography>
                                </Box>
                                <Box sx={{ textAlign: "right" }}>
                                    <Typography variant="body2">{constellation.name}</Typography>
                                    <Typography variant="body2">{birthday}</Typography>
                                    <Typography variant="body2">{`${release.date} (${release.version})`}</Typography>
                                    <Typography variant="body2">{voiceActors["en"]}</Typography>
                                    <Typography variant="body2">{voiceActors["jp"]}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs
                        sx={{
                            border: `1px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            m: 2,
                        }}
                    >
                        <Box sx={{ display: "flex" }}>
                            <MaterialTooltip title={`${nation} / ${element}`} arrow placement="bottom">
                                <img style={{ marginRight: "-25px", height: "128px" }} src={(`${process.env.REACT_APP_URL}/visions/Vision_${nation}_${element}.png`)} alt={`${nation} / ${element}`} onError={ErrorLoadingImage} />
                            </MaterialTooltip>
                            <div style={{ marginLeft: "20px" }}>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    sx={{
                                        mt: "20px",
                                        display: { xs: "none", md: "flex" },
                                        fontFamily: "Genshin, sans-serif",
                                        color: `${theme.text.color}`,
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
                                        color: `${theme.text.color}`,
                                        fontStyle: "italic",
                                        textAlign: "center",
                                    }}
                                >
                                    {title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "left",
                                        color: `${theme.text.color}`
                                    }}
                                >
                                    <Box sx={{ marginLeft: "-5px" }}>
                                        <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} onError={ErrorLoadingImage} />
                                    </Box>
                                    <Box sx={{ marginLeft: "5px" }}>
                                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            • {weapon}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </Box>
                        <Box sx={{ mt: "15px", mx: "10px" }}>
                            <CharacterMaterialGrid character={character} size={"60px"} />
                        </Box>
                        <Box
                            sx={{
                                mx: "20px",
                                my: "15px",
                            }}
                        >
                            <Tabs value={tabValue} onChange={handleTabChange}>
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