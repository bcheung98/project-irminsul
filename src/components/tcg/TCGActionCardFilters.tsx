import * as React from "react"
import { connect, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"
import { CustomTooltip } from "../_custom/CustomTooltip"
import { CustomToggleButton } from "../_custom/CustomToggleButton"

// MUI imports
import { useTheme, Typography, Box, AppBar, IconButton, ToggleButtonGroup, Radio, RadioGroup, FormControlLabel } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

// Helper imports
import { TCGActionFilterState, setType, setSubType, setSortDirection, setSortBy } from "../../redux/reducers/TCGActionFilterReducer"

// Type imports
import { RootState } from "../../redux/store"

function TCGActionCardFilter(props: {
    cardActionFilters: TCGActionFilterState,
    handleClose?: () => void
}) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { cardActionFilters } = props

    const [actionSortDirection, setActionSortDirection] = React.useState(cardActionFilters.sortDirection)
    const handleActionSortDirectionChange = (event: React.BaseSyntheticEvent, newSort: "asc" | "desc") => {
        if (newSort !== null) {
            dispatch(setSortDirection(newSort))
            setActionSortDirection(newSort)
        }
    }

    const [actionRadioValue, setActionRadioValue] = React.useState(cardActionFilters.sortBy)
    const handleActionRadioChange = (event: React.BaseSyntheticEvent) => {
        dispatch(setSortBy(event.target.value))
        setActionRadioValue(event.target.value)
    }

    const filters: {
        name: string,
        tag: string,
        component: JSX.Element
    }[] = [
            {
                name: "Card Type",
                tag: "type",
                component:
                    <Grid container spacing={1}>
                        {["Event", "Equipment", "Support"].map((type, index) => <FilterButton key={index} variant="text" tag={type} active={cardActionFilters.type.includes(type)} onClick={() => dispatch(setType(type))} />)}
                    </Grid>
            },
            {
                name: "Card Group",
                tag: "subType",
                component:
                    <Grid container spacing={1}>
                        {["Arcane Legend", "Artifact", "Companion", "Elemental Resonance", "Food", "Item", "Location", "Talent", "Technique", "Weapon"].map((type, index) => <FilterButton key={index} tag={type} img={`tcg/icons/subtypes/${type.split(" ").join("_")}`} active={cardActionFilters.subType.includes(type)} onClick={() => dispatch(setSubType(type))} />)}
                    </Grid>
            }
        ]

    return (
        <Box
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: "5px",
                width: "100%"
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                        sx={{
                            px: 2,
                            py: 1.5,
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: "18px",
                            flexGrow: 1
                        }}
                    >
                        Filters
                    </Typography>
                    <IconButton onClick={props.handleClose}>
                        <CloseIcon sx={{ color: `white` }} />
                    </IconButton>
                </Box>
            </AppBar>
            {
                filters.map((filter, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    color: cardActionFilters[filter.tag as keyof TCGActionFilterState].length > 0 ? `rgb(30, 175, 255)` : `${theme.text.color}`
                                }}
                            >
                                {filter.name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pl: 1 }}>
                            {filter.component}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                }}
            >
                <Typography
                    sx={{
                        px: 2,
                        py: 1.5,
                        fontFamily: `${theme.font.genshin.family}`,
                        fontSize: "18px",
                    }}
                >
                    Sort by
                </Typography>
            </AppBar>
            <Box sx={{ p: 2 }}>
                <ToggleButtonGroup value={actionSortDirection} size="small" exclusive onChange={handleActionSortDirectionChange}>
                    <CustomTooltip title="Ascending" arrow placement="top">
                        <CustomToggleButton value="asc">
                            <ArrowUpwardIcon sx={{ color: `${theme.text.color}` }} />
                        </CustomToggleButton>
                    </CustomTooltip>
                    <CustomTooltip title="Descending" arrow placement="top">
                        <CustomToggleButton value="desc">
                            <ArrowDownwardIcon sx={{ color: `${theme.text.color}` }} />
                        </CustomToggleButton>
                    </CustomTooltip>
                </ToggleButtonGroup>
                <RadioGroup
                    value={actionRadioValue}
                    onChange={handleActionRadioChange}
                    sx={{ ml: "5px", mt: "5px" }}
                >
                    <FormControlLabel value="name" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Name</Typography>} />
                    <FormControlLabel value="cardGroup" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Card Group</Typography>} />
                </RadioGroup>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    cardActionFilters: state.cardActionFilters
})

export default connect(mapStateToProps)(TCGActionCardFilter)