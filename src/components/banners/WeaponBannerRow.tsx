// MUI imports
import { useTheme, Typography, ButtonBase, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function WeaponBannerRow(props: any) {

    const theme = useTheme()

    let { version, fiveStars, fourStars } = props.row

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
                {
                    <Grid container spacing={0.75}>
                        {
                            fiveStars.map((wep: string, index: number) => {
                                return (
                                    <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                        <CustomTooltip title={wep} arrow placement="top">
                                            <img src={`${process.env.REACT_APP_URL}/weapons/${wep.split(" ").join("_")}.png`} alt={wep}
                                                style={{
                                                    border: `1px solid ${theme.border.color}`,
                                                    borderRadius: "5px",
                                                    width: "64px",
                                                    height: "64px",
                                                    backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                    backgroundSize: "100%",
                                                    backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`
                                                }}
                                                loading="lazy"
                                                onError={ErrorLoadingImage}
                                            />
                                        </CustomTooltip>
                                    </ButtonBase>
                                )
                            })
                        }
                        {
                            fourStars.map((wep: string, index: number) => {
                                return (
                                    <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                        <CustomTooltip title={wep} arrow placement="top">
                                            <img src={`${process.env.REACT_APP_URL}/weapons/${wep.split(" ").join("_")}.png`} alt={wep}
                                                style={{
                                                    border: `1px solid ${theme.border.color}`,
                                                    borderRadius: "5px",
                                                    width: "64px",
                                                    height: "64px",
                                                    backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                    backgroundSize: "100%",
                                                    backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`
                                                }}
                                                loading="lazy"
                                                onError={ErrorLoadingImage}
                                            />
                                        </CustomTooltip>
                                    </ButtonBase>
                                )
                            })
                        }
                    </Grid>
                }
            </StyledTableCell>

        </TableRow>
    )
}

export default WeaponBannerRow