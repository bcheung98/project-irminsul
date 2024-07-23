// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, ButtonBase, TableRow } from "@mui/material"

// Helper imports
import { StyledTableCell } from "../../helpers/CustomTable"
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { CurrentBanner } from "../../helpers/CurrentBanner"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { BannerRowData } from "../../types/banner/BannerRowData"

function WeaponBannerRow(props: any) {

    const theme = useTheme()

    let { row, index } = props

    return (
        <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)}>

            { /* Version */}
            <StyledTableCell>
                <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{row.version}</Typography>
                <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
            </StyledTableCell>

            { /* Banners */}
            <StyledTableCell>
                {
                    <Box sx={{ display: "flex" }}>
                        {
                            (row as BannerRowData).banner.map((wep, index) => (
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                    <CustomTooltip title={wep} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/weapons/${wep}.png`)} alt={wep}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundSize: "100%",
                                                backgroundImage: `${WeaponIconBackground(index)}`
                                            }}
                                            onError={ErrorLoadingImage}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))
                        }
                    </Box>
                }
            </StyledTableCell>

        </TableRow>
    )
}

export default WeaponBannerRow

function WeaponIconBackground(index: number) {
    if (index <= 1) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`
    }
    else {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`
    }
}