import * as React from "react";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Paper, InputBase, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import CharacterFilters from "./filters/_CharacterFilters";
import { filterCharacters } from "../../helpers/FilterCharacters";
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { blue } from '@mui/material/colors';

const StyledToggleButton = styled(ToggleButton)(() => ({
    "&.MuiToggleButton-root": {
        "&.Mui-selected": {
            backgroundColor: "rgb(0, 127, 255)"
        }
    }
}));

const CharacterBrowser = (props) => {

    const [searchValue, setSearchValue] = React.useState("");
    const [view, setView] = React.useState("grid");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }

    let { characters, filters } = props;

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
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
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: "1px solid rgb(30, 73, 118)" }}>
                        <StyledToggleButton value="grid">
                            <AppsSharpIcon sx={{ color: blue[50] }} />
                        </StyledToggleButton>
                        <StyledToggleButton value="list">
                            <ListSharpIcon sx={{ color: blue[50] }} />
                        </StyledToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid item xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        filterCharacters(characters.characters, filters, searchValue).map(char => <CharacterCard key={char.id} character={char} />)
                                        :
                                        <CharacterList characters={filterCharacters(characters.characters, filters, searchValue)} />
                                }
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper sx={{
                        border: "2px solid rgb(30, 73, 118)",
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