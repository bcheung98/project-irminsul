import * as React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

// Component imports
import CharacterStatsTable from "./CharacterStatsTable"
import CharacterAscension from "./CharacterAscension"
import CharacterTalentDisplay from "./CharacterTalentDisplay"
import CharacterConstellationDisplay from "./CharacterConstellationDisplay"
import CharacterOutfitDisplay from "./CharacterOutfitDisplay"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Tabs, Box, Dialog, Avatar, AppBar } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Helper imports
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import { TabPanel, StyledTab } from "../../../helpers/CustomTabs"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../../redux/store"
import { CharacterData } from "../../../types/character/CharacterData"

function CharacterPage(props: any) {

    const theme = useTheme()

    let { char_name } = useParams<{ char_name: string }>()
    let { characters } = props
    let character = characters.characters.find((char: CharacterData) => char.name.split(" ").join("_").toLowerCase() === char_name)

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    if (character !== undefined) {

        let { name, title, rarity, element, weapon, constellation, description, birthday, nation, voiceActors, release } = character

        let visionIcon = nation === "Fontaine" ? `${process.env.REACT_APP_URL}/visions/${nation}_${element}_${character.arkhe}.png` : `${process.env.REACT_APP_URL}/visions/${nation}_${element}.png`

        if (character.fullname) document.title = `${character.fullname} - Project Irminsul`
        else document.title = `${name} - Project Irminsul`

        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <img src={`${process.env.REACT_APP_URL}/characters/wish/${name.split(" ").join("_")}.png`} alt={name}
                            onClick={() => handleClickOpen()}
                            style={{
                                width: "35vw",
                                height: "600px",
                                objectFit: "cover",
                                marginLeft: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                cursor: "pointer",
                            }}
                            onError={ErrorLoadingImage}
                        />
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                ml: "15px",
                                mt: "10px",
                                px: "20px",
                                py: "10px",
                                width: "32.9vw",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="body2"><b>Constellation</b></Typography>
                                    <Typography variant="body2"><b>Birthday</b></Typography>
                                    <Typography variant="body2"><b>Release Date</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (EN)</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (JP)</b></Typography>
                                </Box>
                                <Box sx={{ textAlign: "right" }}>
                                    <Typography variant="body2">{constellation.name}</Typography>
                                    <Typography variant="body2">{birthday}</Typography>
                                    <Typography variant="body2">{`${release.date} (${release.version})`}</Typography>
                                    <Typography variant="body2">{voiceActors["en"]}</Typography>
                                    <Typography variant="body2">{voiceActors["jp"]}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs>
                        <Box
                            sx={{
                                p: "5px",
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Box sx={{ display: "flex" }}>
                                <CustomTooltip title={`${nation} / ${element}`} arrow placement="bottom">
                                    <Avatar sx={{ marginRight: "-20px", height: "128px", width: "128px", backgroundColor: `${theme.paper.backgroundColor}` }} src={visionIcon} alt={`${nation} / ${element}`}>
                                        <img style={{ height: "72px", width: "72px" }} src={`${process.env.REACT_APP_URL}/elements/${element}.png`} alt={`${element}`} onError={ErrorLoadingImage} />
                                    </Avatar>
                                </CustomTooltip>
                                <Box sx={{ ml: "20px" }}>
                                    <Typography
                                        variant="h4"
                                        noWrap
                                        sx={{
                                            mt: "10px",
                                            display: { xs: "none", md: "flex" },
                                            fontFamily: "Genshin, sans-serif",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        {character.fullname ? character.fullname : name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        noWrap
                                        sx={{
                                            my: "2px",
                                            display: { xs: "none", md: "flex" },
                                            fontFamily: "Genshin, sans-serif",
                                            color: `${theme.text.color}`,
                                            fontStyle: "italic",
                                            textAlign: "center",
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "left",
                                            color: `${theme.text.color}`
                                        }}
                                    >
                                        <Box sx={{ marginLeft: "-5px" }}>
                                            <img style={{ height: "30px" }} src={`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`} alt={rarity} onError={ErrorLoadingImage} />
                                        </Box>
                                        <Box sx={{ marginLeft: "5px" }}>
                                            <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                                • {weapon}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "0px 15px 15px 15px" }} />
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: "20px",
                                    mx: "25px",
                                    fontFamily: "Genshin, sans-serif",
                                    color: `${theme.text.color}`,
                                }}
                            >
                                <i>{description}</i>
                            </Typography>
                        </Box>
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
                                <CharacterStatsTable character={character} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <CharacterAscension character={character} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
                <CharacterTalentDisplay character={character} />
                <CharacterConstellationDisplay character={character} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <CharacterOutfitDisplay character={character} />
                </Dialog>
            </React.Fragment>
        )
    }
    else {
        return (
            <></>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    characters: state.characters
})

export default connect(mapStateToProps)(CharacterPage)