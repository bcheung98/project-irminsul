import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CharacterCard from "./CharacterCard"
import CharacterList from "./CharacterList"
import CharacterFilters from "./CharacterFilters"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { useMediaQuery, Box, Typography, Paper, InputBase, ToggleButtonGroup, SwipeableDrawer } from "@mui/material"
import Grid from "@mui/material/Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

// Helper imports
import { filterCharacters } from "../../helpers/FilterCharacters"
import { CustomToggleButton } from "../_custom/CustomToggleButton"

// Type imports
import { RootState } from "../../redux/store"

function CharacterBrowser(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const [view, setView] = React.useState("grid")
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)
        }
    }

    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return
                }
                setDrawerOpen(open)
            }

    let { characters, characterFilters } = props

    document.title = `Characters ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                    Characters
                </Typography>
                <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ border: `1px solid ${theme.border.color}` }}>
                    <CustomToggleButton value="grid" size="small">
                        <AppsSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                    <CustomToggleButton value="list" size="small">
                        <ListSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                </ToggleButtonGroup>
                <FilterAltIcon sx={{ display: { xs: "block", md: "none" }, flexGrow: 1, color: `white` }} fontSize="large" onClick={toggleDrawer(true)} />
            </Box>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        characters.characters.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        <Grid container spacing={2}>
                                            {filterCharacters(characters.characters, characterFilters, searchValue).map(char => <CharacterCard key={char.id} character={char} />)}
                                        </Grid>
                                        :
                                        <CharacterList characters={filterCharacters(characters.characters, characterFilters, searchValue)} />
                                }
                            </React.Fragment>
                            :
                            null
                    }
                </Grid>
                {
                    matches &&
                    <Grid size={2.75}>
                        <Paper
                            sx={{
                                border: `2px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                display: "flex",
                                height: "40px",
                                mb: "10px",
                            }}
                        >
                            <InputBase
                                sx={{
                                    marginLeft: "10px",
                                    flex: 1,
                                    color: `${theme.text.color}`,
                                    fontFamily: `${theme.font.genshin.family}`,
                                }}
                                placeholder="Search"
                                onChange={handleInputChange}
                            />
                        </Paper>
                        <CharacterFilters />
                    </Grid>
                }
            </Grid>
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                sx={{ [`& .MuiDrawer-paper`]: { borderTop: `2px solid ${theme.border.colorAlt}`, backgroundColor: `${theme.appbar.backgroundColor}`, height: "50vh", p: 2 } }}
            >
                <Paper
                    sx={{
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        display: "flex",
                        height: "40px",
                        mb: "10px",
                    }}
                >
                    <InputBase
                        sx={{
                            marginLeft: "10px",
                            flex: 1,
                            color: `${theme.text.color}`,
                            fontFamily: `${theme.font.genshin.family}`,
                        }}
                        placeholder="Search"
                        onChange={handleInputChange}
                    />
                </Paper>
                <CharacterFilters />
            </SwipeableDrawer>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    characters: state.characters,
    characterFilters: state.characterFilters
})

export default connect(mapStateToProps)(CharacterBrowser)