// MUI imports
import { useTheme, Box, ButtonBase, CardHeader, Typography } from "@mui/material"
import { StyledTableCellNoVert, StyledTableRows } from "../_custom/CustomTable"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function WeaponRow(props: any) {

    const theme = useTheme()

    let { row, index } = props

    return (
        <StyledTableRows key={index}>

            { /* Name + Icon */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader sx={{ p: 0 }}
                        avatar={
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                <img alt={row.name} src={(`${process.env.REACT_APP_URL}/weapons/${row.name.split(" ").join("_")}.png`)} style={{ width: "48px", cursor: "pointer" }} onError={ErrorLoadingImage} />
                            </ButtonBase>
                        }
                        title={
                            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                <Typography variant="body1"
                                    sx={{
                                        fontFamily: `${theme.font.genshin.family}`,
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "rgb(30, 175, 255)",
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {row.name}
                                </Typography>
                            </ButtonBase>
                        }
                    />
                </Box>
            </StyledTableCellNoVert>

            { /* Rarity */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${row.rarity}_Stars.png`)} alt={row.rarity} style={{ height: "25px" }} />
                </Box>
            </StyledTableCellNoVert>

            { /* Weapon */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader sx={{ p: 0 }}
                        avatar={
                            <img alt={row.weapon} src={(`${process.env.REACT_APP_URL}/weapons/icons/${row.type}.png`)}
                                style={{
                                    width: "36px",
                                    border: "1px solid rgba(0, 0, 0, 0)",
                                    borderRadius: "64px",
                                }}
                            />
                        }
                        title={
                            <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                {row.type}
                            </Typography>
                        }
                    />
                </Box>
            </StyledTableCellNoVert>

            { /* Base ATK */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                        {row.atk}
                    </Typography>
                </Box>
            </StyledTableCellNoVert>

            { /* 2nd Stat */}
            <StyledTableCellNoVert>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CardHeader sx={{ p: 0 }}
                        avatar={
                            row.subStat.trim() !== "-" ?
                                <img alt={row.subStat} src={(`${process.env.REACT_APP_URL}/icons/ascension_stats/${row.subStat.split(" ").slice(0, -1).join("_")}.png`)}
                                    style={{
                                        width: "36px",
                                        border: "1px solid rgba(0, 30, 60, 0)",
                                        borderRadius: "64px",
                                    }}
                                    onError={ErrorLoadingImage}
                                />
                                :
                                null
                        }
                        title={
                            <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                {row.subStat}
                            </Typography>
                        }
                    />
                </Box>
            </StyledTableCellNoVert>

        </StyledTableRows>
    )
}

export default WeaponRow