import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"

// MUI imports
import { useTheme, Typography } from "@mui/material"
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
            <Typography
                sx={{
                    mb: "20px",
                    fontFamily: `${theme.font.genshin.family}`,
                    fontSize: "24px",
                    color: `${theme.text.color}`,
                    lineHeight: "40px"
                }}
            >
                Artifacts
            </Typography>
            <Grid container spacing={2}>
                {
                    artifacts.artifacts.length > 0 ?
                        artifacts.artifacts.map((artifact: ArtifactData, index: number) => <CustomCard key={index} type="artifact" name={artifact.name} rarity={artifact.rarity} size="128px" showInfo artifact={artifact} />)
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