import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"

// Component imports
import ArtifactCard from "./ArtifactCard"

// MUI imports
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Type imports
import { RootState } from "../../redux/store"
import { ArtifactData } from "../../types/artifact/ArtifactData"

function ArtifactBrowser(props: any) {

    const theme = useTheme()

    let { artifacts } = props

    document.title = `Artifacts ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                        fontFamily: `${theme.font.genshin.family}`,
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
                {artifacts.artifacts.length > 0 && artifacts.artifacts.map((artifact: ArtifactData, index: number) => <ArtifactCard key={index} artifact={artifact} />)}
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    artifacts: state.artifacts
})

export default connect(mapStateToProps)(ArtifactBrowser)