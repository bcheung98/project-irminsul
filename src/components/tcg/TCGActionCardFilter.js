import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion";
import TCGActionTypeFilter from "./filters/action/TCGActionTypeFilter";
import TCGActionSubTypeFilter from "./filters/action/TCGActionSubTypeFilter";

const TCGActionCardFilter = (props) => {

    const theme = useTheme();

    return (
        <Box style={{
            margin: "auto",
            width: "90%",
        }}>
            <Paper variant="outlined" square
                sx={{
                    color: `${theme.text.color}`,
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    border: `2px solid ${theme.border.color}`,
                    borderRadius: "5px",
                }}
            >
                <Typography variant="h6" sx={{
                    ml: "15px",
                    my: "10px",
                    fontFamily: "Genshin, sans-serif",
                }}>Filters
                </Typography>

                {/* ELEMENT */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="action-type-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Card Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGActionTypeFilter />
                    </AccordionDetails>
                </Accordion>

                {/* WEAPON */}
                <Accordion>
                    <AccordionSummary>
                        <Typography variant="body1" className="filter-text-off" id="action-subtype-filter-text" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Card Group</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TCGActionSubTypeFilter />
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </Box>
    )

}

export default TCGActionCardFilter;