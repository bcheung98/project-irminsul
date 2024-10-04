import React from "react"

// Component imports
import WeaponAscensionMaterials from "./WeaponAscensionMaterials"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomSlider } from "../../../helpers/CustomSlider"

function WeaponAscension(props: any) {

    const theme = useTheme()

    let { rarity } = props.weapon

    let levels
    rarity > 2 ? levels = ["20", "40", "50", "60", "70", "80", "90"] : levels = ["20", "40", "50", "60", "70"]
    const minDistance = 1
    let maxValue = levels.length
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
            <WeaponAscensionMaterials materials={props.weapon.materials} rarity={rarity} values={sliderValue} />
            <Box sx={{ display: "flex", alignItems: "center", width: "50%", mt: "15px" }}>
                <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}`, minWidth: "150px" }}>
                    Lv. {levels[sliderValue[0] - 1]} → Lv. {levels[sliderValue[1] - 1]}
                </Typography>
                <CustomSlider
                    value={sliderValue}
                    step={1}
                    min={1}
                    max={maxValue}
                    onChange={handleSliderChange}
                    disableSwap
                    sx={{ minWidth: "100px" }}
                />
            </Box>
        </Box>
    )

}

export default WeaponAscension