// Component imports
import FarmableToday from "./FarmableToday"
import VersionHighlights from "./VersionHighlights"

// MUI imports
import Grid from "@mui/material/Unstable_Grid2"

function Home() {

    return (
        <Grid container>
            <Grid xs={6}>
                <FarmableToday />
            </Grid>
            <Grid xs={6}>
                <VersionHighlights />
            </Grid>
        </Grid>
    )
}

export default Home