import * as React from "react";
import PropTypes from 'prop-types';
import "../../../css/WeaponPage.css";
import parse from "html-react-parser";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import WeaponStatsTable from "./WeaponStatsTable";
import WeaponAscensionTable from "./WeaponAscensionTable";

function TabPanel(props) {

    const { children, value, index, ...other } = props;
    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    () => ({
        fontFamily: "Genshin, sans-serif",
        fontSize: "14px",
        color: "white",
    }),
);

const WeaponPage = (props) => {

    let { weapon_name } = useParams();
    let { weapons } = props;
    let weapon = weapons.weapons.find(weapon => weapon.name.split(" ").join("_").toLowerCase() === weapon_name)

    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (weapon !== undefined) {
        let { name, rarity, type, description } = weapon;
        const weaponIcon = {
            width: "256px",
            marginTop: "15px",
            border: "1px solid rgb(30, 73, 118)",
            borderRadius: "5px",
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%"
        }
        return (
            <Box sx={{ margin: "auto", display: "block", width: "65%" }}>
                <Box sx={{ display: "flex" }}>
                    <div>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mt: "20px",
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Genshin, sans-serif",
                                color: "white",
                                textDecoration: "none",
                                textAlign: "center",
                            }}
                        >
                            {name}
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                                color: "white"
                            }}>
                            <div style={{ marginLeft: "-5px" }}>
                                <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                            </div>
                            <div style={{ marginLeft: "5px" }}>
                                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    • {type}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Box>
                <Grid container sx={{ mb: "20px" }} spacing={2}>
                    <Grid>
                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} />
                    </Grid>
                    <Grid xs={8}>
                        <Box
                            sx={{
                                color: "white",
                                px: "10px",
                                py: "10px",
                                width: "55vw",
                            }}>
                            <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                {description}
                            </Typography>
                        </Box>
                        {weapon.stats.passive.name !== "" &&
                            <Box
                                sx={{
                                    border: "1px solid rgb(30, 73, 118)",
                                    borderRadius: "5px",
                                    color: "white",
                                    mt: "10px",
                                    px: "20px",
                                    py: "10px",
                                    width: "50vw",
                                }}>
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {weapon.stats.passive.name}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    {parse(weapon.stats.passive.description)}
                                </Typography>
                            </Box>
                        }
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        border: "1px solid rgb(30, 73, 118)",
                        borderRadius: "5px",
                        mt: "15px",
                    }}
                >
                    <Tabs value={tabValue} onChange={handleTabChange} centered>
                        <StyledTab label="Stats" />
                        <StyledTab label="Ascension" />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}>
                        <WeaponStatsTable weapon={weapon} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <WeaponAscensionTable weapon={weapon} />
                    </TabPanel>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weapons: state.weapons,
        weaponFilters: state.weaponFilters
    }
}

export default connect(mapStateToProps)(WeaponPage);