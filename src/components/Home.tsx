import * as React from "react"

// Component imports
import FarmableToday from "./FarmableToday"
import VersionHighlights from "./VersionHighlights"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

function Home() {

    const theme = useTheme()

    return (
        <React.Fragment>
            <Box>
                <Box
                    sx={{
                        backgroundColor: `${theme.paper.backgroundColor}`,
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                        display: "block",
                        margin: "auto",
                        mt: "20px",
                        width: "70%",
                        p: "20px",
                        textAlign: "center",
                        color: `${theme.text.color}`,
                    }}
                >
                    <Typography variant="h3" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>Welcome to PROJECT IRMINSUL</Typography>
                </Box>
                <Grid container>
                    <FarmableToday />
                    <VersionHighlights />
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Home