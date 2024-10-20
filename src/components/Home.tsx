// Component imports
import FarmableToday from "./FarmableToday"
import CurrentBanners from "./banners/CurrentBanners"
import VersionHighlights from "./VersionHighlights"

// MUI imports
import Grid from "@mui/material/Grid2"

function Home() {

    document.title = `Genshin Impact ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <Grid container rowSpacing={2.5} columnSpacing={5} columns={{ xs: 5, md: 12 }}>
            <Grid size={6}>
                <CurrentBanners />
                <FarmableToday />
            </Grid>
            <Grid size={6}>
                <VersionHighlights />
            </Grid>
        </Grid>
    )

}

export default Home