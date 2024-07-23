import * as React from "react"

// MUI imports
import { useTheme } from "@mui/material/styles"

// Helper imports
import { Table, TableBody, TableContainer, TableHead } from "@mui/material"
import { StyledTableCell, StyledTableRows } from "../../../helpers/CustomTable"

const createTalentScaling = (level: string, a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: string, m: string) => {
    return { level, a, b, c, d, e, f, g, h, i, j, k, l, m }
}

function CharacterTalentScalingTable(props: any) {

    const theme = useTheme()

    const rows = props.stats.map((stat: any) => createTalentScaling(stat[0], stat[1], stat[2], stat[3], stat[4], stat[5], stat[6], stat[7], stat[8], stat[9], stat[10], stat[11], stat[12], stat[13]))

    return (
        <TableContainer
            sx={{
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
                margin: "auto",
                width: "95%",
            }}
        >
            <Table sx={{ backgroundColor: `${theme.table.body.backgroundColor}` }}>
                <TableHead>
                    <StyledTableRows>
                        <StyledTableCell>LVL</StyledTableCell>
                        {[...Array(13).keys()].map(i => <StyledTableCell key={i}>{i + 1}</StyledTableCell>)}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row: { [propName: string]: string }, index: number) => (
                            <StyledTableRows key={index}>
                                <StyledTableCell>
                                    {row.level}
                                </StyledTableCell>
                                <StyledTableCell>{row.a}</StyledTableCell>
                                {
                                    props.attackType !== "altsprint" &&
                                    <React.Fragment>
                                        <StyledTableCell>{row.b}</StyledTableCell>
                                        <StyledTableCell>{row.c}</StyledTableCell>
                                        <StyledTableCell>{row.d}</StyledTableCell>
                                        <StyledTableCell>{row.e}</StyledTableCell>
                                        <StyledTableCell>{row.f}</StyledTableCell>
                                        <StyledTableCell>{row.g}</StyledTableCell>
                                        <StyledTableCell>{row.h}</StyledTableCell>
                                        <StyledTableCell>{row.i}</StyledTableCell>
                                        <StyledTableCell>{row.j}</StyledTableCell>
                                        <StyledTableCell>{row.k}</StyledTableCell>
                                        <StyledTableCell>{row.l}</StyledTableCell>
                                        <StyledTableCell>{row.m}</StyledTableCell>
                                    </React.Fragment>
                                }
                            </StyledTableRows>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CharacterTalentScalingTable