import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material"
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"
import CharacterRow from "./CharacterRow"

// Type imports
import { CharacterData } from "../../types/character/CharacterData"
import { CharacterRowData } from "../../types/character/CharacterRowData"

function CharacterList(props: any) {

    const theme = useTheme()

    const [order, setOrder] = React.useState("asc")
    const [orderBy, setOrderBy] = React.useState("name")

    const handleRequestSort = (event: React.BaseSyntheticEvent, property: "asc" | "desc") => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    const rows = props.characters.map((char: CharacterData) => char as CharacterRowData)

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
                            fontFamily: `${theme.font.genshin.family}`,
                            display: "block",
                            margin: "auto"
                        }}
                    >
                        {props.characters.length} {props.characters.length === 1 ? "Character" : "Characters"}
                    </Typography>
                </Toolbar>
                <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "0px" }} />
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
                            {
                                stableSort(rows, getComparator(order, orderBy))
                                    .map((row, index) => {
                                        return (
                                            <CharacterRow key={index} row={row} characters={props.characters} />
                                        )
                                    })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )

}

export default CharacterList

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "element", label: "Element" },
    { id: "weapon", label: "Weapon" },
    { id: "nation", label: "Nation" },
    { id: "gender", label: "Gender" },
    { id: "id", label: "Release Date" }
]