import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";

export const CustomSlider = styled(Slider)(({ element }) => ({
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
}));

const SliderColor = (element) => {
    switch (element) {
        case "Pyro":
            return "#ad0000"
        case "Hydro":
            return "#204eb3"
        case "Electro":
            return "#8216a3"
        case "Cryo":
            return "#4492aa"
        case "Anemo":
            return "#1aa577"
        case "Geo":
            return "#91712e"
        case "Dendro":
            return "#5a8f10"
        default:
            return "#1976d2"
    }
}