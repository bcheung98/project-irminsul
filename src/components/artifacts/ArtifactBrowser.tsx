import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"

// Component imports
import ArtifactCard from "./ArtifactCard"

// MUI imports
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

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
                    Artifacts
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    artifacts.artifacts.length > 0 ?
                        artifacts.artifacts.map((artifact: ArtifactData, index: number) => <ArtifactCard key={index} artifact={artifact} />)
                        :
                        null
                }
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    artifacts: state.artifacts
})

export default connect(mapStateToProps)(ArtifactBrowser)