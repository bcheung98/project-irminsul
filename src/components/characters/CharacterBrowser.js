import * as React from "react";
import { connect } from "react-redux";
import { Typography, Paper, InputBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";
import CharacterFilters from "./filters/_CharacterFilters";
import { filterCharacters } from "../../helpers/FilterCharacters";

const CharacterBrowser = (props) => {

    const [searchValue, setSearchValue] = React.useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    let { characters, filters } = props;

    return (
        <React.Fragment>
            <Typography
                variant="h4"
                noWrap
                component="a"
                sx={{
                    mx: "25px",
                    my: "20px",
                    display: { xs: "none", md: "flex" },
                    fontFamily: "Genshin, sans-serif",
                    letterSpacing: ".2rem",
                    color: "white",
                    textDecoration: "none",
                    textAlign: "center",
                }}
            >
                CHARACTERS
            </Typography>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid item xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            filterCharacters(characters.characters, filters, searchValue).map(char => <CharacterCard key={char.id} character={char} />)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{
                        border: "1px solid rgb(30, 73, 118)",
                        borderRadius: "5px",
                        backgroundColor: "rgb(0, 30, 60)",
                        display: "flex",
                        margin: "auto",
                        height: "40px",
                        width: "84.5%",
                        marginBottom: "10px",
                        marginLeft: "35px",
                    }}>
                        <InputBase
                            sx={{
                                marginLeft: "10px",
                                flex: 1,
                                color: "white",
                                fontFamily: "Genshin, sans-serif",
                            }}
                            placeholder="Search"
                            onChange={handleInputChange}
                        />
                    </Paper>
                    <CharacterFilters />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(CharacterBrowser);