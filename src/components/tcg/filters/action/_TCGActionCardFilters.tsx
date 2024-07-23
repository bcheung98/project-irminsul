// Component imports
import TCGActionTypeFilter from "./TCGActionTypeFilter"
import TCGActionSubTypeFilter from "./TCGActionSubTypeFilter"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Paper } from "@mui/material"

// Helper imports
import { Accordion, AccordionDetails, AccordionSummary } from "../../../../helpers/CustomAccordion"

function TCGActionCardFilter() {

    const theme = useTheme()

    return (
        <Box
            sx={{
                margin: "auto",
                width: "90%",
            }}
        >
            <Paper variant="outlined" square
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        ml: "15px",
                        my: "10px",
                        fontFamily: "Genshin, sans-serif",
                    }}>
                    Filters
                </Typography>

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="type-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Card Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGActionTypeFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="subtype-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Card Group</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGActionSubTypeFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )

}

export default TCGActionCardFilter