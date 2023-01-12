import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../../redux/actions/fetchCharacters";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";

const CharacterBrowser = (props) => {

    useEffect(() => {
        fetchCharacters();
    }, [])

    let { characters, fetchCharacters } = props;

    return (
        <React.Fragment>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mx: "25px",
                    my: "20px",
                    display: { xs: "none", md: "flex" },
                    fontSize: "20pt",
                    fontFamily: "Genshin, sans-serif",
                    letterSpacing: ".2rem",
                    color: "white",
                    textDecoration: "none",
                    textAlign: "center",
                }}
            >
                CHARACTERS
            </Typography>
            <Grid container>
                <Grid item xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            characters.characters.map(char => <CharacterCard key={char.id} character={char} />)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterBrowser);