import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TCGBrowser = (props) => {

    let { cards } = props;

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
                    TCG
                </Typography>
            </Box>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}


export default connect(mapStateToProps)(TCGBrowser);