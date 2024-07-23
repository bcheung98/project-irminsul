import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"

// MUI imports
import { Box, Button, ButtonBase, Typography, CardHeader, Tabs, Select, MenuItem, AppBar, SelectChangeEvent, Theme } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Helper imports
import { MaterialDates } from "../helpers/MaterialDates"
import { CustomTooltip } from "../helpers/CustomTooltip"
import { CustomSelect } from "../helpers/CustomSelect"
import { TabPanel, StyledTab } from "../helpers/CustomTabs"
import ErrorLoadingImage from "../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../redux/store"
import { CharacterData } from "../types/character/CharacterData"
import { WeaponData } from "../types/weapon/WeaponData"

const IconBackground = (rarity: number, theme: Theme) => {
    return {
        margin: "auto",
        ml: "2px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        width: "64px",
        height: "64px",
        backgroundColor: "rgb(9, 24, 39)",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%"
    }
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
                display: "block",
                margin: "auto",
                mt: "20px",
                width: "40vw",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography variant="h5" component="p" sx={{ fontFamily: "Genshin, sans-serif", mt: "5px" }}>
                        Farming Schedule
                    </Typography>
                    <Select value={day} label="Day" onChange={handleDayChange} input={<CustomSelect />}>
                        {
                            weekday.map((day: string, index: number) => (
                                <MenuItem key={index} value={day}>
                                    {
                                        day === today ? <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{day} {"(Today)"}</Typography> : <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{day}</Typography>
                                    }
                                </MenuItem>
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
                                        <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            {mat}
                                        </Typography>
                                    }
                                    sx={{ p: 0, mb: "5px" }}
                                />
                                <Grid>
                                    {
                                        characters.filter((char: CharacterData) => farmableMats["talents"][index].includes(char.materials.talentBook as string)).map((char: CharacterData, index: number) => (
                                            <ButtonBase disableRipple href={`/project-irminsul/character/${char.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                                <CustomTooltip title={char.name} arrow placement="top">
                                                    <img src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.name.split(" ").join("_")}_Thumb.png`)} alt={char.name} style={IconBackground(char.rarity, theme)} onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                            </ButtonBase>
                                        ))
                                    }
                                </Grid>
                                < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
                            </Box>
                        ))
                    }
                    <Button variant="contained" href={`/project-irminsul/characters`}>
                        <Typography variant="subtitle2" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            See all characters
                        </Typography>
                    </Button>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    {
                        farmableMats["weapons"].map((mat: string, index: number) => (
                            <Box key={index}>
                                <CardHeader
                                    avatar={<img src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${mat.split(" ").join("_")}4.png`} alt={mat} style={{ width: "48px", marginRight: "-10px" }} />}
                                    title={
                                        <Typography variant="h6" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                                            {mat}
                                        </Typography>
                                    }
                                    sx={{ p: 0, mb: "5px" }}
                                />
                                <Grid>
                                    {
                                        weapons.filter((wep: WeaponData) => farmableMats["weapons"][index].includes(wep.materials.ascensionMat as string)).sort((a: WeaponData, b: WeaponData) => b.rarity - a.rarity).map((wep: WeaponData, index: number) => (
                                            <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.name.split(" ").join("_").toLowerCase()}`} target="_blank" key={index} sx={{ m: "2px" }}>
                                                <CustomTooltip title={wep.name} arrow placement="top">
                                                    <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.name.split(" ").join("_")}.png`)} alt={wep.name} style={IconBackground(wep.rarity, theme)} onError={ErrorLoadingImage} />
                                                </CustomTooltip>
                                            </ButtonBase>
                                        ))
                                    }
                                </Grid>
                                < hr style={{ border: `0.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "15px" }} />
                            </Box>
                        ))
                    }
                    <Button variant="contained" href={`/project-irminsul/weapons`}>
                        <Typography variant="subtitle2" component="p" sx={{ fontFamily: "Genshin, sans-serif" }}>
                            See all weapons
                        </Typography>
                    </Button>
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