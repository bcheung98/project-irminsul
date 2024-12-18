import * as React from "react"
import { useSelector } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"
import SearchBar from "../_custom/SearchBar"
import WeaponList from "./WeaponList"
import WeaponFilters from "./WeaponFilters"
import { CustomToggleButton } from "../_custom/CustomToggleButton"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, ToggleButtonGroup, Dialog, SwipeableDrawer } from "@mui/material"
import Grid from "@mui/material/Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

// Helper imports
import { filterWeapons } from "../../helpers/FilterWeapons"

// Type imports
import { RootState } from "../../redux/store"
import { WeaponFilterState } from "../../redux/reducers/WeaponFilterReducer"

function WeaponBrowser() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const weapons = useSelector((state: RootState) => state.weapons.weapons)
    const weaponFilters = useSelector((state: RootState) => state.weaponFilters)

    const activeFilters = Object.keys(weaponFilters).filter((filter) => weaponFilters[filter as keyof WeaponFilterState].length).length > 0

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const currentWeapons = React.useMemo(() =>
        filterWeapons(weapons, weaponFilters, searchValue),
        [weapons, weaponFilters, searchValue]
    )

    const [view, setView] = React.useState("card")
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

    document.title = `Weapons ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                            Weapons
                        </Typography>
                        <ToggleButtonGroup value={view} exclusive onChange={handleView}>
                            <CustomToggleButton value="card" size="small">
                                <AppsSharpIcon sx={{ color: `white` }} />
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
                        <SearchBar placeholder="Search" onChange={handleInputChange} size={{ width: "80%", height: "40px" }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        currentWeapons.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "card" ?
                                        <Grid container spacing={2.5}>
                                            {
                                                currentWeapons.sort((a, b) => a.rarity > b.rarity ? -1 : 1).map(wep =>
                                                    <CustomCard
                                                        key={wep.id}
                                                        type="weapon"
                                                        name={wep.name}
                                                        displayName={wep.displayName}
                                                        rarity={wep.rarity}
                                                        weaponType={wep.type}
                                                        size="128px"
                                                        showInfo
                                                    />)
                                            }
                                        </Grid>
                                        :
                                        <WeaponList weapons={currentWeapons} />
                                }
                            </React.Fragment>
                            :
                            null
                    }
                </Grid>
                {/* {
                    matches && filterPosition === "side" ?
                        <Grid size={2.75}>
                            <WeaponFilters />
                        </Grid>
                        :
                        null
                } */}
            </Grid>
            {
                matches ?
                    <Dialog
                        open={dialogOpen}
                        onClose={handleDialogClose}
                    >
                        <WeaponFilters handleClose={handleDialogClose} />
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
                        <WeaponFilters handleClose={toggleDrawer(false)} />
                    </SwipeableDrawer>
            }
        </React.Fragment>
    )
}

export default WeaponBrowser