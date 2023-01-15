import * as React from "react";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader, Paper } from "@mui/material";
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
                variant="h4"
                noWrap
                component="p"
                sx={{
                    fontFamily: "Genshin, sans-serif",
                    mb: "15px",
                }}
            >
                Constellation
            </Typography>

            {/* C1 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c1.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c1.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c1.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c1.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* C2 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c2.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c2.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c2.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c2.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* C3 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c3.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c3.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c3.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c3.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* C4 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c4.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c4.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c4.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c4.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* C5 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c5.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c5.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c5.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c5.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />

            {/* C6 */}
            <CardHeader
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
                avatar={
                    <Avatar alt={constellation.c6.name} src={(`${process.env.REACT_APP_URL}/characters/constellations/${name.split(" ").join("_").toLowerCase()}_c6.png`)} style={ElementalBorderColor(element)}
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
                        {constellation.c6.name}
                    </Typography>
                }
            />
            <Typography variant="body1" sx={{ fontSize: "16px", ml: "20px" }}>
                {parse(constellation.c6.description)}
            </Typography>
            <br />
            <hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "15px", marginBottom: "15px" }} />
        </Box>
    )
}

export default CharacterConstellationDisplay;