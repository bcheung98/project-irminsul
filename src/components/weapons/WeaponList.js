import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material";
import { EnhancedTableHead, getComparator, stableSort } from "../../helpers/CustomSortTable";
import WeaponRow from "./WeaponRow";
import { baseATKScaling, subStatScaling } from "../../helpers/WeaponScalings";

const WeaponList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("rarity");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const rows = props.weapons.map((weapon) => {

        let atk = baseATKScaling[weapon.stats.atk][baseATKScaling[weapon.stats.atk].length - 1];
        let subStat = weapon.stats.subStat;
        let subStatValue = "—";
        if (subStat !== "") {
            subStatValue = subStatScaling[weapon.stats.atk][subStat][subStatScaling[weapon.stats.atk][subStat].length - 1]
        }
        let subStatString = `${subStat} ${subStatValue}`
        let materialString = `${weapon.materials.ascensionMat} ${weapon.materials.eliteMat} ${weapon.materials.commonMat}`

        return createData(weapon.name, weapon.rarity, weapon.type, atk, subStatString, weapon.materials.ascensionMat, weapon.materials.eliteMat, weapon.materials.commonMat, materialString)
    })

    return (
        <Box sx={{ width: "100%" }}>
            <Paper
                sx={{
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    color: `${theme.text.color}`,
                }}
            >
                <Toolbar sx={{ backgroundColor: `${theme.toolbar.backgroundColor}` }}>
                    <Typography variant="h5" component="div"
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            display: "block",
                            margin: "auto"
                        }}
                    >
                        {props.weapons.length} {props.weapons.length === 1 ? "Weapon" : "Weapons"}
                    </Typography>
                </Toolbar>
                < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "0px" }} />
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => {
                                    return (
                                        <WeaponRow key={index} row={row} weapons={props.weapons} />
                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )

}

export default WeaponList;

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "type", label: "Type" },
    { id: "atk", label: "ATK" },
    { id: "subStatString", label: "Substat" },
    { id: "materialString", label: "Materials" }
];

const createData = (name, rarity, type, atk, subStatString, ascensionMat, eliteMat, commonMat, materialString) => {
    return { name, rarity, type, atk, subStatString, ascensionMat, eliteMat, commonMat, materialString };
}