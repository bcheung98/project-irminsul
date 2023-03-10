import * as React from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar, Select, MenuItem, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../helpers/MaterialTooltip";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 5,
        backgroundColor: "white",
        border: "1px solid #ced4da",
        fontFamily: "Genshin, sans-serif",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,12,255,.25)",
            backgroundColor: "white",
        },
    },
}));

const VersionHighlights = (props) => {

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let versions = ["3.5", "3.4", "3.3", "3.2", "3.1", "3.0", "2.8", "2.7", "2.6", "2.5", "2.4", "2.3", "2.2", "2.1", "2.0", "1.6", "1.5", "1.4", "1.3", "1.2", "1.1", "1.0"]
    let versionNames = [
        "Windblume's Breath",
        "The Exquisite Night Chimes",
        "All Senses Clear, All Existence Void",
        "Akasha Pulses, the Kalpa Flame Rises",
        "King Deshret and the Three Magi",
        "The Morn a Thousand Roses Brings",
        "Summer Fantasia",
        "Hidden Dreams in the Depths",
        "Zephyr of the Violet Garden",
        "When the Sakura Bloom",
        "Fleeting Colors in Flight",
        "Shadows Amidst Snowstorms",
        "Into the Perilous Labyrinth of Fog",
        "Floating World Under the Moonlight",
        "The Immovable God and the Eternal Euthymia",
        "Midsummer Island Adventure",
        "Beneath the Light of Jadeite",
        "Invitation of Windblume",
        "All That Glitters",
        "The Chalk Prince and the Dragon",
        "A New Star Approaches",
        "Welcome to Teyvat"
    ]
    const [version, setVersion] = React.useState(versions[0]);
    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }

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
                width: "50vw",
                color: "white",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", mt: "5px" }}>
                    {`Version Highlights`}
                </Typography>
                <Select value={version} label="Day" onChange={handleVersionChange} input={<BootstrapInput />}>
                    {versions.map((version, index) => <MenuItem key={index} value={version}><Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{version} - {versionNames[index]}</Typography></MenuItem>)}
                </Select>
            </Box>
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* NEW CHARACTERS */}
            <Box>
                <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "10px" }}>
                    New Characters
                </Typography>
                <Box>
                    <Grid container spacing={2}>
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
                                        }}
                                        key={index}
                                    >
                                        <ButtonBase disableRipple href={`/project-irminsul/character/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                            <img src={(`${process.env.REACT_APP_URL}/characters/wish/Character_${char.name.split(" ").join("_")}_Wish.png`)} alt={char.name}
                                                style={{
                                                    width: "195px",
                                                    height: "450px",
                                                    objectFit: "cover",
                                                    borderBottom: "1px solid rgb(30, 73, 118)",
                                                    cursor: "pointer",
                                                }}
                                            />
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
                                        }}
                                        key={index}
                                    >
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