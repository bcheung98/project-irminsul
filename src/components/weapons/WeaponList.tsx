import * as React from "react"

// Component imports
import WeaponRow from "./WeaponRow"
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"

// MUI imports
import { useTheme, Table, TableBody, TableContainer, Toolbar, Typography, Paper } from "@mui/material"

// Helper imports
import { baseATKScaling, subStatScaling } from "../../data/WeaponScalings"

// Type imports
import { WeaponData } from "../../types/weapon/WeaponData"
import { WeaponRowData } from "../../types/weapon/WeaponRowData"

function WeaponList(props: any) {

    const theme = useTheme()

    const [order, setOrder] = React.useState("desc")
    const [orderBy, setOrderBy] = React.useState("rarity")

    const handleRequestSort = (event: React.BaseSyntheticEvent, property: "asc" | "desc") => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    const rows = props.weapons.map((weapon: WeaponData) => {

        let atk = baseATKScaling[weapon.stats.atk as keyof typeof baseATKScaling][baseATKScaling[weapon.stats.atk as keyof typeof baseATKScaling].length - 1]
        let subStat = weapon.stats.subStat
        let subStatValue
        if (subStat !== "") {
            let subStatArray = subStatScaling[weapon.stats.atk][subStat]
            subStatValue = subStatArray?.[subStatArray.length - 1]
        }
        else {
            subStatValue = "-"
        }
        let subStatString = `${subStat} ${subStatValue}`

        return { name: weapon.name, rarity: weapon.rarity, type: weapon.type, atk: atk, subStat: subStatString } as WeaponRowData
    })

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
                    {props.weapons.length} {props.weapons.length === 1 ? "Weapon" : "Weapons"}
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
                                        <WeaponRow key={index} row={row} weapons={props.weapons} />
                                    )
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )

}

export default WeaponList

const headCells = [
    { id: "name", label: "Name" },
    { id: "rarity", label: "Rarity" },
    { id: "type", label: "Type" },
    { id: "atk", label: "ATK" },
    { id: "subStat", label: "Substat" },
]