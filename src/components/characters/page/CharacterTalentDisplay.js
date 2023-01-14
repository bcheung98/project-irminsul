import * as React from "react";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader } from "@mui/material";
import { FormatTalentKey } from "../../../helpers/FormatTalentKey";
import { ElementalBorderColor } from "../../../helpers/ElementalColors";

const CharacterTalentDisplay = (props) => {

    let { name, element, weapon, talents } = props.character;

    return (
        <Box
            sx={{
                border: "1px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                color: "white",
                width: "95vw",
                margin: "auto",
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
                Talents
            </Typography>
            {Object.keys(talents).map((key, index) => {
                return (
                    <Box key={key}>
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", }}>
                            <i>{FormatTalentKey(key).toUpperCase()}</i>
                        </Typography>
                        <CardHeader
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            avatar={
                                key === "attack" ?
                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../../assets/characters/talents/attack_${weapon.toLowerCase()}.png`)} style={ElementalBorderColor(element)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            mr: "10px",
                                            width: "48px",
                                            height: "48px",
                                            border: "2px solid rgb(30, 73, 118)",
                                        }} />
                                    :
                                    <Avatar alt={`name.split(" ").join("_").toLowerCase()}_${key}`} src={require(`../../../assets/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            mr: "10px",
                                            width: "48px",
                                            height: "48px",
                                            border: "2px solid rgb(30, 73, 118)",
                                        }} />
                            }
                            title={
                                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", }}>
                                    {talents[key].name}
                                </Typography>
                            }
                        />
                        <Typography variant="body1" sx={{ fontSize: "16px" }}>
                            {parse(talents[key].description)}
                        </Typography>
                        {
                            talents[key].splash &&
                            <React.Fragment>
                                <br />
                                <i style={{ fontSize: "15px", color: "rgb(225, 225, 225)" }}>{parse(talents[key].splash)}</i>
                                <br />
                            </React.Fragment>
                        }
                        <br /><hr style={{ border: ".5px solid rgb(30, 73, 118)" }} /><br />
                    </Box>
                )
            })}
        </Box>
    )
}

export default CharacterTalentDisplay;