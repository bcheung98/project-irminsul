import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"
import SearchBar from "../_custom/SearchBar"
import CharacterCard from "./CharacterCard"
import CharacterList from "./CharacterList"
import CharacterFilters from "./CharacterFilters"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, ToggleButtonGroup, Dialog, SwipeableDrawer } from "@mui/material"
import Grid from "@mui/material/Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ViewModuleSharpIcon from "@mui/icons-material/ViewModuleSharp"
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

    const defaultView = matches ? "grid" : "card"
    const [view, setView] = React.useState(defaultView)
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)
        }
    }

    const [dialogOpen, setDialogOpen] = React.useState(false)
    const handleDialogOpen = () => {
        setDialogOpen(true)
    }
    const handleDialogClose = () => {
        setDialogOpen(false)
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
            <Grid container rowSpacing={2} columnSpacing={4} sx={{ mb: "20px" }}>
                <Grid size={{ xs: 12, sm: "auto" }}>
                    <Box sx={{ display: "flex" }}>
                        <Typography
                            sx={{
                                mr: "25px",
                                fontFamily: `${theme.font.genshin.family}`,
                                fontSize: "24px",
                                color: `${theme.text.color}`,
                                lineHeight: "40px"
                            }}
                        >
                            Characters
                        </Typography>
                        <ToggleButtonGroup value={view} exclusive onChange={handleView}>
                            <CustomToggleButton value="card" size="small">
                                <AppsSharpIcon sx={{ color: `white` }} />
                            </CustomToggleButton>
                            <CustomToggleButton value="grid" size="small">
                                <ViewModuleSharpIcon sx={{ color: `white` }} />
                            </CustomToggleButton>
                            <CustomToggleButton value="list" size="small">
                                <ListSharpIcon sx={{ color: `white` }} />
                            </CustomToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid size="grow">
                    <Box sx={{ display: "flex" }}>
                        <Button
                            onClick={matches ? () => handleDialogOpen() : toggleDrawer(true)}
                            variant="contained"
                            startIcon={<FilterAltIcon sx={{ color: `${theme.text.color}` }} />}
                            sx={{ px: 3, mr: "25px" }}
                        >
                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "12px", sm: "14px" } }}>
                                Filters
                            </Typography>
                        </Button>
                        <SearchBar placeholder="Search" onChange={handleInputChange} size={{ width: "80%", height: "40px" }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        characters.characters.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "card" &&
                                    <Grid container spacing={2.5}>
                                        {
                                            filterCharacters(characters.characters, characterFilters, searchValue)
                                                .map(char => <CustomCard key={char.id} type="character" name={char.name} rarity={char.rarity} element={char.element} weaponType={char.weapon} variant="avatar" size="128px" showInfo />)
                                        }
                                    </Grid>
                                }
                                {
                                    view === "grid" &&
                                    <Grid container spacing={2}>
                                        {
                                            filterCharacters(characters.characters, characterFilters, searchValue)
                                                .map(char => <CharacterCard key={char.id} character={char} />)
                                        }
                                    </Grid>
                                }
                                {
                                    view === "list" &&
                                    <CharacterList characters={filterCharacters(characters.characters, characterFilters, searchValue)} />
                                }
                            </React.Fragment>
                            :
                            null
                    }
                </Grid>
                {/* {
                    matches && filterPosition === "side" ?
                        <Grid size={2.75}>
                            <CharacterFilters />
                        </Grid>
                        :
                        null
                } */}
                {
                    matches ?
                        <Dialog
                            open={dialogOpen}
                            onClose={handleDialogClose}
                        >
                            <CharacterFilters handleClose={handleDialogClose} />
                        </Dialog>
                        :
                        <SwipeableDrawer
                            anchor="bottom"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            sx={{
                                [`& .MuiDrawer-paper`]: {
                                    borderTop: `2px solid ${theme.border.colorAlt}`,
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    height: "auto",
                                    maxHeight: "88%"
                                }
                            }}
                        >
                            <CharacterFilters handleClose={toggleDrawer(false)} />
                        </SwipeableDrawer>
                }
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    characters: state.characters,
    characterFilters: state.characterFilters
})

export default connect(mapStateToProps)(CharacterBrowser)