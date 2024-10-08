import * as React from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"

// MUI Imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Autocomplete, ClickAwayListener, CardHeader, AutocompleteCloseReason } from "@mui/material"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import CloseIcon from "@mui/icons-material/Close"
import DoneIcon from "@mui/icons-material/Done"

// Helper imports
import { Button, PopperComponent, StyledPopper, StyledInput } from "../_custom/CustomAutocomplete"
import { GetRarityColor } from "../../helpers/RarityColors"
import { setPlannerWeapons, updateWeaponCosts, updateTotalCosts } from "../../redux/reducers/AscensionPlannerReducer"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { WeaponData } from "../../types/weapon/WeaponData"

function WeaponSelector(props: any) {

    const theme = useTheme()

    const dispatch = useDispatch()

    let { weapons } = props.weapons

    React.useEffect(() => {
        dispatch(setPlannerWeapons(value))
        dispatch(updateWeaponCosts(["", "", {}]))
        dispatch(updateTotalCosts())
    })

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [value, setValue] = React.useState<WeaponData[]>([])
    const [pendingValue, setPendingValue] = React.useState<WeaponData[]>([])

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setPendingValue(value)
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setValue(pendingValue)
        if (anchorEl) {
            anchorEl.focus()
        }
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? "wep-label" : undefined

    if (weapons.length > 0) {
        return (
            <React.Fragment>
                <Box
                    sx={{
                        width: 300,
                        p: "5px",
                        border: `1px solid ${theme.border.color}`,
                        borderRadius: "5px",
                    }}
                >
                    <Button disableRipple onClick={handleClick}>
                        <img src={`${process.env.REACT_APP_URL}/icons/Weapons.png`} alt="Weapons" style={{ width: "32px", marginRight: "10px" }} />
                        <span style={{ fontFamily: `${theme.font.genshin.family}`, color: "white" }}>Weapons</span>
                        <ArrowForwardIosSharpIcon sx={{ transform: "rotate(90deg)", color: "white" }} />
                    </Button>
                </Box>
                <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
                    <ClickAwayListener onClickAway={handleClose}>
                        <Box>
                            <Autocomplete
                                open
                                multiple
                                onClose={(event: React.ChangeEvent<{}>, reason: AutocompleteCloseReason) => {
                                    if (reason === "escape") {
                                        handleClose()
                                    }
                                }}
                                value={pendingValue}
                                onChange={(event, newValue, reason) => {
                                    if (
                                        event.type === "keydown" &&
                                        (event as React.KeyboardEvent).key === "Backspace" &&
                                        reason === "removeOption"
                                    ) {
                                        return
                                    }
                                    setPendingValue(newValue)
                                }}
                                disableCloseOnSelect
                                PopperComponent={PopperComponent}
                                renderTags={() => null}
                                noOptionsText="No weapons"
                                renderOption={(props, option, { selected }) => (
                                    <li
                                        {...props}
                                        key={option.name}
                                        style={{ backgroundColor: selected ? `${theme.table.body.hover}` : `${theme.paper.backgroundColor}`, borderLeft: `10px solid ${GetRarityColor(option.rarity)}` }}
                                    >
                                        <Box
                                            component={DoneIcon}
                                            sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                                            style={{
                                                visibility: selected ? "visible" : "hidden",
                                            }}
                                        />
                                        <CardHeader
                                            avatar={
                                                <img alt={option.name} src={`${process.env.REACT_APP_URL}/weapons/${option.name.split(" ").join("_")}.png`} style={{ width: "48px" }} onError={ErrorLoadingImage} />
                                            }
                                            title={
                                                <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, }}>
                                                    {option.name}
                                                </Typography>
                                            }
                                            sx={{ p: 0, flexGrow: 1 }}
                                        />
                                        <Box
                                            component={CloseIcon}
                                            sx={{ opacity: 0.6, width: 18, height: 18 }}
                                            style={{
                                                visibility: selected ? "visible" : "hidden",
                                            }}
                                        />
                                    </li>
                                )}
                                options={[...weapons].sort((a, b) => {
                                    // Display the selected labels first.
                                    let ai = value.indexOf(a)
                                    ai = ai === -1 ? value.length + weapons.indexOf(a) : ai
                                    let bi = value.indexOf(b)
                                    bi = bi === -1 ? value.length + weapons.indexOf(b) : bi
                                    return ai - bi
                                })}
                                getOptionLabel={(option) => option.name}
                                renderInput={(params) => (
                                    <StyledInput
                                        ref={params.InputProps.ref}
                                        inputProps={params.inputProps}
                                        autoFocus
                                        placeholder="Search"
                                    />
                                )}
                            />
                        </Box>
                    </ClickAwayListener>
                </StyledPopper>
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
    weapons: state.weapons
})

export default connect(mapStateToProps)(WeaponSelector)