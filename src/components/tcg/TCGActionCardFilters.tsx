import { connect, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"

// MUI imports
import { useTheme, Typography, Paper } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { TCGActionFilterState, setType, setSubType } from "../../redux/reducers/TCGActionFilterReducer"

// Type imports
import { RootState } from "../../redux/store"

function TCGActionCardFilter(props: { cardActionFilters: TCGActionFilterState }) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { cardActionFilters } = props

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
        </Paper>
    )

}

const mapStateToProps = (state: RootState) => ({
    cardActionFilters: state.cardActionFilters
})

export default connect(mapStateToProps)(TCGActionCardFilter)