import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "./_custom/CustomCard"
import { CustomInput } from "./_custom/CustomInput"
import { CustomMenuItem } from "./_custom/CustomMenu"
import { TabPanel, StyledTab } from "./_custom/CustomTabs"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, CardHeader, Tabs, Select, AppBar, SelectChangeEvent } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { MaterialDates } from "../helpers/MaterialDates"

// Type imports
import { RootState } from "../redux/store"
import { CharacterData } from "../types/character/CharacterData"
import { WeaponData } from "../types/weapon/WeaponData"

function FarmableToday(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

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

    const formatDayString = (day: string) => matches ? day : day.slice(0, 3)

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
                    minHeight: "70px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "16px", sm: "20px" }, ml: "5px", lineHeight: "45px" }}>
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
                                        day === today && matches ?
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", sm: "16px" } }}>
                                                {`${formatDayString(day)} (Today)`}
                                            </Typography>
                                            :
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", sm: "16px" } }}>
                                                {formatDayString(day)}
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
                                <Grid container spacing={1}>
                                    {
                                        characters.filter((char: CharacterData) => farmableMats["talents"][index].includes(char.materials.talentBook as string))
                                            .map((char: CharacterData) => (
                                                <CustomCard key={char.name} type="character" name={char.name} rarity={char.rarity} />
                                            ))
                                    }
                                </Grid>
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
                                <Grid container spacing={1}>
                                    {
                                        weapons.filter((wep: WeaponData) => farmableMats["weapons"][index].includes(wep.materials.ascensionMat as string)).sort((a: WeaponData, b: WeaponData) => b.rarity - a.rarity).map((wep: WeaponData) => (
                                            <CustomCard key={wep.name} type="weapon" name={wep.name} rarity={wep.rarity} />
                                        ))
                                    }
                                </Grid>
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