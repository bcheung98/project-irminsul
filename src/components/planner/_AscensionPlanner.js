import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterSelector from "./CharacterSelector";
import WeaponSelector from "./WeaponSelector";
import CharacterAscensionCard from "./_CharacterAscensionCard";
import WeaponAscensionCard from "./_WeaponAscensionCard";
import AscensionTotalCost from "./AscensionTotalCost";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    let { characters, weapons } = props;

    document.title = "Ascension Planner | Project Irminsul";

    return (
        <Box>
            <Typography variant="h4"
                sx={{
                    mx: "25px",
                    my: "20px",
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Genshin, sans-serif",
                    letterSpacing: ".2rem",
                    color: `${theme.text.color}`,
                    textDecoration: "none",
                    textAlign: "center",
                }}
            >
                ASCENSION PLANNER
            </Typography>
            <Box sx={{ display: "block", my: "30px" }}>
                <Box sx={{ display: "flex" }}>
                    <CharacterSelector />
                    <WeaponSelector />
                </Box>
            </Box>
            <AscensionTotalCost />
            <Box sx={{ mx: "20px" }}>
                <Grid container>
                    <Grid>
                        {characters.map(character => <CharacterAscensionCard key={character.id} character={character} />)}
                    </Grid>
                    <br />
                    <Grid>
                        {weapons.map(weapon => <WeaponAscensionCard key={weapon.id} weapon={weapon} />)}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.ascensionPlanner.characters,
        weapons: state.ascensionPlanner.weapons,
    }
}

export default connect(mapStateToProps)(AscensionPlanner);