import React from "react"

// Component imports
import CharacterTalentLevellingMaterials from "./CharacterTalentLevellingMaterials"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomSlider } from "../../../helpers/CustomSlider"

function CharacterTalentLevelling(props: any) {

    const theme = useTheme()

    const minDistance = 1
    const maxValue = 10
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

    return (
        <Box sx={{ my: "10px" }}>
            <CharacterTalentLevellingMaterials materials={props.character.materials} values={sliderValue} />
            <Box sx={{ display: "flex", alignItems: "center", width: "30%", mt: "15px", ml: "20px" }}>
                <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, width: "180px", mr: "15px" }}>
                    Lv. {sliderValue[0]} → Lv. {sliderValue[1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.character.element} disableSwap />
            </Box>
        </Box>
    )

}

export default CharacterTalentLevelling