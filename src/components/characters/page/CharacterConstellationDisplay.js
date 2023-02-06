import * as React from "react";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader } from "@mui/material";
import { ElementalBorderColor } from "../../../helpers/ElementalColors";

const CharacterConstellationDisplay = (props) => {

    let { name, element, constellation } = props.character;

    return (
        <Box
            sx={{
                border: "1px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                color: "white",
                width: "95vw",
                margin: "auto",
                mt: "20px",
                padding: "15px",
            }}>
            <Typography
                variant="h5"
                noWrap
                component="p"
                sx={{
                    fontFamily: "Genshin, sans-serif",
                    mb: "15px",
                }}
            >
                Constellation
            </Typography>
            {Object.keys(constellation).splice(1).map((key, index) => {
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
                                    }} />
                            }
                            title={
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {constellation[key].name}
                                </Typography>
                            }
                        />
                        <Typography variant="body1" sx={{ fontSize: "15px", ml: "20px" }}>
                            {parse(constellation[key].description)}
                        </Typography>
                        <br />
                        {key !== "c6" && <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "5px", marginBottom: "15px" }} />}
                    </React.Fragment>
                )
            })}
        </Box>
    )
}

export default CharacterConstellationDisplay;