import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { formatCommonMats, formatTalents, formatWeeklyBossMats } from "../../../helpers/TooltipText";
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import { StyledTableCell } from "../../../helpers/StyledTable";
let background1star = require("../../../assets/backgrounds/Background_1_Star.png");
let background2star = require("../../../assets/backgrounds/Background_2_Star.png");
let background3star = require("../../../assets/backgrounds/Background_3_Star.png");
let background4star = require("../../../assets/backgrounds/Background_4_Star.png");
let background5star = require("../../../assets/backgrounds/Background_5_Star.png");

const ascensionLegend = {
    commonMat: {
        "2": "1",
        "3": "2",
        "4": "2",
        "5": "2",
        "6": "2",
        "7": "3",
        "8": "3",
        "9": "3",
        "10": "3"
    },
    talent: {
        "2": "1",
        "3": "2",
        "4": "2",
        "5": "2",
        "6": "2",
        "7": "3",
        "8": "3",
        "9": "3",
        "10": "3"
    }
}

const commonMatBackgroundImageLegend = (level) => {
    switch (level) {
        case "2":
            return { backgroundImage: "url(" + background1star + ")" }
        case "3":
        case "4":
        case "5":
        case "6":
            return { backgroundImage: "url(" + background2star + ")" }
        case "7":
        case "8":
        case "9":
        case "10":
            return { backgroundImage: "url(" + background3star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const talentBackgroundImageLegend = (level) => {
    switch (level) {
        case "2":
            return { backgroundImage: "url(" + background2star + ")" }
        case "3":
        case "4":
        case "5":
        case "6":
            return { backgroundImage: "url(" + background3star + ")" }
        case "7":
        case "8":
        case "9":
        case "10":
            return { backgroundImage: "url(" + background4star + ")" }
        default:
            return { backgroundImage: "url(" + background1star + ")" }
    }
}

const createRow = (talentLevel, quantity, total) => {
    return { talentLevel, quantity, total }
}

const CharacterTalentLevellingTable = (props) => {

    let { talentBook, weeklyBossMat, commonMat } = props.character.materials;

    const talentLevels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const materialQuantity = [["0", "0", "0", "0"], ["6", "3", "0", "0"], ["3", "2", "0", "0"], ["4", "4", "0", "0"], ["6", "6", "0", "0"], ["9", "9", "0", "0"], ["4", "4", "1", "0"], ["6", "6", "1", "0"], ["9", "12", "2", "0"], ["12", "16", "2", "1"]]
    const totalMaterialQuantity = [["0", "0", "0", "0", "0", "0", "0", "0"], ["6", "0", "0", "3", "0", "0", "0", "0"], ["6", "3", "0", "3", "2", "0", "0", "0"], ["6", "7", "0", "3", "6", "0", "0", "0"], ["6", "13", "0", "3", "12", "0", "0", "0"], ["6", "22", "0", "3", "21", "0", "0", "0"], ["6", "22", "4", "3", "21", "4", "1", "0"], ["6", "22", "10", "3", "21", "10", "2", "0"], ["6", "22", "19", "3", "21", "22", "4", "0"], ["6", "22", "31", "3", "21", "38", "6", "1"]]

    const talentLevelRows = talentLevels.map((level, index) => createRow(level, materialQuantity[index], totalMaterialQuantity[index]))

    return (
        <TableContainer sx={{
            border: "2px solid rgb(30, 73, 118)",
            borderRadius: "5px",
            margin: "auto",
            width: "95%",
        }} component={Paper}>
            <Table sx={{ backgroundColor: "rgb(0, 30, 60)" }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell className="genshinFont" align="center">Talent Level</StyledTableCell>
                        <StyledTableCell className="genshinFont" align="center">Materials</StyledTableCell>
                        <StyledTableCell className="genshinFont" align="center">Total Materials</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {talentLevelRows.map((row) => (
                        <TableRow key={row.talentLevel}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.talentLevel}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.talentLevel !== "1" ?
                                    <div style={{ display: "flex" }}>

                                        {/* Common Material */}
                                        {row.quantity[0] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.ascLevel]}`)} arrow placement="top">
                                                    <img className="materialImage" style={commonMatBackgroundImageLegend(row.talentLevel)} src={require(`../../../assets/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.talentLevel]}.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.quantity[0]}
                                                </div>
                                            </div>
                                        }

                                        {/* Talent Book */}
                                        {row.quantity[1] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatTalents(`${talentBook}${ascensionLegend.talent[row.talentLevel]}`)} arrow placement="top">
                                                    <img className="materialImage" style={talentBackgroundImageLegend(row.talentLevel)} src={require(`../../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}${ascensionLegend.talent[row.talentLevel]}.png`)} alt={talentBook} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.quantity[1]}
                                                </div>
                                            </div>
                                        }

                                        {/* Weekly Boss Material */}
                                        {row.quantity[2] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../../assets/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`)} alt={weeklyBossMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.quantity[2]}
                                                </div>
                                            </div>
                                        }

                                        {/* Crown */}
                                        {row.quantity[3] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title="Crown of Insight" arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../../assets/materials/talent_mats/Crown_of_Insight.png`)} alt="Crown of Insight" />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.quantity[3]}
                                                </div>
                                            </div>
                                        }

                                    </div>
                                    :
                                    <Typography style={{ textAlign: "center" }}>———</Typography>
                                }
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left">
                                {row.talentLevel !== "1" ?
                                    <div style={{ display: "flex" }}>

                                        {/* Tier 1 Common Material Total */}
                                        {row.total[0] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background1star + ")" }} src={require(`../../../assets/materials/common_mats/${commonMat.split(" ").join("_")}1.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[0]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Common Material Total */}
                                        {row.total[1] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../../assets/materials/common_mats/${commonMat.split(" ").join("_")}2.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[1]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Common Material Total */}
                                        {row.total[2] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../../assets/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[2]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 1 Talent Book Total */}
                                        {row.total[3] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatTalents(`${talentBook}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")" }} src={require(`../../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}1.png`)} alt={talentBook} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[3]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Talent Book Total */}
                                        {row.total[4] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatTalents(`${talentBook}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={require(`../../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}2.png`)} alt={talentBook} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[4]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Talent Book Total */}
                                        {row.total[5] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatTalents(`${talentBook}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")" }} src={require(`../../../assets/materials/talent_mats/${talentBook.split(" ").join("_")}3.png`)} alt={talentBook} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[5]}
                                                </div>
                                            </div>
                                        }

                                        {/* Weekly Boss Material Total */}
                                        {row.total[6] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatWeeklyBossMats(`${weeklyBossMat}`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../../assets/materials/weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}.png`)} alt={weeklyBossMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[6]}
                                                </div>
                                            </div>
                                        }

                                        {/* Crown Total */}
                                        {row.total[7] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title="Crown of Insight" arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")" }} src={require(`../../../assets/materials/talent_mats/Crown_of_Insight.png`)} alt="Crown of Insight" />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[7]}
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

export default CharacterTalentLevellingTable;