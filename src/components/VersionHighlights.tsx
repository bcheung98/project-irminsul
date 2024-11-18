import * as React from "react"
import { useSelector } from "react-redux"

// Component imports
import CustomCard from "./_custom/CustomCard"
import TCGCharacterCard from "./tcg/TCGCharacterCard"
import TCGActionCard from "./tcg/TCGActionCard"
import { CustomInput } from "./_custom/CustomInput"
import { CustomMenuItem } from "./_custom/CustomMenu"

// MUI imports
import { useTheme, Box, Typography, Select, AppBar, IconButton, SelectChangeEvent, CardHeader } from "@mui/material"
import Grid from "@mui/material/Grid2"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

// Helper imports
import { updates } from "../data/Versions"

// Type imports
import { RootState } from "../redux/store"
import { Character } from "types/character"
import { Weapon } from "types/weapon"
import { Artifact } from "types/artifact"
import { TCGCard } from "types/tcg"

function VersionHighlights(props: any) {

    const theme = useTheme()

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

    const version = updates[index].version

    const characters = useSelector((state: RootState) => state.characters.characters)
    const weapons = useSelector((state: RootState) => state.weapons.weapons)
    const artifacts = useSelector((state: RootState) => state.artifacts.artifacts)
    const characterCards = useSelector((state: RootState) => state.cards.characterCards)
    const actionCards = useSelector((state: RootState) => state.cards.actionCards)

    const currentCharacters = characters.filter((char: Character) => char.release.version === version).sort((a, b) => a.id - b.id)
    const currentWeapons = weapons.filter((wep: Weapon) => wep.release.version === version).sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
    const currentArtifacts = artifacts.filter((artifact: Artifact) => artifact.release.version === version)
    const currentCharacterCards = characterCards.filter((card: TCGCard) => card.release.version === version).sort((a, b) => a.name.localeCompare(b.name))
    const currentActionCards = actionCards.filter((card: TCGCard) => card.release.version === version).sort((a, b) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name))
    const newCards = [...characterCards, ...actionCards].length > 0

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
                    minHeight: "70px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", ml: "5px", lineHeight: "45px" }}>
                        Version Highlights
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ width: "24px" }}>
                            {
                                index < updates.length - 1 &&
                                <IconButton onClick={handleIndexChangeLeft} sx={{ px: 0 }}>
                                    <KeyboardArrowLeftIcon sx={{ color: `${theme.text.color}`, mt: "2px", mr: 0 }} />
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
                                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", sm: "16px" }, color: `${theme.text.color}` }}>
                                            {version.version}
                                        </Typography>
                                    </CustomMenuItem>
                                ))
                            }
                        </Select>
                        <Box sx={{ width: "24px" }}>
                            {
                                index > 0 &&
                                <IconButton onClick={handleIndexChangeRight} sx={{ px: 0 }}>
                                    <KeyboardArrowRightIcon sx={{ color: `${theme.text.color}`, mt: "2px" }} />
                                </IconButton>
                            }
                        </Box>
                    </Box>
                </Box>
            </AppBar>

            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "20px", sm: "24px" }, color: `${theme.text.color}`, mx: "20px", my: "20px" }}>
                {updates[index].version} - <i>{updates[index].name}</i>
            </Typography>

            {/* NEW CHARACTERS */}
            {
                currentCharacters.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Aether.png`} alt="New Characters" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Characters
                            </Typography>
                        }
                        sx={{ p: 0, ml: "-10px", mb: "25px" }}
                    />
                    <Box>
                        <Grid container spacing={2.5}>
                            {
                                currentCharacters.map((char, index) => <CustomCard key={index} type="character" name={char.name} rarity={char.rarity} element={char.element} weaponType={char.weapon} variant="avatar" size="128px" showInfo />)
                            }
                        </Grid>
                    </Box>
                    {
                        currentWeapons.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} /> : null
                    }
                </Box>
            }

            {/* NEW WEAPONS */}
            {
                currentWeapons.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Weapons.png`} alt="New Weapons" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Weapons
                            </Typography>
                        }
                        sx={{ p: 0, ml: "-10px", mb: "25px" }}
                    />
                    <Box>
                        <Grid container spacing={2.5}>
                            {
                                currentWeapons.map((wep, index) => <CustomCard key={index} type="weapon" name={wep.name} displayName={wep.displayName} rarity={wep.rarity} weaponType={wep.type} size="128px" showInfo />)
                            }
                        </Grid>
                    </Box>
                    {
                        currentArtifacts.length > 0 || newCards ? <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 25px 0px" }} /> : null
                    }
                </Box>
            }

            {/* NEW ARTIFACTS */}
            {
                currentArtifacts.length > 0 &&
                <Box sx={{ mx: "30px" }}>
                    <CardHeader
                        avatar={<img src={`${process.env.REACT_APP_URL}/icons/Artifact.png`} alt="New Artifacts" style={{ width: "40px", marginRight: "-5px" }} />}
                        title={
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                New Artifacts
                            </Typography>
                        }
                        sx={{ p: 0, ml: "-10px", mb: "20px" }}
                    />
                    <Box>
                        <Grid container spacing={2.5}>
                            {
                                currentArtifacts.map((artifact, index) => (
                                    <CustomCard key={index} type="artifact" name={artifact.name} rarity={artifact.rarity} size="128px" showInfo artifact={artifact} />
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
                        sx={{ p: 0, ml: "-10px", mb: "30px" }}
                    />
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            currentCharacterCards.map((card, index) => (
                                <TCGCharacterCard key={index} char={card} preview />
                            ))
                        }
                    </Grid>
                    <br />
                    <Grid container rowSpacing={3} columnSpacing={0}>
                        {
                            currentActionCards.map((card, index) => (
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

export default VersionHighlights