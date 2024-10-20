import { connect } from "react-redux"

// Component imports
import CharacterSelector from "./CharacterSelector"
import CharacterAscensionCard from "./_CharacterAscensionCard"
import WeaponSelector from "./WeaponSelector"
import WeaponAscensionCard from "./_WeaponAscensionCard"
import AscensionTotalCost from "./AscensionTotalCost"

// MUI imports
import { useTheme, Typography } from "@mui/material"
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
            <Typography
                sx={{
                    mb: "20px",
                    fontFamily: `${theme.font.genshin.family}`,
                    fontSize: "24px",
                    color: `${theme.text.color}`,
                    lineHeight: "40px"
                }}
            >
                Ascension Planner
            </Typography>
            <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
                <CharacterSelector />
                <WeaponSelector />
            </Grid>
            <AscensionTotalCost />
            <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
                {
                    characters.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {characters.map((character: CharacterData) => <CharacterAscensionCard key={character.name} character={character} />)}
                            </Grid>
                        </Grid>
                        :
                        null
                }
                {
                    weapons.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {weapons.map((weapon: WeaponData) => <WeaponAscensionCard key={weapon.name} weapon={weapon} />)}
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