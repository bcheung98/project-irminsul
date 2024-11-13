import React from "react"

// Component imports
import CharacterTalentLevellingMaterials from "./CharacterTalentLevellingMaterials"
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, Box, Typography } from "@mui/material"

// Helper imports
import { CharacterProps } from "types/character"

function CharacterTalentLevelling({ character }: CharacterProps) {

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
        <Box sx={{ ml: { xs: "5px", sm: "30px" }, my: "10px" }}>
            <CharacterTalentLevellingMaterials materials={character.materials} values={sliderValue} />
            <Box sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center", width: "40%", mt: "15px" }}>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "16px", color: `${theme.text.color}`, minWidth: "150px" }}>
                    Lv. {sliderValue[0]} → Lv. {sliderValue[1]}
                </Typography>
                <CustomSlider
                    value={sliderValue}
                    step={1}
                    min={1}
                    max={maxValue}
                    onChange={handleSliderChange}
                    element={character.element}
                    disableSwap
                    sx={{ minWidth: "200px", ml: "10px" }}
                />
            </Box>
        </Box>
    )

}

export default CharacterTalentLevelling