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
import { TCGCharacterFilterState, setElement, setWeapon, setFaction, setSortDirection, setSortBy } from "../../redux/reducers/TCGCharacterFilterReducer"

// Type imports
import { RootState } from "../../redux/store"

function TCGCharacterCardFilter(props: {
    cardCharFilters: TCGCharacterFilterState,
    handleClose?: () => void
}) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { cardCharFilters } = props

    const [charSortDirection, setCharSortDirection] = React.useState(cardCharFilters.sortDirection)
    const handleCharacterSortDirectionChange = (event: React.BaseSyntheticEvent, newSort: "asc" | "desc") => {
        if (newSort !== null) {
            dispatch(setSortDirection(newSort))
            setCharSortDirection(newSort)
        }
    }

    const [charRadioValue, setCharRadioValue] = React.useState(cardCharFilters.sortBy)
    const handleCharRadioChange = (event: React.BaseSyntheticEvent) => {
        dispatch(setSortBy(event.target.value))
        setCharRadioValue(event.target.value)
    }

    const filters: {
        name: string,
        tag: string,
        component: JSX.Element
    }[] = [
            {
                name: "Element",
                tag: "element",
                component:
                    <Grid container spacing={1}>
                        {["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"].map((element, index) => <FilterButton key={index} tag={element} img={`tcg/icons/elements/${element}`} active={cardCharFilters.element.includes(element)} onClick={() => dispatch(setElement(element))} />)}
                    </Grid>
            },
            {
                name: "Weapon",
                tag: "weapon",
                component:
                    <Grid container spacing={1}>
                        {["Sword", "Claymore", "Polearm", "Bow", "Catalyst"].map((weapon, index) => <FilterButton key={index} tag={weapon} img={`tcg/icons/weapons/${weapon}`} active={cardCharFilters.weapon.includes(weapon)} onClick={() => dispatch(setWeapon(weapon))} />)}
                    </Grid>
            },
            {
                name: "Faction",
                tag: "faction",
                component:
                    <Grid container spacing={1}>
                        {["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Eremite", "Fatui", "Hilichurl", "Monster", "Consecrated Beast"].map((faction, index) => <FilterButton key={index} tag={faction} img={`tcg/icons/factions/${faction.split(" ").join("_")}`} active={cardCharFilters.faction.includes(faction)} onClick={() => dispatch(setFaction(faction))} />)}
                    </Grid>
            }
        ]

    const radioOptions: { name: string, value: string }[] = [
        { name: "Name", value: "name" },
        { name: "Element", value: "element" },
        { name: "Weapon", value: "weapon" },
        { name: "Burst Cost", value: "energy" },
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
                                    color: cardCharFilters[filter.tag as keyof TCGCharacterFilterState].length > 0 ? `rgb(30, 175, 255)` : `${theme.text.color}`
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
                <ToggleButtonGroup value={charSortDirection} size="small" exclusive onChange={handleCharacterSortDirectionChange}>
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
                    value={charRadioValue}
                    onChange={handleCharRadioChange}
                    sx={{ ml: "5px", mt: "5px" }}
                >
                    {
                        radioOptions.map((option) =>
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={
                                    <Radio size="small" sx={{ color: `${theme.text.color}` }} />
                                }
                                label={
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "16px", color: `${theme.text.color}` }}>
                                        {option.name}
                                    </Typography>
                                }
                            />
                        )
                    }
                </RadioGroup>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    cardCharFilters: state.cardCharFilters
})

export default connect(mapStateToProps)(TCGCharacterCardFilter)