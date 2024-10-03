import * as React from "react"

// Component imports
import ArtifactPopup from "./ArtifactPopup"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, Box, Dialog } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function ArtifactCard(props: any) {

    const theme = useTheme()

    let { name, rarity } = props.artifact

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const size = "150px"

    return (
        <Card
            sx={{
                position: "relative",
                zIndex: 0,
                width: size,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Box onClick={() => handleClickOpen()} sx={{ cursor: "pointer" }}>
                <img src={`${process.env.REACT_APP_URL}/artifacts/sets/${name.split(" ").join("_")}/${props.artifact.pieces[0].type}.png`} alt={name}
                    style={{
                        position: "relative",
                        zIndex: -1,
                        width: size,
                        height: size,
                        backgroundColor: "rgb(32, 32, 32)",
                        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
                        backgroundSize: "100%",
                    }}
                    onError={ErrorLoadingImage}
                />
            </Box>
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.table.header.backgroundColor}`,
                    height: "100%"
                }}
            >
                <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity}
                    style={{
                        display: "block",
                        margin: "auto",
                        marginTop: "-5px",
                        marginBottom: "10px",
                        height: "25px",
                    }}
                    onError={ErrorLoadingImage}
                />
                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, cursor: "pointer" }} onClick={() => handleClickOpen()}>
                    {props.artifact.displayName ? props.artifact.displayName : name}
                </Typography>
            </CardContent>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <ArtifactPopup artifact={props.artifact} />
            </Dialog>
        </Card>
    )

}

export default ArtifactCard