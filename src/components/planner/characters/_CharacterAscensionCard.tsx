import * as React from "react"

// Component imports
import CharacterAscensionCardMaterials from "./_CharacterAscensionCardMaterials"
import CharacterAscensionLevel from "./CharacterAscensionLevel"
import CharacterAscensionATK from "./CharacterAscensionATK"
import CharacterAscensionSkill from "./CharacterAscensionSkill"
import CharacterAscensionBurst from "./CharacterAscensionBurst"
import { CustomTooltip } from "components/_custom/CustomTooltip"
import { Accordion, AccordionDetails, AccordionSummary } from "components/_custom/CustomAccordion"

// MUI imports
import { useTheme, Box, Typography, CardHeader, ButtonBase } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "helpers/ErrorLoadingImage"

// Type imports
import { CharacterCostObject } from "types/costs"

function CharacterAscensionCard({ character }: { character: CharacterCostObject }) {

    const theme = useTheme()

    const { name, rarity, element, weapon } = character

    const smallIcon = {
        width: "24px",
        height: "24px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        border: `1px solid ${theme.border.color}`,
        borderRadius: "24px",
        marginBottom: "10px",
    }

    const mainIcon = {
        width: "64px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "64px",
        backgroundColor: "rgb(32, 32, 32)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%"
    }

    return (
        <Box
            sx={{
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                p: 1,
            }}
        >
            <CardHeader
                avatar={
                    <Box sx={{ position: "relative" }}>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <img alt={name} src={`${process.env.REACT_APP_URL}/characters/icons/${name.split(" ").join("_")}.png`} style={mainIcon} onError={ErrorLoadingImage} />
                        </ButtonBase>
                        <Box sx={{ position: "absolute", top: "50px", left: "-5px" }}>
                            <CustomTooltip title={element} arrow placement="top">
                                <img style={smallIcon} src={`${process.env.REACT_APP_URL}/elements/${element}.png`} alt={element} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                        <Box sx={{ position: "absolute", top: "50px", left: "45px" }}>
                            <CustomTooltip title={weapon} arrow placement="top">
                                <img style={smallIcon} src={`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`} alt={weapon} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                    </Box>
                }
                title={
                    <React.Fragment>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                                {character.displayName ? character.displayName : name}
                            </Typography>
                        </ButtonBase>
                        <img style={{
                            display: "block",
                            marginLeft: "-2.5px",
                            marginTop: "5px",
                            height: "20px",
                        }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity.toString()} onError={ErrorLoadingImage} />
                    </React.Fragment>
                }
            />
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Box sx={{ ml: "15px" }}>
                <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                    Materials Required
                </Typography>
                <CharacterAscensionCardMaterials character={character} />
            </Box>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px" }} />
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                        Edit
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mx: "10px", px: 0 }}>
                    <CharacterAscensionLevel character={character} />
                    <CharacterAscensionATK character={character} />
                    <CharacterAscensionSkill character={character} />
                    <CharacterAscensionBurst character={character} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default CharacterAscensionCard