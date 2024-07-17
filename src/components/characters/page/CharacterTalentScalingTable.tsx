import * as React from "react"

// MUI imports
import { useTheme } from "@mui/material/styles"

// Helper imports
import { Table, TableBody, TableContainer, TableHead } from "@mui/material"
import { StyledTableCell, StyledTableRows } from "../../../helpers/CustomTable"

const createTalentScaling = (level: string, a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: string, m: string) => {
    return { level, a, b, c, d, e, f, g, h, i, j, k, l, m }
}

const CharacterTalentScalingTable = (props: any) => {

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
                        <StyledTableCell align="center">LVL</StyledTableCell>
                        {[...Array(13).keys()].map(i => <StyledTableCell key={i} align="center">{i + 1}</StyledTableCell>)}
                    </StyledTableRows>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row: { [propName: string]: string }, index: number) => (
                            <StyledTableRows key={index}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {row.level}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.a}</StyledTableCell>
                                {
                                    props.attackType !== "altsprint" &&
                                    <React.Fragment>
                                        <StyledTableCell align="center">{row.b}</StyledTableCell>
                                        <StyledTableCell align="center">{row.c}</StyledTableCell>
                                        <StyledTableCell align="center">{row.d}</StyledTableCell>
                                        <StyledTableCell align="center">{row.e}</StyledTableCell>
                                        <StyledTableCell align="center">{row.f}</StyledTableCell>
                                        <StyledTableCell align="center">{row.g}</StyledTableCell>
                                        <StyledTableCell align="center">{row.h}</StyledTableCell>
                                        <StyledTableCell align="center">{row.i}</StyledTableCell>
                                        <StyledTableCell align="center">{row.j}</StyledTableCell>
                                        <StyledTableCell align="center">{row.k}</StyledTableCell>
                                        <StyledTableCell align="center">{row.l}</StyledTableCell>
                                        <StyledTableCell align="center">{row.m}</StyledTableCell>
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