import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import BannerList from "./BannerList";

const BannerArchive = (props) => {

    let { banners } = props;

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
                        color: "white",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    BANNER ARCHIVE
                </Typography>
            </Box>
            {banners.characterBanners.length > 0 && banners.weaponBanners.length > 0 &&
                <Box sx={{display: "flex"}}>
                    <BannerList banners={banners.characterBanners} type="character" />
                    <BannerList banners={banners.weaponBanners} type="weapon" />
                </Box>
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