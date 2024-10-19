import * as React from "react"
import { connect } from "react-redux"

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
import { updates } from "../helpers/Versions"

// Type imports
import { RootState } from "../redux/store"
import { CharacterData } from "../types/character/CharacterData"
import { WeaponData } from "../types/weapon/WeaponData"
import { ArtifactData } from "../types/artifact/ArtifactData"
import { TCGCardData } from "../types/tcg/TCGData"

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
                    <Typography noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "16px", sm: "20px" }, ml: "5px", lineHeight: "45px" }}>
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
                characters.length > 0 &&
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
                                characters.map((char: CharacterData, index: number) => <CustomCard key={index} type="character" name={char.name} rarity={char.rarity} element={char.element} weaponType={char.weapon} variant="avatar" size="150px" showInfo />)
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
                        sx={{ p: 0, ml: "-10px", mb: "25px" }}
                    />
                    <Box>
                        <Grid container spacing={2.5}>
                            {
                                weapons.map((wep: WeaponData, index: number) => <CustomCard key={index} type="weapon" name={wep.name} displayName={wep.displayName} rarity={wep.rarity} weaponType={wep.type} size="150px" showInfo />)
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
                        sx={{ p: 0, ml: "-10px", mb: "20px" }}
                    />
                    <Box>
                        <Grid container spacing={2.5}>
                            {
                                artifacts.map((artifact: ArtifactData, index: number) => (
                                    <CustomCard key={index} type="artifact" name={artifact.name} rarity={artifact.rarity} size="150px" showInfo artifact={artifact} />
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