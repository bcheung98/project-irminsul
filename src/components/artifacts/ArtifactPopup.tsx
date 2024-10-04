import * as React from "react"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, AppBar, Typography } from "@mui/material"

// Helper imports
import { TabPanel, StyledTabsWithIndicator, StyledTab } from "../../helpers/CustomTabs"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function ArtifactPopup(props: any) {

    const theme = useTheme()

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
                width: "50vw",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                }}
            >
                <Typography variant="h4" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, p: 2 }} >
                    {props.artifact.displayName ? props.artifact.displayName : name}
                </Typography>
            </AppBar>
            <Box sx={{ mt: "10px" }}>
                <StyledTabsWithIndicator value={tabValue} onChange={handleTabChange}>
                    {pieces.map((piece: { name: string, type: string }, index: number) => <StyledTab key={index} label={<img src={`${process.env.REACT_APP_URL}/artifacts/icons/${piece.type}.png`} style={pieceIcon} alt={piece.name} onError={ErrorLoadingImage} />} />)}
                </StyledTabsWithIndicator>
                {
                    pieces.map((piece: { name: string, type: string, description: string }, index: number) => (
                        <TabPanel key={index} index={index} value={tabValue}>
                            <Typography variant="h5" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
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
        </Box>
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