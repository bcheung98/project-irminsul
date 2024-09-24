import * as React from "react"
import { connect } from "react-redux"

// Component imports
import WeaponList from "./WeaponList"
import WeaponFilters from "./filters/_WeaponFilters"
import WeaponCardLarge from "./WeaponCardLarge"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Paper, InputBase, Stack, ToggleButtonGroup } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import AppsSharpIcon from "@mui/icons-material/AppsSharp"
import ListSharpIcon from "@mui/icons-material/ListSharp"
import { blue } from "@mui/material/colors"

// Helper imports
import { filterWeapons } from "../../helpers/FilterWeapons"
import { CustomToggleButton } from "../../helpers/CustomToggleButton"

// Type imports
import { RootState } from "../../redux/store"

function WeaponBrowser(props: any) {

    const theme = useTheme()

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

    let { weapons, weaponFilters } = props

    document.title = `Weapons ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                        fontFamily: `${theme.font.genshin.family}`,
                        letterSpacing: ".2rem",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    WEAPONS
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
                        {weapons.weapons.length > 0 &&
                            <React.Fragment>
                                {
                                    view === "grid" ?
                                        filterWeapons(weapons.weapons, weaponFilters, searchValue).sort((a, b) => a.rarity > b.rarity ? -1 : 1).map(wep => <WeaponCardLarge key={wep.id} weapon={wep} />)
                                        :
                                        <WeaponList weapons={filterWeapons(weapons.weapons, weaponFilters, searchValue)} />
                                }
                            </React.Fragment>
                        }
                    </Grid>
                </Grid>
                <Grid xs={3}>
                    <Paper sx={{
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
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
                                color: `${theme.text.color}`,
                                fontFamily: `${theme.font.genshin.family}`,
                            }}
                            placeholder="Search"
                            onChange={handleInputChange}
                        />
                    </Paper>
                    <WeaponFilters />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    weapons: state.weapons,
    weaponFilters: state.weaponFilters
})

export default connect(mapStateToProps)(WeaponBrowser)