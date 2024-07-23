import * as React from "react"
import { connect } from "react-redux"

// Component imports
import BannerList from "./BannerList"
import ChronicledWishList from "./ChronicledWishList"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, ToggleButtonGroup } from "@mui/material"

// Helper imports
import { CustomToggleButtonText } from "../../helpers/CustomToggleButton"

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

    document.title = "Banner Archive - Project Irminsul"

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    sx={{
                        mx: "25px",
                        my: "20px",
                        display: { xs: "none", md: "flex" },
                        fontFamily: "Genshin, sans-serif",
                        letterSpacing: ".2rem",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    BANNER ARCHIVE
                </Typography>
            </Box>

            <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ mx: "30px", mb: "30px" }}>
                <CustomToggleButtonText value="normal">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Character/Weapon Wish</Typography>
                </CustomToggleButtonText>
                <CustomToggleButtonText value="chronicled">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Chronicled Wish</Typography>
                </CustomToggleButtonText>
            </ToggleButtonGroup>

            {
                view === "normal" ?
                    <React.Fragment>
                        {
                            banners.characterBanners.length > 0 && banners.weaponBanners.length > 0 &&
                            <Box sx={{ display: "flex" }}>
                                <BannerList banners={banners.characterBanners} type="character" />
                                <BannerList banners={banners.weaponBanners} type="weapon" />
                            </Box>
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