import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"

// MUI imports
import { Box, ButtonBase, Typography, CardHeader, Tabs, Select, AppBar, SelectChangeEvent, Theme } from "@mui/material"

// Helper imports
import { MaterialDates } from "../helpers/MaterialDates"
import { CustomTooltip } from "../helpers/CustomTooltip"
import { CustomInput } from "../helpers/CustomInput"
import { CustomMenuItem } from "../helpers/CustomMenu"
import { TabPanel, StyledTab } from "../helpers/CustomTabs"
import ErrorLoadingImage from "../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../redux/store"
import { CharacterData } from "../types/character/CharacterData"
import { WeaponData } from "../types/weapon/WeaponData"

const IconStyle = (rarity: number, theme: Theme) => {
    return {
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        width: "64px",
        height: "64px",
        boxSizing: "content-box",
        marginRight: "5px",
        marginBottom: "5px",
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%"
    } as React.CSSProperties
}

function FarmableToday(props: any) {

    const theme = useTheme()

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const d = new Date()
    let today = weekday[d.getDay()]

    const [day, setDay] = React.useState(today)
    const handleDayChange = (event: SelectChangeEvent) => {
        setDay(event.target.value)
    }

    let farmableMats = MaterialDates(day)
    let characters = props.characters.characters.filter((char: CharacterData) => farmableMats["talents"].includes(char.materials.talentBook as string))
    let weapons = props.weapons.weapons.filter((wep: WeaponData) => farmableMats["weapons"].includes(wep.materials.ascensionMat as string))

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                    height: "70px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6" noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, ml: "5px", lineHeight: "45px" }}>
                        Farming Schedule
                    </Typography>
                    <Select
                        value={day}
                        label="Day"
                        onChange={handleDayChange}
                        input={<CustomInput />}
                        sx={{
                            "& .MuiSelect-icon": {
                                color: "white"
                            }
                        }}
                    >
                        {
                            weekday.map((day: string, index: number) => (
                                <CustomMenuItem key={index} value={day}>
                                    {
                                        day === today ?
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                                {day} {"(Today)"}
                                            </Typography>
                                            :
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                                {day}
                                            </Typography>
                                    }
                                </CustomMenuItem>
                            ))
                        }
                    </Select>
                </Box>
            </AppBar>
            <Box>
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <StyledTab label="Characters" />
                    <StyledTab label="Weapons" />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    {
                        farmableMats["talents"].map((mat: string, index: number) => (
                            <Box key={index}>
                                <CardHeader
                                    avatar={<img src={`${process.env.REACT_APP_URL}/materials/talent_mats/${mat}3.png`} alt={mat} style={{ width: "48px", marginRight: "-10px" }} />}
                                    title={
                                        <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                            {mat}
                                        </Typography>
                                    }
                                    sx={{ p: 0, mb: "10px" }}
                                />
                                {
                                    characters.filter((char: CharacterData) => farmableMats["talents"][index].includes(char.materials.talentBook as string)).map((char: CharacterData, index: number) => (
                                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index}>
                                            <CustomTooltip title={char.name} arrow placement="top">
                                                <img src={(`${process.env.REACT_APP_URL}/characters/icons/${char.name.split(" ").join("_")}.png`)} alt={char.name} style={IconStyle(char.rarity, theme)} onError={ErrorLoadingImage} />
                                            </CustomTooltip>
                                        </ButtonBase>
                                    ))
                                }
                                {index !== farmableMats["talents"].length - 1 && <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "10px" }} />}
                            </Box>
                        ))
                    }
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    {
                        farmableMats["weapons"].map((mat: string, index: number) => (
                            <Box key={index}>
                                <CardHeader
                                    avatar={<img src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${mat.split(" ").join("_")}4.png`} alt={mat} style={{ width: "48px", marginRight: "-10px" }} />}
                                    title={
                                        <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}` }}>
                                            {mat}
                                        </Typography>
                                    }
                                    sx={{ p: 0, mb: "10px" }}
                                />
                                {
                                    weapons.filter((wep: WeaponData) => farmableMats["weapons"][index].includes(wep.materials.ascensionMat as string)).sort((a: WeaponData, b: WeaponData) => b.rarity - a.rarity).map((wep: WeaponData, index: number) => (
                                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${wep.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                            <CustomTooltip title={wep.name} arrow placement="top">
                                                <img src={(`${process.env.REACT_APP_URL}/weapons/${wep.name.split(" ").join("_")}.png`)} alt={wep.name} style={IconStyle(wep.rarity, theme)} onError={ErrorLoadingImage} />
                                            </CustomTooltip>
                                        </ButtonBase>
                                    ))
                                }
                                {index !== farmableMats["weapons"].length - 1 && <hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "10px" }} />}
                            </Box>
                        ))
                    }
                </TabPanel>

            </Box>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    characters: state.characters,
    weapons: state.weapons
})

export default connect(mapStateToProps)(FarmableToday)