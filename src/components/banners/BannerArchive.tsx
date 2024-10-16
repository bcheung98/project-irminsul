import * as React from "react"
import { connect } from "react-redux"

// Component imports
import BannerList from "./BannerList"
import ChronicledWishList from "./ChronicledWishList"

// MUI imports
import { useTheme, Box, Typography, ToggleButtonGroup } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { CustomToggleButtonText } from "../_custom/CustomToggleButton"

// Type imports
import { RootState } from "../../redux/store"

function BannerArchive(props: any) {

    const theme = useTheme()

    let { banners } = props

    const [view, setView] = React.useState("normal")
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)
        }
    }

    document.title = `Banner Archive ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        fontFamily: `${theme.font.genshin.family}`,
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    Banner Archive
                </Typography>
            </Box>
            <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ mb: "30px" }}>
                <CustomToggleButtonText value="normal">
                    <Typography sx={{ fontSize: "9.5pt", fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Character/Weapon Wish</Typography>
                </CustomToggleButtonText>
                <CustomToggleButtonText value="chronicled">
                    <Typography sx={{ fontSize: "9.5pt", fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Chronicled Wish</Typography>
                </CustomToggleButtonText>
            </ToggleButtonGroup>
            {
                view === "normal" ?
                    <React.Fragment>
                        {
                            banners.characterBanners.length > 0 && banners.weaponBanners.length > 0 &&
                            <Grid container spacing={3} columns={{ xs: 1, sm: 12 }}>
                                <Grid size={6}>
                                    <BannerList banners={banners.characterBanners} type="character" />
                                </Grid>
                                <Grid size={6}>
                                    <BannerList banners={banners.weaponBanners} type="weapon" />
                                </Grid>
                            </Grid>
                        }
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {
                            banners.chronicledWish.length > 0 &&
                            <Box>
                                <ChronicledWishList banners={banners.chronicledWish} />
                            </Box>
                        }
                    </React.Fragment>
            }

        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    banners: state.banners
})

export default connect(mapStateToProps)(BannerArchive)