import * as React from "react"
import { connect } from "react-redux"

// Component imports
import ArtifactPopup from "./ArtifactPopup"
import CustomCard from "../_custom/CustomCard"

// MUI imports
import { useTheme, Box, Typography } from "@mui/material"
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
                    containerType: "inline-size"
                }}
            >
                <Typography
                    sx={{
                        mr: "25px",
                        fontFamily: `${theme.font.genshin.family}`,
                        fontSize: "24px",
                        color: `${theme.text.color}`,
                    }}
                >
                    Artifacts
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    artifacts.artifacts.length > 0 ?
                        artifacts.artifacts.map((artifact: ArtifactData, index: number) => <CustomCard key={index} type="artifact" name={artifact.name} rarity={artifact.rarity} size="128px" showInfo props={{ artifact: artifact }} popup={<ArtifactPopup artifact={artifact} />} />)
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