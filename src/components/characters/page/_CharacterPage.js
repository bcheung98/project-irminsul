import * as React from "react";
import { connect } from "react-redux";
import { Typography, Avatar, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import CharacterStatsTable from "./CharacterStatsTable";

const CharacterPage = (props) => {

    let { char_name } = useParams();
    let { characters } = props;
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name);

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
                        <Paper
                            sx={{
                                backgroundColor: "rgb(7, 27, 47)",
                                border: "1px solid rgb(30, 73, 118)",
                                borderRadius: "5px", color: "white",
                                display: "flex",
                                justifyContent: "space-between",
                                ml: "15px",
                                mt: "10px",
                                px: "20px",
                                py: "10px",
                                width: "32.9vw",
                            }}>
                            <div>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>Voice Actors:</Typography>
                                <Typography variant="body2"><b>EN:</b> {voiceActors["en"]}</Typography>
                                <Typography variant="body2"><b>JP:</b> {voiceActors["jp"]}</Typography>
                            </div>
                            <div style={{ marginLeft: "100px" }}>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>Constellation:</Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>Birthday:</Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>Release Date:</Typography>
                            </div>
                            <div>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>{constellation.name}</Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>{birthday}</Typography>
                                <Typography variant="body2" sx={{ fontFamily: "Genshin" }}>{`${release.date} (${release.version})`}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid xs>
                        <div style={{ display: "flex" }}>
                            <img style={{ marginRight: "-25px", height: "128px" }} src={require(`../../../assets/visions/Vision_${nation}_${element}.png`)} alt={`${nation} / ${element}`} />
                            <div style={{ marginLeft: "20px" }}>
                                <Typography
                                    variant="h4"
                                    noWrap
                                    component="a"
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
                        <br />
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{
                                mx: "40px",
                                fontFamily: "Genshin, sans-serif",
                                color: "white",
                            }}
                        >
                            {description}
                        </Typography>
                        <CharacterStatsTable character={character} />
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