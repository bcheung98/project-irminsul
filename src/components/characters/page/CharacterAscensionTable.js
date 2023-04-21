import React from "react";
import { useTheme } from "@mui/material/styles";
import "../../../css/AscensionTable.css";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { MaterialTooltip } from "../../../helpers/MaterialTooltip";
import { StyledTableCell } from "../../../helpers/StyledTable";
import { formatCommonMats, formatBossMats, formatGemstone } from "../../../helpers/TooltipText";
let background1star = (`${process.env.REACT_APP_URL}/backgrounds/Background_1_Star.png`);
let background2star = (`${process.env.REACT_APP_URL}/backgrounds/Background_2_Star.png`);
let background3star = (`${process.env.REACT_APP_URL}/backgrounds/Background_3_Star.png`);
let background4star = (`${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png`);
let background5star = (`${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png`);

const ascensionLegend = {
    gemstone: {
        "20-40": "Sliver",
        "40-50": "Fragment",
        "50-60": "Fragment",
        "60-70": "Chunk",
        "70-80": "Chunk",
        "80-90": "Gemstone"
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

const gemstoneBackgroundImageLegend = (level) => {
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

const CharacterAscensionTable = (props) => {

    const theme = useTheme();

    let { element } = props.character;
    let { bossMat, localMat, commonMat } = props.character.materials;

    const ascLevels = ["1-20", "20-40", "40-50", "50-60", "60-70", "70-80", "80-90"]
    const materialQuantity = [["0", "0", "0", "0", "0"], ["1", "0", "3", "3", "20,000"], ["3", "2", "10", "15", "40,000"], ["6", "4", "20", "12", "60,000"], ["3", "8", "30", "18", "80,000"], ["6", "12", "45", "12", "100,000"], ["6", "20", "60", "24", "120,000"]]
    const totalMaterialQuantity = [["0", "0", "0", "0", "0"], ["1", "0", "0", "0", "0", "3", "3", "0", "0", "20,000"], ["1", "3", "0", "0", "2", "13", "18", "0", "0", "60,000"], ["1", "9", "0", "0", "6", "33", "18", "12", "0", "120,000"], ["1", "9", "3", "0", "14", "63", "18", "30", "0", "200,000"], ["1", "9", "9", "0", "26", "108", "18", "30", "12", "300,000"], ["1", "9", "9", "6", "46", "168", "18", "30", "36", "420,000"]]

    const characterAscStatRows = ascLevels.map((level, index) => createAscStats(index, level, materialQuantity[index], totalMaterialQuantity[index]))

    return (
        <TableContainer component={Paper}
            sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell className="genshinFont" align="center">Phase</StyledTableCell>
                        <StyledTableCell className="genshinFont" align="center">Level</StyledTableCell>
                        <StyledTableCell className="genshinFont" align="center">Ascension Materials</StyledTableCell>
                        <StyledTableCell className="genshinFont" align="center">Total Ascension Materials</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characterAscStatRows.map((row) => (
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
                                                <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/Item_Mora.png`)} alt={commonMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[4]}
                                            </div>
                                        </div>

                                        {/* Boss Material */}
                                        {row.quantity[1] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`)} alt={bossMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.quantity[1]}
                                                </div>
                                            </div>
                                        }

                                        {/* Local Specialty */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={localMat} arrow placement="top">
                                                <img className="materialImage" style={{ backgroundImage: "url(" + background1star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`)} alt={localMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[2]}
                                            </div>
                                        </div>

                                        {/* Gemstones */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={formatGemstone(`${element}_${ascensionLegend.gemstone[row.ascLevel]}`)} arrow placement="top">
                                                <img className="materialImage" style={gemstoneBackgroundImageLegend(row.ascLevel)} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_${ascensionLegend.gemstone[row.ascLevel]}.png`)} alt={element} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[0]}
                                            </div>
                                        </div>

                                        {/* Common Material */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title={formatCommonMats(`${commonMat}${ascensionLegend.commonMat[row.ascLevel]}`)} arrow placement="top">
                                                <img className="materialImage" style={commonMatBackgroundImageLegend(row.ascLevel)} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}${ascensionLegend.commonMat[row.ascLevel]}.png`)} alt={commonMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.quantity[3]}
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <Typography style={{ textAlign: "center" }}>———</Typography>
                                }
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left" style={{ width: "55%" }}>
                                {row.ascLevel !== "1-20" ?
                                    <div style={{ display: "flex" }}>

                                        {/* Mora Total */}
                                        <div className="materialImageRoot">
                                            <MaterialTooltip title="Mora" arrow placement="top">
                                                <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/Item_Mora.png`)} alt={commonMat} />
                                            </MaterialTooltip>
                                            <div className="materialTextContainer">
                                                {row.total[9]}
                                            </div>
                                        </div>

                                        {/* Boss Material Total */}
                                        {row.total[4] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatBossMats(bossMat)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/boss_mats/${bossMat.split(" ").join("_")}.png`)} alt={bossMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[4]}
                                                </div>
                                            </div>
                                        }

                                        {/* Local Specialty Total */}
                                        {row.total[5] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={localMat} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background1star + ")", backgroundSize: "100%" }} src={(`${process.env.REACT_APP_URL}/materials/local_specialties/${localMat.split(" ").join("_")}.png`)} alt={localMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[5]}
                                                </div>
                                            </div>
                                        }

                                        {/* Elemental Sliver Total */}
                                        {row.total[0] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatGemstone(`${element}_Sliver`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Sliver.png`)} alt={element} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[0]}
                                                </div>
                                            </div>
                                        }

                                        {/* Elemental Fragment Total */}
                                        {row.total[1] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatGemstone(`${element}_Fragment`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Fragment.png`)} alt={element} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[1]}
                                                </div>
                                            </div>
                                        }

                                        {/* Elemental Chunk Total */}
                                        {row.total[2] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatGemstone(`${element}_Chunk`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background4star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Chunk.png`)} alt={element} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[2]}
                                                </div>
                                            </div>
                                        }

                                        {/* Elemental Gemstone Total */}
                                        {row.total[3] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatGemstone(`${element}_Gemstone`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background5star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/ascension_gems/${element}_Gemstone.png`)} alt={element} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[3]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 1 Common Material Total */}
                                        {row.total[6] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background1star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[6]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 2 Common Material Total */}
                                        {row.total[7] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background2star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[7]}
                                                </div>
                                            </div>
                                        }

                                        {/* Tier 3 Common Material Total */}
                                        {row.total[8] !== "0" &&
                                            <div className="materialImageRoot">
                                                <MaterialTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                                                    <img className="materialImage" style={{ backgroundImage: "url(" + background3star + ")" }} src={(`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`)} alt={commonMat} />
                                                </MaterialTooltip>
                                                <div className="materialTextContainer">
                                                    {row.total[8]}
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

export default CharacterAscensionTable;