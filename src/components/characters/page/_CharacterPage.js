import * as React from "react";
import { connect } from "react-redux";
import { Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import CharacterStatsTable from "./CharacterStatsTable";

const CharacterPage = (props) => {

    let { char_name } = useParams();
    let { characters } = props;
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name);

    if (character !== undefined) {
        let { name, title, rarity, element, weapon, constellation, description, birthday, nation, voiceActors } = character;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid xs="auto">
                        <img src={require(`../../../assets/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`)} alt={name} style={{
                            width: "40vw",
                            height: "600px",
                            objectFit: "cover",
                            borderRight: "1px solid rgb(30, 73, 118)",
                            borderBottom: "1px solid rgb(30, 73, 118)",
                            borderBottomRightRadius: "5px",
                        }} />
                    </Grid>
                    <Grid xs>
                        <div style={{ display: "flex" }}>
                            <Typography
                                variant="h4"
                                noWrap
                                component="a"
                                sx={{
                                    mx: "25px",
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
                            <div id="circle-icons" style={{
                                display: "flex",
                                marginTop: "15px",
                            }}>
                                <MaterialTooltip title={element} arrow placement="top">
                                    <Avatar sx={{
                                        height: "48px",
                                        width: "48px",
                                    }} src={require(`../../../assets/elements/Element_${element}.png`)} alt={element} />
                                </MaterialTooltip>
                                <MaterialTooltip title={weapon} arrow placement="top">
                                    <Avatar sx={{
                                        height: "48px",
                                        width: "48px"
                                    }} src={require(`../../../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`)} alt={weapon} />
                                </MaterialTooltip>
                            </div>
                        </div>
                        <Typography
                            variant="body1"
                            noWrap
                            component="a"
                            sx={{
                                mx: "25px",
                                mt: "5px",
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Genshin, sans-serif",
                                color: "white",
                                fontStyle: "italic",
                                textAlign: "center",
                            }}
                        >
                            {title}
                        </Typography>
                        <img style={{
                            marginLeft: "20px",
                            marginTop: "2px",
                        }} src={require(`../../../assets/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                        <br /><br />
                        <Typography
                            variant="body2"
                            component="a"
                            sx={{
                                mx: "25px",
                                mt: "5px",
                                display: { xs: "none", md: "flex" },
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