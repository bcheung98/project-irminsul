import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../helpers/MaterialTooltip";

const VersionHighlights = (props) => {

    let version = "3.5"; // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let characters = props.characters.characters.filter(char => char.release.version === version);
    let weapons = props.weapons.weapons.filter(wep => wep.release.version === version);

    return (
        <Box
            sx={{
                backgroundColor: "rgba(0, 30, 60)",
                border: "1px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                display: "block",
                margin: "auto",
                mt: "20px",
                p: "10px",
                width: "40vw",
                color: "white",
            }}
        >
            <Typography variant="h4" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "10px" }}>
                {`Version ${version} Highlights`}
            </Typography>
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* NEW CHARACTERS */}
            <Box>
                <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "10px" }}>
                    New Characters
                </Typography>
                <Box>
                    <Grid>
                        {
                            characters.sort((a, b) => a.id > b.id ? 1 : -1).map((char, index) => {
                                return (
                                    <Box
                                        sx={{
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                            width: "195px",
                                            mx: "auto",
                                            my: "10px"
                                        }}>
                                        <ButtonBase disableRipple href={`/project-irminsul/character/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                            <img src={(`${process.env.REACT_APP_URL}/characters/wish/Character_${char.name.split(" ").join("_")}_Wish.png`)} alt={char.name}
                                                style={{
                                                    width: "195px",
                                                    height: "450px",
                                                    objectFit: "cover",
                                                    borderBottom: "1px solid rgb(30, 73, 118)",
                                                    cursor: "pointer",
                                                }} />
                                        </ButtonBase>
                                        <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mt: "5px" }}>
                                            <ButtonBase disableRipple href={`/project-irminsul/character/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                                {char.name}
                                            </ButtonBase>
                                        </Typography>
                                        <Box>
                                            <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${char.rarity}_Stars.png`)} alt={char.rarity}
                                                style={{
                                                    height: "25px",
                                                    display: "block",
                                                    margin: "auto",
                                                    marginBottom: "5px"
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "block",
                                                width: "30%",
                                                mx: "auto",
                                                mb: "5px"
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                }}
                                            >
                                                <MaterialTooltip title={char.element} arrow placement="top">
                                                    <Avatar sx={{
                                                        height: "30px",
                                                        width: "30px",
                                                    }} src={(`${process.env.REACT_APP_URL}/elements/Element_${char.element}.png`)} alt={char.element} />
                                                </MaterialTooltip>
                                                <MaterialTooltip title={char.weapon} arrow placement="top">
                                                    <Avatar sx={{
                                                        height: "30px",
                                                        width: "30px"
                                                    }} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${char.weapon.toLowerCase()}-icon.png`)} alt={char.weapon} />
                                                </MaterialTooltip>
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* NEW WEAPONS */}
            <Box>
                <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "10px" }}>
                    New Weapons
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        {
                            weapons.sort((a, b) => a.rarity < b.rarity ? 1 : -1).sort((a, b) => a.rarity < b.rarity ? 1 : -1).map((wep, index) => {
                                const weaponIcon = {
                                    width: "240px",
                                    height: "240px",
                                    borderRadius: "5px",
                                    borderBottom: "1px solid rgb(30, 73, 118)",
                                    cursor: "pointer",
                                    backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${wep.rarity}_Star.png)`,
                                    backgroundSize: "100%"
                                }
                                return (
                                    <Box
                                        sx={{
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                            width: "240px",
                                            mx: "auto",
                                            my: "10px",
                                        }}>
                                        <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                            <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.name.split(" ").join("_")}.png`)} alt={wep.name} style={weaponIcon} />
                                        </ButtonBase>
                                        <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mt: "5px" }}>
                                            <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                                {wep.name}
                                            </ButtonBase>
                                        </Typography>
                                        <Box>
                                            <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${wep.rarity}_Stars.png`)} alt={wep.rarity}
                                                style={{
                                                    height: "25px",
                                                    display: "block",
                                                    margin: "auto",
                                                    marginBottom: "5px"
                                                }}
                                            />
                                        </Box>
                                        <MaterialTooltip title={wep.type} arrow placement="top">
                                            <Avatar sx={{
                                                height: "30px",
                                                width: "30px",
                                                display: "block",
                                                mx: "auto",
                                                mb: "5px"
                                            }} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${wep.type.toLowerCase()}-icon.png`)} alt={wep.type} />
                                        </MaterialTooltip>
                                    </Box>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        weapons: state.weapons
    }
}

export default connect(mapStateToProps)(VersionHighlights);