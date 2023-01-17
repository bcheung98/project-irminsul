import * as React from "react";
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material";
import { StyledTableCell, StyledTableRows } from "../../../helpers/StyledTable";
import { baseATKScaling, subStatScaling } from "../../../helpers/WeaponScalings";

const createWeaponStats = (level, atk, subStat) => {
    return { level, atk, subStat }
}

const WeaponStatsTable = (props) => {

    let { stats } = props.weapon;

    let levels = [];
    props.weapon.rarity > 2 ? levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"] : levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70"]
    let atkArray = baseATKScaling[stats.atk];
    let subStatArray = [];
    stats.subStat && (subStatArray = subStatScaling[stats.atk][stats.subStat]);
    const weaponStatRows = levels.map((level, index) => stats.subStat ? createWeaponStats(level, atkArray[index], subStatArray[index]) : createWeaponStats(level, atkArray[index], ""));

    return (
        <TableContainer sx={{
            border: "2px solid rgb(30, 73, 118)",
            borderRadius: "5px",
        }} component={Paper} >
            <Table sx={{ backgroundColor: "rgb(0, 30, 60)" }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>Base ATK</StyledTableCell>
                        {stats.subStat !== "" && <StyledTableCell>{stats.subStat}</StyledTableCell>}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {weaponStatRows.map((row) => (
                        <StyledTableRows key={row.level}>
                            <StyledTableCell>{row.level}</StyledTableCell>
                            <StyledTableCell>{row.atk}</StyledTableCell>
                            {stats.subStat !== "" && <StyledTableCell>{row.subStat}</StyledTableCell>}
                        </StyledTableRows>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeaponStatsTable;