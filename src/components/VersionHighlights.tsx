import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CharacterCardLarge from "./characters/CharacterCardLarge"
import WeaponCardLarge from "./weapons/WeaponCardLarge"
import ArtifactCard from "./artifacts/ArtifactCard"
import TCGCharacterCard from "./tcg/TCGCharacterCard"
import TCGActionCard from "./tcg/TCGActionCard"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Select, AppBar, IconButton, SelectChangeEvent, CardHeader } from "@mui/material"
import Grid from "@mui/material/Grid2"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

// Helper imports
import { CustomInput } from "./_custom/CustomInput"
import { CustomMenuItem } from "./_custom/CustomMenu"

// Type imports
import { RootState } from "../redux/store"
import { CharacterData } from "../types/character/CharacterData"
import { WeaponData } from "../types/weapon/WeaponData"
import { ArtifactData } from "../types/artifact/ArtifactData"
import { TCGCardData } from "../types/tcg/TCGData"

function VersionHighlights(props: any) {

    const theme = useTheme()

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let updates = [
        { version: "5.1", name: "The Rainbow Destined to Burn" },
        { version: "5.0", name: "Flowers Resplendent on the Sun-Scorched Sojourn" },
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
    const [index, setIndex] = React.useState(0)
    const handleIndexChange = (event: SelectChangeEvent) => {
        setIndex(Number(event.target.value))
    }
    const handleIndexChangeLeft = () => {
        if (index + 1 < updates.length) setIndex(index + 1)
    }
    const handleIndexChangeRight = () => {
        if (index - 1 >= 0) setIndex(index - 1)
    }

    let version = updates[index].version

    let characters = props.characters.characters.filter((char: CharacterData) => char.release.version === version).sort((a: CharacterData, b: CharacterData) => a.id - b.id)
    let weapons = props.weapons.weapons.filter((wep: WeaponData) => wep.release.version === version).sort((a: WeaponData, b: WeaponData) => b.rarity - a.rarity || a.name.localeCompare(b.name))
    let artifacts = props.artifacts.artifacts.filter((artifact: ArtifactData) => artifact.release.version === version)
    let characterCards = []
    let actionCards = []
    if (props.cards.cards[0] !== undefined) { characterCards = props.cards.cards[0].cards.filter((card: TCGCardData) => card.release.version === version).sort((a: TCGCardData, b: TCGCardData) => a.name.localeCompare(b.name)) }
    if (props.cards.cards[1] !== undefined) { actionCards = props.cards.cards[1].cards.filter((card: TCGCardData) => card.release.version === version).sort((a: TCGCardData, b: TCGCardData) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name)) }
    let newCards = characterCards.length > 0 || actionCards.length > 0

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                    height: "70px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6" noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, ml: "5px", lineHeight: "45px" }}>
                        Version Highlights
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ width: "32px" }}>
                            {
                                index < updates.length - 1 &&
                                <IconButton onClick={handleIndexChangeLeft}>
                                    <KeyboardArrowLeftIcon sx={{ color: `${theme.text.color}`, mt: "2px", ml: "-10px" }} />
                                </IconButton>
                            }
                        </Box>
                        <Select
                            value={index.toString()}
                            label="Version"
                            onChange={handleIndexChange}
                            input={<CustomInput />}
                            sx={{
                                width: "75px",
                                "& .MuiSelect-icon": {
                                    color: "white"
                                }
                            }}
                        >
                            {
                                updates.map((version, index) => (
                                    <CustomMenuItem key={index} value={index}>
                                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11pt", color: `${theme.text.color}` }}>
                                            {version.version}
                                        </Typography>
                                    </CustomMenuItem>
                                ))
                            }
                        </Select>
                        <Box sx={{ width: "32px" }}>
                            {
                                index > 0 &&
                                <IconButton onClick={handleIndexChangeRight}>
                                    <KeyboardArrowRightIcon sx={{ color: `${theme.text.color}`, mt: "2px" }} />
                                </IconButton>
                            }
                        </Box>
                    </Box>
                </Box>
            </AppBar>

            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "18pt", color: `${theme.text.color}`, mx: "30px", my: "20px" }}>
                {updates[index].version} - <i>{updates[index].name}</i>
            </Typography>

            {/* NEW CHARACTERS */}
            {
                characters.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Aether.png`} alt="New Characters" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Characters
                            </Typography>
                        }
                        sx={{ p: 0, mb: "20px" }}
                    />
                    <Box>
                        <Grid container spacing={2}>
                            {
                                characters.map((char: CharacterData, index: number) => <CharacterCardLarge key={index} character={char} />)
                            }
                        </Grid>
                    </Box>
                    {
                        weapons.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} /> : null
                    }
                </Box>
            }

            {/* NEW WEAPONS */}
            {
                weapons.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Weapons.png`} alt="New Weapons" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Weapons
                            </Typography>
                        }
                        sx={{ p: 0, mb: "20px" }}
                    />
                    <Box>
                        <Grid container spacing={2}>
                            {
                                weapons.map((wep: WeaponData, index: number) => <WeaponCardLarge key={index} weapon={wep} />)
                            }
                        </Grid>
                    </Box>
                    {
                        artifacts.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} /> : null
                    }
                </Box>
            }

            {/* NEW ARTIFACTS */}
            {
                artifacts.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Artifact.png`} alt="New Artifacts" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Artifacts
                            </Typography>
                        }
                        sx={{ p: 0, mb: "20px" }}
                    />
                    <Box>
                        <Grid container spacing={2}>
                            {
                                artifacts.map((artifact: ArtifactData, index: number) => (
                                    <ArtifactCard key={index} artifact={artifact} />
                                ))
                            }
                        </Grid>
                    </Box>
                    {
                        newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} /> : null
                    }
                </Box>
            }

            {/* NEW TCG CARDS */}
            {
                newCards &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/tcg.png`} alt="New TCG Cards" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New TCG Cards
                            </Typography>
                        }
                        sx={{ p: 0, mb: "30px" }}
                    />
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            characterCards.map((card: TCGCardData, index: number) => (
                                <TCGCharacterCard key={index} char={card} preview />
                            ))
                        }
                    </Grid>
                    <br />
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            actionCards.map((card: TCGCardData, index: number) => (
                                <TCGActionCard key={index} card={card} preview />
                            ))
                        }
                    </Grid>
                </Box>
            }
            <br />
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({
    characters: state.characters,
    weapons: state.weapons,
    artifacts: state.artifacts,
    cards: state.cards
})

export default connect(mapStateToProps)(VersionHighlights)