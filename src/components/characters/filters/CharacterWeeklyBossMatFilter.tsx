import { useDispatch } from "react-redux"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, CardHeader, Typography } from "@mui/material"

// Helper imports
import { WeeklyBossMats } from "../../../helpers/MaterialList"
import { setWeeklyBossMats } from "../../../redux/reducers/CharacterFilterReducer"
import { SmallAccordion, SmallAccordionDetails, SmallAccordionSummary } from "../../../helpers/CustomAccordion"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterWeeklyBossMatFilter() {

    const theme = useTheme()

    const dispatch = useDispatch()

    return (
        <Box style={{ margin: "auto", width: "99%" }}>
            {
                Object.keys(WeeklyBossMats).map((boss, index) => (
                    <SmallAccordion key={index}>
                        <SmallAccordionSummary>
                            <CardHeader
                                avatar={
                                    <img src={`${process.env.REACT_APP_URL}/bosses/${boss.split(" ").join("_")}.png`} alt={boss} style={{ height: "32px", width: "32px", border: `1px solid ${theme.border.color}`, borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                }
                                title={
                                    <Typography
                                        sx={{
                                            fontFamily: "Genshin, monospace",
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {boss}
                                    </Typography>
                                }
                            />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            {
                                (WeeklyBossMats[boss as keyof {}] as []).sort().map((material: string, index) => (
                                    <CustomTooltip key={index} title={material} arrow placement="top">
                                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weekly_boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={() => dispatch(setWeeklyBossMats(material))} onError={ErrorLoadingImage} />
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

export default CharacterWeeklyBossMatFilter