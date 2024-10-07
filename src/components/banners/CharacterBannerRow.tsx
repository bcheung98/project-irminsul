// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, ButtonBase, TableRow } from "@mui/material"

// Helper imports
import { StyledTableCell } from "../_custom/CustomTable"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { CurrentBanner } from "../../helpers/CurrentBanner"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { BannerRowData } from "../../types/banner/BannerRowData"

function CharacterBannerRow(props: any) {

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
                {
                    <Box sx={{ display: "flex" }}>
                        {
                            (row as BannerRowData).banner.map((char, index) => (
                                <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                    <CustomTooltip title={char} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/characters/icons/${char.split(" ").join("_")}.png`)} alt={char}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundSize: "100%",
                                                backgroundImage: `${CharIconBackground(index, row.banner.length)}`
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

export default CharacterBannerRow

function CharIconBackground(index: number, len: number) {
    if (index === 0 && len === 4) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`
    }
    else if (index <= 1 && len === 5) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`
    }
    else if (index !== 0 && len === 4) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`
    }
    else if (index >= 2 && len === 5) {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`
    }
    else {
        return `url(${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.png)`
    }
}