import * as React from "react"
import { useTheme } from "@mui/material/styles"
import parse from "html-react-parser"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { Typography, Tabs, Box, AppBar } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { TabPanel, StyledTab } from "../../_custom/CustomTabs"
import WeaponStatsTable from "./WeaponStatsTable"
import WeaponAscension from "./WeaponAscension"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import { CustomSlider } from "../../_custom/CustomSlider"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"
import { RootState } from "../../../redux/store"
import { WeaponData } from "../../../types/weapon/WeaponData"

function WeaponPage(props: any) {

    const theme = useTheme()

    let { weapon_name } = useParams<{ weapon_name: string }>()
    let { weapons } = props
    let weapon = weapons.weapons.find((weapon: WeaponData) => weapon.name.split(" ").join("_").toLowerCase() === weapon_name)

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    let maxValue = 5
    const [sliderValue, setSliderValue] = React.useState(1)
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number)
    }
    let scaling
    if (weapon !== undefined) {
        scaling = weapon.stats.passive.scaling
    }
    let targets = document.getElementsByClassName("text-refinement")
    if (scaling !== undefined) {
        scaling.forEach((subScaling: string[], index: number) => {
            let target = targets[index]
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1] }
        })
    }

    if (weapon !== undefined) {

        let { name, rarity, type, description } = weapon

        document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        if (weapon.displayName) document.title = `${weapon.displayName} ${process.env.REACT_APP_DOCUMENT_HEADER}`
        else document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        const weaponIcon = {
            border: `1px solid ${theme.border.color}`,
            borderRadius: "5px",
            backgroundColor: `${theme.paper.backgroundColor}`,
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
            backgroundSize: "100%",
        }

        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid size="auto">
                        <img src={(`${process.env.REACT_APP_URL}/weapons/${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} onError={ErrorLoadingImage} />
                    </Grid>
                    <Grid size="grow">
                        <Box
                            sx={{
                                p: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <CustomTooltip title={`${type}`} arrow placement="bottom">
                                    <img src={`${process.env.REACT_APP_URL}/weapons/icons/${type}.png`} alt={type} onError={ErrorLoadingImage} style={{ marginRight: "-20px", height: "96px", width: "96px", backgroundColor: `${theme.paper.backgroundColor}` }} />
                                </CustomTooltip>
                                <Box sx={{ ml: "30px" }}>
                                    <Typography
                                        variant="h4"
                                        noWrap
                                        sx={{
                                            mt: "10px",
                                            fontFamily: `${theme.font.genshin.family}`,
                                            color: `${theme.text.color}`,
                                            textDecoration: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        {weapon.displayName ? weapon.displayName : name}
                                    </Typography>
                                    <Box sx={{ ml: "-5px", mt: "5px" }}>
                                        <img style={{ height: "30px" }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                                    </Box>
                                </Box>
                            </Box>
                            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    color: `${theme.text.color}`,
                                    m: "5px"
                                }}
                            >
                                <i>{description}</i>
                            </Typography>
                        </Box>
                        {
                            weapon.stats.passive.name !== "" &&
                            <Box
                                sx={{
                                    px: "5px",
                                    py: "15px",
                                    my: "15px",
                                    border: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px",
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                    color: `${theme.text.color}`,
                                }}
                            >
                                <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, mx: "15px", }}>
                                    {weapon.stats.passive.name}
                                </Typography>
                                <br />
                                <Typography variant="body1" sx={{ fontSize: "11pt", mx: "15px", }}>
                                    {parse(weapon.stats.passive.description)}
                                </Typography>
                                {
                                    weapon.stats.passive.scaling &&
                                    <Box sx={{ display: "flex", alignItems: "center", width: "20%", mt: "15px", mx: "15px", }}>
                                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, minWidth: "50px" }}>
                                            R{sliderValue}
                                        </Typography>
                                        <CustomSlider
                                            value={sliderValue}
                                            step={1}
                                            min={1}
                                            max={maxValue}
                                            onChange={handleSliderChange}
                                            sx={{ minWidth: "100px" }}
                                        />
                                    </Box>
                                }
                            </Box>
                        }
                        <Box
                            sx={{
                                p: 0,
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <AppBar position="static"
                                sx={{
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    borderBottom: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px 5px 0px 0px",
                                }}
                            >
                                <Tabs value={tabValue} onChange={handleTabChange}>
                                    <StyledTab label="Stats" />
                                    <StyledTab label="Ascension" />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={tabValue} index={0}>
                                <WeaponStatsTable weapon={weapon} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <WeaponAscension weapon={weapon} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        )

    }
    else {
        return (
            <></>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    weapons: state.weapons,
    weaponFilters: state.weaponFilters
})

export default connect(mapStateToProps)(WeaponPage)