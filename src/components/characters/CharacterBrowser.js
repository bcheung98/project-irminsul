import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Paper, InputBase, Stack, ToggleButtonGroup } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import CharacterFilters from "./filters/_CharacterFilters";
import { filterCharacters } from "../../helpers/FilterCharacters";
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { CustomToggleButton } from "../../helpers/CustomToggleButton";
import { blue } from '@mui/material/colors';

const CharacterBrowser = (props) => {

    const theme = useTheme();

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

    let { characters, characterFilters } = props;

    document.title = "Characters - Project Irminsul";

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
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
                    CHARACTERS
                </Typography>
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: `1px solid ${theme.border.color}` }}>
                        <CustomToggleButton value="grid">
                            <AppsSharpIcon sx={{ color: blue[50] }} />
                        </CustomToggleButton>
                        <CustomToggleButton value="list">
                            <ListSharpIcon sx={{ color: blue[50] }} />
                        </CustomToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid xs={9}>
                    <Grid container>
                        {characters.characters.length > 0 &&
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        filterCharacters(characters.characters, characterFilters, searchValue).map(char => <CharacterCard key={char.id} character={char} />)
                                        :
                                        <CharacterList characters={filterCharacters(characters.characters, characterFilters, searchValue)} />
                                }
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
                <Grid xs={3}>
                    <Paper
                        sx={{
                            border: `2px solid ${theme.border.color}`,
                            borderRadius: "5px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            display: "flex",
                            margin: "auto",
                            height: "40px",
                            width: "84.5%",
                            marginBottom: "10px",
                            marginLeft: "35px",
                        }}
                    >
                        <InputBase
                            sx={{
                                marginLeft: "10px",
                                flex: 1,
                                color: `${theme.text.color}`,
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
        characterFilters: state.characterFilters
    }
}

export default connect(mapStateToProps)(CharacterBrowser);