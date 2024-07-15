import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Select, MenuItem, AppBar, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomSelect } from "../helpers/CustomSelect";
import CharacterCardLarge from "./characters/CharacterCardLarge";
import WeaponCardLarge from "./weapons/WeaponCardLarge";
import ArtifactCard from "./artifacts/ArtifactCard";
import TCGCharacterCard from "./tcg/TCGCharacterCard";
import TCGActionCard from "./tcg/TCGActionCard";

const VersionHighlights = (props) => {

    const theme = useTheme();

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let updates = [
        { version: "4.8", name: "Summertide Scales and Tales" },
        { version: "4.7", name: "An Everlasting Dream Intertwined" },
        { version: "4.6", name: "Two Worlds Aflame, the Crimson Night Fades" },
        { version: "4.5", name: "Blades Weaving Betwixt Brocade" },
        { version: "4.4", name: "Vibrant Harriers Aloft in Spring Breeze" },
        { version: "4.3", name: "Roses and Muskets" },
        { version: "4.2", name: "Masquerade of the Guilty" },
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
    const [index, setIndex] = React.useState(0);
    const handleIndexChange = (event) => {
        setIndex(event.target.value);
    }
    const handleIndexChangeLeft = () => {
        if (index + 1 < updates.length) setIndex(index + 1);
    }
    const handleIndexChangeRight = () => {
        if (index - 1 >= 0) setIndex(index - 1);
    }

    let version = updates[index].version;

    let characters = props.characters.characters.filter(char => char.release.version === version).sort((a, b) => a.id - b.id);
    let weapons = props.weapons.weapons.filter(wep => wep.release.version === version).sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name));
    let artifacts = props.artifacts.artifacts.filter(artifact => artifact.release.version === version);
    let characterCards = [];
    let actionCards = [];
    if (props.cards.cards[0] !== undefined) { characterCards = props.cards.cards[0].cards.filter(card => card.release.version === version).sort((a, b) => a.name.localeCompare(b.name)) };
    if (props.cards.cards[1] !== undefined) { actionCards = props.cards.cards[1].cards.filter(card => card.release.version === version).sort((a, b) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name)) };
    let newCards = characterCards.length > 0 || actionCards.length > 0;

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
                <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", mt: "5px" }}>
                    {`Version Highlights`}
                </Typography>
            </AppBar>
            <Box
                sx={{
                    display: "flex",
                    margin: "auto",
                    mt: "20px",
                    width: "500px"
                }}
            >
                {
                    index < updates.length - 1 &&
                    <IconButton variant="contained" onClick={handleIndexChangeLeft}>
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, mb: "20px" }}>
                            {`<`}
                        </Typography>
                    </IconButton>
                }
                <Select value={index} label="Version" onChange={handleIndexChange} input={<CustomSelect />} sx={{ mx: "5px", mb: "20px", width: "500px" }}>
                    {
                        updates.map((version, index) => {
                            return (
                                <MenuItem key={index} value={index}>
                                    <Typography sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center" }}>{version.version} - {version.name}</Typography>
                                </MenuItem>
                            )
                        })
                    }
                </Select>
                {
                    index > 0 &&
                    <IconButton variant="contained" onClick={handleIndexChangeRight}>
                        <Typography sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, mb: "20px" }}>
                            {`>`}
                        </Typography>
                    </IconButton>
                }
            </Box>

            {/* NEW CHARACTERS */}
            {
                characters.length > 0 &&
                <Box sx={{ mx: "30px", mb: "20px" }}>
                    <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "20px" }}>
                        New Characters
                    </Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                characters.map((char, index) => <CharacterCardLarge key={index} character={char} />)
                            }
                        </Grid>
                    </Box>
                    {
                        weapons.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px" }} /> : null
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
                                weapons.map((wep, index) => <WeaponCardLarge key={index} weapon={wep} viewSource="version-highlights" />)
                            }
                        </Grid>
                    </Box>
                    {
                        artifacts.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px" }} /> : null
                    }
                </Box>
            }

            {/* NEW ARTIFACTS */}
            {
                artifacts.length > 0 &&
                <Box sx={{ mx: "30px", mb: "20px" }}>
                    <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "20px" }}>
                        New Artifacts
                    </Typography>
                    <Box>
                        <Grid container spacing={2}>
                            {
                                artifacts.map((artifact, index) => (
                                    <Box sx={{ mx: "auto", my: "10px" }} key={index}>
                                        <ArtifactCard artifact={artifact} />
                                    </Box>
                                ))
                            }
                        </Grid>
                    </Box>
                    {
                        newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px" }} /> : null
                    }
                </Box>
            }

            {/* NEW TCG CARDS */}
            {
                newCards &&
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
            }
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        weapons: state.weapons,
        artifacts: state.artifacts,
        cards: state.cards
    }
}

export default connect(mapStateToProps)(VersionHighlights);