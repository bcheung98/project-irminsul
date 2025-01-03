// Component imports
import { CustomTooltip } from "./CustomTooltip"

// MUI imports
import { useTheme, SxProps, Avatar, Typography } from "@mui/material"

interface FilterButtonProps {
    variant?: "image" | "text"
    tag?: string,
    img?: string,
    active?: boolean,
    onClick: () => void
}

function FilterButton({
    variant = "image",
    tag,
    img = `${process.env.REACT_APP_URL}/Unknown.png`,
    active = false,
    onClick
}: FilterButtonProps) {

    const theme = useTheme()

    const filterButtonStyles: SxProps = {
        height: variant === "image" ? "38px" : "auto",
        width: variant === "image" ? "38px" : "auto",
        p: variant === "image" ? "2.5px" : "6px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        fontFamily: `${theme.font.genshin.family}`,
        fontSize: "16px",
        color: `${theme.text.color}`,
        backgroundColor: active ? `${theme.materialImage.backgroundColor}` : `${theme.card.backgroundColor}`,
        opacity: active ? 1 : 0.35,
        "&:hover": {
            border: `1px solid dodgerblue`,
            boxShadow: `0 0 5px 1px dodgerblue`,
            cursor: "pointer",
        }
    }

    return (
        <CustomTooltip title={variant === "image" ? tag : null} arrow placement="top">
            {
                variant === "image" ?
                    <Avatar
                        variant="square"
                        src={`${process.env.REACT_APP_URL}/${img}.png`}
                        sx={filterButtonStyles}
                        alt={tag}
                        onClick={onClick}
                    >
                        <img
                            src={`${process.env.REACT_APP_URL}/Unknown.png`}
                            alt="Unknown"
                            style={{ width: "32px" }}
                        />
                    </Avatar>
                    :
                    <Typography sx={filterButtonStyles} onClick={onClick}>{tag}</Typography>
            }
        </CustomTooltip>
    )

}

export default FilterButton