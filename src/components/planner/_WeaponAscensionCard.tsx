import * as React from "react"

// Component imports
import WeaponAscensionCardMaterials from "./_WeaponAscensionCardMaterials"
import WeaponAscensionLevel from "./WeaponAscensionLevel"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, CardHeader, ButtonBase } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function WeaponAscensionCard(props: any) {

    const theme = useTheme()

    let { name, rarity, type } = props.weapon

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
                width: "750px",
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                mr: "30px",
                mb: "30px",
                p: 1,
            }}
        >
            <CardHeader
                avatar={
                    <Box sx={{ position: "relative" }}>
                        <ButtonBase disableRipple href={`/project-irminsul/weapon/${props.weapon.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <img alt={name} src={`${process.env.REACT_APP_URL}/weapons/Weapon_${name.split(" ").join("_")}.png`} style={mainIcon} onError={ErrorLoadingImage} />
                        </ButtonBase>
                        <Box sx={{ position: "absolute", top: "50px", left: "45px" }}>
                            <CustomTooltip title={type} arrow placement="top">
                                <img style={smallIcon} src={`${process.env.REACT_APP_URL}/weapons/icons/Icon_${type}.png`} alt={type} onError={ErrorLoadingImage} />
                            </CustomTooltip>
                        </Box>
                    </Box>
                }
                title={
                    <React.Fragment>
                        <ButtonBase disableRipple href={`/project-irminsul/weapon/${props.weapon.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                                {name}
                            </Typography>
                        </ButtonBase>
                        <img style={{
                            display: "block",
                            marginLeft: "-5px",
                            marginTop: "5px",
                            height: "25px",
                        }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} onError={ErrorLoadingImage} />
                    </React.Fragment>
                }
            />
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Box sx={{ ml: "15px" }}>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                    Materials Required
                </Typography>
                <WeaponAscensionCardMaterials weapon={props.weapon} />
            </Box>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                        Edit
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WeaponAscensionLevel weapon={props.weapon} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )

}

export default WeaponAscensionCard