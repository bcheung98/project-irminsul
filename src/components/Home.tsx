// Component imports
import FarmableToday from "./FarmableToday"
import VersionHighlights from "./VersionHighlights"

// MUI imports
import Grid from "@mui/material/Grid2"

function Home() {

    document.title = `Genshin Impact ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <Grid container>
            <Grid size={6}>
                <FarmableToday />
            </Grid>
            <Grid size={6}>
                <VersionHighlights />
            </Grid>
        </Grid>
    )
    
}

export default Home