import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Select, MenuItem, AppBar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomSelect } from "../helpers/CustomSelect";
import TCGCharacterCard from "./tcg/TCGCharacterCard";
import TCGActionCard from "./tcg/TCGActionCard";
import CharacterCardLarge from "./characters/CharacterCardLarge";
import WeaponCardLarge from "./weapons/WeaponCardLarge";

const VersionHighlights = (props) => {

    const theme = useTheme();

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let updates = [
        { version: "4.1", name: "To the Stars Shining in the Depths" },
        { version: "4.0", name: "As Light Rain Falls Without Reason" },
        { version: "3.8", name: "Secret Summer Paradise" },
        { version: "3.7", name: "Duel! The Summoners' Summit!" },
        { version: "3.6", name: "A Parade of Providence" },
        { version: "3.5", name: "Windblume's Breath" },
        { version: "3.4", name: "The Exquisite Night Chimes" },
        { version: "3.3", name: "All Senses Clear, All Existence Void" },
        { version: "3.2", name: "Akasha Pulses, the Kalpa Flame Rises" },
        { version: "3.1", name: "King Deshret and the Three Magi" },
        { version: "3.0", name: "The Morn a Thousand Roses Brings" },
        { version: "2.8", name: "Summer Fantasia" },
        { version: "2.7", name: "Hidden Dreams in the Depths" },
        { version: "2.6", name: "Zephyr of the Violet Garden" },
        { version: "2.5", name: "When the Sakura Bloom" },
        { version: "2.4", name: "Fleeting Colors in Flight" },
        { version: "2.3", name: "Shadows Amidst Snowstorms" },
        { version: "2.2", name: "Into the Perilous Labyrinth of Fog" },
        { version: "2.1", name: "Floating World Under the Moonlight" },
        { version: "2.0", name: "The Immovable God and the Eternal Euthymia" },
        { version: "1.6", name: "Midsummer Island Adventure" },
        { version: "1.5", name: "Beneath the Light of Jadeite" },
        { version: "1.4", name: "Invitation of Windblume" },
        { version: "1.3", name: "All That Glitters" },
        { version: "1.2", name: "The Chalk Prince and the Dragon" },
        { version: "1.1", name: "A New Star Approaches" },
        { version: "1.0", name: "Welcome to Teyvat" }
    ]
    const [version, setVersion] = React.useState(updates[0].version);
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
                width: "50vw",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
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
                    <Select value={version} label="Version" onChange={handleVersionChange} input={<CustomSelect />}>
                        {
                            updates.map((version, index) => {
                                return (
                                    <MenuItem key={index} value={version.version}>
                                        <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{version.version} - {version.name}</Typography>
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </Box>
            </AppBar>

            {/* NEW CHARACTERS */}
            {
                characters.length > 0 &&
                <Box sx={{ mx: "30px", my: "20px" }}>
                    <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "20px" }}>
                        New Characters
                    </Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                characters.sort((a, b) => a.id > b.id ? 1 : -1).map((char, index) => <CharacterCardLarge key={index} character={char} />)
                            }
                        </Grid>
                    </Box>
                    {
                        weapons.length > 0 && <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px" }} />
                    }
                </Box>
            }

            {/* NEW WEAPONS */}
            {
                weapons.length > 0 &&
                <Box sx={{ mx: "30px", my: "20px" }}>
                    <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "20px" }}>
                        New Weapons
                    </Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                weapons.sort((a, b) => a.rarity < b.rarity ? 1 : -1).sort((a, b) => a.rarity < b.rarity ? 1 : -1).map((wep, index) => <WeaponCardLarge key={index} weapon={wep} />)
                            }
                        </Grid>
                    </Box>
                    {
                        characterCards.length > 0 || actionCards.length > 0 ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px" }} /> : null
                    }
                </Box>
            }

            {/* NEW TCG CARDS */}
            {
                characterCards.length > 0 || actionCards.length > 0 ?
                    <Box sx={{ mx: "10px", my: "20px" }}>
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