import { styled } from "@mui/material/styles"
import { Slider } from "@mui/material"
import { SliderColor } from "./ElementalColors"

interface CustomSliderProps {
    element?: string | undefined
}

export const CustomSlider = styled(Slider)<CustomSliderProps>(({ element }) => ({
    color: `${SliderColor(element)}`,
    height: 5,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    }
}))