// MUI imports
import { useTheme, Typography, ButtonBase, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"

// Helper imports
import { convertToDateObject, convertToDateString, isCurrentBanner } from "../../helpers/dates"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { ChronicledWishBannerData } from "../../types/banner/BannerData"

function ChronicledWishRow(props: any) {

    const theme = useTheme()

    let { row } = props
    let { version, subVersion } = props.row

    let startDate = convertToDateObject(row.start, subVersion.split(".")[2] === "1")
    let endDate = convertToDateObject(row.end)

    let start = convertToDateString(startDate)
    let end = convertToDateString(endDate)

    return (
        <TableRow sx={{ backgroundColor: isCurrentBanner(startDate, endDate) ? `${theme.button.selected}` : "none" }}>

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
                        (row as ChronicledWishBannerData).characters.fiveStars.map((char) => (
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
                        (row as ChronicledWishBannerData).characters.fourStars.map((char) => (
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
                        (row as ChronicledWishBannerData).weapons.fiveStars.map((wep) => (
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
                        (row as ChronicledWishBannerData).weapons.fourStars.map((wep) => (
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