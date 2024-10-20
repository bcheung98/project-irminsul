import * as React from "react"

// Component imports
import CharacterRow from "./CharacterRow"
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"

// MUI imports
import { useTheme, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material"

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

    const rows = props.characters.map((char: CharacterData) => ({
        id: char.id,
        name: char.name,
        rarity: char.rarity,
        element: char.element,
        weapon: char.weapon,
        ascensionStat: char.stats.ascensionStat,
        nation: char.nation,
        gender: char.gender,
        release: {
            date: char.release.date,
            version: char.release.version
        }
    }) as CharacterRowData)

    return (
        <Paper
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
            }}
        >
            <Toolbar sx={{ backgroundColor: `${theme.toolbar.backgroundColor}`, borderRadius: "5px 5px 0px 0px" }}>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px" }}>
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
    )

}

export default CharacterList

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "element", label: "Element" },
    { id: "weapon", label: "Weapon" },
    { id: "ascensionStat", label: "Ascension Stat" },
    { id: "nation", label: "Nation" },
    { id: "gender", label: "Gender" },
    { id: "id", label: "Release Date" }
]