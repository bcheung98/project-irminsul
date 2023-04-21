import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow, { tableRowClasses } from '@mui/material/TableRow'

export const StyledTableCell = styled((props) => (
    <TableCell align="center" size="small" component="th" {...props} />
))(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgb(7, 27, 47)",
        color: `${theme.text.color}`,
        fontFamily: "Genshin, sans-serif",
    },
    color: `${theme.text.color}`,
    fontSize: "10pt",
    fontFamily: "Roboto, sans-serif",
    border: "1px solid rgb(30, 73, 118)",
}))

export const StyledTableCellNoVert = styled((props) => (
    <TableCell align="center" size="small" component="th" {...props} />
))(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "rgb(7, 27, 47)",
        color: `${theme.text.color}`,
    },
    color: `${theme.text.color}`,
    borderTop: "1px solid rgb(30, 73, 118)",
    borderBottom: "1px solid rgb(30, 73, 118)",
}))

export const StyledTableRows = styled((props) => (
    <TableRow component="tr" scope="row" hover {...props} />
))(({ theme }) => ({
    [`&.${tableRowClasses.hover}`]: {
        '&:hover': {
            backgroundColor: "rgb(19, 47, 76)",
        },
    },
}))