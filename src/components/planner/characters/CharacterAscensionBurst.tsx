import * as React from "react"
import { useDispatch } from "react-redux"

// Component imports
import { CustomSlider } from "components/_custom/CustomSlider"
import { CustomSwitch } from "components/_custom/CustomSwitch"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, CardHeader } from "@mui/material"

// Helper imports
import { updateCharacterCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"
import { getCharacterTalentCost } from "data/levelUpCosts"
import ErrorLoadingImage from "helpers/ErrorLoadingImage"

// Type imports
import { CharacterCostObject } from "types/costs"

function CharacterAscensionBurst({ character }: { character: CharacterCostObject }) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("sm"))

    const dispatch = useDispatch()

    const { name, element } = character

    const minDistance = 1
    const maxValue = 10
    const levels = [...Array(maxValue).keys()].map((i) => i + 1)
    const [sliderValue, setSliderValue] = React.useState([1, maxValue])
    const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance)
                setSliderValue([clamped, clamped + minDistance])
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1)
                setSliderValue([clamped - minDistance, clamped])
            }
        }
        else {
            setSliderValue(newValue)
        }
    }

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    React.useEffect(() => {
        dispatch(updateCharacterCosts({ name: name, type: "burst", costs: getCharacterTalentCost(sliderValue, selected) }))
        dispatch(updateTotalCosts())
    })

    return (
        <Box sx={{ width: "100%", opacity: selected ? 1 : 0.35 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "-10px" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} size="small" sx={{ ml: "-5px" }} />
                <CardHeader
                    avatar={
                        <img alt={name} src={`${process.env.REACT_APP_URL}/characters/talents/${name.split(" ").join("_").toLowerCase()}_burst.png`} style={{ width: matches ? "32px" : "40px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                    }
                    title={
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "14px", sm: "16px" }, color: `${theme.text.color}` }}>
                            Elemental Burst
                        </Typography>
                    }
                    sx={{ ml: "-5px" }}
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "12px", sm: "16px" }, color: `${theme.text.color}`, mr: { xs: 0, sm: "11px" }, width: "90px" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap size={matches ? "small" : "medium"} />
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "12px", sm: "16px" }, color: `${theme.text.color}`, ml: "25px", width: "90px" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default CharacterAscensionBurst