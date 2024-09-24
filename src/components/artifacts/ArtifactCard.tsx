import * as React from "react"

// Component imports
import ArtifactPopup from "./ArtifactPopup"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, Box, Avatar, Dialog } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function ArtifactCard(props: any) {

    const theme = useTheme()

    let { name, rarity } = props.artifact

    let artifactIconBackground = {
        width: "150px",
        height: "150px",
        backgroundColor: "rgb(32, 32, 32)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%",
        cursor: "pointer",
    }

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card
            sx={{
                width: "150px",
                mr: "18px",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Box>
                <Avatar variant="square" src={`${process.env.REACT_APP_URL}/artifacts/sets/${name.split(" ").join("_")}/${props.artifact.pieces[0].type}.png`} alt={name} sx={artifactIconBackground} onClick={() => handleClickOpen()}
                >
                    <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "150px" }} />
                </Avatar>
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