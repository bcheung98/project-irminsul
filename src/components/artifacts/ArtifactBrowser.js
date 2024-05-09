import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ArtifactBrowser = (props) => {

    const theme = useTheme();

    let { artifacts } = props;

    document.title = "Artifacts - Project Irminsul";

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                <Typography variant="h4"
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
                    ARTIFACTS
                </Typography>
            </Box>
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                {
                    artifacts.artifacts.length > 0 &&
                    <React.Fragment>
                    </React.Fragment>
                }
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        artifacts: state.artifacts
    }
}

export default connect(mapStateToProps)(ArtifactBrowser);