import * as React from "react"
import { connect, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"

// MUI imports
import { useTheme, Typography, Box, AppBar, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { CharacterFilterState, setElement, setWeapon, setRarity, setAscensionStat, setTalentBook, setCommonMats, setBossMats, setWeeklyBossMats, setLocalMats, setNation, setGender } from "../../redux/reducers/CharacterFilterReducer"
import { CharacterAscensionStats } from "../../data/CharacterAscensionStats"
import { TalentBooks, CommonMats, BossMats, WeeklyBossMats, LocalMats } from "../../data/MaterialList"
import { formatTalents, formatCommonMats, formatBossMats } from "../../helpers/TooltipText"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"

function CharacterFilters(props: {
    characterFilters: CharacterFilterState,
    handleClose?: (arg0: any) => void
}) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { characterFilters } = props

    const filters: {
        name: string,
        tag: string,
        component: React.ReactNode
    }[] = [
            {
                name: "Element",
                tag: "element",
                component:
                    <Grid container spacing={1}>
                        {["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"].map((element, index) => <FilterButton key={index} tag={element} img={`elements/${element}`} active={characterFilters.element.includes(element)} onClick={() => dispatch(setElement(element))} />)}
                    </Grid>
            },
            {
                name: "Weapon",
                tag: "weapon",
                component:
                    <Grid container spacing={1}>
                        {["Sword", "Claymore", "Polearm", "Bow", "Catalyst"].map((weapon, index) => <FilterButton key={index} tag={weapon} img={`weapons/icons/${weapon}`} active={characterFilters.weapon.includes(weapon)} onClick={() => dispatch(setWeapon(weapon))} />)}
                    </Grid>
            },
            {
                name: "Rarity",
                tag: "rarity",
                component:
                    <Grid container spacing={1}>
                        {["5", "4"].map((rarity, index) => <FilterButton key={index} variant="text" tag={`${rarity}★`} active={characterFilters.rarity.includes(rarity)} onClick={() => dispatch(setRarity(rarity))} />)}
                    </Grid>
            },
            {
                name: "Ascension Stat",
                tag: "ascStat",
                component:
                    <Grid container spacing={1}>
                        {Object.keys(CharacterAscensionStats).map((stat, index) => <FilterButton key={index} tag={CharacterAscensionStats[stat as keyof {}]["title"]} img={`icons/ascension_stats/${stat.split(" ").join("_")}`} active={characterFilters.ascStat.includes(stat)} onClick={() => dispatch(setAscensionStat(stat))} />)}
                    </Grid>
            },
            {
                name: "Talent Book",
                tag: "talent",
                component:
                    <Grid container spacing={1}>
                        {
                            Object.keys(TalentBooks).map((nation, index) => (
                                <Box key={index} sx={{ minWidth: "150px", mb: 1 }}>
                                    <Box sx={{ display: "flex", mb: 1, alignItems: "center" }}>
                                        <img src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} style={{ height: "32px", width: "32px", marginRight: "10px", borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "14.5px", color: `${theme.text.color}`, }}>
                                            {nation}
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={1} key={index}>
                                        {
                                            TalentBooks[nation as keyof typeof TalentBooks].map((talent: string, index) => (
                                                <FilterButton key={index} tag={formatTalents(talent)} img={`materials/talent_mats/${talent}3`} active={characterFilters.talent.includes(talent)} onClick={() => dispatch(setTalentBook(talent))} />
                                            ))
                                        }
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Grid>
            },
            {
                name: "Common Material",
                tag: "commonMat",
                component:
                    <Grid container spacing={1}>
                        {CommonMats.map((material, index) => <FilterButton key={index} tag={formatCommonMats(material)} img={`materials/common_mats/${material.split(" ").join("_")}3`} active={characterFilters.commonMat.includes(material)} onClick={() => dispatch(setCommonMats(material))} />)}
                    </Grid>
            },
            {
                name: "Normal Boss",
                tag: "bossMat",
                component:
                    <Grid container spacing={1}>
                        {BossMats.map((material, index) => <FilterButton key={index} tag={formatBossMats(material)} img={`materials/boss_mats/${material.split(" ").join("_")}`} active={characterFilters.bossMat.includes(material)} onClick={() => dispatch(setBossMats(material))} />)}
                    </Grid>
            },
            {
                name: "Weekly Boss",
                tag: "weeklyBossMat",
                component:
                    <Box sx={{ my: -1.5 }}>
                        {
                            Object.keys(WeeklyBossMats).map((boss, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary sx={{ height: "32px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img src={`${process.env.REACT_APP_URL}/bosses/${boss.split(" ").join("_")}.png`} alt={boss} style={{ height: "32px", width: "32px", marginRight: "10px", border: `1px solid ${theme.border.color}`, borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "14.5px", color: `${theme.text.color}`, }}>
                                                {boss}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={1}>
                                            {WeeklyBossMats[boss as keyof typeof WeeklyBossMats].sort().map((material: string, index) => <FilterButton key={index} tag={material} img={`materials/weekly_boss_mats/${material.split(" ").join("_")}`} active={characterFilters.weeklyBossMat.includes(material)} onClick={() => dispatch(setWeeklyBossMats(material))} />)}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </Box>
            },
            {
                name: "Local Specialty",
                tag: "localMat",
                component:
                    <Box sx={{ my: -1.5 }}>
                        {
                            Object.keys(LocalMats).map((nation, index) => (
                                <Accordion key={index}>
                                    <AccordionSummary sx={{ height: "32px" }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <img src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} style={{ height: "32px", width: "32px", marginRight: "10px", borderRadius: "5px" }} onError={ErrorLoadingImage} />
                                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "14.5px", color: `${theme.text.color}`, }}>
                                                {nation}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={1}>
                                            {LocalMats[nation as keyof typeof LocalMats].sort().map((material: string, index) => <FilterButton key={index} tag={material} img={`materials/local_specialties/${material.split(" ").join("_")}`} active={characterFilters.localMat.includes(material)} onClick={() => dispatch(setLocalMats(material))} />)}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </Box>
            },
            {
                name: "Nation",
                tag: "nation",
                component:
                    <Grid container spacing={1}>
                        {["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Natlan", "Snezhnaya"].map((nation, index) => <FilterButton key={index} tag={nation} img={`nations/${nation}`} active={characterFilters.nation.includes(nation)} onClick={() => dispatch(setNation(nation))} />)}
                    </Grid>
            },
            {
                name: "Gender",
                tag: "gender",
                component:
                    <Grid container spacing={1}>
                        <FilterButton img={`icons/Aether`} tag="Male" active={characterFilters.gender.includes("Male")} onClick={() => dispatch(setGender("Male"))} />
                        <FilterButton img={`icons/Lumine`} tag="Female" active={characterFilters.gender.includes("Female")} onClick={() => dispatch(setGender("Female"))} />
                    </Grid>
            }
        ]

    return (
        <Box
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: "5px",
                width: "100%",
                overflowY: { xs: "none", sm: "auto" }
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                        sx={{
                            px: 2,
                            py: 1.5,
                            fontFamily: `${theme.font.genshin.family}`,
                            fontSize: "18px",
                            flexGrow: 1
                        }}
                    >
                        Filters
                    </Typography>
                    <IconButton onClick={props.handleClose}>
                        <CloseIcon sx={{ color: `white` }} />
                    </IconButton>
                </Box>
            </AppBar>
            {
                filters.map((filter, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    color: characterFilters[filter.tag as keyof CharacterFilterState].length > 0 ? `rgb(30, 175, 255)` : `${theme.text.color}`
                                }}
                            >
                                {filter.name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pl: 1 }}>
                            {filter.component}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    characterFilters: state.characterFilters
})

export default connect(mapStateToProps)(CharacterFilters)