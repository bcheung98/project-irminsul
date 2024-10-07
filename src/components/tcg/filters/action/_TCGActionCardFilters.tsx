// Component imports
import TCGActionTypeFilter from "./TCGActionTypeFilter"
import TCGActionSubTypeFilter from "./TCGActionSubTypeFilter"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Paper } from "@mui/material"

// Helper imports
import { Accordion, AccordionDetails, AccordionSummary } from "../../../_custom/CustomAccordion"

function TCGActionCardFilter() {

    const theme = useTheme()

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
                variant="h6"
                sx={{
                    ml: "15px",
                    my: "10px",
                    fontFamily: `${theme.font.genshin.family}`,
                }}
            >
                Filters
            </Typography>

            {/* CARD TYPE */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="type-filter-text" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Card Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TCGActionTypeFilter />
                </AccordionDetails>
            </Accordion>

            {/* CARD SUB TYPE */}
            <Accordion>
                <AccordionSummary>
                    <Typography variant="body1" className="filter-text-off" id="subtype-filter-text" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Card Group</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TCGActionSubTypeFilter />
                </AccordionDetails>
            </Accordion>

        </Paper>
    )

}

export default TCGActionCardFilter