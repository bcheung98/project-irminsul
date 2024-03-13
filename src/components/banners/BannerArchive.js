import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import BannerList from "./BannerList";
import ChronicledWishList from "./ChronicledWishList";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.MuiToggleButton-root": {
        border: `2px solid ${theme.border.color}`,
        "&.Mui-selected": {
            backgroundColor: "rgb(0, 127, 255)"
        }
    }
}));

const BannerArchive = (props) => {

    const theme = useTheme();

    let { banners } = props;

    const [view, setView] = React.useState("normal");
    const handleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    }

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
                <StyledToggleButton value="normal">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Character/Weapon Wish</Typography>
                </StyledToggleButton>
                <StyledToggleButton value="chronicled">
                    <Typography variant="body2" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>Chronicled Wish</Typography>
                </StyledToggleButton>
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

const mapStateToProps = (state) => {
    return {
        banners: state.banners
    }
}

export default connect(mapStateToProps)(BannerArchive);