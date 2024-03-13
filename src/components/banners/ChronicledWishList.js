import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Table, TableBody, TableContainer, Paper } from "@mui/material";
import { EnhancedTableHead, getComparator, stableSort } from "../../helpers/CustomSortTable";
import ChronicledWishRow from "./ChronicledWishRow";

const ChronicledWishList = (props) => {

    const theme = useTheme();

    const [order, setOrder] = React.useState("desc");
    const [orderBy, setOrderBy] = React.useState("subVersion");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    let banners = [];
    props.banners.forEach(version => Object.keys(version).slice(1).forEach(phase => banners.push([version.version, `${version.version}.${phase.slice(-1)}`, version[phase].startDate, version[phase].endDate, version[phase].banner])));
    const rows = banners.map(banner => createData(banner[0], banner[1], banner[2], banner[3], banner[4]));

    return (
        <Box sx={{ width: "100%" }}>
            <Paper
                sx={{
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    color: `${theme.text.color}`,
                    display: "block",
                    margin: "auto",
                    mx: "20px",
                }}
            >
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
                            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => <ChronicledWishRow key={index} row={row} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )

}

export default ChronicledWishList;

const headCells = [
    { id: "subVersion", label: "Version" },
];

const createData = (version, subVersion, startDate, endDate, banner) => {
    return { version, subVersion, startDate, endDate, banner };
}