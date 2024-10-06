import { connect } from "react-redux"

// Component imports
import CharacterSelector from "./CharacterSelector"
import CharacterAscensionCard from "./_CharacterAscensionCard"
import WeaponSelector from "./WeaponSelector"
import WeaponAscensionCard from "./_WeaponAscensionCard"
import AscensionTotalCost from "./AscensionTotalCost"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Type imports
import { CharacterData } from "../../types/character/CharacterData"
import { WeaponData } from "../../types/weapon/WeaponData"
import { RootState } from "../../redux/store"
import React from "react"

function AscensionPlanner(props: any) {

    const theme = useTheme()

    let { characters, weapons } = props

    document.title = `Ascension Planner ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        fontFamily: `${theme.font.genshin.family}`,
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    Ascension Planner
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <CharacterSelector />
                <WeaponSelector />
            </Grid>
            <AscensionTotalCost />
            <Grid container spacing={2}>
                {
                    characters.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {characters.map((character: CharacterData) => <CharacterAscensionCard key={character.id} character={character} />)}
                            </Grid>
                        </Grid>
                        :
                        null
                }
                {
                    weapons.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {weapons.map((weapon: WeaponData) => <WeaponAscensionCard key={weapon.id} weapon={weapon} />)}
                            </Grid>
                        </Grid>
                        :
                        null
                }
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    characters: state.ascensionPlanner.characters,
    weapons: state.ascensionPlanner.weapons
})

export default connect(mapStateToProps)(AscensionPlanner)