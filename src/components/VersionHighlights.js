import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar, Select, MenuItem, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialTooltip } from "../helpers/MaterialTooltip";
import TCGCharacterCard from "./tcg/TCGCharacterCard";
import TCGActionCard from "./tcg/TCGActionCard";

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
            boxShadow: "0 0 0 0.2rem rgba(0, 12, 255, .25)",
            backgroundColor: "white",
        },
    },
}));

const VersionHighlights = (props) => {

    const theme = useTheme();

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let versions = ["3.8", "3.7", "3.6", "3.5", "3.4", "3.3", "3.2", "3.1", "3.0", "2.8", "2.7", "2.6", "2.5", "2.4", "2.3", "2.2", "2.1", "2.0", "1.6", "1.5", "1.4", "1.3", "1.2", "1.1", "1.0"]
    let versionNames = [
        "Secret Summer Paradise",
        "Duel! The Summoners' Summit!",
        "A Parade of Providence",
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
    let characterCards = [];
    let actionCards = [];
    if (props.cards.cards[0] !== undefined) { characterCards = props.cards.cards[0].cards.filter(card => card.release.version === version) };
    if (props.cards.cards[1] !== undefined) { actionCards = props.cards.cards[1].cards.filter(card => card.release.version === version).sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1).sort((a, b) => a.subType.toLowerCase() > b.subType.toLowerCase() ? 1 : -1) };

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                display: "block",
                margin: "auto",
                mt: "20px",
                p: "10px",
                width: "50vw",
                color: `${theme.text.color}`,
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

            {/* NEW CHARACTERS */}
            {
                characters.length > 0 &&
                <Box>
                    <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
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
                                                border: `1px solid ${theme.border.color}`,
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
                                                        borderBottom: `1px solid ${theme.border.color}`,
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
                                                <Box sx={{ display: "flex" }}>
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
            }

            {/* NEW WEAPONS */}
            {
                weapons.length > 0 &&
                <Box>
                    <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
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
                                        borderBottom: `1px solid ${theme.border.color}`,
                                        cursor: "pointer",
                                        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${wep.rarity}_Star.png)`,
                                        backgroundSize: "100%"
                                    }
                                    return (
                                        <Box
                                            sx={{
                                                border: `1px solid ${theme.border.color}`,
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
            }

            {/* NEW TCG CARDS */}
            {
                characterCards.length > 0 || actionCards.length > 0 ?
                    <Box>
                        <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
                        <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "30px" }}>
                            New TCG Cards
                        </Typography>
                        <Grid container>
                            {
                                characterCards.map((card, index) => (
                                    <Box sx={{ mx: "auto", my: "10px" }} key={index}>
                                        <TCGCharacterCard key={card.name} char={card} preview />
                                    </Box>
                                ))
                            }
                        </Grid>
                        <Grid container>
                            {
                                actionCards.map((card, index) => (
                                    <Box sx={{ mx: "auto", my: "10px" }} key={index}>
                                        <TCGActionCard key={card.name} card={card} preview />
                                    </Box>
                                ))
                            }
                        </Grid>
                    </Box>
                    :
                    null
            }
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        weapons: state.weapons,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(VersionHighlights);