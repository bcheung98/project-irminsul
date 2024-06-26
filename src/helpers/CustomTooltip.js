import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow disableInteractive classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(12),
        fontFamily: "Genshin, sans-serif",
        maxWidth: "none",
    },
}));

export const CustomTooltipLarge = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow disableInteractive classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        fontSize: theme.typography.pxToRem(18),
        fontFamily: "Genshin, sans-serif",
        maxWidth: "none",
    },
}));