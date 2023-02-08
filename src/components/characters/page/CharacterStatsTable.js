import React from "react";
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material";
import { StyledTableCell, StyledTableRows } from "../../../helpers/StyledTable";
import { CharacterAscensionStatScalings } from "../../../helpers/CharacterAscensionStatScalings";

const createCharacterStats = (level, hp, atk, def, critRate, critDMG, special) => {
    return { level, hp, atk, def, critRate, critDMG, special }
}

const CharacterStatsTable = (props) => {
    let { rarity, stats } = props.character;

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"];
    const specialStats = CharacterAscensionStatScalings(rarity, stats.ascensionStat);
    const characterStatRows = levels.map((level, index) => stats.special ? createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], specialStats.critRate[index], specialStats.critDMG[index], specialStats[stats.ascensionStat][index]) : createCharacterStats(level, stats.hp[index], stats.atk[index], stats.def[index], specialStats.critRate[index], specialStats.critDMG[index]));

    return (
        <TableContainer
            component={Paper}
            sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                margin: "auto",
                width: "95%",
            }}>
            <Table sx={{ backgroundColor: "rgb(0, 30, 60)" }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>Base HP</StyledTableCell>
                        <StyledTableCell>Base ATK</StyledTableCell>
                        <StyledTableCell>Base DEF</StyledTableCell>
                        <StyledTableCell>CRIT Rate</StyledTableCell>
                        <StyledTableCell>CRIT DMG</StyledTableCell>
                        {stats.special && <StyledTableCell>{stats.ascensionStat}</StyledTableCell>}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {characterStatRows.map((row) => (
                        <StyledTableRows key={row.level}>
                            <StyledTableCell>
                                {row.level}
                            </StyledTableCell>
                            <StyledTableCell>{Number(row.hp).toLocaleString()}</StyledTableCell>
                            <StyledTableCell>{row.atk}</StyledTableCell>
                            <StyledTableCell>{row.def}</StyledTableCell>
                            <StyledTableCell>{row.critRate}</StyledTableCell>
                            <StyledTableCell>{row.critDMG}</StyledTableCell>
                            {stats.special && <StyledTableCell>{row.special}</StyledTableCell>}
                        </StyledTableRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

export default CharacterStatsTable;