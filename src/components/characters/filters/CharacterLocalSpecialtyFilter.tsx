import { useDispatch } from "react-redux"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, CardHeader, Typography } from "@mui/material"

// Helper imports
import { LocalMats } from "../../../helpers/MaterialList"
import { setLocalMats } from "../../../redux/reducers/CharacterFilterReducer"
import { SmallAccordion, SmallAccordionDetails, SmallAccordionSummary } from "../../../helpers/CustomAccordion"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterLocalMatFilter() {

    const theme = useTheme()

    const dispatch = useDispatch()

    return (
        <Box sx={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(LocalMats).map((nation, index) => (
                    <SmallAccordion key={index}>
                        <SmallAccordionSummary>
                            <CardHeader
                                avatar={
                                    <img src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} style={{ height: "32px", width: "32px", borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                }
                                title={
                                    <Typography variant="body1"
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {nation}
                                    </Typography>
                                }
                            />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            {
                                (LocalMats[nation as keyof {}] as []).sort().map((material: string, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/local_specialties/${material}.png`} alt={material} onClick={() => dispatch(setLocalMats(material))} onError={ErrorLoadingImage} />
                                    </CustomTooltip>
                                ))
                            }
                        </SmallAccordionDetails>
                    </SmallAccordion>
                ))
            }
        </Box>
    )
}

export default CharacterLocalMatFilter