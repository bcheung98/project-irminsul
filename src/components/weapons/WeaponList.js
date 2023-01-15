import * as React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel, { tableSortLabelClasses } from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import WeaponRow from "./WeaponRow";

const IconActive = styled((props) => (
    <KeyboardArrowDownSharpIcon {...props} />
))(() => ({
    [`&.${tableSortLabelClasses.icon}`]: {
        color: "dodgerblue !important"
    }
}))

const IconInactive = styled((props) => (
    <KeyboardArrowDownSharpIcon {...props} />
))(() => ({
    [`&.${tableSortLabelClasses.icon}`]: {
        color: "white !important"
    }
}))

const createData = (name, rarity, type, atk, secondaryStat, secondaryStatValue) => {
    return { name, rarity, type, atk, secondaryStat, secondaryStatValue };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "type", label: "Type" },
    { id: "atk", label: "Base ATK (Level 90)" },
    { id: "secondaryStat", label: "2nd Stat" },
    { id: "secondaryStatValue", label: "2nd Stat Value" }
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ borderBottom: "2px solid rgb(30, 73, 118)" }}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                            IconComponent={((orderBy === headCell.id) ? IconActive : IconInactive)}
                        >
                            <Typography variant="body1" sx={{ color: "white", fontFamily: "Genshin, sans-serif" }}>
                                {headCell.label}
                            </Typography>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const WeaponList = (props) => {

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("rarity");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const rows = props.weapons.map((weapon) => {
        let atk = weapon.stats.baseATK[weapon.stats.baseATK.length - 1]
        let secondaryStatValue = "———"
        if (weapon.stats.secondaryStatScaling.length !== 0) { secondaryStatValue = weapon.stats.secondaryStatScaling[weapon.stats.secondaryStatScaling.length - 1] }
        return (
            createData(weapon.name, weapon.rarity, weapon.type, atk, weapon.stats.secondaryStat, secondaryStatValue)
        )
    })

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                backgroundColor: "rgb(0, 30, 60)",
                color: "white",
            }}>
                <Toolbar>
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
                < hr style={{ border: ".5px solid rgb(30, 73, 118)", marginTop: "0px" }} />
                <TableContainer>
                    <Table>
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
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
    );
}

export default WeaponList;