import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../../../helpers/CustomSlider";
import CharacterTalentLevellingMaterials from "./CharacterTalentLevellingMaterials";

const CharacterTalentLevelling = (props) => {

    const theme = useTheme();

    const minDistance = 1;
    const maxValue = 10;
    const [sliderValue, setSliderValue] = React.useState([1, maxValue]);
    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance);
                setSliderValue([clamped, clamped + minDistance]);
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1);
                setSliderValue([clamped - minDistance, clamped]);
            }
        }
        else {
            setSliderValue(newValue);
        }
    }

    return (
        <Box sx={{ my: "10px" }}>
            <CharacterTalentLevellingMaterials materials={props.character.materials} values={sliderValue} />
            <Box sx={{ display: "inlineFlex", alignItems: "center", width: "30%", mt: "15px", ml: "20px" }}>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, width: "175px", mt: "-8px" }}>
                    Lv. {sliderValue[0]} → Lv. {sliderValue[1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.character.element} disableSwap />
            </Box>
        </Box>
    )

}

export default CharacterTalentLevelling;