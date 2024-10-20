import { connect, useDispatch } from "react-redux"

// Component imports
import { Accordion, AccordionDetails, AccordionSummary } from "../_custom/CustomAccordion"
import FilterButton from "../_custom/FilterButton"

// MUI imports
import { useTheme, Typography, Box, AppBar, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import CloseIcon from "@mui/icons-material/Close"

// Helper imports
import { WeaponFilterState, setWeaponType, setRarity, setSubstats, setAscensionMats, setEliteMats, setCommonMats } from "../../redux/reducers/WeaponFilterReducer"
import { WeaponSubstats } from "../../data/WeaponSubstats"
import { WepAscensionMats, EliteMats, CommonMats } from "../../data/MaterialList"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../helpers/TooltipText"

// Type imports
import { RootState } from "../../redux/store"

function WeaponFilters(props: {
    weaponFilters: WeaponFilterState,
    handleClose?: (arg0: any) => void
}) {

    const theme = useTheme()

    const dispatch = useDispatch()

    const { weaponFilters } = props

    const filters: {
        name: string,
        tag: string,
        component: JSX.Element
    }[] = [
            {
                name: "Weapon",
                tag: "weaponType",
                component:
                    <Grid container spacing={1}>
                        {["Sword", "Claymore", "Polearm", "Bow", "Catalyst"].map((weapon, index) => <FilterButton key={index} tag={weapon} img={`weapons/icons/${weapon}`} active={weaponFilters.weaponType.includes(weapon)} onClick={() => dispatch(setWeaponType(weapon))} />)}
                    </Grid>
            },
            {
                name: "Rarity",
                tag: "rarity",
                component:
                    <Grid container spacing={1}>
                        {["5", "4", "3", "2", "1"].map((rarity, index) => <FilterButton key={index} variant="text" tag={`${rarity}★`} active={weaponFilters.rarity.includes(rarity)} onClick={() => dispatch(setRarity(rarity))} />)}
                    </Grid>
            },
            {
                name: "Substat",
                tag: "substats",
                component:
                    <Grid container spacing={1}>
                        {Object.keys(WeaponSubstats).map((stat, index) => <FilterButton key={index} tag={WeaponSubstats[stat as keyof {}]["title"]} img={`icons/ascension_stats/${stat.split(" ").join("_")}`} active={weaponFilters.substats.includes(stat)} onClick={() => dispatch(setSubstats(stat))} />)}
                    </Grid>
            },
            {
                name: "Ascension Material",
                tag: "ascensionMat",
                component:
                    <Grid container spacing={1}>
                        {
                            Object.keys(WepAscensionMats).map((nation, index) => (
                                <Box key={index} sx={{ minWidth: "150px", mb: 1 }}>
                                    <Grid container spacing={1}>
                                        {
                                            WepAscensionMats[nation as keyof typeof WepAscensionMats].map((material: string, index) => (
                                                <FilterButton key={index} tag={formatWeaponAscMats(material)} img={`materials/weapon_ascension_mats/${material.split(" ").join("_")}4`} active={weaponFilters.ascensionMat.includes(material)} onClick={() => dispatch(setAscensionMats(material))} />
                                            ))
                                        }
                                    </Grid>
                                </Box>
                            ))
                        }
                    </Grid>
            },
            {
                name: "Elite Material",
                tag: "eliteMat",
                component:
                    <Grid container spacing={1}>
                        {EliteMats.map((material, index) => <FilterButton key={index} tag={formatEliteMats(material)} img={`materials/elite_mats/${material.split(" ").join("_")}3`} active={weaponFilters.eliteMat.includes(material)} onClick={() => dispatch(setEliteMats(material))} />)}
                    </Grid>
            },
            {
                name: "Common Material",
                tag: "commonMat",
                component:
                    <Grid container spacing={1}>
                        {CommonMats.map((material, index) => <FilterButton key={index} tag={formatCommonMats(material)} img={`materials/common_mats/${material.split(" ").join("_")}3`} active={weaponFilters.commonMat.includes(material)} onClick={() => dispatch(setCommonMats(material))} />)}
                    </Grid>
            },
        ]

    return ((
        <Box
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: { xs: "none", sm: `2px solid ${theme.border.color}` },
                borderRadius: "5px",
                width: "100%"
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
                                    color: weaponFilters[filter.tag as keyof WeaponFilterState].length > 0 ? `rgb(30, 175, 255)` : `${theme.text.color}`
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
    ))
}

const mapStateToProps = (state: RootState) => ({
    weaponFilters: state.weaponFilters
})


export default connect(mapStateToProps)(WeaponFilters)