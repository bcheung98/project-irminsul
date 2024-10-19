import { connect, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"

// MUI imports
import { useTheme, Typography, Paper } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { TCGCharacterFilterState, setElement, setWeapon, setFaction } from "../../redux/reducers/TCGCharacterFilterReducer"

// Type imports
import { RootState } from "../../redux/store"

function TCGCharacterCardFilter(props: { cardCharFilters: TCGCharacterFilterState }) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { cardCharFilters } = props

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

    return (
        <Paper
            variant="outlined"
            square
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.appbar.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
                my: "10px",
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
                Filters
            </Typography>
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
        </Paper>
    )

}

const mapStateToProps = (state: RootState) => ({
    cardCharFilters: state.cardCharFilters
})

export default connect(mapStateToProps)(TCGCharacterCardFilter)