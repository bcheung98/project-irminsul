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
import { Typography, Tabs, Box, Dialog, Avatar, AppBar, Table, TableContainer, TableBody, TableRow, TableCell } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { CustomTooltip } from "../../_custom/CustomTooltip"
import { TabPanel, StyledTab } from "../../_custom/CustomTabs"
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

        const rows = [
            { key: "Constellation", value: constellation.name },
            { key: "Birthday", value: birthday },
            { key: "Release", value: `${release.date} (${release.version})` },
            { key: "Voice Actor (EN)", value: voiceActors["en"] },
            { key: "Voice Actor (JP)", value: voiceActors["jp"] },
        ]

        if (character.fullname) document.title = `${character.fullname} ${process.env.REACT_APP_DOCUMENT_HEADER}`
        else document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Grid container spacing={3} sx={{ mb: "20px" }}>
                    <Grid size="auto">
                        <Box>
                            <img src={`${process.env.REACT_APP_URL}/characters/wish/${name.split(" ").join("_")}.png`} alt={name}
                                onClick={() => handleClickOpen()}
                                style={{
                                    width: "30vw",
                                    height: "600px",
                                    objectFit: "cover",
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                    cursor: "pointer",
                                }}
                                onError={ErrorLoadingImage}
                            />
                            <Box
                                sx={{
                                    py: "10px",
                                    mt: "10px",
                                    width: "30vw",
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    color: `${theme.text.color}`,
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                }}
                            >
                                <TableContainer>
                                    <Table size="small">
                                        <TableBody>
                                            {
                                                rows.map((row) => (
                                                    <TableRow key={row.key}>
                                                        <TableCell sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px" }}>
                                                            <b>{row.key}</b>
                                                        </TableCell>
                                                        <TableCell align="right" sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px" }}>
                                                            {row.value}
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size="grow" sx={{ mb: "20px" }}>
                        <Box>
                            <Box
                                sx={{
                                    p: "5px",
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                }}
                            >
                                <Grid container spacing={1}>
                                    <Grid size="auto">
                                        <Box sx={{ display: "flex" }}>
                                            <CustomTooltip title={`${nation} / ${element}`} arrow placement="bottom">
                                                <Avatar
                                                    src={visionIcon} alt={`${nation} / ${element}`}
                                                    variant="square"
                                                    sx={{ mr: "-20px", height: "128px", width: "128px", backgroundColor: `${theme.paper.backgroundColor}` }}
                                                >
                                                    <img src={`${process.env.REACT_APP_URL}/elements/${element}.png`} alt={`${element}`}
                                                        style={{ height: "64px", width: "64px" }}
                                                        onError={ErrorLoadingImage}
                                                    />
                                                </Avatar>
                                            </CustomTooltip>
                                            <Box sx={{ ml: "20px" }}>
                                                <Typography
                                                    variant="h4"
                                                    noWrap
                                                    sx={{
                                                        mt: "10px",
                                                        display: "flex",
                                                        fontFamily: `${theme.font.genshin.family}`,
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
                                                        display: "flex",
                                                        fontFamily: `${theme.font.genshin.family}`,
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
                                                        color: `${theme.text.color}`
                                                    }}
                                                >
                                                    <Box sx={{ ml: "-5px" }}>
                                                        <img style={{ height: "30px" }} src={`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`} alt={rarity} onError={ErrorLoadingImage} />
                                                    </Box>
                                                    <Box sx={{ ml: "5px", mt: "-2.5px" }}>
                                                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                                            • {weapon}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "0px 15px 15px 15px" }} />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: "20px",
                                        mx: "25px",
                                        fontFamily: `${theme.font.genshin.family}`,
                                        color: `${theme.text.color}`,
                                    }}
                                >
                                    <i>{description}</i>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    p: 0,
                                    mt: "15px",
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
                    <Box sx={{ border: `2px solid ${theme.border.color}`, backgroundColor: `${theme.paper.backgroundColor}` }}>
                        <CharacterOutfitDisplay character={character} />
                    </Box>
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