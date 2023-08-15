import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, Tabs } from "@mui/material";
import { StyledTab, TabPanel } from "../../../helpers/CustomTabs";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterOutfitDisplay = (props) => {

    const theme = useTheme();

    let { name, outfits } = props.character;

    const [tabValue, setTabValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    }

    return (
        <Box
            sx={{
                width: "80vw",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Tabs
                variant="scrollable"
                value={tabValue}
                onChange={handleChangeTab}
                sx={{ backgroundColor: `${theme.toolbar.backgroundColor}` }}
            >
                {outfits.map((outfit, index) => (
                    <StyledTab key={index} label={outfit.name}
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            fontSize: "14pt",
                            color: `${theme.text.color}`,
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
                            <Box sx={{ marginLeft: "-5px" }}>
                                <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${outfit.rarity}_Stars.png`)} alt={outfit.rarity} onError={ErrorLoadingImage} />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: "20px",
                                    fontFamily: "Genshin, sans-serif",
                                    color: `${theme.text.color}`,
                                }}
                            >
                                {parse(outfit.description)}
                            </Typography>
                            {
                                index === 0 ?
                                    <img src={(`${process.env.REACT_APP_URL}/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`)} alt={outfit.name}
                                        style={{
                                            width: "95%",
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`
                                        }}
                                        onError={ErrorLoadingImage}
                                    />
                                    :
                                    <img src={(`${process.env.REACT_APP_URL}/characters/outfits/Outfit_${outfit.name.split(" ").join("_")}_Preview.png`)} alt={outfit.name}
                                        style={{
                                            width: "95%",
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`
                                        }}
                                        onError={ErrorLoadingImage}
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