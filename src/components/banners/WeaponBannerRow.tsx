import { connect } from "react-redux"

// MUI imports
import { useTheme, Typography, ButtonBase, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { CurrentBanner } from "../../helpers/CurrentBanner"
import BannerRarityBackgrounds from "../../helpers/BannerRarityBackground"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { BannerRowData } from "../../types/banner/BannerRowData"
import { WeaponData } from "../../types/weapon/WeaponData"

function WeaponBannerRow(props: any) {

    const theme = useTheme()

    let { row, index, weapons } = props

    return (
        <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)}>

            { /* Version */}
            <StyledTableCell>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}` }}>{row.version}</Typography>
                <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
            </StyledTableCell>

            { /* Banners */}
            <StyledTableCell>
                {
                    <Grid container spacing={0.75}>
                        {
                            (row as BannerRowData).banner.map((wep, index) => {
                                let rarity = weapons.find((w: WeaponData) => w.name === wep).rarity
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
                                                    backgroundImage: BannerRarityBackgrounds(rarity)
                                                }}
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

const mapStateToProps = (state: RootState) => ({
    weapons: state.weapons.weapons
})

export default connect(mapStateToProps)(WeaponBannerRow)