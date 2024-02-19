import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "../../helpers/CustomAccordion";

const TCGCharacterCardFilter = (props) => {

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
            </Paper>
        </Box>
    )

}

export default TCGCharacterCardFilter;