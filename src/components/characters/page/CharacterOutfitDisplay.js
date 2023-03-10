import * as React from "react";
import PropTypes from 'prop-types';
import parse from "html-react-parser";
import { Typography, Box, Tabs, Tab } from "@mui/material";

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

const CharacterOutfitDisplay = (props) => {

    let { name, outfits } = props.character;

    const [tabValue, setTabValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    }

    return (
        <Box
            sx={{
                width: "80vw",
                p: "15px",
                backgroundColor: "rgb(0, 30, 60)",
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
            }}
        >
            <Tabs
                variant="scrollable"
                value={tabValue}
                onChange={handleChangeTab}
            >
                {outfits.map((outfit, index) => (
                    <Tab key={index} label={outfit.name}
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            fontSize: "14pt",
                            color: "white",
                            textTransform: "none",
                        }}
                    />
                ))}
            </Tabs>
            {
                outfits.map((outfit, index) => {
                    return (
                        <TabPanel
                            key={index}
                            index={index}
                            value={tabValue}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: "20px",
                                    fontFamily: "Genshin, sans-serif",
                                    color: "white",
                                }}
                            >
                                {parse(outfit.description)}
                            </Typography>
                            {
                                index === 0 ?
                                    <img src={(`${process.env.REACT_APP_URL}/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`)} alt={outfit.name}
                                        style={{
                                            width: "95%",
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                        }}
                                    />
                                    :
                                    <img src={(`${process.env.REACT_APP_URL}/characters/outfits/Outfit_${outfit.name.split(" ").join("_")}_Preview.png`)} alt={outfit.name}
                                        style={{
                                            width: "95%",
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                        }}
                                    />
                            }
                        </TabPanel>
                    )
                })
            }
        </Box>
    )
}

export default CharacterOutfitDisplay;