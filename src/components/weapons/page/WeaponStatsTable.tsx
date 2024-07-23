// MUI imports
import { useTheme } from "@mui/material/styles"
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material"

// Helper imports
import { StyledTableCell, StyledTableRows } from "../../../helpers/CustomTable"
import { baseATKScaling, subStatScaling } from "../../../helpers/WeaponScalings"

// Type imports
import { WeaponStatsDataRow } from "../../../types/weapon/WeaponStatsDataRow"

function WeaponStatsTable(props: any) {

    const theme = useTheme()

    let { stats } = props.weapon

    let levels = []
    props.weapon.rarity > 2 ? levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"] : levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70"]
    let atkArray = baseATKScaling[stats.atk as keyof typeof baseATKScaling]
    let subStatArray = [] as string[]
    if (stats.subStat) {
        subStatArray = subStatScaling[stats.atk][stats.subStat] as string[]
    }
    const weaponStatRows = levels.map((level, index) => {
        let data
        if (stats.subStat) {
            data = { level: level, atk: atkArray[index], subStat: subStatArray[index] } as WeaponStatsDataRow
        }
        else {
            data = { level: level, atk: atkArray[index], subStat: [] } as WeaponStatsDataRow
        }
        return data
    })

    return (
        <TableContainer component={Paper}
            sx={{
                border: "2px solid rgb(30, 73, 118)",
                borderRadius: "5px",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>Base ATK</StyledTableCell>
                        {stats.subStat !== "" && <StyledTableCell>{stats.subStat}</StyledTableCell>}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {
                        weaponStatRows.map((row: WeaponStatsDataRow) => (
                            <StyledTableRows key={row.level}>
                                <StyledTableCell>{row.level}</StyledTableCell>
                                <StyledTableCell>{row.atk}</StyledTableCell>
                                {stats.subStat.length > 0 && <StyledTableCell>{row.subStat}</StyledTableCell>}
                            </StyledTableRows>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WeaponStatsTable