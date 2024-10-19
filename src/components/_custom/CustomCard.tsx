import React from "react"

// Component imports
import ArtifactPopup from "../artifacts/ArtifactPopup"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { Transition } from "./Transition"

// MUI imports
import { useTheme, useMediaQuery, Typography, ButtonBase, Box, Dialog } from "@mui/material"

// Helper imports
import { GetRarityColor, GetBackgroundColor } from "../../helpers/RarityColors"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { ArtifactData } from "../../types/artifact/ArtifactData"

interface CustomCardProps {
    name: string,
    displayName?: string | undefined,
    type: "character" | "weapon" | "artifact",
    rarity?: number | undefined,
    size?: string
    variant?: "icon" | "avatar",
    showInfo?: boolean,
    hideStars?: boolean,
    element?: string | undefined,
    weaponType?: string | undefined,
    artifact?: ArtifactData,
    disableLink?: boolean,
}

function CustomCard({
    name,
    displayName = name,
    type,
    rarity = 1,
    size = "64px",
    variant = "icon",
    showInfo = false,
    hideStars = false,
    element,
    weaponType,
    artifact,
    disableLink = false,
}: CustomCardProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    let imageURL
    if (type === "character") { imageURL = `${process.env.REACT_APP_URL}/characters/${variant}s/${name.split(" ").join("_")}.png` }
    if (type === "weapon") { imageURL = `${process.env.REACT_APP_URL}/weapons/${name.split(" ").join("_")}.png` }
    if (type === "artifact") { imageURL = `${process.env.REACT_APP_URL}/artifacts/sets/${name.split(" ").join("_")}/${artifact?.pieces[0].type}.png` }

    const href = disableLink || type === "artifact" ? "" : `${process.env.REACT_APP_BASENAME}/${type}s/${name.split(" ").join("_").toLowerCase()}`

    const cardImageStyle: React.CSSProperties = {
        position: "relative",
        zIndex: variant === "icon" ? 0 : -1,
        width: size,
        backgroundColor: `${theme.table.header.backgroundColor}`,
        backgroundImage: variant === "icon" ? `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)` : "none",
        backgroundSize: "100%",
        backgroundPosition: "center",
    }

    const smallIconSize = `calc(${size} / 6)`
    const smallIconStyle = {
        width: smallIconSize,
        height: smallIconSize,
        minWidth: "16px",
        minHeight: "16px",
    }

    return (
        <Box sx={{ position: "relative", zIndex: 0 }}>
            <Box
                sx={{
                    width: size,
                    height: showInfo ? "100%" : "auto",
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    boxSizing: "content-box",
                    overflow: "hidden",
                    containerType: "inline-size"
                }}
            >
                <ButtonBase disableRipple href={href} target="_blank">
                    <CustomTooltip title={!showInfo ? displayName : ""} arrow placement="top">
                        <img
                            src={imageURL} alt={name}
                            style={cardImageStyle}
                            loading="lazy"
                            onClick={() => type !== "artifact" ? null : handleClickOpen()}
                            onError={ErrorLoadingImage}
                        />
                    </CustomTooltip>
                </ButtonBase>
                <Box
                    sx={{
                        display: variant === "avatar" ? "block" : "none",
                        mt: `calc(${size} * -1/3)`,
                        background: variant === "avatar" ? `linear-gradient(transparent, ${GetBackgroundColor(rarity)})` : "none",
                        borderBottom: variant === "icon" ? "none" : `calc(${size} / 16) solid ${GetRarityColor(rarity)}`,
                    }}
                >
                    <Box sx={{ height: `calc(${size} * 1/3)` }} />
                </Box>
                {
                    showInfo &&
                    <Box
                        sx={{
                            height: "100%",
                            backgroundColor: `${theme.appbar.backgroundColor}`,
                            textAlign: "center",
                            pt: 0.5,
                            py: 1
                        }}
                    >
                        {
                            element !== undefined || weaponType !== undefined ?
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "-10px",
                                        left: "-15px",
                                        p: 0.5,
                                        backgroundColor: `rgba(0, 16, 32, 0.9)`,
                                        borderRadius: "15px",
                                    }}
                                >
                                    {
                                        element !== undefined &&
                                        <Box sx={{ height: smallIconSize, minHeight: "16px" }}>
                                            <CustomTooltip title={element} arrow placement="top">
                                                <img style={smallIconStyle} src={`${process.env.REACT_APP_URL}/elements/${element}.png`} alt={element} onError={ErrorLoadingImage} />
                                            </CustomTooltip>
                                        </Box>
                                    }
                                    {
                                        element && weaponType && <Box sx={{ my: "10px" }} />}
                                    {
                                        weaponType !== undefined &&
                                        <Box sx={{ height: smallIconSize, minHeight: "16px" }}>
                                            <CustomTooltip title={weaponType} arrow placement="top">
                                                <img style={smallIconStyle} src={`${process.env.REACT_APP_URL}/weapons/icons/${weaponType}.png`} alt={weaponType} onError={ErrorLoadingImage} />
                                            </CustomTooltip>
                                        </Box>
                                    }
                                </Box>
                                :
                                null
                        }
                        <img src={`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`} alt={rarity.toString()}
                            style={{
                                display: hideStars ? "none" : "block",
                                width: "auto",
                                height: `calc(${size} / 6)`,
                                maxHeight: "25px",
                                margin: "0px auto 5px auto",
                            }}
                            onError={ErrorLoadingImage}
                        />
                        <ButtonBase disableRipple href={href} target="_blank">
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    [theme.containerQueries.up(100)]: {
                                        fontSize: type === "character" ? "12px" : "10px",
                                    },
                                    [theme.containerQueries.up(125)]: {
                                        fontSize: type === "character" ? "14px" : "12px",
                                    },
                                    [theme.containerQueries.up(150)]: {
                                        fontSize: type === "character" ? "16px" : "14px",
                                    },
                                    color: `${theme.text.color}`,
                                    mx: 1,
                                }}
                                onClick={() => type !== "artifact" ? null : handleClickOpen()}
                            >
                                {displayName}
                            </Typography>
                        </ButtonBase>
                    </Box>
                }
            </Box>
            {
                type === "artifact" &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={!matches ? Transition : undefined}
                    maxWidth={false}
                    fullScreen={!matches}
                >
                    <ArtifactPopup artifact={artifact} handleClose={handleClose} />
                </Dialog>
            }
        </Box>
    )

}

export default CustomCard