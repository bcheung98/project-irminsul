import * as React from "react";
import { useTheme } from "@mui/material/styles";
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
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import { formatCommonMats, formatEliteMats, formatWeaponAscMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

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
    ({ theme }) => ({
        fontFamily: "Genshin, sans-serif",
        fontSize: "14px",
        color: `${theme.text.color}`,
    }),
);

const WeaponPage = (props) => {

    const theme = useTheme();

    let { weapon_name } = useParams();
    let { weapons } = props;
    let weapon = weapons.weapons.find(weapon => weapon.name.split(" ").join("_").toLowerCase() === weapon_name)

    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const materialImage = {
        height: "60px",
        marginRight: "10px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
    }

    if (weapon !== undefined) {
        let { name, rarity, type, description } = weapon;
        const weaponIcon = {
            width: "256px",
            border: `1px solid ${theme.border.color}`,
            borderRadius: "5px",
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%"
        }
        return (
            <Box sx={{ margin: "auto", display: "block", width: "65%" }}>
                <Box sx={{ display: "flex" }}>
                    <Box>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                mt: "20px",
                                display: { xs: "none", md: "flex" },
                                fontFamily: "Genshin, sans-serif",
                                color: `${theme.text.color}`,
                                textDecoration: "none",
                                textAlign: "center",
                            }}
                        >
                            {name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                                color: `${theme.text.color}`
                            }}>
                            <Box style={{ marginLeft: "-5px" }}>
                                <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                            </Box>
                            <Box style={{ marginLeft: "5px" }}>
                                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    • {type}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                color: `${theme.text.color}`,
                                px: "10px",
                                py: "10px",
                                width: "55vw",
                                ml: "-10px"
                            }}>
                            <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{ mb: "20px", mt: "10px" }}>
                    <Grid>
                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} />
                    </Grid>
                    <Grid xs={8}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "15px" }}>
                            <MaterialTooltip title={formatWeaponAscMats(weapon.materials.ascensionMat)} arrow placement="top">
                                <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${weapon.materials.ascensionMat.split(" ").join("_")}4.png`)} alt={weapon.materials.ascensionMat} onError={ErrorLoadingImage} />
                            </MaterialTooltip>
                            <MaterialTooltip title={formatEliteMats(weapon.materials.eliteMat)} arrow placement="top">
                                <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${weapon.materials.eliteMat.split(" ").join("_")}3.png`)} alt={weapon.materials.eliteMat} onError={ErrorLoadingImage} />
                            </MaterialTooltip>
                            <MaterialTooltip title={formatCommonMats(weapon.materials.commonMat)} arrow placement="top">
                                <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${weapon.materials.commonMat.split(" ").join("_")}3.png`)} alt={weapon.materials.commonMat} onError={ErrorLoadingImage} />
                            </MaterialTooltip>
                        </Box>
                        {
                            weapon.stats.passive.name !== "" &&
                            <Box
                                sx={{
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    color: `${theme.text.color}`,
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                    px: "20px",
                                    py: "10px",
                                    width: "50vw",
                                }}
                            >
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {weapon.stats.passive.name}
                                </Typography>
                                <br />
                                <Typography variant="body1" sx={{ fontSize: "11pt" }}>
                                    {parse(weapon.stats.passive.description)}
                                </Typography>
                            </Box>
                        }
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        backgroundColor: `${theme.paper.backgroundColor}`,
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