import * as React from "react"

// Component imports
import { CustomMenuItem } from "../_custom/CustomMenu"
import { CustomTooltip } from "../_custom/CustomTooltip"
import CharacterBannerRow from "./CharacterBannerRow"
import WeaponBannerRow from "./WeaponBannerRow"

// MUI imports
import { useTheme, useMediaQuery, Box, Table, TableBody, TableContainer, Paper, Autocomplete, TextField, Typography } from "@mui/material"
import HelpIcon from "@mui/icons-material/Help"

// Helper imports
import { EnhancedTableHead, getComparator, stableSort } from "../_custom/CustomSortTable"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { BannerData } from "../../types/banner/BannerData"
import { CustomSwitch } from "../_custom/CustomSwitch"

function BannerList(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("md"))

    let { type } = props

    let URL = type === "character" ? "characters/icons" : "weapons"

    const [options, setOptions] = React.useState<string[]>([])
    const [rows, setRows] = React.useState<any[]>([])
    const [values, setValue] = React.useState<string[]>([])

    const [order, setOrder] = React.useState("desc")
    const [orderBy, setOrderBy] = React.useState("subVersion")

    const handleRequestSort = (event: React.BaseSyntheticEvent, property: "asc" | "desc") => {
        const isAsc = orderBy === property && order === "asc"
        setOrder(isAsc ? "desc" : "asc")
        setOrderBy(property)
    }

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    const filterBanners = (banners: any[], searchValue: string[]) => {
        if (searchValue.length > 0) {
            banners = banners.filter((banner: BannerData) => {
                if (selected) {
                    return searchValue.every((item: string) => banner.fiveStars.concat(banner.fourStars).includes(item))
                }
                else {
                    return searchValue.some((item: string) => banner.fiveStars.concat(banner.fourStars).includes(item))
                }
            })
        }
        return banners
    }

    React.useEffect(() => {
        setRows(filterBanners(props.banners, values))
        setOptions([...new Set(props.banners
            .map((banner: BannerData) => banner.fiveStars.concat(banner.fourStars))
            .flat().sort((a: string, b: string) => a.localeCompare(b)))
        ] as string[]
        )
    }, [props.banners, values, selected])

    return (
        <Box>
            <Autocomplete
                multiple
                autoComplete
                options={options}
                getOptionLabel={(option: string) => option}
                filterSelectedOptions
                noOptionsText={type === "character" ? "No Characters" : "No Weapons"}
                value={values}
                onChange={(event: any, newValue: string[] | null) => {
                    setValue(newValue as string[])
                }}
                ChipProps={{
                    sx: {
                        color: `${theme.text.color}`,
                        fontFamily: `${theme.font.genshin.family}`,
                        backgroundColor: `${theme.button.selected}`,
                        "& .MuiChip-deleteIcon": {
                            color: `${theme.text.color}`,
                            ":hover": {
                                color: `${theme.text.colorAlt}`
                            }
                        },
                    }
                }}
                ListboxProps={{
                    sx: {
                        backgroundColor: `${theme.paper.backgroundColor}`,
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            "& .MuiAutocomplete-input": {
                                color: `${theme.text.color}`,
                                fontFamily: `${theme.font.genshin.family}`,
                            },
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: `${theme.table.header.backgroundColor}`,
                                "& fieldset": {
                                    borderColor: `${theme.border.color}`,
                                    borderWidth: "2px",
                                    borderRadius: "5px",
                                },
                                "&:hover fieldset": {
                                    borderColor: `${theme.border.color}`,
                                },
                            },
                            "& .MuiButtonBase-root": {
                                color: `${theme.text.color}`,
                            }
                        }}
                        placeholder={type === "character" ? "Characters" : "Weapons"}
                    />
                )}
                renderOption={(props, option) => (
                    <li
                        {...props}
                        key={option}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", p: 0, width: "100%" }}>
                            <img alt={option} src={`${process.env.REACT_APP_URL}/${URL}/${option.split(" ").join("_")}.png`} style={{ width: matches ? "42px" : "48px", marginRight: "20px" }} onError={ErrorLoadingImage} />
                            <Typography noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", md: "16px" }, color: `${theme.text.color}` }}>
                                {option}
                            </Typography>
                        </Box>
                    </li>
                )}
            />
            <Box sx={{ display: "flex", alignItems: "center", my: "10px" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} />
                <Typography sx={{ color: `${theme.text.color}`, fontFamily: `${theme.font.genshin.family}`, fontSize: "13.5px" }}>
                    Toggle "AND" Filter
                </Typography>
                <CustomTooltip title="If toggled, will filter banners that only contain all selected items." arrow placement="top">
                    <HelpIcon sx={{ color: `${theme.text.color}`, cursor: "pointer", mx: "10px" }} />
                </CustomTooltip>
            </Box>
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
                                    .map((row, index) => (
                                        type === "character" ? <CharacterBannerRow key={index} row={row} /> : <WeaponBannerRow key={index} row={row} />
                                    ))
                            }
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

export const isTBA = (name: string) => name === "TBA" || name === "To be announced"