import * as React from "react";
import { StyledTableCellNoVert, StyledTableRows } from "../../helpers/StyledTable";
import { Box } from "@mui/system";
import { ButtonBase, CardHeader, Typography } from "@mui/material";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";
import { formatCommonMats, formatEliteMats } from "../../helpers/TooltipText";

const WeaponRow = (props) => {

    let { row, index, weapons } = props;
    const currentWeapon = weapons.filter(weapon => weapon.name === row.name)[0];

    const materialImage = {
        height: "48px",
        marginRight: "3.5px",
        border: "1px solid rgb(30, 73, 118)",
        borderRadius: "5px",
        backgroundColor: "rgb(9, 24, 39)",
    }

    return (
        <React.Fragment>
            <StyledTableRows key={index} >

                { /* Name + Icon */}
                <StyledTableCellNoVert className="genshinFont">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${currentWeapon.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                    <img alt={row.name} src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${row.name.split(" ").join("_")}.png`)}
                                        style={{ width: "48px", cursor: "pointer" }}
                                    />
                                </ButtonBase>
                            }
                            title={
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${currentWeapon.name.split(" ").join("_").toLowerCase()}`} target="_blank">
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

                { /* Weapon */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CardHeader sx={{ p: 0 }}
                            avatar={
                                <img alt={row.weapon} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${row.type.toLowerCase()}-icon.png`)}
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
                            {row.subStatString}
                        </Typography>
                    </Box>
                </StyledTableCellNoVert>

                { /* Materials */}
                <StyledTableCellNoVert>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <MaterialTooltip title={row.ascensionMat} arrow placement="top">
                            <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${row.ascensionMat.split(" ").join("_")}4.png`)} alt={row.ascensionMat} />
                        </MaterialTooltip>
                        <MaterialTooltip title={formatEliteMats(row.eliteMat)} arrow placement="top">
                            <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${row.eliteMat.split(" ").join("_")}3.png`)} alt={row.eliteMat} />
                        </MaterialTooltip>
                        <MaterialTooltip title={formatCommonMats(row.commonMat)} arrow placement="top">
                            <img style={materialImage} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${row.commonMat.split(" ").join("_")}3.png`)} alt={row.commonMat} />
                        </MaterialTooltip>
                    </Box>
                </StyledTableCellNoVert>

            </StyledTableRows>
        </React.Fragment >
    )
}

export default WeaponRow;