import { alpha, styled } from "@mui/material/styles"
import { Switch } from "@mui/material"
import { SwitchColor } from "./ElementalColors"

interface CustomSwitchProps {
    element?: string | undefined
}

export const CustomSwitch = styled(Switch)<CustomSwitchProps>(({ element }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: `${SwitchColor(element)}`,
        "&:hover": {
            backgroundColor: alpha(`${SwitchColor(element)}`, 0),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: `${SwitchColor(element)}`,
    },
}))