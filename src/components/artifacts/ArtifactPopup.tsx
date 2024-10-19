import * as React from "react"

// Component imports
import { TabPanel, StyledTab } from "../_custom/CustomTabs"

// MUI imports
import { useTheme, useMediaQuery, Box, AppBar, Typography, Tabs, IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function ArtifactPopup(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    let { name, rarity, setEffect, pieces } = props.artifact

    const pieceIcon = {
        width: "32px",
        height: "32px",
        padding: "5px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "5px",
        boxSizing: "content-box"
    } as React.CSSProperties

    const artifactImage = {
        width: "128px",
        height: "128px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "20px",
        backgroundColor: "rgb(32, 32, 32)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%",
        boxSizing: "content-box"
    } as React.CSSProperties

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <Box
            sx={{
                width: { xs: "100%", md: "50vw" },
                minHeight: { xs: "100vh", sm: "30vw" },
                overflowY: "auto",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: { xs: "0px", sm: "5px" },
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: matches ? "36px" : "24px",
                            color: `${theme.text.color}`,
                            p: 2
                        }}
                    >
                        {props.artifact.displayName ? props.artifact.displayName : name}
                    </Typography>
                    <IconButton onClick={props.handleClose} sx={{ display: { xs: "block", sm: "none" } }}>
                        <CloseIcon sx={{ color: `white` }} />
                    </IconButton>
                </Box>
            </AppBar>
            <Box>
                <Tabs
                    variant="scrollable"
                    value={tabValue}
                    onChange={handleTabChange}
                    scrollButtons={!matches}
                    allowScrollButtonsMobile={!matches}
                    sx={{
                        backgroundColor: matches ? "none" : `${theme.table.header.backgroundColor}`,
                        "& .MuiTabScrollButton-root": {
                            color: `${theme.text.color}`,
                        },
                    }}
                >
                    {
                        pieces.map((piece: { name: string, type: string }, index: number) =>
                            <StyledTab
                                key={index}
                                label={
                                    <img
                                        src={`${process.env.REACT_APP_URL}/artifacts/icons/${piece.type}.png`}
                                        style={pieceIcon}
                                        alt={piece.name}
                                        onError={ErrorLoadingImage}
                                    />}
                            />
                        )}
                </Tabs>
                {
                    pieces.map((piece: { name: string, type: string, description: string }, index: number) => (
                        <TabPanel key={index} index={index} value={tabValue}>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    fontSize: { xs: "20px", sm: "24px" },
                                    color: `${theme.text.color}`
                                }}
                            >
                                {piece.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, mb: "20px" }}>
                                <i>{formatPieceType(piece.type)}</i>
                            </Typography>
                            <img src={`${process.env.REACT_APP_URL}/artifacts/sets/${name.split(" ").join("_")}/${piece.type}.png`}
                                alt={piece.name}
                                style={artifactImage}
                                onError={ErrorLoadingImage}
                            />
                            {
                                setEffect.onePiece &&
                                <Typography variant="subtitle1" sx={{ color: `${theme.text.color}` }}>
                                    <b>1-Piece Set:</b> {setEffect.onePiece}
                                </Typography>
                            }
                            {
                                setEffect.twoPiece &&
                                <Typography variant="subtitle1" sx={{ color: `${theme.text.color}` }}>
                                    <b>2-Piece Set:</b> {setEffect.twoPiece}
                                </Typography>
                            }
                            {
                                setEffect.fourPiece &&
                                <Typography variant="subtitle1" sx={{ color: `${theme.text.color}` }}>
                                    <b>4-Piece Set:</b> {setEffect.fourPiece}
                                </Typography>
                            }
                            <br />
                            <Typography variant="subtitle2" sx={{ color: "rgb(225, 225, 225)" }}>
                                <i>{piece.description}</i>
                            </Typography>
                        </TabPanel>
                    ))
                }
            </Box>
        </Box >
    )

}

export default ArtifactPopup

const formatPieceType = (type: string) => {
    switch (type) {
        case "flower":
            type = "Flower of Life"
            break
        case "feather":
            type = "Plume of Death"
            break
        case "sands":
            type = "Sands of Eon"
            break
        case "goblet":
            type = "Goblet of Eonothem"
            break
        case "circlet":
            type = "Circlet of Logos"
            break
        default:
            break
    }
    return type
}