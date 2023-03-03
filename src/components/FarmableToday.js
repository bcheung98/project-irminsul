import * as React from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Button, ButtonBase, Typography, Avatar, CardHeader, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { MaterialDates } from "../helpers/MaterialDates";

function TabPanel(props) {

    const { children, value, index, ...other } = props;
    return (
        <div
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: "10px" }}>
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

const IconBackground = (rarity) => {
    return {
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%"
    }
}

const FarmableToday = (props) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let today = weekday[d.getDay()];
    let farmableMats = MaterialDates(today);
    let characters = props.characters.characters.filter(char => farmableMats["talents"].includes(char.materials.talentBook));
    let weapons = props.weapons.weapons.filter(wep => farmableMats["weapons"].includes(wep.materials.ascensionMat));

    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    backgroundColor: "rgba(0, 30, 60)",
                    border: "1px solid rgb(30, 73, 118)",
                    borderRadius: "5px",
                    display: "block",
                    margin: "auto",
                    mt: "20px",
                    p: "10px",
                    width: "50vw",
                    color: "white",
                }}
            >
                <Typography variant="h4" component="p" sx={{ fontFamily: "Genshin, sans-serif", textAlign: "center", mb: "10px" }}>
                    Farmable Today ({today})
                </Typography>
                <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
                <Box>
                    <Tabs value={tabValue} onChange={handleTabChange}>
                        <StyledTab label="Characters" />
                        <StyledTab label="Weapons" />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}>
                        {
                            farmableMats["talents"].map((mat, index) => (
                                <Box key={index}>
                                    <CardHeader
                                        avatar={<img src={`${process.env.REACT_APP_URL}/materials/talent_mats/${mat}3.png`} alt={mat} style={{ width: "48px", marginRight: "-10px" }} />}
                                        title={
                                            <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                                {mat}
                                            </Typography>
                                        }
                                        sx={{ p: 0, mb: "5px" }}
                                    />
                                    <Grid>
                                        {
                                            characters.filter(char => farmableMats["talents"][index].includes(char.materials.talentBook)).map((char, index) => (
                                                <ButtonBase disableRipple href={`/project-irminsul/character/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                                    <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.name.split(" ").join("_")}_Thumb.png`)} alt={char.name}
                                                        sx={{
                                                            margin: "auto",
                                                            ml: "2px",
                                                            border: "1px solid rgb(30, 73, 118)",
                                                            borderRadius: "5px",
                                                            width: "64px",
                                                            height: "64px",
                                                            backgroundColor: "rgb(9, 24, 39)",
                                                        }}
                                                        style={IconBackground(char.rarity)}
                                                    />
                                                </ButtonBase>
                                            ))
                                        }
                                    </Grid>
                                    < hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
                                </Box>
                            ))
                        }
                        <Button variant="contained" href={`/project-irminsul/characters`}>
                            <Typography variant="subtitle2" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                > See all characters
                            </Typography>
                        </Button>
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        {
                            farmableMats["weapons"].map((mat, index) => (
                                <Box key={index}>
                                    <CardHeader
                                        avatar={<img src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${mat.split(" ").join("_")}4.png`} alt={mat} style={{ width: "48px", marginRight: "-10px" }} />}
                                        title={
                                            <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                                {mat}
                                            </Typography>
                                        }
                                        sx={{ p: 0, mb: "5px" }}
                                    />
                                    <Grid>
                                        {
                                            weapons.filter(wep => farmableMats["weapons"][index].includes(wep.materials.ascensionMat)).sort((a, b) => b.rarity - a.rarity).map((wep, index) => (
                                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                                    <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.name.split(" ").join("_")}.png`)} alt={wep.name}
                                                        sx={{
                                                            margin: "auto",
                                                            ml: "2px",
                                                            border: "1px solid rgb(30, 73, 118)",
                                                            borderRadius: "5px",
                                                            width: "64px",
                                                            height: "64px",
                                                            backgroundColor: "rgb(9, 24, 39)",
                                                        }}
                                                        style={IconBackground(wep.rarity)}
                                                    />
                                                </ButtonBase>
                                            ))
                                        }
                                    </Grid>
                                    < hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
                                </Box>
                            ))
                        }
                        <Button variant="contained" href={`/project-irminsul/weapons`}>
                            <Typography variant="subtitle2" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                > See all weapons
                            </Typography>
                        </Button>
                    </TabPanel>

                </Box>
            </Box>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        weapons: state.weapons
    }
}

export default connect(mapStateToProps)(FarmableToday);