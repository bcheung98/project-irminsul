import * as React from "react"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, ButtonBase, CardHeader, Typography } from "@mui/material"

// Helper imports
import { StyledTableCellNoVert, StyledTableRows } from "../_custom/CustomTable"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterRow(props: any) {

    const theme = useTheme()

    let { row, index } = props

    return (
        <React.Fragment>
            <StyledTableRows key={index}>

                { /* Name + Icon */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                    <img alt={row.name} src={(`${process.env.REACT_APP_URL}/characters/icons/${row.name.split(" ").join("_")}.png`)} style={{ width: "48px", cursor: "pointer" }} onError={ErrorLoadingImage} />
                                </ButtonBase>
                            }
                            title={
                                <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${row.name.split(" ").join("_").toLowerCase()}`} target="_blank">
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
                        <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${row.rarity}_Stars.png`)} alt={row.rarity} style={{ height: "25px" }} onError={ErrorLoadingImage} />
                    </Box>
                </StyledTableCellNoVert>

                { /* Element */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.element} src={(`${process.env.REACT_APP_URL}/elements/${row.element}.png`)} style={{ width: "32px" }} onError={ErrorLoadingImage} />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                    {row.element}
                                </Typography>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Weapon */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.weapon} src={(`${process.env.REACT_APP_URL}/weapons/icons/${row.weapon}.png`)}
                                    style={{
                                        width: "36px",
                                        border: "1px solid rgba(0, 30, 60, 0)",
                                        borderRadius: "64px",
                                    }}
                                    onError={ErrorLoadingImage}
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                    {row.weapon}
                                </Typography>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Nation */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.nation} src={(`${process.env.REACT_APP_URL}/nations/${row.nation}.png`)}
                                    style={{
                                        width: "48px",
                                    }}
                                    onError={ErrorLoadingImage}
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                    {row.nation}
                                </Typography>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Gender */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                            {row.gender}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

                { /* Release date */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                            {`${row.release.date} (${row.release.version})`}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

            </StyledTableRows>
        </React.Fragment>
    )
}

export default CharacterRow