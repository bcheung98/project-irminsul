// MUI imports
import { useTheme } from "@mui/material/styles"
import { Table, TableBody, TableContainer, TableHead, Paper } from "@mui/material"

// Helper imports
import { StyledTableCell, StyledTableRows } from "../../_custom/CustomTable"
import { CharacterAscensionStatScalings } from "../../../helpers/CharacterAscensionStatScalings"

// Type imports
import { CharacterData } from "../../../types/character/CharacterData"
import { CharacterStatsDataRow } from "../../../types/character/CharacterStatsDataRow"

function CharacterStatsTable(props: any) {

    const theme = useTheme()

    let { rarity, stats } = props.character as CharacterData

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"]
    const specialStats = CharacterAscensionStatScalings(rarity, stats.ascensionStat)
    const characterStatRows = levels.map((level: string, index: number) => {
        let data
        if (!["CRIT Rate", "CRIT DMG"].includes(stats.ascensionStat)) {
            data = { level: level, hp: stats.hp[index], atk: stats.atk[index], def: stats.def[index], critRate: specialStats.critRate[index], critDMG: specialStats.critDMG[index], special: specialStats[stats.ascensionStat as keyof {}][index] } as CharacterStatsDataRow
        }
        else {
            data = { level: level, hp: stats.hp[index], atk: stats.atk[index], def: stats.def[index], critRate: specialStats.critRate[index], critDMG: specialStats.critDMG[index] } as CharacterStatsDataRow
        }
        return data
    })

    return (
        <TableContainer
            component={Paper}
            sx={{
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>Level</StyledTableCell>
                        <StyledTableCell>Base HP</StyledTableCell>
                        <StyledTableCell>Base ATK</StyledTableCell>
                        <StyledTableCell>Base DEF</StyledTableCell>
                        <StyledTableCell>CRIT Rate</StyledTableCell>
                        <StyledTableCell>CRIT DMG</StyledTableCell>
                        {!["CRIT Rate", "CRIT DMG"].includes(stats.ascensionStat) && <StyledTableCell>{stats.ascensionStat}</StyledTableCell>}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {
                        characterStatRows.map((row: CharacterStatsDataRow) => (
                            <StyledTableRows key={row.level}>
                                <StyledTableCell>{row.level}</StyledTableCell>
                                <StyledTableCell>{Number(row.hp).toLocaleString()}</StyledTableCell>
                                <StyledTableCell>{row.atk}</StyledTableCell>
                                <StyledTableCell>{row.def}</StyledTableCell>
                                <StyledTableCell>{row.critRate}</StyledTableCell>
                                <StyledTableCell>{row.critDMG}</StyledTableCell>
                                {row.special && <StyledTableCell>{row.special}</StyledTableCell>}
                            </StyledTableRows>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CharacterStatsTable