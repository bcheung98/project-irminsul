import * as React from "react"
import parse from "html-react-parser"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Box, Avatar, CardHeader, Paper, AppBar } from "@mui/material"
import { Accordion, AccordionDetails, AccordionSummary } from "../../_custom/CustomAccordion"

// Helper imports
import { FormatTalentKey } from "../../../helpers/FormatTalentKey"
import { ElementalBorderColor } from "../../../helpers/ElementalColors"
import CharacterTalentScalingTable from "./CharacterTalentScalingTable"
import CharacterTalentLevelling from "./CharacterTalentLevelling"

function CharacterTalentDisplay(props: any) {

    const theme = useTheme()

    let { name, element, weapon, talents } = props.character

    return (
        <Box
            sx={{
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
                        fontFamily: `${theme.font.genshin.family}`,
                    }}
                >
                    Talents
                </Typography>
            </AppBar>
            {Object.keys(talents).map((key, index) => {
                return (
                    <Box key={key}>
                        <CardHeader
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            avatar={
                                key === "attack" ?
                                    <Avatar alt={`${name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/characters/talents/attack_${weapon.toLowerCase()}.png`)} style={ElementalBorderColor(element)}
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
                                    :
                                    <Avatar alt={`${name.split(" ").join("_").toLowerCase()}_${key}`} src={(`${process.env.REACT_APP_URL}/characters/talents/${name.split(" ").join("_").toLowerCase()}_${key}.png`)} style={ElementalBorderColor(element)}
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
                                    <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                        {talents[key].name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontFamily: `${theme.font.genshin.family}`, }}>
                                        <i>{FormatTalentKey(key).toUpperCase()}</i>
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <Typography variant="body1" sx={{ fontSize: "11pt", mx: "20px" }}>
                            {parse(talents[key].description)}
                        </Typography>
                        {
                            talents[key].splash &&
                            <React.Fragment>
                                <br />
                                <Typography variant="body1" sx={{ fontSize: "10.5pt", fontStyle: "italic", ml: "20px", color: "rgb(225, 225, 225)" }}>
                                    {parse(talents[key].splash)}
                                </Typography>
                            </React.Fragment>
                        }
                        <br />
                        {
                            ["attack", "skill", "burst", "altsprint"].includes(key) &&
                            <Paper variant="outlined"
                                sx={{
                                    color: `${theme.text.color}`,
                                    border: "none",
                                }}
                            >
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>Talent Scaling</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <CharacterTalentScalingTable attackType={key} stats={talents[key].scaling} />
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>Level Up Cost</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <CharacterTalentLevelling character={props.character} />
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                        }
                        {index !== Object.keys(talents).length - 1 && <hr style={{ border: `.5px solid ${theme.border.color}`, margin: "10px" }} />}
                    </Box>
                )
            })}
        </Box >
    )
}

export default CharacterTalentDisplay