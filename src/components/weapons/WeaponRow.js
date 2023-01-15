import * as React from "react";
import { StyledTableCellNoVert, StyledTableRows } from "../../helpers/StyledTable";
import { Box } from "@mui/system";
import { ButtonBase, CardHeader, Typography } from "@mui/material";

const WeaponRow = (props) => {

    let { row, index } = props;
    // const currentWeapon = weapons.filter(weapon => weapon.name === row.name)[0];

    return (
        <React.Fragment>
            <StyledTableRows key={index}>

            
                { /* Name + Icon */}
                <StyledTableCellNoVert className="genshinFont">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                // <ButtonBase disableRipple href={`/project-irminsul/weapon/${currentWeapon.name.split(" ").join("_").toLowerCase()}`}>
                                <img alt={row.name} src={require(`../../assets/weapons/Weapon_${row.name.split(" ").join("_")}.png`)}
                                    style={{ width: "48px", cursor: "pointer" }}
                                />
                                // </ButtonBase>
                            }
                            title={
                                // <ButtonBase disableRipple href={`/project-irminsul/weapon/${currentWeapon.name.split(" ").join("_").toLowerCase()}`}>
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
                                // </ButtonBase>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Rarity */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src={require(`../../assets/stars/Icon_${row.rarity}_Stars.png`)} alt={row.rarity} style={{ height: "25px" }} />
                    </Box>
                </StyledTableCellNoVert>

                { /* Weapon */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.weapon} src={require(`../../assets/weapons/Weapon-class-${row.type.toLowerCase()}-icon.png`)}
                                    style={{
                                        width: "32px",
                                        border: "1px solid rgba(0, 30, 60, 0)",
                                        borderRadius: "64px",
                                    }}
                                />
                            }
                            title={
                                <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                    {row.type}
                                </Typography>
                            }
                        />
                    </Box>
                </StyledTableCellNoVert>

                { /* Base ATK */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            {row.atk}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

                { /* 2nd Stat */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            {row.secondaryStat}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

                { /* 2nd Stat Value */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            {row.secondaryStatValue}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

            </StyledTableRows>
        </React.Fragment>
    )
}

export default WeaponRow;