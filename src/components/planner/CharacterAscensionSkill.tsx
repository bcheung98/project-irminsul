import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, CardHeader } from "@mui/material"

// Helper imports
import { CustomSlider } from "../_custom/CustomSlider"
import { CustomSwitch } from "../_custom/CustomSwitch"
import { updateCharacterCosts, updateTotalCosts } from "../../redux/reducers/AscensionPlannerReducer"
import { SetCharacterCostsSkill } from "../../helpers/AscensionCostIndex"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterAscensionSkill(props: any) {

    const theme = useTheme()

    const dispatch = useDispatch()

    let { name, element } = props.character

    const minDistance = 1
    let maxValue = 10
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

    React.useEffect(() => {
        dispatch(updateCharacterCosts([name, "skill", SetCharacterCostsSkill(sliderValue[0], sliderValue[1], selected)]))
        dispatch(updateTotalCosts())
    })

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    return (
        <Box sx={{ width: "350px", opacity: selected ? 1 : 0.35 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "-10px", pl: "10px" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} size="small" />
                <CardHeader
                    avatar={
                        <img alt={name} src={`${process.env.REACT_APP_URL}/characters/talents/${name.split(" ").join("_").toLowerCase()}_skill.png`} style={{ width: "40px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                    }
                    title={
                        <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                            Elemental Skill
                        </Typography>
                    }
                    sx={{ ml: "-5px" }}
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, mr: "18px", width: "90px" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, ml: "25px", width: "90px" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default CharacterAscensionSkill