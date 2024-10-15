import { connect } from "react-redux"

// MUI imports
import { useTheme, Typography, ButtonBase, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { CurrentBanner } from "../../helpers/CurrentBanner"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { ChronicledWishBannerPhaseData } from "../../types/banner/ChronicledWishBannerPhaseData"

function ChronicledWishRow(props: any) {

    const theme = useTheme()

    let { row, index } = props

    return (
        <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)}>

            { /* Version */}
            <StyledTableCell>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}` }}>{row.version}</Typography>
                <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
            </StyledTableCell>

            { /* Banners */}
            <StyledTableCell>

                { /* Characters */}
                <Grid container spacing={0.75}>
                    {
                        (row.banner as ChronicledWishBannerPhaseData).characters.fiveStars.map((char) => (
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
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                    {
                        (row.banner as ChronicledWishBannerPhaseData).characters.fourStars.map((char) => (
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
                        (row.banner as ChronicledWishBannerPhaseData).weapons.fiveStars.map((wep) => (
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
                                        onError={ErrorLoadingImage}
                                    />
                                </CustomTooltip>
                            </ButtonBase>
                        ))
                    }
                    {
                        (row.banner as ChronicledWishBannerPhaseData).weapons.fourStars.map((wep) => (
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
const mapStateToProps = (state: RootState) => ({
    characters: state.characters.characters,
    weapons: state.weapons.weapons
})

export default connect(mapStateToProps)(ChronicledWishRow)