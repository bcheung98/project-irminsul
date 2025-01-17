// Component imports
import FarmableToday from "./FarmableToday";
import CurrentBanners from "../banners/CurrentBanners";
import VersionHighlights from "./VersionHighlights";

// MUI imports
import Grid from "@mui/material/Grid2";

function Home() {
    document.title = `Genshin Impact - Irminsul.GG`;

    return (
        <Grid container rowSpacing={3} columnSpacing={4}>
            <Grid size={12}>
                <CurrentBanners />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <VersionHighlights />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FarmableToday />
            </Grid>
        </Grid>
    );
}

export default Home;
