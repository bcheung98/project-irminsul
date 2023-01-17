import * as React from "react";
import { connect } from "react-redux";
import { Typography, Grid, Paper, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import WeaponList from "./WeaponList";
import { filterWeapons } from "../../helpers/FilterWeapons";
import WeaponFilters from "./filters/_WeaponFilters";

const WeaponBrowser = (props) => {

    const [searchValue, setSearchValue] = React.useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    let { weapons, weaponFilters } = props;

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
                    WEAPONS
                </Typography>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                <Grid item xs={9}>
                    <Grid container>
                        {weapons.weapons.length > 0 &&
                            <WeaponList weapons={filterWeapons(weapons.weapons, weaponFilters, searchValue)} />
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
                    <WeaponFilters />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        weapons: state.weapons,
        weaponFilters: state.weaponFilters
    }
}

export default connect(mapStateToProps)(WeaponBrowser);