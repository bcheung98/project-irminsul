import * as React from "react"
import { connect, useDispatch } from "react-redux"

// Component imports
import TCGCharacterCard from "./TCGCharacterCard"
import TCGActionCard from "./TCGActionCard"
import TCGDeck from "./TCGDeck"
import TCGCharacterCardFilters from "./filters/character/_TCGCharacterCardFilters"
import TCGActionCardFilters from "./filters/action/_TCGActionCardFilters"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, ToggleButtonGroup, Paper, InputBase, Radio, RadioGroup, FormControlLabel, Stack } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { blue } from "@mui/material/colors"

// Helper imports
import { filterTCGCharacterCards } from "../../helpers/FilterTCGCharacterCards"
import { filterTCGActionCards } from "../../helpers/FilterTCGActionCards"
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { CustomToggleButton, CustomToggleButtonText } from "../../helpers/CustomToggleButton"
import { clearCharacterFilters } from "../../redux/reducers/TCGCharacterFilterReducer"
import { clearActionFilters } from "../../redux/reducers/TCGActionFilterReducer"

// Type imports
import { RootState } from "../../redux/store"
import { TCGCardData } from "../../types/tcg/TCGData"
import { TCGDeckData } from "../../types/tcg/TCGDeckData"

function TCGBrowser(props: any) {

    const theme = useTheme()

    const dispatch = useDispatch()

    let { cards, deck, cardCharFilters, cardActionFilters } = props

    const [charSearchValue, setCharSearchValue] = React.useState("")
    const handleCharInputChange = (event: React.BaseSyntheticEvent) => {
        setCharSearchValue(event.target.value)
    }

    const [actionSearchValue, setActionSearchValue] = React.useState("")
    const handleActionInputChange = (event: React.BaseSyntheticEvent) => {
        setActionSearchValue(event.target.value)
    }

    const [charRadioValue, setCharRadioValue] = React.useState("name")
    const handleCharRadioChange = (event: React.BaseSyntheticEvent) => {
        setCharRadioValue(event.target.value)
    }

    const [charSortDirection, setCharSortDirection] = React.useState("asc")
    const handleCharacterSortDirectionChange = (event: React.BaseSyntheticEvent, newSort: "asc" | "desc") => {
        if (newSort !== null) {
            setCharSortDirection(newSort)
        }
    }

    const [actionRadioValue, setActionRadioValue] = React.useState("name")
    const handleActionRadioChange = (event: React.BaseSyntheticEvent) => {
        setActionRadioValue(event.target.value)
    }

    const [actionSortDirection, setActionSortDirection] = React.useState("asc")
    const handleActionSortDirectionChange = (event: React.BaseSyntheticEvent, newSort: "asc" | "desc") => {
        if (newSort !== null) {
            setActionSortDirection(newSort)
        }
    }

    const [view, setView] = React.useState("char")
    const handleView = (event: React.BaseSyntheticEvent, newView: string) => {
        if (newView !== null) {
            setView(newView)

            // Clear filter and search values when switching between Character and Action Card view
            dispatch(clearCharacterFilters())
            dispatch(clearActionFilters())
            setCharSearchValue("")
            setActionSearchValue("")
        }
    }

    const SearchBar = {
        border: `2px solid ${theme.border.color}`,
        borderRadius: "5px",
        backgroundColor: `${theme.table.body.backgroundColor}`,
        display: "flex",
        height: "40px",
    }

    const SearchBarInput = {
        marginLeft: "10px",
        flex: 1,
        color: `${theme.text.color}`,
        fontFamily: `${theme.font.genshin.family}`,
    }

    document.title = `TCG ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        fontFamily: `${theme.font.genshin.family}`,
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    TCG
                </Typography>
            </Box>

            <TCGDeck cards={deck.deck} />

            <ToggleButtonGroup value={view} exclusive onChange={handleView} sx={{ my: "20px", mb: "30px" }}>
                <CustomToggleButtonText value="char">
                    <Typography sx={{ fontSize: "9.5pt", fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Character Cards</Typography>
                </CustomToggleButtonText>
                <CustomToggleButtonText value="action">
                    <Typography sx={{ fontSize: "9.5pt", fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Action Cards</Typography>
                </CustomToggleButtonText>
            </ToggleButtonGroup>

            {/* Cards */}
            {
                cards.cards.length > 0 &&
                (
                    view === "char" ?
                        <Grid container spacing={3}>
                            <Grid size="grow">
                                <Grid container rowSpacing={3} columnSpacing={0}>
                                    {filterTCGCharacterCards(CurrentCharacterCards(cards.cards[0].cards, deck.deck.characterCards, charRadioValue, charSortDirection), cardCharFilters, charSearchValue).map(card => <TCGCharacterCard key={card.name} char={card} preview={false} />)}
                                </Grid>
                            </Grid>
                            <Grid size={2.5}>
                                <Paper sx={SearchBar}>
                                    <InputBase
                                        sx={SearchBarInput}
                                        placeholder="Search"
                                        onChange={handleCharInputChange}
                                        value={charSearchValue}
                                    />
                                </Paper>
                                <TCGCharacterCardFilters />
                                <Paper variant="outlined" square
                                    sx={{
                                        color: `${theme.text.color}`,
                                        backgroundColor: `${theme.appbar.backgroundColor}`,
                                        border: `2px solid ${theme.border.color}`,
                                        borderRadius: "5px",
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, ml: "5px", p: "10px" }}>
                                        Sort by
                                    </Typography>
                                    <Box sx={{ p: "10px", backgroundColor: `${theme.paper.backgroundColor}` }}>
                                        <Stack direction="row" spacing={4} sx={{ my: "10px" }}>
                                            <ToggleButtonGroup value={charSortDirection} size="small" exclusive onChange={handleCharacterSortDirectionChange} sx={{ border: `1px solid ${theme.border.color}` }}>
                                                <CustomTooltip title="Ascending" arrow placement="top">
                                                    <CustomToggleButton value="asc">
                                                        <ArrowUpwardIcon sx={{ color: blue[50] }} />
                                                    </CustomToggleButton>
                                                </CustomTooltip>
                                                <CustomTooltip title="Descending" arrow placement="top">
                                                    <CustomToggleButton value="desc">
                                                        <ArrowDownwardIcon sx={{ color: blue[50] }} />
                                                    </CustomToggleButton>
                                                </CustomTooltip>
                                            </ToggleButtonGroup>
                                        </Stack>
                                        <RadioGroup
                                            value={charRadioValue}
                                            onChange={handleCharRadioChange}
                                            sx={{ ml: "5px" }}
                                        >
                                            <FormControlLabel value="name" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Name</Typography>} />
                                            <FormControlLabel value="element" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Element</Typography>} />
                                            <FormControlLabel value="weapon" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Weapon</Typography>} />
                                            <FormControlLabel value="energy" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Burst Cost</Typography>} />
                                        </RadioGroup>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                        :
                        <Grid container spacing={3}>
                            <Grid size="grow">
                                <Grid container rowSpacing={3} columnSpacing={0}>
                                    {filterTCGActionCards(CurrentActionCards(cards.cards[1].cards, deck.deck.actionCards, actionRadioValue, actionSortDirection), cardActionFilters, actionSearchValue).map(card => <TCGActionCard key={card.name} card={card} preview={false} />)}
                                </Grid>
                            </Grid>
                            <Grid size={2.5}>
                                <Paper sx={SearchBar}>
                                    <InputBase
                                        sx={SearchBarInput}
                                        placeholder="Search"
                                        onChange={handleActionInputChange}
                                        value={actionSearchValue}
                                    />
                                </Paper>
                                <TCGActionCardFilters />
                                <Paper variant="outlined" square
                                    sx={{
                                        color: `${theme.text.color}`,
                                        backgroundColor: `${theme.appbar.backgroundColor}`,
                                        border: `2px solid ${theme.border.color}`,
                                        borderRadius: "5px",
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, ml: "5px", p: "10px" }}>
                                        Sort by
                                    </Typography>
                                    <Box sx={{ p: "10px", backgroundColor: `${theme.paper.backgroundColor}` }}>
                                        <Stack direction="row" spacing={4} sx={{ my: "10px" }}>
                                            <ToggleButtonGroup value={actionSortDirection} size="small" exclusive onChange={handleActionSortDirectionChange} sx={{ border: `1px solid ${theme.border.color}` }}>
                                                <CustomTooltip title="Ascending" arrow placement="top">
                                                    <CustomToggleButton value="asc">
                                                        <ArrowUpwardIcon sx={{ color: blue[50] }} />
                                                    </CustomToggleButton>
                                                </CustomTooltip>
                                                <CustomTooltip title="Descending" arrow placement="top">
                                                    <CustomToggleButton value="desc">
                                                        <ArrowDownwardIcon sx={{ color: blue[50] }} />
                                                    </CustomToggleButton>
                                                </CustomTooltip>
                                            </ToggleButtonGroup>
                                        </Stack>
                                        <RadioGroup
                                            value={actionRadioValue}
                                            onChange={handleActionRadioChange}
                                            sx={{ ml: "5px" }}
                                        >
                                            <FormControlLabel value="name" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Name</Typography>} />
                                            <FormControlLabel value="cardGroup" control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />} label={<Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>Card Group</Typography>} />
                                        </RadioGroup>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                )
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    cards: state.cards,
    deck: state.deck,
    cardCharFilters: state.cardCharFilters,
    cardActionFilters: state.cardActionFilters
})

export default connect(mapStateToProps)(TCGBrowser)

// Filters out Character Cards that are already in the deck, then sorts them based on the selected option
function CurrentCharacterCards(cards: TCGCardData[], deck: TCGDeckData[], sortBy: string, sortDirection: string) {
    let deckNames = deck.map(card => card.name)
    let charCardResult = cards.filter(card => !deckNames.includes(card.name))
    switch (sortBy) {
        case "name":
            charCardResult = charCardResult.sort((a, b) => a.name.localeCompare(b.name))
            break
        case "element":
            charCardResult = charCardResult.sort((a, b) => a.element.localeCompare(b.element) || a.name.localeCompare(b.name))
            break
        case "weapon":
            charCardResult = charCardResult.sort((a, b) => a.weapon.localeCompare(b.weapon) || a.name.localeCompare(b.name))
            break
        case "energy":
            charCardResult = charCardResult.sort((a: any, b: any) => b.talents.burst.energy - a.talents.burst.energy || a.name.localeCompare(b.name))
            break
        default:
            break
    }
    if (sortDirection === "asc") {
        return charCardResult
    }
    else {
        return charCardResult.reverse()
    }
}

// Filters out Action Cards that have been added twice to the deck, then sorts them based on the selected option
function CurrentActionCards(cards: TCGCardData[], deck: TCGDeckData[], sortBy: string, sortDirection: string) {
    let deckNames = deck.map(card => card.name)
    let counts: { [propName: string]: number } = {}
    deckNames.forEach((card: string) => counts[card as keyof {}] === undefined ? counts[card] = 1 : counts[card] += 1)
    let actionCardResult = cards.filter(card => counts[card.name as keyof {}] !== 2)
    switch (sortBy) {
        case "name":
            actionCardResult = actionCardResult.sort((a, b) => a.name.localeCompare(b.name))
            break
        case "cardGroup":
            actionCardResult = actionCardResult.sort((a, b) => a.subType.localeCompare(b.subType) || a.name.localeCompare(b.name))
            break
        default:
            break
    }
    if (sortDirection === "asc") {
        return actionCardResult
    }
    else {
        return actionCardResult.reverse()
    }
}