import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, Tabs } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { StyledTab, TabPanel } from "../../../helpers/CustomTabs";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterOutfitDisplay = (props) => {

    const theme = useTheme();

    let { name, outfits } = props.character;

    const [tabValue, setTabValue] = React.useState(0);
    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    }

    const OutfitIcon = (rarity) => {
        return {
            width: "85px",
            border: `2px solid ${theme.border.color}`,
            borderRadius: "64px",
            backgroundColor: `${theme.materialImage.backgroundColor}`,
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%"
        }
    }

    const OutfitSplash = {
        width: "80%",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`
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
            <Grid container>
                <Grid sx={{ backgroundColor: `${theme.toolbar.backgroundColor}`, width: "128px" }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        scrollButtons="auto"
                        value={tabValue}
                        onChange={handleChangeTab}
                    >
                        {
                            outfits.map((outfit, index) => (
                                <StyledTab
                                    key={index}
                                    label={
                                        index === 0 ?
                                            <img src={`${process.env.REACT_APP_URL}/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`} alt={outfit.name} style={OutfitIcon(outfit.rarity)} onError={ErrorLoadingImage} />
                                            :
                                            <img src={`${process.env.REACT_APP_URL}/characters/outfits/icon/${outfit.name.split(" ").join("_")}_Icon.png`} alt={outfit.name} style={OutfitIcon(outfit.rarity)} onError={ErrorLoadingImage} />
                                    }
                                />
                            ))
                        }
                    </Tabs>
                </Grid>
                <Grid xs>
                    {
                        outfits.map((outfit, index) => {
                            return (
                                <TabPanel
                                    key={index}
                                    index={index}
                                    value={tabValue}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: "10px",
                                            fontFamily: "Genshin, sans-serif",
                                            color: `${theme.text.color}`,
                                        }}
                                    >
                                        {outfit.displayName ? outfit.displayName : outfit.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: "20px",
                                            fontFamily: "Genshin, sans-serif",
                                            color: `${theme.text.color}`,
                                        }}
                                    >
                                        <i>{parse(outfit.description)}</i>
                                    </Typography>
                                    {
                                        index === 0 ?
                                            <img src={`${process.env.REACT_APP_URL}/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`} alt={outfit.name} style={OutfitSplash} onError={ErrorLoadingImage} />
                                            :
                                            <img src={`${process.env.REACT_APP_URL}/characters/outfits/splash/${outfit.name.split(" ").join("_")}_Splash.png`} alt={outfit.name} style={OutfitSplash} onError={ErrorLoadingImage} />
                                    }
                                </TabPanel>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default CharacterOutfitDisplay;