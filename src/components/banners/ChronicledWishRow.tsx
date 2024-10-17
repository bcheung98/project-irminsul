// MUI imports
import { useTheme, Typography, ButtonBase, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function ChronicledWishRow(props: any) {

    const theme = useTheme()

    let { version, characters, weapons } = props.row

    let start = createDateObject(props.row.start)
    let end = createDateObject(props.row.end)

    return (
        <TableRow sx={{ backgroundColor: isCurrentBanner(start.obj, end.obj) ? `${theme.button.selected}` : "none" }}>

            { /* Version */}
            <StyledTableCell>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}` }}>{version}</Typography>
                <CustomTooltip title={`${start.date} ${start.time} — ${end.date} ${end.time}`} arrow placement="bottom">
                    <Typography variant="body2">{start.date} — {end.date}</Typography>
                </CustomTooltip>
            </StyledTableCell>

            { /* Banners */}
            <StyledTableCell>

                { /* Characters */}
                <Grid container spacing={0.75}>
                    {
                        characters.fiveStars.map((char: string) => (
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                <CustomTooltip title={char} arrow placement="top">
                                    <img src={`${process.env.REACT_APP_URL}/characters/icons/${char.split(" ").join("_")}.png`} alt={char}
                                        style={{
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`,
                                            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
                                            backgroundSize: "100%"
                                        }}
                                        loading="lazy"
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                    {
                        characters.fourStars.map((char: string) => (
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                <CustomTooltip title={char} arrow placement="top">
                                    <img src={`${process.env.REACT_APP_URL}/characters/icons/${char.split(" ").join("_")}.png`} alt={char}
                                        style={{
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`,
                                            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
                                            backgroundSize: "100%"
                                        }}
                                        loading="lazy"
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                </Grid>

                <hr style={{ border: `0.75px solid ${theme.border.color}`, margin: "15px 0px 15px 0px" }} />

                { /* Weapons */}
                <Grid container spacing={0.75}>
                    {
                        weapons.fiveStars.map((wep: string) => (
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                <CustomTooltip title={wep} arrow placement="top">
                                    <img src={`${process.env.REACT_APP_URL}/weapons/${wep.split(" ").join("_")}.png`} alt={wep}
                                        style={{
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`,
                                            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
                                            backgroundSize: "100%"
                                        }}
                                        loading="lazy"
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                    {
                        weapons.fourStars.map((wep: string) => (
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                <CustomTooltip title={wep} arrow placement="top">
                                    <img src={`${process.env.REACT_APP_URL}/weapons/${wep.split(" ").join("_")}.png`} alt={wep}
                                        style={{
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`,
                                            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
                                            backgroundSize: "100%"
                                        }}
                                        loading="lazy"
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                </Grid>
            </StyledTableCell>

        </TableRow>
    )

}

export default ChronicledWishRow