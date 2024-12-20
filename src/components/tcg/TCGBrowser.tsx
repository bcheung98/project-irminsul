import * as React from "react"
import { useSelector, useDispatch } from "react-redux"

// Component imports
import TCGDeck from "./TCGDeck"
import TCGCharacterCardBrowser from "./TCGCharacterCardBrowser"
import TCGActionCardBrowser from "./TCGActionCardBrowser"
import TCGCharacterCardFilters from "./TCGCharacterCardFilters"
import TCGActionCardFilters from "./TCGActionCardFilters"
import SearchBar from "../_custom/SearchBar"
import { CustomToggleButtonText } from "../_custom/CustomToggleButton"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, ToggleButtonGroup, SwipeableDrawer, Button, Dialog } from "@mui/material"
import Grid from "@mui/material/Grid2"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

// Helper imports
import { clearCharacterFilters } from "../../redux/reducers/TCGCharacterFilterReducer"
import { clearActionFilters } from "../../redux/reducers/TCGActionFilterReducer"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCharacterFilterState } from "../../redux/reducers/TCGCharacterFilterReducer"
import { TCGActionFilterState } from "../../redux/reducers/TCGActionFilterReducer"

function TCGBrowser() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const deck = useSelector((state: RootState) => state.deck.deck)
    const characterCardFilters = useSelector((state: RootState) => state.cardCharFilters)
    const actionCardFilters = useSelector((state: RootState) => state.cardActionFilters)

    const activeCharFilters = Object.keys(characterCardFilters).filter((filter) =>
        typeof characterCardFilters[filter as keyof TCGCharacterFilterState] === "object" &&
        characterCardFilters[filter as keyof TCGCharacterFilterState].length
    ).length > 0
    const activeActionFilters = Object.keys(actionCardFilters).filter((filter) =>
        typeof actionCardFilters[filter as keyof TCGActionFilterState] === "object" &&
        actionCardFilters[filter as keyof TCGActionFilterState].length
    ).length > 0
    const activeFilters = activeCharFilters || activeActionFilters

    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const [view, setView] = React.useState("char")
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)

            // Clear filter and search values when switching between Character and Action Card view
            dispatch(clearCharacterFilters())
            dispatch(clearActionFilters())
            setSearchValue("")
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

    document.title = `TCG ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                TCG
            </Typography>

            <TCGDeck cards={deck} />

            <Grid container rowSpacing={2} columnSpacing={4} sx={{ mt: "20px", mb: "30px" }}>
                <Grid size={{ xs: 12, sm: "auto" }}>
                    <Box sx={{ display: "flex" }}>
                        <ToggleButtonGroup value={view} exclusive onChange={handleView}>
                            <CustomToggleButtonText value="char" sx={{ height: "40px" }}>
                                <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                                    Character Cards
                                </Typography>
                            </CustomToggleButtonText>
                            <CustomToggleButtonText value="action" sx={{ height: "40px" }}>
                                <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                                    Action Cards
                                </Typography>
                            </CustomToggleButtonText>
                        </ToggleButtonGroup>
                    </Box>
                </Grid>
                <Grid size="grow">
                    <Box sx={{ display: "flex" }}>
                        <Button
                            onClick={matches ? () => handleDialogOpen() : toggleDrawer(true)}
                            variant="contained"
                            startIcon={<FilterAltIcon sx={{ color: `${theme.text.color}` }} />}
                            sx={{
                                px: 3,
                                mr: "25px",
                                backgroundColor: activeFilters ? `rgb(211, 47, 47)` : "none"
                            }}
                        >
                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "12px", sm: "14px" } }}>
                                Filters
                            </Typography>
                        </Button>
                        <SearchBar placeholder="Search" onChange={handleInputChange} value={searchValue} size={{ width: "80%", height: "40px" }} />
                    </Box>
                </Grid>
            </Grid>
            {
                view === "char" ?
                    <TCGCharacterCardBrowser searchValue={searchValue} />
                    :
                    <TCGActionCardBrowser searchValue={searchValue} />
            }
            {
                matches ?
                    <Dialog
                        open={dialogOpen}
                        onClose={handleDialogClose}
                    >
                        {
                            view === "char" ?
                                <TCGCharacterCardFilters handleClose={handleDialogClose} />
                                :
                                <TCGActionCardFilters handleClose={handleDialogClose} />
                        }
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
                            }
                        }}
                    >
                        {
                            view === "char" ?
                                <TCGCharacterCardFilters handleClose={toggleDrawer(false)} />
                                :
                                <TCGActionCardFilters handleClose={toggleDrawer(false)} />
                        }
                    </SwipeableDrawer>
            }
        </React.Fragment>
    )
}

export default TCGBrowser