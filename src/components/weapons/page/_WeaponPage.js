import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Tabs, Box, AppBar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { TabPanel, StyledTab } from "../../../helpers/CustomTabs";
import WeaponStatsTable from "./WeaponStatsTable";
import WeaponAscension from "./WeaponAscension";
import { CustomSlider } from "../../../helpers/CustomSlider";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponPage = (props) => {

    const theme = useTheme();

    let { weapon_name } = useParams();
    let { weapons } = props;
    let weapon = weapons.weapons.find(weapon => weapon.name.split(" ").join("_").toLowerCase() === weapon_name)

    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    let maxValue = 5;
    const [sliderValue, setSliderValue] = React.useState(1);
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    let scaling;
    if (weapon !== undefined) {
        scaling = weapon.stats.passive.scaling;
    }
    let targets = document.getElementsByClassName("text-refinement");
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index];
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1]; }
        })
    }


    if (weapon !== undefined) {

        let { name, rarity, type, description } = weapon;

        const weaponIcon = {
            marginLeft: "15px",
            marginTop: "5px",
            border: `1px solid ${theme.border.color}`,
            borderRadius: "5px",
            backgroundColor: `${theme.paper.backgroundColor}`,
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%",
        }

        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px", mt: "10px" }}>
                    <Grid xs="auto">
                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} onError={ErrorLoadingImage} />
                    </Grid>
                    <Grid xs>
                        <Box
                            sx={{
                                p: "15px",
                                mx: "15px",
                                mt: "5px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography
                                variant="h4"
                                noWrap
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    fontFamily: "Genshin, sans-serif",
                                    color: `${theme.text.color}`,
                                    textDecoration: "none",
                                    textAlign: "center",
                                }}
                            >
                                {weapon.displayName ? weapon.displayName : name}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: `${theme.text.color}`
                                }}>
                                <Box sx={{ ml: "-5px", mt: "5px" }}>
                                    <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                                </Box>
                                <Box sx={{ ml: "5px", mt: "3px" }}>
                                    <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                        • {type}
                                    </Typography>
                                </Box>
                            </Box>
                            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", fontSize: "10pt", color: `${theme.text.color}` }}>
                                <i>{description}</i>
                            </Typography>
                        </Box>
                        {
                            weapon.stats.passive.name !== "" &&
                            <Box
                                sx={{
                                    p: "15px",
                                    mx: "15px",
                                    my: "15px",
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                    color: `${theme.text.color}`,
                                }}
                            >
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {weapon.stats.passive.name}
                                </Typography>
                                <br />
                                <Typography variant="body1" sx={{ fontSize: "11pt" }}>
                                    {parse(weapon.stats.passive.description)}
                                </Typography>
                                {
                                    weapon.stats.passive.scaling &&
                                    <Box sx={{ display: "inlineFlex", alignItems: "center", width: "20%", mt: "15px" }}>
                                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, width: "30px", mr: "25px", mt: "-4px" }}>
                                            R{sliderValue}
                                        </Typography>
                                        <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} />
                                    </Box>
                                }
                            </Box>
                        }
                        <Box
                            sx={{
                                p: 0,
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <AppBar position="static"
                                sx={{
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    borderBottom: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px 5px 0px 0px",
                                }}
                            >
                                <Tabs value={tabValue} onChange={handleTabChange}>
                                    <StyledTab label="Stats" />
                                    <StyledTab label="Ascension" />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={tabValue} index={0}>
                                <WeaponStatsTable weapon={weapon} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <WeaponAscension weapon={weapon} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
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