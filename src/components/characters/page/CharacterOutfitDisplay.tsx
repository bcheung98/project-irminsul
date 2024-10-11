import * as React from "react"
import parse from "html-react-parser"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { useMediaQuery, Typography, Box, Tabs } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { StyledTab, TabPanel } from "../../_custom/CustomTabs"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { CharacterData } from "../../../types/character/CharacterData"

function CharacterOutfitDisplay(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    let { name, outfits } = props.character as CharacterData

    const [tabValue, setTabValue] = React.useState(0)
    const handleChangeTab = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const OutfitIcon = (rarity: number) => {
        return {
            width: matches ? "90px" : "64px",
            border: `2px solid ${theme.border.color}`,
            borderRadius: "64px",
            backgroundColor: `${theme.materialImage.backgroundColor}`,
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%"
        }
    }

    const OutfitSplash: React.CSSProperties = {
        width: "100%",
        height: matches ? "auto" : "475px",
        objectFit: "cover",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`
    }

    return (
        <Grid
            container
            sx={{
                width: "80vw",
                borderRadius: "5px",
            }}
        >
            <Grid size="auto" sx={{ backgroundColor: `${theme.toolbar.backgroundColor}`, width: { xs: "100%", sm: "128px" } }}>
                <Tabs
                    orientation={matches ? "vertical" : "horizontal"}
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
                                        <img src={`${process.env.REACT_APP_URL}/characters/icons/${name.split(" ").join("_")}.png`} alt={outfit.name} style={OutfitIcon(outfit.rarity)} onError={ErrorLoadingImage} />
                                        :
                                        <img src={`${process.env.REACT_APP_URL}/characters/outfits/icon/${outfit.name.split(" ").join("_")}.png`} alt={outfit.name} style={OutfitIcon(outfit.rarity)} onError={ErrorLoadingImage} />
                                }
                            />
                        ))
                    }
                </Tabs>
            </Grid>
            <Grid size={{ xs: 12, sm: "grow" }}>
                {
                    outfits.map((outfit, index) => {
                        return (
                            <TabPanel
                                key={index}
                                index={index}
                                value={tabValue}
                            >
                                <Typography
                                    sx={{
                                        mb: "10px",
                                        fontFamily: `${theme.font.genshin.family}`,
                                        fontSize: { xs: "17px", sm: "20px" },
                                        color: `${theme.text.color}`,
                                    }}
                                >
                                    {outfit.displayName ? outfit.displayName : outfit.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        mb: "20px",
                                        fontFamily: `${theme.font.genshin.family}`,
                                        fontSize: { xs: "11px", sm: "14px" },
                                        color: `${theme.text.color}`,
                                    }}
                                >
                                    <i>{parse(outfit.description)}</i>
                                </Typography>
                                <Box>
                                    {
                                        index === 0 ?
                                            <img src={`${process.env.REACT_APP_URL}/characters/wish/${name.split(" ").join("_")}.png`} alt={outfit.name} style={OutfitSplash} onError={ErrorLoadingImage} />
                                            :
                                            <img src={`${process.env.REACT_APP_URL}/characters/outfits/splash/${outfit.name.split(" ").join("_")}.png`} alt={outfit.name} style={OutfitSplash} onError={ErrorLoadingImage} />
                                    }
                                </Box>
                            </TabPanel>
                        )
                    })
                }
            </Grid>
        </Grid>

    )
}

export default CharacterOutfitDisplay