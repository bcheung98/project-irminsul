import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"
import SearchBar from "../_custom/SearchBar"
import WeaponList from "./WeaponList"
import WeaponFilters from "./WeaponFilters"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Button, ToggleButtonGroup, Dialog, SwipeableDrawer } from "@mui/material"
import Grid from "@mui/material/Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import FilterAltIcon from "@mui/icons-material/FilterAlt"

// Helper imports
import { filterWeapons } from "../../helpers/FilterWeapons"
import { CustomToggleButton } from "../_custom/CustomToggleButton"

// Type imports
import { RootState } from "../../redux/store"

function WeaponBrowser(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

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

    let { weapons, weaponFilters } = props

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
                        weapons.weapons.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "card" ?
                                        <Grid container spacing={2.5}>
                                            {filterWeapons(weapons.weapons, weaponFilters, searchValue).sort((a, b) => a.rarity > b.rarity ? -1 : 1).map(wep => <CustomCard key={wep.id} type="weapon" name={wep.name} displayName={wep.displayName} rarity={wep.rarity} weaponType={wep.type} size="128px" showInfo />)}
                                        </Grid>
                                        :
                                        <WeaponList weapons={filterWeapons(weapons.weapons, weaponFilters, searchValue)} />
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
                            }
                        }}
                    >
                        <WeaponFilters handleClose={toggleDrawer(false)} />
                    </SwipeableDrawer>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    weapons: state.weapons,
    weaponFilters: state.weaponFilters
})

export default connect(mapStateToProps)(WeaponBrowser)