import * as React from "react"
import parse from "html-react-parser"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Box, Avatar, CardHeader, AppBar } from "@mui/material"

// Helper imports
import { ElementalBorderColor } from "../../../helpers/ElementalColors"

function CharacterConstellationDisplay(props: any) {

    const theme = useTheme()

    let { name, element, constellation } = props.character

    return (
        <Box
            sx={{
                mx: "15px",
                mt: "15px",
                color: `${theme.text.color}`,
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
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
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        m: 2,
                        color: `${theme.text.color}`,
                        fontFamily: "Genshin, sans-serif",
                    }}
                >
                    Constellation
                </Typography>
            </AppBar>
            {
                Object.keys(constellation).splice(1).map((key, index) => {
                    return (
                        <React.Fragment key={index}>
                            <CardHeader
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                avatar={
                                    <Avatar alt={constellation[key].name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "48px",
                                            height: "48px",
                                            border: "2px solid rgb(30, 73, 118)",
                                        }}
                                    >
                                        <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "48px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                    </Avatar>
                                }
                                title={
                                    <React.Fragment>
                                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            {constellation[key].name}
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            <i>{key.toUpperCase()}</i>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                            <Typography variant="body1" sx={{ fontSize: "11pt", mx: "20px" }}>
                                {parse(constellation[key].description)}
                            </Typography>
                            <br />
                            {key !== "c6" && <hr style={{ border: ".5px solid rgb(30, 73, 118)", margin: "10px" }} />}
                        </React.Fragment>
                    )
                })
            }
        </Box>
    )
}

export default CharacterConstellationDisplay