import * as React from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import CharacterStatsTable from "./CharacterStatsTable";
import CharacterAscensionTable from "./CharacterAscensionTable";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

    if (character !== undefined) {
        let { name, title, rarity, element, weapon, constellation, description, birthday, nation, voiceActors, release } = character;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid xs="auto">
                        <img src={require(`../../../assets/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`)} alt={name}
                            style={{
                                width: "35vw",
                                height: "600px",
                                objectFit: "cover",
                                marginLeft: "15px",
                                borderLeft: "1px solid rgb(30, 73, 118)",
                                borderRight: "1px solid rgb(30, 73, 118)",
                                borderBottom: "1px solid rgb(30, 73, 118)",
                                borderRadius: "0px 0px 5px 5px"
                            }} />
                        <Box
                            sx={{
                                border: "1px solid rgb(30, 73, 118)",
                                borderRadius: "5px", color: "white",
                                ml: "15px",
                                mt: "10px",
                                px: "20px",
                                py: "10px",
                                width: "32.9vw",
                            }}>
                            <Typography
                                variant="body2"
                                component="p"
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
                        <div style={{ display: "flex" }}>
                            <img style={{ marginRight: "-25px", height: "128px" }} src={require(`../../../assets/visions/Vision_${nation}_${element}.png`)} alt={`${nation} / ${element}`} />
                            <div style={{ marginLeft: "20px" }}>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    component="p"
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
                                    component="p"
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
                                        <img style={{ height: "30px" }} src={require(`../../../assets/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                                    </div>
                                    <div style={{ marginLeft: "5px" }}>
                                        <Typography variant="body1" sx={{ fontFamily: "Genshin" }}>
                                            • {weapon}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            </Tabs>
                            <TabPanel value={tabValue} index={0}>
                                <CharacterStatsTable character={character} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <CharacterAscensionTable character={character} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
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