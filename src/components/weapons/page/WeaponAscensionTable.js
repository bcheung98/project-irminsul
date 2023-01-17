import * as React from "react";
import "../../../css/AscensionTable.css";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import { StyledTableCell } from "../../../helpers/StyledTable";
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../../helpers/TooltipText";
import { WeaponMaterialQuantity, TotalWeaponMaterialQuantity } from "../../../helpers/WeaponAscensionMaterialCount";
let background1star = (`${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.png`);
let background2star = (`${process.env.REACT_APP_URL}/backgrounds/Background_2_Star.png`);
let background3star = (`${process.env.REACT_APP_URL}/backgrounds/Background_3_Star.png`);
let background4star = (`${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png`);
let background5star = (`${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png`);

const ascensionLegend = {
    ascensionMat: {
        "20-40": "1",
        "40-50": "2",
        "50-60": "2",
        "60-70": "3",
        "70-80": "3",
        "80-90": "4"
    },
    eliteMat: {
        "20-40": "1",
        "40-50": "1",
        "50-60": "2",
        "60-70": "2",
        "70-80": "3",
        "80-90": "3"
    },
    commonMat: {
        "20-40": "1",
        "40-50": "1",
        "50-60": "2",
        "60-70": "2",
        "70-80": "3",
        "80-90": "3"
    }
}

const ascMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "20-40":
            return { backgroundImage: "url(" + background2star + ")" }
        case "40-50":
        case "50-60":
            return { backgroundImage: "url(" + background3star + ")" }
        case "60-70":
        case "70-80":
            return { backgroundImage: "url(" + background4star + ")" }
        case "80-90":
            return { backgroundImage: "url(" + background5star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const eliteMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "20-40":
        case "40-50":
            return { backgroundImage: "url(" + background2star + ")" }
        case "50-60":
        case "60-70":
            return { backgroundImage: "url(" + background3star + ")" }
        case "70-80":
        case "80-90":
            return { backgroundImage: "url(" + background4star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const commonMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "20-40":
        case "40-50":
            return { backgroundImage: "url(" + background1star + ")" }
        case "50-60":
        case "60-70":
            return { backgroundImage: "url(" + background2star + ")" }
        case "70-80":
        case "80-90":
            return { backgroundImage: "url(" + background3star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const createAscStats = (phase, ascLevel, quantity, total) => {
    return { phase, ascLevel, quantity, total }
}

const WeaponAscensionTable = (props) => {

    let { rarity } = props.weapon;
    let { ascensionMat, eliteMat, commonMat } = props.weapon.materials;

    let ascLevels = [];
    rarity > 2 ? ascLevels = ["1-20", "20-40", "40-50", "50-60", "60-70", "70-80", "80-90"] : ascLevels = ["1-20", "20-40", "40-50", "50-60", "60-70"]
    const weaponAscStatRows = ascLevels.map((level, index) => createAscStats(index, level, WeaponMaterialQuantity[rarity][index], TotalWeaponMaterialQuantity[rarity][index]))

    return (
        <TableContainer
            sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                margin: "auto",
                width: "100%",
            }} component={Paper}>
            <Table sx={{ backgroundColor: "rgb(0, 30, 60)" }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Phase</StyledTableCell>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>Ascension Materials</StyledTableCell>
                        <StyledTableCell>Total Ascension Materials</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weaponAscStatRows.map((row) => (
                        <TableRow key={row.ascLevel}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.phase}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.ascLevel}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.ascLevel !== "1-20" ?
                                    <div style={{ display: "flex" }}>

                                        {/* Mora */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title="Mora" arrow placement="top">
                                                <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/Item_Mora.png`)} alt="Mora" />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[3]}
                                            </div>
                                        </div>

                                        {/* Ascension Material */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={formatWeaponAscMats(`${ascensionMat}${ascensionLegend.ascensionMat[row.ascLevel]}`)} arrow placement="top">
                                                <img className="materialImage" style={ascMatBackgroundImageLegend(row.ascLevel)} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}${ascensionLegend.ascensionMat[row.ascLevel]}.png`)} alt={ascensionMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[0]}
                                            </div>
                                        </div>

                                        {/* Elite Material */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={formatEliteMats(`${eliteMat}${ascensionLegend.eliteMat[row.ascLevel]}`)} arrow placement="top">
                                                <img className="materialImage" style={eliteMatBackgroundImageLegend(row.ascLevel)} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}${ascensionLegend.eliteMat[row.ascLevel]}.png`)} alt={eliteMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[1]}
                                            </div>
                                        </div>

                                        {/* Common Material */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.ascLevel]}`)} arrow placement="top">
                                                <img className="materialImage" style={commonMatBackgroundImageLegend(row.ascLevel)} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.ascLevel]}.png`)} alt={commonMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[2]}
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <Typography style={{ textAlign: "center" }}>———</Typography>
                                }
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left" style={{ width: "65%" }}>
                                {row.ascLevel !== "1-20" ?
                                    <div style={{ display: "flex" }}>

                                        {/* Mora Total */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title="Mora" arrow placement="top">
                                                <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/Item_Mora.png`)} alt="Mora" />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.total[10]}
                                            </div>
                                        </div>

                                        {/* Tier 1 Ascension Material */}
                                        {row.total[0] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeaponAscMats(`${ascensionMat}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}1.png`)} alt={ascensionMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[0]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Ascension Material */}
                                        {row.total[1] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeaponAscMats(`${ascensionMat}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}2.png`)} alt={ascensionMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[1]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Ascension Material */}
                                        {row.total[2] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeaponAscMats(`${ascensionMat}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}3.png`)} alt={ascensionMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[2]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 4 Ascension Material */}
                                        {row.total[3] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeaponAscMats(`${ascensionMat}4`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}4.png`)} alt={ascensionMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[3]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 1 Elite Material */}
                                        {row.total[4] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatEliteMats(`${eliteMat}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}1.png`)} alt={eliteMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[4]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Elite Material */}
                                        {row.total[5] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatEliteMats(`${eliteMat}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}2.png`)} alt={eliteMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[5]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Elite Material */}
                                        {row.total[6] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatEliteMats(`${eliteMat}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}3.png`)} alt={eliteMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[6]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 1 Common Material Total */}
                                        {row.total[7] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background1star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[7]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Common Material Total */}
                                        {row.total[8] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[8]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Common Material Total */}
                                        {row.total[9] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[9]}
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    :
                                    <Typography style={{ textAlign: "center" }}>———</Typography>
                                }
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeaponAscensionTable;