import * as React from "react"

// Component imports
import ChronicledWishRow from "./ChronicledWishRow"
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"

// MUI imports
import { useTheme, Table, TableBody, TableContainer, Paper } from "@mui/material"

function ChronicledWishList(props: any) {

    const theme = useTheme()

    const [order, setOrder] = React.useState("desc")
    const [orderBy, setOrderBy] = React.useState("subVersion")

    const handleRequestSort = (event: React.BaseSyntheticEvent, property: "asc" | "desc") => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    const rows = props.banners

    return (
        <Paper
            sx={{
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                color: `${theme.text.color}`,
            }}
        >
            <TableContainer>
                <Table sx={{ backgroundColor: `${theme.table.header.backgroundColor}` }}>
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        headCells={headCells}
                    />
                    <TableBody sx={{ backgroundColor: `${theme.paper.backgroundColor}` }}>
                        {
                            stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => {
                                    return (
                                        <ChronicledWishRow key={index} row={row} />
                                    )
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )

}

export default ChronicledWishList

const headCells = [
    { id: "subVersion", label: "Version" },
]