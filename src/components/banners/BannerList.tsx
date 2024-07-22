import * as React from "react"

// Component imports
import CharacterBannerRow from "./CharacterBannerRow"
import WeaponBannerRow from "./WeaponBannerRow"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Table, TableBody, TableContainer, Paper, InputBase } from "@mui/material"

// Helper imports
import { EnhancedTableHead, getComparator, stableSort } from "../../helpers/CustomSortTable"

// Type imports
import { BannerRowData } from "../../types/BannerRowData"

function BannerList(props: any) {

    const theme = useTheme()

    const [order, setOrder] = React.useState("desc")
    const [orderBy, setOrderBy] = React.useState("subVersion")

    const handleRequestSort = (event: React.BaseSyntheticEvent, property: "asc" | "desc") => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    const [searchValue, setSearchValue] = React.useState("")
    const handleInputChange = (event: React.BaseSyntheticEvent) => {
        setSearchValue(event.target.value)
    }

    const rows = filterBanners(props.banners, searchValue)

    return (
        <Box sx={{ width: "100%" }}>
            <Paper
                sx={{
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    display: "flex",
                    margin: "auto",
                    height: "40px",
                    width: "90%",
                    marginBottom: "10px",
                }}
            >
                <InputBase
                    sx={{
                        marginLeft: "10px",
                        flex: 1,
                        color: `${theme.text.color}`,
                        fontFamily: "Genshin, sans-serif",
                    }}
                    placeholder="Search"
                    onChange={handleInputChange}
                />
            </Paper>
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
                            {stableSort(rows, getComparator(order, orderBy)).map((row: BannerRowData, index: number) => (props.type === "character" ? <CharacterBannerRow key={index} row={row} /> : <WeaponBannerRow key={index} row={row} />))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default BannerList

const headCells = [
    { id: "subVersion", label: "Version" },
]

const filterBanners = (banners: BannerRowData[], searchValue: string) => {
    if (searchValue !== "") {
        banners = banners.filter((banner: BannerRowData) => banner.banner.map((char: any) => char.toLowerCase()).join("|").includes(searchValue.toLowerCase()))
    }
    return banners
}