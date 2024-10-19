import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"
import WeaponList from "./WeaponList"
import WeaponFilters from "./WeaponFilters"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { useMediaQuery, Box, Typography, Paper, InputBase, ToggleButtonGroup, SwipeableDrawer, Button } from "@mui/material"
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

    let { weapons, weaponFilters } = props

    document.title = `Weapons ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                    containerType: "inline-size"
                }}
            >
                <Typography
                    sx={{
                        mr: "25px",
                        fontFamily: `${theme.font.genshin.family}`,
                        fontSize: "24px",
                        color: `${theme.text.color}`,
                    }}
                >
                    Weapons
                </Typography>
                <ToggleButtonGroup value={view} exclusive onChange={handleView}>
                    <CustomToggleButton value="grid" size="small">
                        <AppsSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                    <CustomToggleButton value="list" size="small">
                        <ListSharpIcon sx={{ color: `white` }} />
                    </CustomToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Button
                onClick={toggleDrawer(true)}
                variant="contained"
                startIcon={<FilterAltIcon sx={{ color: `${theme.text.color}` }} />}
                sx={{ display: { xs: "flex", sm: "none" }, mb: "20px", px: 1 }}
            >
                <Typography
                    sx={{
                        fontFamily: `${theme.font.genshin.family}`,
                        fontSize: "14px",
                        textTransform: "none"
                    }}
                >
                    Filters
                </Typography>
            </Button>
            <Grid container spacing={3}>
                <Grid size="grow">
                    {
                        weapons.weapons.length > 0 ?
                            <React.Fragment>
                                {
                                    view === "grid" ?
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
                        <WeaponFilters />
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
                <WeaponFilters />
            </SwipeableDrawer>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    weapons: state.weapons,
    weaponFilters: state.weaponFilters
})

export default connect(mapStateToProps)(WeaponBrowser)