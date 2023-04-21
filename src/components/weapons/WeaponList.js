import * as React from "react";
import { useTheme } from "@mui/material/styles";
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
import { baseATKScaling, subStatScaling } from "../../helpers/WeaponScalings";

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

function descendingComparator(a, b, orderBy) {
    // Special case for sorting the substat column (which includes numeric strings)
    if (orderBy === "subStatString") {
        return b[orderBy].localeCompare(a[orderBy], undefined, { numeric: true });
    }
    else {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
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
    { id: "atk", label: "ATK" },
    { id: "subStatString", label: "Substat" },
    { id: "materialString", label: "Materials" }
];

function EnhancedTableHead(props) {

    const theme = useTheme();

    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ borderBottom: `2px solid ${theme.border.color}` }}>
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
                            <Typography variant="body1" sx={{ color: `${theme.text.color}`, fontFamily: "Genshin, sans-serif" }}>
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

const createData = (name, rarity, type, atk, subStatString, ascensionMat, eliteMat, commonMat, materialString) => {
    return { name, rarity, type, atk, subStatString, ascensionMat, eliteMat, commonMat, materialString };
}

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