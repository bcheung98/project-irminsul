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
import { CharacterData } from "../../types/character/CharacterData"

function CharacterBannerRow(props: any) {

    const theme = useTheme()

    let { row, index, characters } = props

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
                            (row as BannerRowData).banner.map((char, index) => {
                                let rarity = characters.find((c: CharacterData) => c.name === char).rarity
                                return (
                                    <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                        <CustomTooltip title={char} arrow placement="top">
                                            <img src={`${process.env.REACT_APP_URL}/characters/icons/${char.split(" ").join("_")}.png`} alt={char}
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
    characters: state.characters.characters
})

export default connect(mapStateToProps)(CharacterBannerRow)