import * as React from "react";
import { StyledTableCellNoVert, StyledTableRows } from "../../helpers/StyledTable";
import { Box } from "@mui/system";
import { ButtonBase, CardHeader, Typography } from "@mui/material";

const CharacterRow = (props) => {

    let { row, index, characters } = props;
    const currentCharacter = characters.filter(char => char.name === row.name)[0];

    return (
        <React.Fragment>
            <StyledTableRows key={index}>

                { /* Name + Icon */}
                <StyledTableCellNoVert className="genshinFont">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <ButtonBase disableRipple href={`/project-irminsul/character/${currentCharacter.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                    <img alt={row.name} src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${row.name.split(" ").join("_")}_Thumb.png`)}
                                        style={{ width: "48px", cursor: "pointer" }}
                                    />
                                </ButtonBase>
                            }
                            title={
                                <ButtonBase disableRipple href={`/project-irminsul/character/${currentCharacter.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                    <Typography variant="body1"
                                        sx={{
                                            fontFamily: "Genshin, sans-serif",
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

                { /* Element */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.element} src={(`${process.env.REACT_APP_URL}/elements/Element_${row.element}.png`)}
                                    style={{ width: "32px" }}
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
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
                                <img alt={row.weapon} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${row.weapon.toLowerCase()}-icon.png`)}
                                    style={{
                                        width: "32px",
                                        border: "1px solid rgba(0, 30, 60, 0)",
                                        borderRadius: "64px",
                                    }}
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
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
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {row.nation}
                                </Typography>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Gender */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            {row.gender}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

                { /* Release date */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            {`${row.releaseDate} (${row.version})`}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

            </StyledTableRows>
        </React.Fragment>
    )
}

export default CharacterRow;