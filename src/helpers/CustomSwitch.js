import { alpha, styled } from "@mui/material/styles";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ element }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: `${SwitchColor(element)}`,
        "&:hover": {
            backgroundColor: alpha(`${SwitchColor(element)}`, 0),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${SwitchColor(element)}`,
    },
}));

const SwitchColor = (element) => {
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
            return "#gray"
    }
}