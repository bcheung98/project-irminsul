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
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import CharacterBannerRow from "./CharacterBannerRow";
import WeaponBannerRow from "./WeaponBannerRow";

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
    { id: "subVersion", label: "Version" },
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

const createData = (version, subVersion, banner) => {
    return { version, subVersion, banner };
}

const BannerList = (props) => {

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("subVersion");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    let banners = []
    props.banners.forEach(version => Object.keys(version).slice(1).forEach(phase => banners.push([version.version, `${version.version}.${phase.slice(-1)}`, version[phase].banner])));
    const rows = banners.map(banner => createData(banner[0], banner[1], banner[2]))

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                backgroundColor: "rgb(0, 30, 60)",
                color: "white",
                display: "block",
                margin: "auto",
                mx: "20px",
            }}>
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
                                        props.type === "character" ? <CharacterBannerRow key={index} row={row} /> : <WeaponBannerRow key={index} row={row} />

                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default BannerList;